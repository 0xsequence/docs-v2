import { SequenceWaaS } from '@0xsequence/waas'

const embeddedWallet = new SequenceWaaS({
    projectAccessKey: 'AQAAAAAAAD5wFB4u9zKn_J0K8fOzZmCZwRY',
    waasConfigKey:  'eyJwcm9qZWN0SWQiOjE1OTg0LCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=',
    network: 'arbitrum-sepolia'
  })

export default embeddedWallet;