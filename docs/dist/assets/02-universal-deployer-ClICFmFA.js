import{u as a,j as e}from"./index-DvPQu5E4.js";const i={title:"Universal Deployer",description:"undefined"};function t(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"universal-deployer",children:["Universal Deployer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#universal-deployer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The Sequence contract wallets use ",e.jsx(n.a,{href:"https://weka.medium.com/how-to-send-ether-to-11-440-people-187e332566b7",children:"Nick's method"}),` to deploy the contracts that compose the smart contract wallet.
This method has been chosen because it allows each wallet to take the same address on multiple chains, making it easier to use and less prone to mistakes.`]}),`
`,e.jsxs(n.p,{children:[`:::danger Limitations
Sequence wallets `,e.jsx(n.strong,{children:"may not"})," receive the same address on all EVM compatible chains."]}),`
`,e.jsx(n.p,{children:"Networks that implement only a subset of the EVM opcodes, or alternative virtual machines, will result in a different address for each chain."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Double-check your addresses"}),` before sending any assets to them.
:::`]}),`
`,e.jsxs(n.p,{children:[`:::info Notice
A complete script for deployment can be found in the `,e.jsx(n.a,{href:"https://github.com/0xsequence/live-contracts",children:"Sequence Live Contracts repository"}),`.
:::`]}),`
`,e.jsxs(n.h2,{id:"deploy-process-v2",children:["Deploy Process V2",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-process-v2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The following steps are required to deploy the ",e.jsx(n.a,{href:"/solutions/technical-references/wallet-contracts/02-universal-deployer#3---deploy-wallet-context",children:"Sequence Wallet Context"})," on a new network."]}),`
`,e.jsxs(n.p,{children:[`:::info Notice
For most popular networks this process `,e.jsx(n.strong,{children:"is not"})," required; due to the wallet contracts being already deployed."]}),`
`,e.jsxs(n.p,{children:["To see if a configuration already exists for a given chain go to ",e.jsx(n.a,{href:"solutions/technical-references/chain-support",children:"Networks"}),`.
:::`]}),`
`,e.jsxs(n.h3,{id:"1---deploy-singleton-factory",children:["1 - Deploy Singleton Factory",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1---deploy-singleton-factory",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`The Singleton Factory is a contract that allows the deployment of a single contract instance per address. Unlike the
`,e.jsx(n.a,{href:"#universal-deployer",children:"Universal Deployer"}),`, the Singleton Factory requires a salt to manage deployment instances. More information about the
Singleton Factory can be found in the `,e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2470",children:"EIP-2470 specification"}),"."]}),`
`,e.jsx(n.p,{children:"The Pre-fund the Singleton Factory's deployer with the required funds to deploy the contract."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"Address: 0xBb6e024b9cFFACB947A71991E386681B1Cd1477D"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"Funds: 0.0247"})})]})}),`
`,e.jsx(n.strong,{children:"Do not send additional funds to the address, as funds can't be refunded."}),`
`,e.jsx(n.p,{children:"Once the address is funded, you can deploy the Singleton Factory by executing the following pre-signed transaction:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"0xf9016c8085174876e8008303c4d88080b90154608060405234801561001057600080fd5b50610134806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634af63f0214602d575b600080fd5b60cf60048036036040811015604157600080fd5b810190602081018135640100000000811115605b57600080fd5b820183602082011115606c57600080fd5b80359060200191846001830284011164010000000083111715608d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925060eb915050565b604080516001600160a01b039092168252519081900360200190f35b6000818351602085016000f5939250505056fea26469706673582212206b44f8a82cb6b156bfcc3dc6aadd6df4eefd204bc928a4397fd15dacf6d5320564736f6c634300060200331b83247000822470"})})})}),`
`,e.jsx(n.p,{children:"After the transaction is confirmed, you should see the address of the Singleton Factory:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"Singleton Deployer: 0xce0042B868300000d44A59004Da54A005ffdcf9f"})})})}),`
`,e.jsxs(n.h3,{id:"2---deploy-wallet-context",children:["2 - Deploy Wallet Context",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2---deploy-wallet-context",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Deploy each of the contracts in the ",e.jsx(n.a,{href:"/solutions/technical-references/wallet-contracts/02-universal-deployer",children:"Sequence Wallet Context"})," using the Singleton Factory."]}),`
`,e.jsxs(n.p,{children:["A script can be found in the ",e.jsx(n.a,{href:"https://github.com/0xsequence/wallet-contracts/",children:"Sequence Wallet Contracts repository"}),"."]}),`
`,e.jsx(n.p,{children:"Clone the repository, configure the environment variables and run the script with:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"yarn deploy <network>"})})})}),`
`,e.jsxs(n.h2,{id:"deploy-process-v1",children:["Deploy Process V1",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploy-process-v1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The following steps are required to deploy the ",e.jsx(n.a,{href:"/solutions/technical-references/wallet-contracts/02-universal-deployer#3---deploy-wallet-context",children:"Sequence Wallet V1 Context"})," on a new network."]}),`
`,e.jsxs(n.p,{children:[`:::info Notice
For most popular networks this process `,e.jsx(n.strong,{children:"is not"})," required; due to the wallet contracts being already deployed."]}),`
`,e.jsxs(n.p,{children:["To see if a configuration already exists for a given chain go to ",e.jsx(n.a,{href:"solutions/technical-references/chain-support",children:"Networks"}),`.
:::`]}),`
`,e.jsxs(n.p,{children:["A complete code example of this deployment flow can be found in the ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence.js/blob/91ed0df67fc5ddc47abf727ae8b94a8ca4f66912/packages/0xsequence/tests/browser/testutils/deploy-wallet-context.ts",children:"0xSequence.js test suite"}),`
and `,e.jsx(n.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/38e0719690eee3c4d7d8fa2ceff4ea22b0409f38/utils/deploy-contracts.ts",children:"Wallet Contracts repository"}),"."]}),`
`,e.jsxs(n.h3,{id:"1---deploy-nanouniversaldeployer",children:["1 - Deploy NanoUniversalDeployer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1---deploy-nanouniversaldeployer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Pre-found Nick's method address with funds required to pay for the deployment of contracts."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"Address: 0x9c5a87452d4FAC0cbd53BDCA580b20A45526B3AB"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"Funds: 0.02170000000014"})})]})}),`
`,e.jsx(n.strong,{children:"Do not send additional funds to the address, as funds can't be refunded."}),`
`,e.jsx(n.p,{children:"Once the address is funded, you can deploy the NanoUniversalDeployer by executing the following pre-signed transaction:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"0xf9010880852416b84e01830222e08080b8b66080604052348015600f57600080fd5b50609980601d6000396000f3fe60a06020601f369081018290049091028201604052608081815260009260609284918190838280828437600092018290525084519495509392505060208401905034f5604080516001600160a01b0383168152905191935081900360200190a0505000fea26469706673582212205a310755225e3c740b2f013fb6343f4c205e7141fcdf15947f5f0e0e818727fb64736f6c634300060a00331ca01820182018201820182018201820182018201820182018201820182018201820a01820182018201820182018201820182018201820182018201820182018201820"})})})}),`
`,e.jsx(n.p,{children:"After the transaction is confirmed, you should see the address of the NanoUniversalDeployer:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"NanoUniversalDeployer: 0x9c5a87452d4FAC0cbd53BDCA580b20A45526B3AB"})})})}),`
`,e.jsxs(n.p,{children:["See more about the ",e.jsx(n.a,{href:"https://gist.github.com/Agusx1211/de05dabf918d448d315aa018e2572031",children:"NanoUniversalDeployer"}),"."]}),`
`,e.jsxs(n.h3,{id:"2---deploy-universaldeployer2",children:["2 - Deploy UniversalDeployer2",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2---deploy-universaldeployer2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`In order to deploy contracts with an instance identifier, we need to deploy the UniversalDeployer2 contract. To ensure address consistency
we use the UniversalDeployer contract to deploy the UniversalDeployer contract.`}),`
`,e.jsx(n.p,{children:"Send the following data to the UniversalDeployer deployed in the previous step."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"0x608060405234801561001057600080fd5b5061013d806100206000396000f3fe60806040526004361061001e5760003560e01c80639c4ae2d014610023575b600080fd5b6100cb6004803603604081101561003957600080fd5b81019060208101813564010000000081111561005457600080fd5b82018360208201111561006657600080fd5b8035906020019184600183028401116401000000008311171561008857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506100cd915050565b005b60008183516020850134f56040805173ffffffffffffffffffffffffffffffffffffffff83168152905191925081900360200190a050505056fea264697066735822122033609f614f03931b92d88c309d698449bb77efcd517328d341fa4f923c5d8c7964736f6c63430007060033"})})})}),`
`,e.jsx(n.p,{children:"After the transaction is confirmed, you should see the address of the UniversalDeployer2:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"UniversalDeployer2: 0x8a5bc19e22d6ad55a2c763b93a75d09f321fe764"})})})}),`
`,e.jsxs(n.h3,{id:"3---deploy-wallet-context",children:["3 - Deploy Wallet Context",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3---deploy-wallet-context",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Compile and deploy the contracts in the ",e.jsx(n.a,{href:"/solutions/technical-references/wallet-contracts/02-universal-deployer#3---deploy-wallet-context",children:"Sequence Wallet Context"})," using the UniversalDeployer2."]}),`
`,e.jsxs(n.p,{children:["Refer to the ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence.js/blob/91ed0df67fc5ddc47abf727ae8b94a8ca4f66912/packages/0xsequence/tests/browser/testutils/deploy-wallet-context.ts",children:"0xSequence.js test suite"}),`
or `,e.jsx(n.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/38e0719690eee3c4d7d8fa2ceff4ea22b0409f38/utils/deploy-contracts.ts",children:"Wallet Contracts repository"}),`
for the Wallet Contract context codebase.`]})]})}function d(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default,i as frontmatter};
