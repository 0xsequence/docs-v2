import{d as r,j as e}from"./index-CQ1xESna.js";const a={title:"API Integration",description:"undefined"};function n(i){const s={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"api-integration",children:["API Integration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-integration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h3,{id:"sequence-api",children:["Sequence API",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-api",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["After you've completed initial authentication and have intercepted the credentials either through your UI or ours, to use the Sequence API you'll need to create a ",e.jsx(s.code,{children:"[USequenceWallet]"})," by using:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"`[USequenceWallet "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Api"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" USequenceWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(CredentialsIn)]` or `[USequenceWallet * Api = USequenceWallet::Make("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"CredentialsIn"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ProviderURL"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")]`"})]})})}),`
`,e.jsxs(s.p,{children:["Once you have your ",e.jsx(s.code,{children:"[USequenceWallet]"})," UObject call ",e.jsx(s.code,{children:"[Api>RegisterSession(OnSuccess,GenericFailure)]"})," this will register your credentials with the Sequence API. Note not calling Register prior to make any others calls will result in errors as a UserWallet hasn't been supplied until this point."]}),`
`,e.jsx(s.p,{children:"`*"}),`
`,e.jsxs(s.p,{children:["Assuming you've setup your controlling Actor with the ",e.jsx(s.code,{children:"[Sequence_Pawn_Component_BP]"}),`
The sequence pawn component has functions to do the following:`]}),`
`,e.jsx(s.p,{children:"Setup Sequence (sets up the sequence based systems), requires playerController input"}),`
`,e.jsx(s.p,{children:"Show GUI Shows the UI"}),`
`,e.jsx(s.p,{children:"Hide GUI Hides the UI"}),`
`,e.jsx(s.p,{children:"GUI Visible Simple Visibility test for the UI"}),`
`,e.jsx(s.p,{children:"Switch Platform (Switches which mode the UI will be in and how it will be displayed)"}),`
`,e.jsx(s.p,{children:"Note: this doesn't rotate the application into any one view it just make the UI responsive to that type of view."}),`
`,e.jsx(s.p,{children:"Modes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Desktop (default)"}),`
`,e.jsx(s.li,{children:"Mobile Portrait (Custom built for portrait mode reducing the X width where ever possible)"}),`
`,e.jsx(s.li,{children:"Mobile Landscape"}),`
`]}),`
`,e.jsx(s.p,{children:"`*"}),`
`,e.jsxs(s.h3,{id:"sequence-unreal-api",children:["Sequence Unreal API",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-unreal-api",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The Sequence Unreal plugin is broken up into a few different parts in order to manage all of the differing functionality. Here we'll go through each parts purpose then summarize how to use them all together below"}),`
`,e.jsx(s.p,{children:"The SDK automatically stores credentials on disk in the following cases:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"On Successful Auth"}),`
`,e.jsx(s.li,{children:"On Successful Registering of a session"}),`
`,e.jsx(s.li,{children:"On Successful Closing of a session"}),`
`]}),`
`,e.jsxs(s.h3,{id:"usequencewallet",children:["USequenceWallet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usequencewallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["To get a ",e.jsx(s.code,{children:"USequenceWallet"})," call either:"]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"USequenceWallet::Make(FCredentials_BE CredentialsIn)"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"USequenceWallet::Make(FCredentials_BE CredentialsIn, FString ProviderURL)"})})]})}),`
`,e.jsxs(s.p,{children:["Where the Credentials you give are the credentials you received from the UAuthenticator when ",e.jsx(s.code,{children:"[AuthSuccess]"})," fires, or you can use the call Auth->",e.jsx(s.code,{children:"[GetStoredCredentials]"}),"(), where Auth is of the type ",e.jsx(s.code,{children:"[UAuthenticator]"}),". If you are using StoredCredentials please ensure they are valid by checking the wrapping Structs FStoredCredentials_BE.GetValid() flag returned from ",e.jsx(s.code,{children:"[GetStoredCredentials]"}),", the providerURL is the url of the provider you wish to use."]}),`
`,e.jsxs(s.p,{children:["Once you have your ",e.jsx(s.code,{children:"[USequenceWallet]"})," UObject please ensure that you've registered the session using ",e.jsx(s.code,{children:"[RegisterSession]"})," before attempting to make other calls to the API."]}),`
`,e.jsxs(s.h3,{id:"sequence-api-methods",children:["Sequence API Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-api-methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"We make use of TFunctions with some callbacks:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"TSuccessCallback"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" TFunction"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<void"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(FString)"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" OnResponse "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" `[Capturable "}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"variables"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]`("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FString"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Response"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//callback body where we can process Response"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FFailureCallback"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" TFunction"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<void"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(FSequenceError)"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" OnFailureTest "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" `[Capturable "}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"variables"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]`("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FSequenceError"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" Error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//callback body where we can process Error"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})}),`
`,e.jsxs(s.p,{children:["One thing to be aware of is keep an eye on capturables if you have lots of nested TFunctions it's very easy to miss something and start over writing memory. If you require lots of nesting swapping to a better approach using UFUNCTION callbacks helps to avoid these problems similar to how things are done in ",e.jsx(s.code,{children:"[UAuthenticator.h/cpp]"})]})]})}function t(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{t as default,a as frontmatter};