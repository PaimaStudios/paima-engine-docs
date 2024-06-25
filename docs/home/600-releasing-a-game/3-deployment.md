# Deploying a Game in Production

This guide will show you the steps to deploy the backend and frontend of your game, so players can connect from the internet and play and interact.

Deploying a Game in a production environment requirements will depend on the amount of players, interactions, number of backups, and many other factors. This guide is a starting point to run your services. We will not go in depth of each command/setup and some configurations will depend on your providers and exact software versions. 

We recommend using a cloud provider to create a virtual machine, as they will provide a server with a public IP.

## Requirements

* Your game must be working locally.
* Server with:
    * Ubuntu 24.04 LTS Linux
    * Public IP
    * Sudo Access
    * SSH Access
    * As an absolute minimum use a server with 2GB RAM / 1 CPU / 25GB Storage (These requirements will change depending on your specific project needs)
* DNS Provider
* Additional Software
    * Docker (https://docs.docker.com/engine/install/ubuntu/)
    * Nginx (https://ubuntu.com/tutorials/install-and-configure-nginx)


## Backend 

Before starting we recommend you create a user, and do not use the root account.
We will be using a user called `paima` for all examples.

### Software Verification
#### ssh
Let's verify you can connect to your machine via `ssh`.  
From your terminal you must be able to connect your server.

* For these examples we will just `paima@10.0.0.1` as the `server public IP`, you must use your own `IP`.
* The user name `user-name` must be updated with the machine's user-name
* `my-game` is used as example for the game name.

Commands that are ran in your local machine are marked as `local $>` the commands that are run in the remote server are labeled `server $>`

```bash
local $> ssh paima@10.0.0.1
```
You should see something as:
```bash
Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-31-generic x86_64)
...
paima@server-name:~$
```
#### ubuntu
Let's check you have `Ubuntu` installed
```bash
server $> lsb_release -a
```
Shows the Linux Distribution and the Version `Description: Ubuntu 24.04 LTS`

#### nginx
To verify your `nginx` setup run: (This might change depending on your nginx setup)
```bash
local $> curl http://10.0.0.1
```
The response will be a webpage that contains:
```
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>
```

#### docker
To verify your `docker` setup run
```bash
server $> docker run hello-world
```
You should see some message that contains `Hello from Docker!`

Great, now you have all the tools.

### Installation

Before continuing, make sure you compiled your project first.

We will first need to create a folder 
```bash
server $> cd $HOME
server $> mkdir my-game
```
Now let's copy the main files we will need

```bash
# Copy DB Files
local $> rsync db/migrations/init/init.sql paima@10.0.0.1:/home/paima/my-game
local $> rsync db/docker/docker-compose.yml paima@10.0.0.1:/home/paima/my-game

# Copy .env, config & extension files
local $> rsync .env.production paima@10.0.0.1:/home/paima/my-game
local $> rsync config.prod.yml paima@10.0.0.1:/home/paima/my-game
local $> rsync extensions.yml paima@10.0.0.1:/home/paima/my-game

# If your extensions.yml has ABI extensions, copy them as well
# For example:
local $> rsync contracts/evm/abi/@paima/evm-contracts/contracts/token/IInverseAppProjected1155.sol/IInverseAppProjected1155.json paima@10.0.0.1:/home/paima/my-game

# Copy Paima Engine
local $> rsync paima-engine-linux paima@10.0.0.1:/home/paima/my-game

# Finally copy your Game Files
local $> rsync -r packaged paima@10.0.0.1:/home/paima/my-game
```

### Run Database

We will be running the database in a docker container.

First we will edit the `docker-compose.yml` 

```bash
# Use your favorite editor (We are using vi)
server $> cd $HOME/my-game
server $> vi docker-compose.yml 
```

and modify the service-postgres-volumes entry:
```yml
    volumes:
        - my-game-db:/var/lib/postgresql/data
        - ./init.sql:/docker-entrypoint-initdb.d/init.sql
```
and root volumes entry:
```yml
volumes:
  my-game-db:
```

We recommend to update the password as well:
```yml
environment:
    POSTGRES_USER: postgres
    POSTGRES_PASSWORD: some-password
```

Start the database
```bash
server $> cd $HOME/my-game
server $> docker compose up -d
```

To view the database activity:
```bash
server $> cd $HOME/my-game
server $> docker compose logs -f
```

If the setup went well you should see logs that contain
```
...
LOG:  listening on IPv4 address "0.0.0.0", port 5432
LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
LOG:  database system is ready to accept connections
```

### Deploy Contracts

To deploy the contracts in your target blockchain, first obtain the private key and 
create a file named `.env.testnet` in your project root.

Your wallet must have enough funds to deploy the contracts

```bash
local $> echo DEPLOYER_PRIVATE_KEY="4ba99...c098" > .env.testnet
```

Edit `hardhat.config.ts` to add the correct blockchain id and RPC.
We recommend using a private RPC and not a public one, due to rate limits and availability.

```ts
networks: {
    hardhat: {
      ...
    },
    testnet: {
      chainId: 421614,
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      accounts: testnet.DEPLOYER_PRIVATE_KEY == null ? [] : [testnet.DEPLOYER_PRIVATE_KEY],
      allowUnlimitedContractSize: true,
    },
```

Check your `contracts/evm/ignition/modules/deploy_factory.ts` to ensure that no values are hardcoded, as contract addresses will change.

Now deploy the contracts:
```bash
local $> npx hardhat ignition deploy contracts/evm/ignition/modules/deploy_factory.ts --parameters ./contracts/evm/ignition/parameters.json --network testnet
```

You will see a message similar to this, depending on the contracts you deploy.

Copy these addresses, we will be using them later.
```
Deployed Addresses

...
internal_contracts#InverseAppProjected1155 - 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
internal_contracts#PaimaL2Contract - 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
```

### Run Game Backend with Paima Engine


#### Setup Files
First edit your `.env.production` file:
* Check the RPC and settings

Update with the value for the deployed `PaimaL2Contract`
* `CONTRACT_ADDRESS=0x5FC8d32690cc91D4c39d9d3abcBD16989F875707`

Update with the current blockheight in your target blockchain
* `START_BLOCKHEIGHT=120000`

Update the DB password
* `DB_PW="some-password"`

NOTE Setup your DNS name with HTTPS. This setup is outside the scope of this tutorial, and depend on your DNS provider, Domain Name Provider and Certificate Authority.

For this example we are using the domain `backend.my-game.com`

* Update the `BACKEND_URI=https://backend.my-game.com`

Edit `config.production.yml` file, make sure your chain setup is correct and update the contract address:
```yml
    paimaL2ContractAddress : '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707'
```

Edit `extensions.yml` file, update the `abiPath`(s) to match your rsync'd files and the `contractAddress`(es) to match the deployed contracts, and set the current `startBlockheight`(s) as the current block of the target blockchain(s)
```yml
    contractAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    abiPath: "./IInverseAppProjected1155.json"
    startBlockHeight: 120000
```

#### Backend Reverse Proxy

First setup your DNS to make `backend.my-game.com` traffic reach this machine's IP.

Let's setup nginx tu reverse proxy the traffic.
First lets create a setup file for nginx:
```bash
server $> sudo vi /etc/nginx/sites-available/backend.my-game.com
```

And copy the contents setup a reverse proxy:
```
server {
	listen 80;
	server_name backend.my-game.com;
	location / {
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	        proxy_set_header Host $host;
	        proxy_pass http://127.0.0.1:3333;
	        proxy_http_version 1.1;
	        proxy_set_header Upgrade $http_upgrade;
	        proxy_set_header Connection "upgrade";
	}
}
```

Lets activate this setup and restart nginx
```bash
server $> cd /etc/nginx/sites-enabled 
server $> sudo ln -s ../sites-available/backend.my-game.com
server $> sudo systemctl reload nginx
```

#### Backups (OPTIONAL)
Install `pg_dump` for automatic DB Backups.

Install add the APT Repository (https://www.postgresql.org/download/) and install postgress client tools.
```bash
server $> sudo apt install -y postgresql-common
server $> sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
server $> sudo apt-get install postgresql-client-16
```
Now `pg_dump` should be available in your system.

#### Game Service 
Now lets create a service named `my-game.service`
Edit `user-name` and `my-game` to match your settings.

```
[Unit]
Description=My Game Backend
After=syslog.target network.target
DefaultDependencies=no
StartLimitIntervalSec=0

[Service]
Type=simple
User=paima
Group=paima
Environment=HOME=/home/paima
Environment=NODE_ENV=production
Environment=NETWORK=testnet
Restart=on-failure
RestartSec=10s
SuccessExitStatus=143
KillMode=process
KillSignal=SIGINT
TimeoutStopSec=90
WorkingDirectory=/home/paima/my-game
ExecStart=/home/paima/my-game/paima-engine-linux run

[Install]
WantedBy=multi-user.target
```

Let's copy the service to the service folder
``` bash
server $> cd /etc/systemd/system/
server $> sudo ln -s /home/paima/my-game/my-game.service
```

Now to start the service
```bash
server $> sudo systemctl start my-game.service
```

And to view the logs
```bash
server $> journalctl -u my-game.service -f
```

You should see a message similar to this:
```
[paima-runtime] Presync for evm finished at 0
-------------------------------------
Beginning Syncing & Processing Blocks
-------------------------------------
[paima-runtime::snapshots] Saving Snapshot: paima-snapshot-57342548.sql
[paima-runtime::snapshots] Next snapshot scheduled at height 57364148
Block funnel 421614: #57342549-57342648
```

Now your backend is running!

## Frontend

First setup your DNS to make `my-game.com` traffic reach this machine's IP.

Create `.env.production` file locally with the same values in your remote server.

Start by compiling your middleware with:
```bash
local $> npm run build
local $> npm run pack:middleware
``` 

This will create your middleware with the correct backend URL.

Build your backend, this might be different depending on the technology stack you are using.
```bash
local $> cd frontend
local $> npm run build
```

Let's create a folder in your remote machine
```bash
server $> cd /var/www/html/
server $> sudo mkdir my-game-frontend
server $> sudo chown user-name my-game-frontend
server $> sudo chgrp user-name my-game-frontend
```

And now let's upload your build to this folder
```bash
local $> rsync -r build/* paima@10.0.0.1:/var/www/html/my-game-frontend
```

Next setup nginx file server.
Start by creating a setup file for nginx:
```bash
server $> sudo vi /etc/nginx/sites-available/my-game.com
```

And copy the contents setup a reverse proxy  
NOTE: This might need some changes for your specific frontend technology stack

```
server {
	listen 80;
	root /var/www/html/my-game-frontend;

	index index.html index.htm;

	server_name my-game.com;

	location / {
		try_files $uri $uri/ =404;
        # e.g., for React:
        # try_files $uri $uri/ /index.html;
	}
}
```

Activate this setup and restart nginx
```bash
server $> cd /etc/nginx/sites-enabled 
server $> sudo ln -s ../sites-available/my-game.com
server $> sudo systemctl reload nginx
```

Congratulations!  
Now you have your game running in a production environment.

### Updating, Maintenance & Logs 

#### Logs
To view backend logs:
```bash
server $> journalctl -u my-game.service -f
```

To view database logs:
```bash
server $> cd $HOME/my-game && docker compose logs -f
```

#### Update Game Code

Start by rebuilding the packaged files with `npm run pack`, then you can repeat the uploading the `/packaged` files and restart the service.
```bash
server $> sudo systemctl stop my-game.service

## OPTIONAL do a database backup, in case you need to recover the previous state.

## Apply any database migrations your updated code might require.

local $> rsync -r packaged paima@10.0.0.1:/home/paima/my-game
server $> sudo systemctl start my-game.service
```

#### Update Frontend Code
To update the frontend code, rebuild your middleware `npm run pack:middleware`, then rebuild your frontend and upload:
```bash
local $> rsync -r build/* paima@10.0.0.1:/var/www/html/my-game-frontend
```

The server will generate backups, we recommend you keep them in a safe place, outside this same server to recover your state at any time.


