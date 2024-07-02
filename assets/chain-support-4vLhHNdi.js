import{j as e,d as p}from"./index-D263PXtu.js";const d=({title:t})=>e.jsx("th",{children:t}),c=({children:t,index:n})=>{const r=n%2===0?"#3c393f":"#1e1d1f";return e.jsx("tr",{style:{backgroundColor:r},children:t})},a=({content:t,imgSrc:n})=>e.jsx("td",{children:e.jsxs("div",{className:"cell-content",children:[n&&e.jsx("img",{src:n,alt:"",className:"cell-image network-logo"}),e.jsx("span",{className:"cell-text",children:t})]})}),s=({rows:t,columns:n})=>e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:n.map(r=>e.jsx(d,{title:r}))})}),e.jsx("tbody",{children:t.map((r,i)=>e.jsxs(c,{index:i,children:[e.jsx(a,{content:r.network,imgSrc:r.networkImage}),e.jsx(a,{content:r.chainHandle}),e.jsx(a,{content:r.indexerEndpoint})]},i))})]}),h={title:"Multi-Chain Support",description:"undefined"};function o(t){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"multi-chain-support",children:["Multi-Chain Support",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multi-chain-support",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,`
`,e.jsxs(n.strong,{children:["Sequence Status Page: ",e.jsx(n.a,{href:"https://status.sequence.info",children:"https://status.sequence.info"})]}),`
`,e.jsxs(n.p,{children:[`Sequence can support all EVM compatible chains. The networks below are currently supported by Sequence Wallet, Sequence Indexer,
Sequence Relayer and all Sequence SDKs, however if you have a chain not in this list - please `,e.jsx(n.a,{href:"https://support.sequence.xyz/en/",children:"contact us"})," and we are happy to integrate."]}),`
`,e.jsxs(n.h2,{id:"networks",children:["Networks",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#networks",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s,{columns:["Network","Chain Handle","Indexer Endpoint"],rows:[{networkImage:"/img/networks/1.png",network:"Ethereum",chainHandle:"mainnet",indexerEndpoint:"https://mainnet-indexer.sequence.app"},{networkImage:"/img/networks/42161.png",network:"Arbitrum One",chainHandle:"arbitrum",indexerEndpoint:"https://arbitrum-indexer.sequence.app"},{networkImage:"/img/networks/42170.png",network:"Arbitrum Nova",chainHandle:"arbitrum-nova",indexerEndpoint:"https://arbitrum-nova-indexer.sequence.app"},{networkImage:"/img/networks/137.png",network:"Polygon",chainHandle:"polygon",indexerEndpoint:"https://polygon-indexer.sequence.app"},{networkImage:"/img/networks/1101.png",network:"Polygon zkEVM",chainHandle:"polygon-zkevm",indexerEndpoint:"https://polygon-zkevm-indexer.sequence.app"},{networkImage:"/img/networks/3776.png",network:"Astar zkEVM",chainHandle:"astar-zkevm",indexerEndpoint:"https://astar-zkevm-indexer.sequence.app"},{networkImage:"/img/networks/8453.png",network:"Base",chainHandle:"base",indexerEndpoint:"https://base-indexer.sequence.app"},{networkImage:"/img/networks/10.png",network:"Optimism",chainHandle:"optimism",indexerEndpoint:"https://optimism-indexer.sequence.app"},{networkImage:"/img/networks/660279.png",network:"XAI",chainHandle:"xai",indexerEndpoint:"https://xai-indexer.sequence.app"},{networkImage:"/img/networks/43114.png",network:"Avalanche",chainHandle:"avalanche",indexerEndpoint:"https://avalanche-indexer.sequence.app"},{networkImage:"/img/networks/19011.png",network:"Homeverse",chainHandle:"homeverse",indexerEndpoint:"https://homeverse-indexer.sequence.app"},{networkImage:"/img/networks/56.png",network:"BSC",chainHandle:"bsc",indexerEndpoint:"https://bsc-indexer.sequence.app"},{networkImage:"/img/networks/100.png",network:"Gnosis",chainHandle:"gnosis",indexerEndpoint:"https://gnosis-indexer.sequence.app"}]}),`
`,e.jsxs(n.h2,{id:"testnets",children:["Testnets",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#testnets",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s,{columns:["Network","Chain Handle","Indexer Endpoint"],rows:[{networkImage:"/img/networks/42161.png",network:"Arbitrum Sepolia",chainHandle:"arbitrum-sepolia",indexerEndpoint:"https://arbitrum-sepolia-indexer.sequence.app"},{networkImage:"/img/networks/137.png",network:"Polygon Amoy",chainHandle:"amoy",indexerEndpoint:"https://amoy-indexer.sequence.app"},{networkImage:"/img/networks/3776.png",network:"Astar zkEVM",chainHandle:"astar-zkyoto",indexerEndpoint:"https://astar-zkyoto-indexer.sequence.app"},{networkImage:"/img/networks/8453.png",network:"Base Sepolia",chainHandle:"base-sepolia",indexerEndpoint:"https://base-sepolia-indexer.sequence.app"},{networkImage:"/img/networks/43114.png",network:"Avalanche Testnet",chainHandle:"avalanche-testnet",indexerEndpoint:"https://avalanche-testnet-indexer.sequence.app"},{networkImage:"/img/networks/19011.png",network:"Homeverse Testnet",chainHandle:"homeverse-testnet",indexerEndpoint:"https://homeverse-testnet-indexer.sequence.app"},{networkImage:"/img/networks/56.png",network:"BSC Testnet",chainHandle:"bsc-testnet",indexerEndpoint:"https://bsc-testnet-indexer.sequence.app"},{networkImage:"/img/networks/11155111.png",network:"Ethereum Sepolia",chainHandle:"sepolia",indexerEndpoint:"https://sepolia-indexer.sequence.app"},{networkImage:"/img/networks/10.png",network:"Optimism Sepolia",chainHandle:"optimism-sepolia",indexerEndpoint:"https://optimism-sepolia-indexer.sequence.app"},{networkImage:"/img/networks/660279.png",network:"XAI Sepolia",chainHandle:"xai-sepolia",indexerEndpoint:"https://xai-sepolia-indexer.sequence.app"}]})]})}function m(t={}){const{wrapper:n}={...p(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{m as default,h as frontmatter};