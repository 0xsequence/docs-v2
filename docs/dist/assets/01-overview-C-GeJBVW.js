import{u as i,j as e}from"./index-DvPQu5E4.js";const r={title:"Sequence Embedded Wallet",description:"undefined"};function a(n){const t={a:"a",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"sequence-embedded-wallet",children:["Sequence Embedded Wallet",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-embedded-wallet",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"Sequence Embedded Wallet (or Wallet as a Service) enables the creation, management and usage of fully functional EVM compatible wallets. These wallets can be created on-demand for each user and allow you to integrate an application with an Ethereum compatible blockchain, while using familiar constructions like RPC APIs."}),`
`,e.jsx(t.p,{children:"Sequence Embedded Wallet offers real non-custodial wallets and the system guarantees that each created wallet can only be accessed with the consent of the owner of the wallet."}),`
`,e.jsxs(t.h2,{id:"architecture-overview",children:["Architecture overview",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-overview",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Sequence Embedded Wallets are native smart contract multisigs, the configuration of the multisig can be seen as a 2/2, both of which are required to sign in order to operate them; each one of the signers protects the wallet from a different facet of possible threats."}),`
`,e.jsxs(t.h3,{id:"signer-1-sequence-auth",children:["Signer 1: Sequence Auth",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer-1-sequence-auth",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Sequence Auth provides a simple way to add account creation, login, session management, and wallet support to your app, enabling applications to provide traditional web experiences (e.g. social login, email login, etc.) while providing access to crypto wallets to interact with smart contracts."}),`
`,e.jsxs(t.p,{children:["All user and session data is encrypted by a Hardware Security Module operated by a third party. This makes it protected from both external attackers and internal access by Sequence Team or anyone else. ",e.jsx(t.strong,{children:"Nobody"})," can access a user's wallet but the user themselves."]}),`
`,e.jsx(t.p,{children:"You won't need to trust us, this is a guarantee you can verify yourself: this service is hosted in a cryptographically attested secure enclave on Amazon Nitro platform. And we offer publicly available independently audited source code (coming soon), so you can rest assured that it hasn't been tampered with."}),`
`,e.jsxs(t.h3,{id:"signer-2-sequence-guard",children:["Signer 2: Sequence Guard",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signer-2-sequence-guard",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Sequence Guard is a service hosted by Sequence and contains the other key of the wallets. It's meant to be another line of defense, verifying not only user's ",e.jsx(t.em,{children:"identity"})," but also their ",e.jsx(t.em,{children:"intent"}),". It achieves this in two different ways:"]}),`
`,e.jsx(t.p,{children:"1 - Limits and allowlists: you can (from the development dashboard) configure what kind of actions are allowed, this means that the guard will only sign transactions within these constraints. For example, you can define that only NFT contract X can be called, and the guard will enforce that no other transactions can take place."}),`
`,e.jsxs(t.p,{children:["2 - Authenticating the user: the Sequence Guard will authenticate the user ",e.jsx(t.strong,{children:"independently of the Sequence Auth"}),", it performs this action either by using a 3rd party OAuth 2.0 id token (from Meta, Google, X, etc.) or by directly communicating with the user via email/phone number with an OTP code. The direct communication is not always required and, when it does happen, it's seamless and branded with your project details."]}),`
`,e.jsxs(t.h2,{id:"threat-model",children:["Threat model",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#threat-model",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["With these safeguards in place wallets are ",e.jsx(t.strong,{children:"safe"})," against the following scenarios:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Sequence.app backend is compromised, or guard keys are leaked: in this scenario, the user's identity must still be verified by Sequence Auth."}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Sequence Auth is compromised: in this scenario the Sequence Guard protects the wallets, because it independently authenticates the user, an attacker in this scenario wouldn't be able to access any wallets."}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"The model also provides partial protection against the scenario:"}),`
`,e.jsxs(t.ol,{start:"3",children:[`
`,e.jsx(t.li,{children:"Partner frontend is compromised, or MITM on the partner side: If an attacker were to be able to vulnerate the frontend of the partner, it could gain access to wallets at the time of login, but it cannot gain access to wallets of users who are currently inactive. This means that recovery from such a scenario is possible, with limited damage."}),`
`]})]})}function o(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{o as default,r as frontmatter};
