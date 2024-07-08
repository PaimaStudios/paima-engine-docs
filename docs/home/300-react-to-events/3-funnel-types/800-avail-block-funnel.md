# Avail block funnel

## Configuration

```yaml
Avail:
  type: avail-main
  lightClient: 'http://localhost:7007'
  rpc: ws://127.0.0.1:9944
  delay: 200
  confirmationDepth: 10
  funnelBlockGroupSize: 100
  presyncStepSize: 1000
```