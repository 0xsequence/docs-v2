import{d as l,j as e,e as a}from"./index-QQICdKId.js";import"./HomePage.css.js.vanilla-l0sNRNKZ.js";const c={title:"Sequence - Web3 Gaming Platform - Universal Wallet Connect Wallet",description:"Documentation for Universal Wallet Connect Wallet for the Sequence infrastructure stack for web3 gaming."};function i(s){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"connect-wallet",children:["Connect Wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connect-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Sequence is a very flexible wallet which allow users multiple ways to connect / access their wallet. This includes:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"On-demand Ethereum web wallet for new users"})," via ",e.jsx(n.a,{href:"https://www.npmjs.com/package/0xsequence",children:"0xsequence"})," npm package + ",e.jsx(n.a,{href:"https://sequence.app",children:"https://sequence.app"}),` -- this option allows
developers to offer users an on-demand web3 wallet. No user install required -- any browser will `,e.jsx(n.em,{children:"just work"}),`, and users
can onboard with a familiar Web2 experience. Think of it like `,e.jsx(n.em,{children:"Paypal / Stripe but for web3"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Surf all of web3"})," via ",e.jsx(n.a,{href:"https://chrome.google.com/webstore/detail/sequence-wallet/ocmccklecaalljlflmclidjeclpcpdim?hl=en",children:"Sequence Wallet Chrome Extension"}),` -- users
who have the Sequence Wallet Chrome Extension installed are able to access any Ethereum-compatible Dapp on the Web :) Just like how MetaMask works,
but of course with a bunch of the benefits of Sequence.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Mobile phone access"})," via ",e.jsx(n.a,{href:"https://walletconnect.com/",children:"WalletConnect"}),` support within Sequence Wallet -- users are able to communicate with their wallets remotely
via the awesome Wallet Connect protocol. This is an excellent option if using Sequence Wallet from your mobile phone and want to connect
your wallet to a desktop dapp.`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:`Sequence Wallet is built on Web Browser (W3C) and Ethereum web3 standards -- and is available everywhere that a modern browser is able to run.
We've carefully designed the wallet for simple onboarding, while maintaining security for users, and allowing users to progressively
increase the level of their security through additional keys and measures.`}),`
`,e.jsx(n.p,{children:`This means, that if you've developed a dapp to work with MetaMask, then Sequence will work too without any changes. If you're
using web3.js or ethers.js, Sequence will just work too. This is the beauty of interoperability on web3 :)`}),`
`,e.jsxs(n.h2,{id:"connecting-your-dapp-with-0xsequence",children:["Connecting your dapp with ",e.jsx(n.code,{children:"0xsequence"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-your-dapp-with-0xsequence",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a,{type:"info",children:e.jsxs(n.p,{children:["A delightful wallet without requiring your users to install anything 😊 ",e.jsx(n.div,{}),` By
integrating `,e.jsx(n.code,{children:"0xsequence"}),`, users may access your dapp without having to install
any special extensions, and the wallet also works on mobile browsers!`]})}),`
`,e.jsx(n.p,{children:"Your dapp can connect to your user's wallet by first instantiating the Wallet provider:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sequence } "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0xsequence"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" projectAccessKey"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "<access_key>"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// This assumes your dapp runs on Ethereum mainnet"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"initWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(projectAccessKey);"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// If your dapp runs on a different EVM-compatible blockchain, you can specify its name"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// const wallet = sequence.initWallet(projectAccessKey, { defaultNetwork: 'polygon' });"})})]})}),`
`,e.jsxs(n.p,{children:["Note that is possible to retrieve the above instance by using the ",e.jsx(n.code,{children:"getWallet()"})," method:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sequence } "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "0xsequence"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})}),`
`,e.jsx(n.p,{children:"Once you have the instance, you can connect to the wallet:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" connectDetails"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"connect"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  app: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Your Dapp name"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  authorize: "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // And pass settings if you would like to customize further"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  settings: {"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    theme: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"light"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    bannerUrl: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://yoursite.com/banner-image.png"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 3:1 aspect ratio, 1200x400 works best"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    includedPaymentProviders: ["}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"moonpay"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ramp"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    defaultFundingCurrency: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"matic"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    lockFundingCurrencyToDefault: "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"user accepted connect?"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", connectDetails.connected);"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "users signed connect proof to valid their account address:"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  connectDetails.proof"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})}),`
`,e.jsxs(n.p,{children:["You can pick/limit the available sign in options with ",e.jsx(n.code,{children:"signInOptions"}),". Will be ignored if user is already signed in."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"connect"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  app: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Your Dapp name"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  settings: { signInOptions: ["}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"google"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] },"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,e.jsxs(n.p,{children:["After you connect, you can use ",e.jsx(n.code,{children:"wallet.openWallet()"})," to open the wallet:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"wallet."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"openWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})}),`
`,e.jsxs(n.p,{children:["You can also optionally pass a path, and use ",e.jsx(n.code,{children:"openWithOptions"})," intent to pass settings when you open the wallet:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" settings"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Settings"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  theme: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"dark"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  bannerUrl: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://yoursite.com/banner-image.png"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 3:1 aspect ratio, 1200x400 works best"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  includedPaymentProviders: ["}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"moonpay"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ramp"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  defaultFundingCurrency: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"eth"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  lockFundingCurrencyToDefault: "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" intent"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" OpenWalletIntent"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  type: "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"openWithOptions"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  options: {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    settings: settings,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" path"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "wallet/add-funds"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"wallet."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"openWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(path, intent);"})]})]})}),`
`,e.jsxs(n.p,{children:[`:::tip Check out some example Dapp source code
For a complete examples, see `,e.jsx(n.a,{href:"https://github.com/0xsequence/demo-dapp",children:"Demo-Dapp"})," and ",e.jsx(n.a,{href:"https://github.com/0xsequence/demo-dapp-web3modal",children:"Demo-Dapp-Web3Modal"}),`.
:::`]}),`
`,e.jsxs(n.p,{children:[`:::caution Avoid Browsers Blocking Sequence Popup
Most browsers will block popups if they are called outside of user-triggered event handlers like `,e.jsx(n.code,{children:"onclick"}),", or when it takes too long to process between the user action and the actual window"]}),`
`,e.jsxs(n.p,{children:["Read more about browser popup-blocking ",e.jsx(n.a,{href:"https://javascript.info/popup-windows#popup-blocking",children:"here"}),`.
:::`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/sign-in-fresh.png",alt:"Sequence on-demand sign in"})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/sign-in-connect.png",alt:"Sequence on-demand sign in, connect"})}),`
`,e.jsxs(n.h2,{id:"wallet-login-and-connect-options",children:["Wallet Login and Connect Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-login-and-connect-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Dapps with direct sequence integration can specify a ",e.jsx(n.code,{children:"ConnectOptions"})," object when running ",e.jsx(n.code,{children:"wallet.connect()"}),"."]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"const connectDetails = await wallet.connect(connectOptions)"})})})}),`
`,e.jsx(n.p,{children:"The option parameters are described below."}),`
`,e.jsxs(n.h4,{id:"app",children:[e.jsx(n.strong,{children:"app"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#app",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"App name of the dapp which will be announced to user on connect screen."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ app: 'My defi app' })"})]}),`
`,e.jsxs(n.h4,{id:"appprotocol",children:[e.jsx(n.strong,{children:"appProtocol"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appprotocol",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Custom protocol for auth redirect (unity/unreal)."}),`
`,e.jsxs(n.h4,{id:"origin",children:[e.jsx(n.strong,{children:"origin"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#origin",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Origin hint of the dapp's host opening the wallet. This value will automatically be determined and verified for integrity, and can be omitted."}),`
`,e.jsxs(n.h4,{id:"expiry",children:[e.jsx(n.strong,{children:"expiry"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#expiry",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Expiry number (in seconds) that is used for ETHAuth proof. Default is 1 week in seconds."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ expiry: 36000 })"})]}),`
`,e.jsxs(n.h4,{id:"authorize",children:[e.jsx(n.strong,{children:"authorize"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authorize",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"authorize"})," will perform an ETHAuth eip712 signing and return the proof to the dapp."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ authorize: true })"})]}),`
`,e.jsxs(n.h4,{id:"authorizenonce",children:[e.jsx(n.strong,{children:"authorizeNonce"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authorizenonce",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"authorizeNonce"})," is an optional number to be passed as ETHAuth's nonce claim for replay protection."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ authorizeNonce: 123 })"})]}),`
`,e.jsxs(n.h4,{id:"refresh",children:[e.jsx(n.strong,{children:"refresh"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#refresh",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"refresh"})," flag will force a full re-connect (ie. disconnect then connect again)."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ refresh: true })"})]}),`
`,e.jsxs(n.h4,{id:"keepwalletopened",children:[e.jsx(n.strong,{children:"keepWalletOpened"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#keepwalletopened",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"keepWalletOpened"})," will keep the wallet window open after connecting. The default is to automatically close the wallet after connecting."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ keepWalletOpened: true })"})]}),`
`,e.jsxs(n.h4,{id:"askforemail",children:[e.jsx(n.strong,{children:"askForEmail"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#askforemail",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"askForEmail"})," will ask user whether they want to share the email they use to sign in to wallet while connecting, and will be returned in ",e.jsx(n.code,{children:"connectDetails"}),"."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ askForEmail: true })"})]}),`
`,e.jsxs(n.h4,{id:"settingstheme",children:[e.jsx(n.strong,{children:"settings.theme"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingstheme",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Name of one of the available theme provided by sequence the sequence wallet will be rendered with."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'await wallet.connect({ settings: {theme: "light"}}'})]}),`
`,e.jsxs(n.h4,{id:"settingsbannerurl",children:[e.jsx(n.strong,{children:"settings.bannerUrl"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsbannerurl",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"URL of a banner image users will see when connecting or logging into your dapp. The banner image should follow a 3:1 aspect ration where 1200x400 works best."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'await wallet.connect({ settings: {bannerUrl: "https://yoursite.com/banner-image.png"}}'})]}),`
`,e.jsxs(n.h4,{id:"settingssigninwith",children:[e.jsx(n.strong,{children:"settings.signInWith"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingssigninwith",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Specify ",e.jsx(n.code,{children:"signInWith"})," with a supported auth provider to automatically sign in the user with that provider only. Will be ignored if user is already signed in."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'await wallet.connect({ settings: {signInWith: "google"}}'})]}),`
`,e.jsx(n.p,{children:'Supported Providers: "google", "discord", "twitch", "apple", "facebook"'}),`
`,e.jsxs(n.h4,{id:"settingssigninwithemail",children:[e.jsx(n.strong,{children:"settings.signInWithEmail"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingssigninwithemail",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Specify signInWithEmail with an email address to allow user automatically sign in with the email option. Will be ignored if user is already signed in."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'await wallet.connect({ settings: {signInWithEmail: "user@email.com"}}'})]}),`
`,e.jsxs(n.h4,{id:"settingssigninoptions",children:[e.jsx(n.strong,{children:"settings.signInOptions"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingssigninoptions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Specify signInOptions to pick/limit the available sign in options. Will be ignored if user is already signed in."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'await wallet.connect({ settings: {signInOptions: ["email", "google", "apple"]}}'})]}),`
`,e.jsxs(n.h4,{id:"settingsincludedpaymentproviders",children:[e.jsx(n.strong,{children:"settings.includedPaymentProviders"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsincludedpaymentproviders",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"List of payment providers users will be able to access. By default, users can access all payment providers integrated in Sequence."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'await wallet.connect({ settings: {includedPaymentProviders: ["moonpay", "ramp"]}}'})]}),`
`,e.jsxs(n.h4,{id:"settingsdefaultfundingcurrency",children:[e.jsx(n.strong,{children:"settings.defaultFundingCurrency"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsdefaultfundingcurrency",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The tag of the default currency to show when users open the payment provider page. The currency has to be supported by the payment providers integrated in sequence."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:'await wallet.connect({ settings: {defaultFundingCurrency: "usdc"}}'})]}),`
`,e.jsxs(n.h4,{id:"settingsdefaultpurchaseamount",children:[e.jsx(n.strong,{children:"settings.defaultPurchaseAmount"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingsdefaultpurchaseamount",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Use to specify a default purchase amount, as an integer, for prefilling the funding amount. If not specified, the default is 100."}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ settings: {defaultPurchaseAmount: 200}}"})]}),`
`,e.jsxs(n.h4,{id:"settingslockfundingcurrencytodefault",children:[e.jsx(n.strong,{children:"settings.lockFundingCurrencyToDefault"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settingslockfundingcurrencytodefault",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Whether to only allow users to purchase the default currency specified by the ",e.jsx(n.code,{children:"defaultFundingCurrency"})," option. If set to false, users will also be able to purchase other tokens. locking the default funding currency can be useful to prevent users from purchasing the wrong currency or the currency on the wrong chain."]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(n.code,{children:"await wallet.connect({ settings: {defaultFundingCurrency: true}}"})]}),`
`,e.jsxs(n.h2,{id:"connecting-your-dapp-with-web3js-or-ethersjs",children:["Connecting your dapp with ",e.jsx(n.code,{children:"web3.js"})," or ",e.jsx(n.code,{children:"ethers.js"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-your-dapp-with-web3js-or-ethersjs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`For a full example of a dapp which supports Sequence (on-demand + chrome extension), Metamask, and WalletConnect
please see the `,e.jsx(n.a,{href:"https://github.com/0xsequence/demo-dapp-web3modal",children:"Demo-Dapp-Web3Modal repo"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/web3modal.png",alt:"Sequence Web3Modal Integration"})}),`
`,e.jsxs(n.h2,{id:"connecting-to-any-ethereum-dapp-with-the-sequence-wallet-chrome-extension",children:["Connecting to any Ethereum dapp with the Sequence Wallet Chrome Extension",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-to-any-ethereum-dapp-with-the-sequence-wallet-chrome-extension",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Sequence Chrome Extension: ",e.jsx(n.a,{href:"https://chrome.google.com/webstore/detail/sequence-wallet/ocmccklecaalljlflmclidjeclpcpdim?hl=en",children:"Install"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/build/seq-chrome-store.png",alt:"Sequence Chrome Extension"})}),`
`,e.jsxs(n.h2,{id:"connecting-via-walletconnect",children:["Connecting via ",e.jsx(n.code,{children:"WalletConnect"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connecting-via-walletconnect",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Sequence already supports connecting to dapps via ",e.jsx(n.a,{href:"https://walletconnect.com",children:"WalletConnect"}),`.
If your dapp already supports WalletConnect, and you don't need Sequence-specific functionality, nothing more needs to be done.
From the user's perspective, the WalletConnect flow behaves as follows.`]}),`
`,e.jsxs(n.p,{children:["Taking ",e.jsx(n.a,{href:"https://app.uniswap.org",children:"Uniswap"})," as an example, the user is prompted to connect their wallet using one of multiple possible protocols."]}),`
`,e.jsx("img",{src:"/img/walletconnect/connect-wallet.png"}),`
`,e.jsx(n.p,{children:"The user selects the WalletConnect option."}),`
`,e.jsx("img",{src:"/img/walletconnect/select-walletconnect.png"}),`
`,e.jsx(n.p,{children:`A QR code is displayed, which can be scanned by Sequence.
Alternatively, the user can also choose to copy the connection details via their OS clipboard.`}),`
`,e.jsx("img",{src:"/img/walletconnect/qr-code.png"}),`
`,e.jsx(n.p,{children:'Back in the Sequence interface, the user chooses "Scan".'}),`
`,e.jsx("img",{src:"/img/walletconnect/scan-qr-code.png"}),`
`,e.jsx(n.p,{children:`The QR code from the dapp is scanned.
Alternatively, the code is pasted from the OS clipboard if the user chose that previously.`}),`
`,e.jsx("img",{src:"/img/walletconnect/scan.png"}),`
`,e.jsx(n.p,{children:"The user confirms the connection request."}),`
`,e.jsx("img",{src:"/img/walletconnect/confirm.png"}),`
`,e.jsx(n.p,{children:"The connection succeeded, and the dapp is updated to reflect that."}),`
`,e.jsx("img",{src:"/img/walletconnect/success.png"}),`
`,e.jsx(n.p,{children:`While connected, the dapp is able to make signing requests to Sequence.
Sequence will always prompt for confirmation from the user for any activity initiated by the dapp.`}),`
`,e.jsx("img",{src:"/img/walletconnect/activity.png"}),`
`,e.jsx(n.p,{children:"Once the user has finished using the dapp, they can disconnect the wallet via the session menu."}),`
`,e.jsx("img",{src:"/img/walletconnect/disconnect.png"})]})}function o(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default,c as frontmatter};
