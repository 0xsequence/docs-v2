import{u as n,j as s}from"./index-B1Ce7hEt.js";const a={title:"Authenticate Users with Message Signature",description:"undefined"};function r(i){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...n(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"authenticate-users-with-message-signature",children:["Authenticate Users with Message Signature",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authenticate-users-with-message-signature",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.h2,{id:"ask-for-the-wallet-address",children:["Ask for the wallet address",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ask-for-the-wallet-address",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"To get the user's Sequence wallet address:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" address"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getAddress"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(address)"})]})]})}),`
`,s.jsxs(e.h2,{id:"authenticate-wallet",children:["Authenticate wallet",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authenticate-wallet",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:`In many cases, you'll want your users to connect and then verify they do control this wallet address. Applications typically do this by asking the user
to sign a message with their wallet, and then verify the signature from the user to ensure its integrity.`}),`
`,s.jsx(e.p,{children:`As this is such a common workflow, Sequence can automatically authenticate the account address at the same time
while the user is prompt to connect their wallet to your dapp. This allows the user experience to be simpler and
more seamless.`}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { sequence } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '0xsequence'"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" wallet"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sequence."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getWallet"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" connectDetails"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"connect"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  app: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Your Dapp name'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  authorize: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:' // <---<<< this will automatically sign+verify a EIP712 message when user clicks "Connect"'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})}),`
`,s.jsx(e.p,{children:"It will look like this to your users:"}),`
`,s.jsx("img",{alt:"Sequence on-demand sign in, connect",src:"/img/authorize_connect.png",width:"400"}),`
`,s.jsxs(e.p,{children:["In the above example, we pass ",s.jsx(e.code,{children:"authorize: true"})," to the ",s.jsx(e.code,{children:"connect()"}),` function, which will automatically have the user
sign a `,s.jsx(e.strong,{children:"EIP712 signed message"}),` to prove their identity. This allows you to then easily authenticate the connected
wallet address with absolute certainty.`]}),`
`,s.jsxs(e.p,{children:["You can find the signed message proof returned in ",s.jsx(e.code,{children:"connectDetails.proof"}),`, which is an EIP712 signed object using
a simple convention from `,s.jsx(e.a,{href:"https://github.com/0xsequence/ethauth.js",children:"ethauth"}),`. NOTE: EIP712 allows you to use an actual object for
signing instead of just a plain-text string.`]}),`
`,s.jsxs(e.h2,{id:"authenticate-wallet-server-side",children:["Authenticate wallet server-side",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authenticate-wallet-server-side",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:`The above example demonstrates how to connect and verify the user's identity in your dapp on the client-side,
but if you'd like to authenticate the Sequence authorization proof on your server, then you can do so with the following snippet:`}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { ValidateSequenceWalletProof } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/auth'"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { commons, v2 } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/core'"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { ETHAuth } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/ethauth'"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { trackers } "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '@0xsequence/sessions'"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" *"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" as"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'ethers'"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ..."})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" rpcUrl"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'https://polygon-mainnet.infura.io/v3/<your infura key here>'"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" provider"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethers.providers."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"JsonRpcProvider"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(rpcUrl)"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// create an EIP-6492-aware ETHAuth proof validator"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" validator"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" ValidateSequenceWalletProof"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  () "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" commons.reader."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"OnChainReader"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(provider),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  new"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" trackers.remote."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"RemoteConfigTracker"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://sessions.sequence.app'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  v2.DeployedWalletContext"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" ethauth"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" new"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" ETHAuth"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(validator)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethauth."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"configJsonRpcProvider"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(rpcUrl)"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" proof"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ethAuth."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"decodeProof"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(connectDetails.proof.proofString)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`proof for address ${"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"proof"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"address"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"} is valid`"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (err) {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`invalid proof -- do not trust address: ${"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"err"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}`"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,s.jsxs(e.p,{children:["See the ",s.jsx(e.a,{href:"https://github.com/0xsequence/go-sequence",children:"Go Sequence SDK"})," on using Sequence in your Go applications."]}),`
`,s.jsxs(e.p,{children:[`If your server is written in a language other than Javascript/Typescript or Go, all you have to do is validate
the signature with `,s.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"EIP1271, the standard method for validating signed messages for a smart wallet"}),"."]}),`
`,s.jsxs(e.p,{children:["As always, if you have any questions or require help, reach out to us on ",s.jsx(e.a,{href:"https://discord.gg/sequence",children:"Discord"}),"."]})]})}function c(i={}){const{wrapper:e}={...n(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(r,{...i})}):r(i)}export{c as default,a as frontmatter};
