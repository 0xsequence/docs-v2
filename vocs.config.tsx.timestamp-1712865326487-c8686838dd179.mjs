// vocs.config.tsx
import { defineConfig } from "file:///home/mwm/Projects/sequence-v2/docs-v2/node_modules/.pnpm/vocs@1.0.0-alpha.45_@types+react@18.2.75_react-dom@18.2.0_react@18.2.0_rollup@4.14.1_typescript@5.4.4/node_modules/vocs/_lib/index.js";

// nav.ts
var topNav = [
  {
    text: "Solutions",
    items: [
      { text: "Wallets", link: "/solutions/wallets/overview", match: "/solutions/wallets/overview" },
      { text: "Marketplace", link: "/solutions/marketplaces/overview", match: "/solutions/marketplaces/overview" },
      { text: "Collectibles", link: "/solutions/collectibles/contracts/01-deploy-an-item-collection", match: "/solutions/collectibles/contracts/01-deploy-an-item-collection" },
      { text: "Payments", link: "/solutions/nft-checkout", match: "/solutions/nft-checkout" },
      {
        text: "Builder Console",
        link: "/solutions/builder/overview",
        match: "/solutions/builder/overview",
        items: [
          { text: "Overview", link: "/solutions/builder/overview", match: "/solutions/builder/overview" }
        ]
      }
    ]
  },
  {
    text: "Guides",
    items: [
      { text: "Web3 Game with WebGL", link: "/guides/webgl-guide", match: "/guides/webgl-guide" },
      { text: "Web3 Game with Unity", link: "/guides/unity-guide", match: "/guides/unity-guide" },
      { text: "Lootboxes", link: "/guides/lootbox", match: "/guides/lootbox" },
      { text: "Custom Marketplace", link: "/guides/custom-marketplace-guide", match: "/guides/custom-marketplace-guide" }
    ]
  },
  {
    text: "SDKs",
    items: [
      { text: "Unity", link: "/sdk/unity/01-overview", match: "/sdk/unity/01-overview" },
      { text: "Unreal", link: "/sdk/unreal/01-overview", match: "/sdk/unreal/01-overview" },
      { text: "Typescript", link: "/sdk/typescript/03-guides/overview", match: "/sdk/typescript/03-guides/overview" },
      { text: "Sequence Kit", link: "/sdk/sequence-kit/01-overview", match: "/sdk/sequence-kit/01-overview" },
      { text: "Go", link: "/sdk/go/overview", match: "/sdk/go/overview" }
      // { text: 'Android', link: '/sdk/android', match: '/sdk/android' },
      // { text: 'React Native', link: '/sdk/reactnative', match: '/sdk/reactnative' },
      // { text: 'iOS', link: '/sdk/iOS', match: '/sdk/iOS' }
    ]
  },
  // replace links.
  {
    text: "APIs",
    items: [
      { text: "Relayer API", link: "/api/relayer/overview" },
      { text: "Indexer API", link: "/api/indexer/overview" },
      { text: "Metadata API", link: "/api/metadata/overview" },
      { text: "Marketplace API", link: "/api/marketplace/overview" },
      { text: "Node Gateway", link: "/api/node-gateway" }
    ]
  },
  {
    text: "Support",
    items: [
      { text: "Support", link: "/support" },
      { text: "Changelog", link: "https://0xsequence.canny.io/changelog" },
      { text: "Token Directory", link: "/support/token-directory" },
      { text: "FAQ", link: "https://support.sequence.xyz" },
      { text: "Discord", link: "https://discord.gg/sequence" },
      { text: "We're hiring!", link: "https://horizon.io/careers" },
      { text: "Contact Us", link: "https://support.sequence.xyz" }
    ]
  }
];
var sidebar = {
  // Overview
  "/solutions": [
    {
      text: "Wallets",
      items: [
        { text: "Overview", link: "/solutions/wallets/overview" },
        {
          text: "Embedded Wallet",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/embedded-wallet/01-overview" },
            { text: "Quickstart", link: "/solutions/wallets/embedded-wallet/02-quickstart" },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Manage Sessions", link: "/solutions/wallets/embedded-wallet/examples/03-manage-sessions" },
                { text: "Use Wallets", link: "/solutions/wallets/embedded-wallet/examples/04-use-wallets" },
                { text: "Validation", link: "/solutions/wallets/embedded-wallet/examples/05-validation" },
                { text: "Transaction Receipts", link: "/solutions/wallets/embedded-wallet/examples/06-transaction-receipts" }
              ]
            }
          ]
        },
        {
          text: "Universal Wallet",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/universal-wallet/01-overview" },
            { text: "Quickstart", link: "/solutions/wallets/universal-wallet/02-quickstart" },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Connect Wallet", link: "/solutions/wallets/universal-wallet/examples/01-connect-wallet" },
                { text: "Authenticate Users with Message Signature", link: "/solutions/wallets/universal-wallet/examples/02-auth-address" },
                { text: "Signing & Verifying Messages", link: "/solutions/wallets/universal-wallet/examples/03-sign-message" },
                { text: "No-wallet confirmation signatures", link: "/solutions/wallets/universal-wallet/examples/04-session-keys" },
                { text: "Sending Transactions", link: "/solutions/wallets/universal-wallet/examples/05-send-transaction" },
                { text: "Sending ERC-20 Tokens", link: "/solutions/wallets/universal-wallet/examples/06-send-erc20" },
                { text: "Sending ERC-721 (NFT) Tokens", link: "/solutions/wallets/universal-wallet/examples/07-send-erc721" },
                { text: "Sending ERC-1155 (Collectible) Tokens", link: "/solutions/wallets/universal-wallet/examples/08-send-erc1155" },
                { text: "Sending a Batch of Transactions", link: "/solutions/wallets/universal-wallet/examples/09-send-batch-transactions" },
                { text: "Building Backends with Sequence", link: "/solutions/wallets/universal-wallet/examples/10-building-backends" }
              ]
            },
            { text: "Sequence Kit", link: "/solutions/wallets/universal-wallet/04-sequence-kit" },
            { text: "Supported Platforms", link: "/solutions/wallets/universal-wallet/05-platforms" },
            { text: "Fiat On-Ramps", link: "/solutions/wallets/universal-wallet/06-fiat-on-ramps" },
            { text: "Key Management", link: "/solutions/wallets/universal-wallet/07-key-management" }
          ]
        }
      ]
    },
    {
      text: "Marketplace",
      // collapsed: true,
      items: [
        { text: "Overview", link: "/solutions/marketplaces/overview" },
        { text: "White-label Marketplace", link: "/solutions/marketplaces/white-label-marketplace" },
        {
          text: "Build your Custom Marketplace",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/marketplaces/orderbook/01-overview" },
            { text: "Quickstart", link: "/solutions/marketplaces/orderbook/02-quickstart" },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Get Top Orders", link: "/solutions/marketplaces/orderbook/examples/03-get-top-orders" },
                { text: "Get Orderbook", link: "/solutions/marketplaces/orderbook/examples/04-get-orderbook" },
                { text: "Get User Activities", link: "/solutions/marketplaces/orderbook/examples/05-get-user-activities" },
                { text: "Creating Market Transactions", link: "/solutions/marketplaces/orderbook/examples/06-orderbook-transactions" }
              ]
            }
          ]
        }
      ]
    },
    {
      text: "Collectibles",
      items: [
        {
          text: "Deployable Contracts",
          collapsed: true,
          items: [
            { text: "Deploy a Collectible Contract", link: "/solutions/collectibles/contracts/01-deploy-an-item-collection" },
            // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
            // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
            { text: "Deploy an In-Game Currency (ERC20)", link: "/solutions/collectibles/contracts/02-deploy-ERC20-currency" }
          ]
        },
        {
          text: "Metadata",
          collapsed: true,
          items: [
            { text: "Manage Metadata in Builder", link: "/solutions/collectibles/metadata/800-manage-metadata-builder" }
          ]
        }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: "Payments",
      items: [
        { text: "NFT Checkout", link: "/solutions/nft-checkout" },
        { text: "Onramps", link: "/solutions/payments/onramps/01-fiat-on-ramps" }
      ]
    },
    {
      text: "Builder Console",
      collapsed: true,
      items: [
        { text: "Overview", link: "/solutions/builder/overview" },
        { text: "Get Started", link: "/solutions/builder/getting-started" },
        { text: "Project Management", link: "/solutions/builder/project-management" },
        { text: "Contracts", link: "/solutions/builder/contracts" },
        { text: "Gas Tank", link: "/solutions/builder/gas-tank" },
        { text: "Wallet SDKs", link: "/solutions/builder/wallet-sdks" },
        { text: "Embedded Wallet", link: "/solutions/builder/embedded-wallet" },
        { text: "Node Gateway", link: "/solutions/builder/node-gateway" },
        { text: "Marketplaces", link: "/solutions/builder/marketplaces" },
        { text: "Indexer", link: "/solutions/builder/indexer" },
        { text: "Analytics", link: "/solutions/builder/analytics" },
        { text: "Settings", link: "/solutions/builder/project-settings" }
      ]
    },
    {
      text: "Technical References",
      items: [
        { text: "Chain Support", link: "/solutions/technical-references/chain-support" },
        // { text: 'EIP5189 vs. 4337', link: '/solutions/technical-references/5189-4337' },
        { text: "Smart Contract Wallets", collapsed: true, items: [
          { text: "Why smart contract wallets?", link: "/solutions/technical-references/wallet-contracts/01-why" }
        ] },
        { text: "Contract Internals", collapsed: true, items: [
          { text: "Deployment", link: "/solutions/technical-references/internals/01-deployment" },
          { text: "Sequence v1", collapsed: true, items: [
            { text: "Deploy", link: "/solutions/technical-references/internals/v1/01-deploy" },
            { text: "Wallet Factory", link: "/solutions/technical-references/internals/v1/03-wallet-factory" },
            { text: "Wallet Configuration", link: "/solutions/technical-references/internals/v1/04-wallet-configuration" },
            // {text: 'Transaction Encoding', link: '/solutions/technical-references/internals/v1/07-transaction-encoding'},
            { text: "Signature Encoding", link: "/solutions/technical-references/internals/v1/08-signature-encoding" },
            { text: "Wallet Context", link: "/solutions/technical-references/internals/v1/11-wallet-context" },
            { text: "Contract Audits", link: "/solutions/technical-references/internals/v1/12-contract-audits" }
          ] },
          { text: "Sequence v2", collapsed: true, items: [
            { text: "Deploy", link: "/solutions/technical-references/internals/v2/01-deploy" },
            { text: "Wallet Configuration", link: "/solutions/technical-references/internals/v2/04-configuration" }
          ] }
        ] },
        { text: "Wallet as a Service", collapsed: true, items: [
          { text: "Overview", link: "/solutions/technical-references/wallet-as-a-service/overview" },
          { text: "Intents", link: "/solutions/technical-references/wallet-as-a-service/intents" },
          { text: "Enclave verification", link: "/solutions/technical-references/wallet-as-a-service/enclave-verification" }
        ] }
      ]
    }
  ],
  "/guides": [
    {
      text: "Build a game with WebGL",
      collapsed: true,
      items: [
        { text: "Project setup with webpack", link: "/guides/webgl-guide#1-project-setup-with-webpack" },
        { text: "Integrate Sequence Kit", link: "/guides/webgl-guide#2-integrate-sequence-kit" },
        { text: "Deploy collectibles contract", link: "/guides/webgl-guide#3-deploy-a-collectibles-contract" },
        { text: "Deploy a remote minter & mint in-game achievement tokens", link: "/guides/webgl-guide#4-deploy-a-remote-minter--mint-in-game-achievement-tokens" },
        { text: "Leverage items in-game", link: "/guides/webgl-guide#5-leverage-items-in-game" },
        { text: "Burn in-game achievement tokens", link: "/guides/webgl-guide#6-burn-in-game-achievement-tokens" },
        { text: "Integrate In-Game Wallet into Sequence Kit", link: "/guides/webgl-guide#7-optional-integrate-in-game-wallet-into-sequence-kit" }
      ]
    },
    {
      text: "Build a mobile Unity game",
      collapsed: true,
      items: [
        { text: "Integrate SequenceKit with WaaS", link: "/guides/unity-guide#integrate-sequencekit-with-waas" },
        { text: "Deploy a collectibles contract", link: "/guides/unity-guide#deploy-a-collectibles-contract" },
        { text: "Deploy a remote minter", link: "/guides/unity-guide#deploy-a-remote-minter" },
        { text: "Mint in-game achievement tokens", link: "/guides/unity-guide#mint-in-game-achievement-tokens" },
        { text: "Burn in-game achievement tokens", link: "/guides/unity-guide#burn-in-game-achievement-tokens" },
        { text: "Integrate an embedded marketplace", link: "/guides/unity-guide#integrate-an-embedded-marketplace" },
        { text: "Leverage purchased items in-game", link: "/guides/unity-guide#leverage-purchased-items-in-game" }
      ]
    },
    {
      text: "Build a lootbox with AI minting",
      link: "/guides/lootbox"
    },
    {
      text: "Build a custom marketplace",
      collapsed: true,
      items: [
        { text: "Minting", link: "/guides/custom-marketplace-guide#1-minting" },
        { text: "Wallet authentication", link: "/guides/custom-marketplace-guide#2-wallet-authentication" },
        { text: "Blockchain queries", link: "/guides/custom-marketplace-guide#3-blockchain-queries" },
        { text: "Multi-Wallet types", link: "/guides/custom-marketplace-guide#4-multi-wallet-types" },
        { text: "Request creation", link: "/guides/custom-marketplace-guide#5-request-creation" },
        { text: "Order accepting", link: "/guides/custom-marketplace-guide#6-order-accepting" },
        { text: "Integrate In-Game Wallet into Sequence Kit", link: "/guides/custom-marketplace-guide#7-optional-integrate-in-game-wallet-into-sequence-kit" }
      ]
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: "Templates",
      items: [
        { text: "Embedded Wallet Demo", link: "/guides/templates/template-embedded-wallet" },
        { text: "Build a Backend Transaction Manager", link: "/guides/templates/02-building-relaying-server" },
        { text: "Serverless Minting of Collectibles", link: "/guides/templates/03-mint-collectibles-serverless" }
        // { text: 'Marketplace API Demo', link: '/guides/templates/template-marketplace-api' }
      ]
    }
  ],
  // SDKs
  "/sdk": [
    {
      text: "Game Engine",
      // collapsed: true,
      items: [
        {
          text: "Unreal",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/unreal/01-overview" },
            { text: "Installation", link: "/sdk/unreal/02-installation" },
            { text: "Setup", link: "/sdk/unreal/03-setup" },
            { text: "Authentication", link: "/sdk/unreal/04-authentication" },
            { text: "API Integration", link: "/sdk/unreal/05-api-integration" },
            { text: "Packaging", link: "/sdk/unreal/06-packaging" }
          ]
        },
        {
          text: "Unity",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/unity/01-overview" },
            { text: "Installation", link: "/sdk/unity/02-installation" },
            { text: "Setup", link: "/sdk/unity/03-setup" },
            { text: "Authentication", link: "/sdk/unity/04-authentication" },
            { text: "Write to blockchain", link: "/sdk/unity/05-write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unity/06-read-from-blockchain" },
            { text: "Sign Messages", link: "/sdk/unity/07-sign-messages" },
            { text: "Deploy Contracts", link: "/sdk/unity/08-deploy-contracts" },
            { text: "Wallet UI", link: "/sdk/unity/09-wallet-ui" },
            {
              text: "Advanced",
              collapsed: true,
              items: [
                { text: "Introduction", link: "/sdk/unity/Advanced/01-introduction" },
                { text: "Wallets", link: "/sdk/unity/Advanced/02-wallets" },
                { text: "Clients", link: "/sdk/unity/Advanced/03-clients" },
                { text: "Transfers", link: "/sdk/unity/Advanced/04-transfers" },
                { text: "Contracts", link: "/sdk/unity/Advanced/05-contracts" },
                { text: "Tokens", link: "/sdk/unity/Advanced/06-tokens" }
              ]
            }
          ]
        }
      ]
    },
    // {
    //   text: 'Mobile',
    //   items: [
    //     { text: 'Android', link: '/sdk/android' },
    //     { text: 'iOS', link: '/sdk/iOS' },
    //     { text: 'React Native', link: '/sdk/react-native' }
    //   ]
    // },
    {
      text: "Web3",
      items: [
        {
          text: "SequenceKit",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/sequence-kit/01-overview" },
            { text: "Quickstart", link: "/sdk/sequence-kit/02-getting-started" },
            { text: "Configuration", link: "/sdk/sequence-kit/03-configuration" },
            { text: "Checkout", link: "/sdk/sequence-kit/04-checkout" },
            { text: "Custom Connectors", link: "/sdk/sequence-kit/05-custom-connectors" }
          ]
        },
        {
          text: "TypeScript",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/typescript/03-guides/overview" },
            { text: "Connect Wallet", link: "/sdk/typescript/03-guides/01-connect-wallet" },
            { text: "Authenticate Users with Message Signature", link: "/sdk/typescript/03-guides/02-auth-address" },
            { text: "Signing & Verifying Messages", link: "/sdk/typescript/03-guides/03-sign-message" },
            { text: "No-wallet confirmation signatures", link: "/sdk/typescript/03-guides/04-session-keys" },
            { text: "Sending Transactions", link: "/sdk/typescript/03-guides/05-send-transaction" },
            { text: "Sending ERC-20 Tokens", link: "/sdk/typescript/03-guides/06-send-erc20" },
            { text: "Sending ERC-721 (NFT) Tokens", link: "/sdk/typescript/03-guides/07-send-erc721" },
            { text: "Sending ERC-1155 (Collectible) Tokens", link: "/sdk/typescript/03-guides/08-send-erc1155" },
            { text: "Sending a Batch of Transactions", link: "/sdk/typescript/03-guides/09-send-batch-transactions" },
            { text: "Building Backends with Sequence", link: "/sdk/typescript/03-guides/10-building-backends" },
            {
              text: "Wallet Connectors",
              collapsed: true,
              items: [
                { text: "Overview", link: "/sdk/typescript/connectors/01-overview" },
                { text: "SequenceKit", link: "/sdk/sequence-kit/01-overview" },
                { text: "Wagmi", link: "/sdk/typescript/connectors/03-wagmi" },
                { text: "RainbowKit", link: "/sdk/typescript/connectors/04-rainbow-kit" },
                { text: "Web3 Onboard", link: "/sdk/typescript/connectors/05-web3-onboard" },
                { text: "Web3 React V6", link: "/sdk/typescript/connectors/06-web3-react-v6" },
                { text: "Web3Modal", link: "/sdk/typescript/connectors/07-web3modal" },
                { text: "FAQ", link: "/sdk/typescript/connectors/08-FAQ" }
              ]
            }
          ]
        },
        {
          text: "Go",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/go/overview" }
          ]
        }
      ]
    },
    {
      text: "Common Questions",
      collapsed: true,
      items: [
        { text: "How do I do signature validation?", link: "/wallet/sig-validation" }
        // ...
      ]
    }
  ],
  // apis
  "/api": [
    {
      text: "Relayer",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/relayer/overview" },
        { text: "Installation", link: "/api/relayer/installation" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Fetch Fee Options", link: "/api/relayer/examples/fetch-fee-options" },
            { text: "Send Transactions", link: "/api/relayer/examples/send-transactions" },
            { text: "Fetch Transaction Receipts", link: "/api/relayer/examples/fetch-transaction-receipts" }
          ]
        }
      ]
    },
    {
      text: "Indexer",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/indexer/overview" },
        { text: "Installation", link: "/api/indexer/installation" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Fetch Tokens", link: "/api/indexer/examples/fetch-tokens" },
            { text: "Transaction History", link: "/api/indexer/examples/transaction-history" },
            { text: "Unique Tokens", link: "/api/indexer/examples/unique-tokens" },
            { text: "Transaction History Token Contract", link: "/api/indexer/examples/transation-history-token-contract" },
            { text: "Native Network Balance", link: "/api/indexer/examples/native-network-balance" },
            { text: "Metadata Tips", link: "/api/indexer/metadata-tips" }
          ]
        }
      ]
    },
    {
      text: "Metadata",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/metadata/overview" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Token Metadata", link: "/api/metadata/token-metadata" },
            { text: "Contract Metadata", link: "/api/metadata/contract-metadata" },
            { text: "REST API", link: "/api/metadata/rest-api" }
          ]
        }
      ]
    },
    {
      text: "Marketplace",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/marketplace/overview" },
        // { text: 'Schema', link: '/api/marketplace/schema' },
        // { text: 'Marketplace API', link: '/api/marketplace/api' },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Get Top Orders", link: "/solutions/marketplaces/orderbook/examples/03-get-top-orders" },
            { text: "Get Orderbook", link: "/solutions/marketplaces/orderbook/examples/04-get-orderbook" },
            { text: "Get User Activities", link: "/solutions/marketplaces/orderbook/examples/05-get-user-activities" },
            { text: "Creating Market Transactions", link: "/solutions/marketplaces/orderbook/examples/06-orderbook-transactions" }
          ]
        }
      ]
    },
    {
      text: "Node Gateway",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/node-gateway" }
      ]
    }
  ],
  // Support
  "/support": {
    items: [
      { text: "Support", link: "/support" },
      { text: "Changelog", link: "https://0xsequence.canny.io/changelog" },
      { text: "FAQ", link: "https://support.sequence.xyz" },
      { text: "Token Directory", link: "/support/token-directory" },
      { text: "Discord", link: "https://discord.gg/sequence" },
      { text: "We're hiring!", link: "https://horizon.io/careers" },
      { text: "Contact Us", link: "https://support.sequence.xyz" }
    ]
  }
};

// vocs.config.tsx
var vocs_config_default = defineConfig({
  title: "Sequence",
  // ogImageUrl: {
  //   '/': '/og-image.png',
  //   '/docs':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  //   '/op-stack':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  // },
  iconUrl: { light: "/img/favicon.ico", dark: "/img/favicon.ico" },
  logoUrl: {
    light: "/img/sequence-composite-light.svg",
    dark: "/img/sequence-composite-dark.svg"
  },
  // rootDir: '.',
  basePath: "/",
  topNav,
  sidebar,
  // NOTE: taking up valuable space, will move those
  // to footer and other sections
  // socials: [
  //   {
  //     icon: 'github',
  //     link: 'https://github.com/0xsequence',
  //   },
  //   {
  //     icon: 'discord',
  //     link: 'https://discord.gg/sequence',
  //   },
  //   {
  //     icon: 'x',
  //     link: 'https://x.com/0xsequence',
  //   },
  // ],
  theme: {
    // accentColor: {
    //   light: '#442CA8',
    //   dark: '#99ADED',
    // },
    variables: {
      fontFamily: {
        default: "Inter"
        // mono: 'Roboto Mono'
      },
      color: {
        background: {
          light: "#f0f0f0",
          dark: "#111111"
        }
        // background5: {
        //   light: '#dddddd',
        //   dark: '#111111',
        // }
        // backgroundDark: {
        //   light: '#dddddd',
        //   dark: '#151515'
        // }
      }
    }
  }
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIGljb25Vcmw6IHsgbGlnaHQ6ICcvaW1nL2Zhdmljb24uaWNvJywgZGFyazogJy9pbWcvZmF2aWNvbi5pY28nIH0sXG4gIGxvZ29Vcmw6IHtcbiAgICBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsXG4gICAgZGFyazogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWRhcmsuc3ZnJyxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIC8vIE5PVEU6IHRha2luZyB1cCB2YWx1YWJsZSBzcGFjZSwgd2lsbCBtb3ZlIHRob3NlXG4gIC8vIHRvIGZvb3RlciBhbmQgb3RoZXIgc2VjdGlvbnNcbiAgLy8gc29jaWFsczogW1xuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdnaXRodWInLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdkaXNjb3JkJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ3gnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8veC5jb20vMHhzZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gXSxcblxuICB0aGVtZToge1xuICAgIC8vIGFjY2VudENvbG9yOiB7XG4gICAgLy8gICBsaWdodDogJyM0NDJDQTgnLFxuICAgIC8vICAgZGFyazogJyM5OUFERUQnLFxuICAgIC8vIH0sXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBmb250RmFtaWx5OiB7XG4gICAgICAgIGRlZmF1bHQ6ICdJbnRlcicsXG4gICAgICAgIC8vIG1vbm86ICdSb2JvdG8gTW9ubydcbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgbGlnaHQ6ICcjZjBmMGYwJyxcbiAgICAgICAgICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJhY2tncm91bmQ1OiB7XG4gICAgICAgIC8vICAgbGlnaHQ6ICcjZGRkZGRkJyxcbiAgICAgICAgLy8gICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBiYWNrZ3JvdW5kRGFyazoge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxNTE1MTUnXG4gICAgICAgIC8vIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL213bS9Qcm9qZWN0cy9zZXF1ZW5jZS12Mi9kb2NzLXYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9td20vUHJvamVjdHMvc2VxdWVuY2UtdjIvZG9jcy12Mi9uYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbXdtL1Byb2plY3RzL3NlcXVlbmNlLXYyL2RvY3MtdjIvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyLCBUb3BOYXYgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgY29uc3QgdG9wTmF2ID0gW1xuICB7IHRleHQ6ICdTb2x1dGlvbnMnLFxuICBpdGVtczogW1xuICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JywgbWF0Y2g6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnIH0sXG4gICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL292ZXJ2aWV3JyB9LFxuICAgIHsgdGV4dDogJ0NvbGxlY3RpYmxlcycsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvMDEtZGVwbG95LWFuLWl0ZW0tY29sbGVjdGlvbicsIG1hdGNoOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzAxLWRlcGxveS1hbi1pdGVtLWNvbGxlY3Rpb24nIH0sXG4gICAgeyB0ZXh0OiAnUGF5bWVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9uZnQtY2hlY2tvdXQnLCBtYXRjaDogJy9zb2x1dGlvbnMvbmZ0LWNoZWNrb3V0JyB9LFxuICAgIHsgdGV4dDogJ0J1aWxkZXIgQ29uc29sZScsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSwgXG4gICAgXVxuICB9XG5dXG59LFxuICB7IFxuICAgIHRleHQ6ICdHdWlkZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdXZWIzIEdhbWUgd2l0aCBXZWJHTCcsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJywgbWF0Y2g6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2ViMyBHYW1lIHdpdGggVW5pdHknLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZScsIG1hdGNoOiAnL2d1aWRlcy91bml0eS1ndWlkZScgfSxcbiAgICAgIHsgdGV4dDogJ0xvb3Rib3hlcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gnLCBtYXRjaDogJy9ndWlkZXMvbG9vdGJveCcgfSxcbiAgICAgIHsgdGV4dDogJ0N1c3RvbSBNYXJrZXRwbGFjZScsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZS1ndWlkZScsIG1hdGNoOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UtZ3VpZGUnIH1cbiAgICBdXG4gIH0sXG4gIHsgXG4gICAgdGV4dDogJ1NES3MnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdVbml0eScsIGxpbms6ICcvc2RrL3VuaXR5LzAxLW92ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VuaXR5LzAxLW92ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnVW5yZWFsJywgbGluazogJy9zZGsvdW5yZWFsLzAxLW92ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VucmVhbC8wMS1vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1R5cGVzY3JpcHQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9vdmVydmlldycsIG1hdGNoOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMS1vdmVydmlldycsIG1hdGNoOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdHbycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL2dvL292ZXJ2aWV3JyB9LFxuICAgICAgLy8geyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnLCBtYXRjaDogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgIC8vIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL3JlYWN0bmF0aXZlJywgbWF0Y2g6ICcvc2RrL3JlYWN0bmF0aXZlJyB9LFxuICAgICAgLy8geyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJywgbWF0Y2g6ICcvc2RrL2lPUycgfVxuICAgIF1cbiAgfSxcblxuICAvLyByZXBsYWNlIGxpbmtzLlxuICB7IFxuICAgIHRleHQ6ICdBUElzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnUmVsYXllciBBUEknLCBsaW5rOiAnL2FwaS9yZWxheWVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnSW5kZXhlciBBUEknLCBsaW5rOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ05vZGUgR2F0ZXdheScsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSxcbiAgICBdXG4gIH0sXG5cbiAgeyBcbiAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgIHsgdGV4dDogJ1Rva2VuIERpcmVjdG9yeScsIGxpbms6ICcvc3VwcG9ydC90b2tlbi1kaXJlY3RvcnknIH0sXG4gICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2VcXCdyZSBoaXJpbmchJywgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgIF1cbiAgfVxuXSBhcyBUb3BOYXZcblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSB7XG4gIC8vIE92ZXJ2aWV3XG4gICcvc29sdXRpb25zJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdXYWxsZXRzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzAyLXF1aWNrc3RhcnQnfSxcbiAgICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnTWFuYWdlIFNlc3Npb25zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvMDMtbWFuYWdlLXNlc3Npb25zJ30sXG4gICAgICAgICAge3RleHQ6ICdVc2UgV2FsbGV0cycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzLzA0LXVzZS13YWxsZXRzJ30sXG4gICAgICAgICAge3RleHQ6ICdWYWxpZGF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvMDUtdmFsaWRhdGlvbid9LFxuICAgICAgICAgIHt0ZXh0OiAnVHJhbnNhY3Rpb24gUmVjZWlwdHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy8wNi10cmFuc2FjdGlvbi1yZWNlaXB0cyd9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAnVW5pdmVyc2FsIFdhbGxldCcsIGNvbGxhcHNlZDogdHJ1ZSwgXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wMi1xdWlja3N0YXJ0J30sXG4gICAgICAgICAge3RleHQ6ICdFeGFtcGxlcycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDEtY29ubmVjdC13YWxsZXQnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDItYXV0aC1hZGRyZXNzJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDMtc2lnbi1tZXNzYWdlJ30sXG4gICAgICAgICAgICB7dGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wNC1zZXNzaW9uLWtleXMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDUtc2VuZC10cmFuc2FjdGlvbid9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDYtc2VuZC1lcmMyMCd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzLzA3LXNlbmQtZXJjNzIxJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTExNTUgKENvbGxlY3RpYmxlKSBUb2tlbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDgtc2VuZC1lcmMxMTU1J30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDktc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8xMC1idWlsZGluZy1iYWNrZW5kcyd9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgICB7dGV4dDogJ1NlcXVlbmNlIEtpdCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wNC1zZXF1ZW5jZS1raXQnfSxcbiAgICAgICAgICB7dGV4dDogJ1N1cHBvcnRlZCBQbGF0Zm9ybXMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDUtcGxhdGZvcm1zJ30sXG4gICAgICAgICAge3RleHQ6ICdGaWF0IE9uLVJhbXBzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzA2LWZpYXQtb24tcmFtcHMnfSxcbiAgICAgICAgICB7dGV4dDogJ0tleSBNYW5hZ2VtZW50JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzA3LWtleS1tYW5hZ2VtZW50J31cbiAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWFya2V0cGxhY2UnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ1doaXRlLWxhYmVsIE1hcmtldHBsYWNlJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL3doaXRlLWxhYmVsLW1hcmtldHBsYWNlJyB9LFxuICAgICAgICB7IHRleHQ6ICdCdWlsZCB5b3VyIEN1c3RvbSBNYXJrZXRwbGFjZScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay8wMS1vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svMDItcXVpY2tzdGFydCd9LFxuICAgICAgICAgIHt0ZXh0OiAnRXhhbXBsZXMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdHZXQgVG9wIE9yZGVycycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svZXhhbXBsZXMvMDMtZ2V0LXRvcC1vcmRlcnMnfSxcbiAgICAgICAgICB7dGV4dDogJ0dldCBPcmRlcmJvb2snLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL2V4YW1wbGVzLzA0LWdldC1vcmRlcmJvb2snfSxcbiAgICAgICAgICB7dGV4dDogJ0dldCBVc2VyIEFjdGl2aXRpZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL2V4YW1wbGVzLzA1LWdldC11c2VyLWFjdGl2aXRpZXMnfSxcbiAgICAgICAgICB7dGV4dDogJ0NyZWF0aW5nIE1hcmtldCBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL2V4YW1wbGVzLzA2LW9yZGVyYm9vay10cmFuc2FjdGlvbnMnfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29sbGVjdGlibGVzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveWFibGUgQ29udHJhY3RzJyAsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSBDb2xsZWN0aWJsZSBDb250cmFjdCcsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvMDEtZGVwbG95LWFuLWl0ZW0tY29sbGVjdGlvbid9LFxuICAgICAgICAgIC8vIHt0ZXh0OiAnTWludCBJbi1HYW1lIEl0ZW1zIGFuZCBBY2hpZXZlbWVudHMgKEVSQzExNTUpJywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDAtbWludC1pdGVtcy1mcm9tLUVSQzExNTUnfSxcbiAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgRGlnaXRhbCBDb2xsZWN0aWJsZXMgKEVSQzcyMSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMi1taW50LWNvbGxlY3RpYmxlcy1mcm9tLUVSQzcyMSd9LFxuICAgICAgICAgIHsgdGV4dDogJ0RlcGxveSBhbiBJbi1HYW1lIEN1cnJlbmN5IChFUkMyMCknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzAyLWRlcGxveS1FUkMyMC1jdXJyZW5jeSd9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnTWV0YWRhdGEnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnTWFuYWdlIE1ldGFkYXRhIGluIEJ1aWxkZXInLGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9tZXRhZGF0YS84MDAtbWFuYWdlLW1ldGFkYXRhLWJ1aWxkZXInIH1cbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICAgICAgLy8geyB0ZXh0OiAnTWludGVyJywgbGluazogJy9zb2x1dGlvbnMvbWludGVyJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnUGF5bWVudHMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnTkZUIENoZWNrb3V0JywgbGluazogJy9zb2x1dGlvbnMvbmZ0LWNoZWNrb3V0JyB9LFxuICAgICAgICB7IHRleHQ6ICdPbnJhbXBzJywgbGluazogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy8wMS1maWF0LW9uLXJhbXBzJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkZXIgQ29uc29sZScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldyd9LFxuICAgICAgICB7dGV4dDogJ0dldCBTdGFydGVkJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nZXR0aW5nLXN0YXJ0ZWQnfSxcbiAgICAgICAge3RleHQ6ICdQcm9qZWN0IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCd9LFxuICAgICAgICB7dGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29udHJhY3RzJ30sXG4gICAgICAgIHt0ZXh0OiAnR2FzIFRhbmsnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2dhcy10YW5rJ30sXG4gICAgICAgIHt0ZXh0OiAnV2FsbGV0IFNES3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3dhbGxldC1zZGtzJ30sXG4gICAgICAgIHt0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQnfSxcbiAgICAgICAge3RleHQ6ICdOb2RlIEdhdGV3YXknLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL25vZGUtZ2F0ZXdheSd9LFxuICAgICAgICB7dGV4dDogJ01hcmtldHBsYWNlcycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbWFya2V0cGxhY2VzJ30sXG4gICAgICAgIHt0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvaW5kZXhlcid9LFxuICAgICAgICB7dGV4dDogJ0FuYWx5dGljcycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvYW5hbHl0aWNzJ30sXG4gICAgICAgIHt0ZXh0OiAnU2V0dGluZ3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3Byb2plY3Qtc2V0dGluZ3MnfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZWNobmljYWwgUmVmZXJlbmNlcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdDaGFpbiBTdXBwb3J0JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydCcgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnRUlQNTE4OSB2cy4gNDMzNycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzLzUxODktNDMzNycgfSxcbiAgICAgICAgeyB0ZXh0OiAnU21hcnQgQ29udHJhY3QgV2FsbGV0cycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdXaHkgc21hcnQgY29udHJhY3Qgd2FsbGV0cz8nLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzLzAxLXdoeScgfSxcbiAgICAgICAgXSB9LFxuICAgICAgICB7IHRleHQ6ICdDb250cmFjdCBJbnRlcm5hbHMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdEZXBsb3ltZW50JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzLzAxLWRlcGxveW1lbnQnfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXF1ZW5jZSB2MScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxLzAxLWRlcGxveSd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgRmFjdG9yeScsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8wMy13YWxsZXQtZmFjdG9yeSd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8wNC13YWxsZXQtY29uZmlndXJhdGlvbid9LFxuICAgICAgICAgICAgLy8ge3RleHQ6ICdUcmFuc2FjdGlvbiBFbmNvZGluZycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8wNy10cmFuc2FjdGlvbi1lbmNvZGluZyd9LFxuICAgICAgICAgICAge3RleHQ6ICdTaWduYXR1cmUgRW5jb2RpbmcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvMDgtc2lnbmF0dXJlLWVuY29kaW5nJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1dhbGxldCBDb250ZXh0JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxLzExLXdhbGxldC1jb250ZXh0J30sXG4gICAgICAgICAgICB7dGV4dDogJ0NvbnRyYWN0IEF1ZGl0cycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8xMi1jb250cmFjdC1hdWRpdHMnfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXF1ZW5jZSB2MicsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyLzAxLWRlcGxveSd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsIGxpbms6IFwiL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjIvMDQtY29uZmlndXJhdGlvblwifSxcbiAgICAgICAgICBdfVxuICAgICAgICBdfSxcbiAgICAgICAgeyB0ZXh0OiAnV2FsbGV0IGFzIGEgU2VydmljZScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtYXMtYS1zZXJ2aWNlL292ZXJ2aWV3J30sXG4gICAgICAgICAgICB7dGV4dDogJ0ludGVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtYXMtYS1zZXJ2aWNlL2ludGVudHMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnRW5jbGF2ZSB2ZXJpZmljYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtYXMtYS1zZXJ2aWNlL2VuY2xhdmUtdmVyaWZpY2F0aW9uJ30sXG4gICAgICAgICAgXSB9XG4gICAgICBdXG4gICAgfSxcbiAgICBcbiAgXSxcblxuICAnL2d1aWRlcyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGQgYSBnYW1lIHdpdGggV2ViR0wnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnUHJvamVjdCBzZXR1cCB3aXRoIHdlYnBhY2snLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMxLXByb2plY3Qtc2V0dXAtd2l0aC13ZWJwYWNrJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgU2VxdWVuY2UgS2l0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMi1pbnRlZ3JhdGUtc2VxdWVuY2Uta2l0JyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgY29sbGVjdGlibGVzIGNvbnRyYWN0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMy1kZXBsb3ktYS1jb2xsZWN0aWJsZXMtY29udHJhY3QnIH0sXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIHJlbW90ZSBtaW50ZXIgJiBtaW50IGluLWdhbWUgYWNoaWV2ZW1lbnQgdG9rZW5zJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNC1kZXBsb3ktYS1yZW1vdGUtbWludGVyLS1taW50LWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICB7IHRleHQ6ICdMZXZlcmFnZSBpdGVtcyBpbi1nYW1lJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNS1sZXZlcmFnZS1pdGVtcy1pbi1nYW1lJyB9LFxuICAgICAgICB7IHRleHQ6ICdCdXJuIGluLWdhbWUgYWNoaWV2ZW1lbnQgdG9rZW5zJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNi1idXJuLWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgSW4tR2FtZSBXYWxsZXQgaW50byBTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM3LW9wdGlvbmFsLWludGVncmF0ZS1pbi1nYW1lLXdhbGxldC1pbnRvLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIG1vYmlsZSBVbml0eSBnYW1lJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0ludGVncmF0ZSBTZXF1ZW5jZUtpdCB3aXRoIFdhYVMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRlZ3JhdGUtc2VxdWVuY2VraXQtd2l0aC13YWFzJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSBjb2xsZWN0aWJsZXMgY29udHJhY3QnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNkZXBsb3ktYS1jb2xsZWN0aWJsZXMtY29udHJhY3QnIH0sXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIHJlbW90ZSBtaW50ZXInLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNkZXBsb3ktYS1yZW1vdGUtbWludGVyJyB9LFxuICAgICAgICB7IHRleHQ6ICdNaW50IGluLWdhbWUgYWNoaWV2ZW1lbnQgdG9rZW5zJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbWludC1pbi1nYW1lLWFjaGlldmVtZW50LXRva2VucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnVybiBpbi1nYW1lIGFjaGlldmVtZW50IHRva2VucycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1cm4taW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0ludGVncmF0ZSBhbiBlbWJlZGRlZCBtYXJrZXRwbGFjZScsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2ludGVncmF0ZS1hbi1lbWJlZGRlZC1tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgcHVyY2hhc2VkIGl0ZW1zIGluLWdhbWUnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNsZXZlcmFnZS1wdXJjaGFzZWQtaXRlbXMtaW4tZ2FtZScgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIGxvb3Rib3ggd2l0aCBBSSBtaW50aW5nJyxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gnXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGQgYSBjdXN0b20gbWFya2V0cGxhY2UnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnTWludGluZycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZS1ndWlkZSMxLW1pbnRpbmcnIH0sXG4gICAgICAgIHsgdGV4dDogJ1dhbGxldCBhdXRoZW50aWNhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZS1ndWlkZSMyLXdhbGxldC1hdXRoZW50aWNhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnQmxvY2tjaGFpbiBxdWVyaWVzJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlLWd1aWRlIzMtYmxvY2tjaGFpbi1xdWVyaWVzJyB9LFxuICAgICAgICB7IHRleHQ6ICdNdWx0aS1XYWxsZXQgdHlwZXMnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UtZ3VpZGUjNC1tdWx0aS13YWxsZXQtdHlwZXMnIH0sXG4gICAgICAgIHsgdGV4dDogJ1JlcXVlc3QgY3JlYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UtZ3VpZGUjNS1yZXF1ZXN0LWNyZWF0aW9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdPcmRlciBhY2NlcHRpbmcnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UtZ3VpZGUjNi1vcmRlci1hY2NlcHRpbmcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0ludGVncmF0ZSBJbi1HYW1lIFdhbGxldCBpbnRvIFNlcXVlbmNlIEtpdCcsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZS1ndWlkZSM3LW9wdGlvbmFsLWludGVncmF0ZS1pbi1nYW1lLXdhbGxldC1pbnRvLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdJbnRlZ3JhdGUgdG9rZW4gcmV3YXJkcyBpbnRvIHlvdXIgRGlzY29yZCBzZXJ2ZXInLFxuICAgIC8vICAgbGluazogJy9ndWlkZXMvZGlzY29yZCdcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZW1wbGF0ZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0IERlbW8nLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtZW1iZWRkZWQtd2FsbGV0JyB9LFxuICAgICAgICB7IHRleHQ6ICdCdWlsZCBhIEJhY2tlbmQgVHJhbnNhY3Rpb24gTWFuYWdlcicsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy8wMi1idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInIH0sXG4gICAgICAgIHsgdGV4dDogJ1NlcnZlcmxlc3MgTWludGluZyBvZiBDb2xsZWN0aWJsZXMnLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvMDMtbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcycgfVxuICAgICAgICAvLyB7IHRleHQ6ICdNYXJrZXRwbGFjZSBBUEkgRGVtbycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy90ZW1wbGF0ZS1tYXJrZXRwbGFjZS1hcGknIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG5cbiAgLy8gU0RLc1xuICAnL3Nkayc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2FtZSBFbmdpbmUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVW5yZWFsJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5yZWFsLzAxLW92ZXJ2aWV3JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VucmVhbC8wMi1pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2V0dXAnLCBsaW5rOiAnL3Nkay91bnJlYWwvMDMtc2V0dXAnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvMDQtYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQVBJIEludGVncmF0aW9uJywgbGluazogJy9zZGsvdW5yZWFsLzA1LWFwaS1pbnRlZ3JhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQYWNrYWdpbmcnLCBsaW5rOiAnL3Nkay91bnJlYWwvMDYtcGFja2FnaW5nJyB9XG4gICAgICAgICAgXSBcbiAgICAgICAgfSxcblxuICAgICAgICB7IHRleHQ6ICdVbml0eScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3VuaXR5LzAxLW92ZXJ2aWV3JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5LzAyLWluc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VuaXR5LzAzLXNldHVwJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0F1dGhlbnRpY2F0aW9uJywgbGluazogJy9zZGsvdW5pdHkvMDQtYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnV3JpdGUgdG8gYmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5LzA1LXdyaXRlLXRvLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVhZCBmcm9tIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS8wNi1yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTaWduIE1lc3NhZ2VzJywgbGluazogJy9zZGsvdW5pdHkvMDctc2lnbi1tZXNzYWdlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdEZXBsb3kgQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvMDgtZGVwbG95LWNvbnRyYWN0cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdXYWxsZXQgVUknLCBsaW5rOiAnL3Nkay91bml0eS8wOS13YWxsZXQtdWknIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQWR2YW5jZWQnLCBjb2xsYXBzZWQ6IHRydWUsICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDEtaW50cm9kdWN0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzAyLXdhbGxldHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDbGllbnRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDMtY2xpZW50cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1RyYW5zZmVycycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzA0LXRyYW5zZmVycycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzA1LWNvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VucycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkLzA2LXRva2VucycgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdNb2JpbGUnLFxuICAgIC8vICAgaXRlbXM6IFtcbiAgICAvLyAgICAgeyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnIH0sXG4gICAgLy8gICAgIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycgfSxcbiAgICAvLyAgICAgeyB0ZXh0OiAnUmVhY3QgTmF0aXZlJywgbGluazogJy9zZGsvcmVhY3QtbmF0aXZlJyB9XG4gICAgLy8gICBdXG4gICAgLy8gfSxcblxuICAgIHtcbiAgICAgIHRleHQ6ICdXZWIzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1NlcXVlbmNlS2l0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzAxLW92ZXJ2aWV3JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDItZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDMtY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDaGVja291dCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wNC1jaGVja291dCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDdXN0b20gQ29ubmVjdG9ycycsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wNS1jdXN0b20tY29ubmVjdG9ycycgfVxuICAgICAgICBdXG4gICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAnVHlwZVNjcmlwdCcsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvb3ZlcnZpZXcnfSxcbiAgICAgICAgICB7dGV4dDogJ0Nvbm5lY3QgV2FsbGV0JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDEtY29ubmVjdC13YWxsZXQnfSxcbiAgICAgICAgICB7dGV4dDogJ0F1dGhlbnRpY2F0ZSBVc2VycyB3aXRoIE1lc3NhZ2UgU2lnbmF0dXJlJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDItYXV0aC1hZGRyZXNzJ30sXG4gICAgICAgICAge3RleHQ6ICdTaWduaW5nICYgVmVyaWZ5aW5nIE1lc3NhZ2VzJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDMtc2lnbi1tZXNzYWdlJ30sXG4gICAgICAgICAge3RleHQ6ICdOby13YWxsZXQgY29uZmlybWF0aW9uIHNpZ25hdHVyZXMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wNC1zZXNzaW9uLWtleXMnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDUtc2VuZC10cmFuc2FjdGlvbid9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtMjAgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDYtc2VuZC1lcmMyMCd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtNzIxIChORlQpIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzA3LXNlbmQtZXJjNzIxJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDgtc2VuZC1lcmMxMTU1J30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDktc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnfSxcbiAgICAgICAgICB7dGV4dDogJ0J1aWxkaW5nIEJhY2tlbmRzIHdpdGggU2VxdWVuY2UnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8xMC1idWlsZGluZy1iYWNrZW5kcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IENvbm5lY3RvcnMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzLzAxLW92ZXJ2aWV3J30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlcXVlbmNlS2l0JywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzAxLW92ZXJ2aWV3J30sXG4gICAgICAgICAgICB7dGV4dDogJ1dhZ21pJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzLzAzLXdhZ21pJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1JhaW5ib3dLaXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvMDQtcmFpbmJvdy1raXQnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2ViMyBPbmJvYXJkJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzLzA1LXdlYjMtb25ib2FyZCd9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzIFJlYWN0IFY2JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzLzA2LXdlYjMtcmVhY3QtdjYnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2ViM01vZGFsJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzLzA3LXdlYjNtb2RhbCd9LFxuICAgICAgICAgICAge3RleHQ6ICdGQVEnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvMDgtRkFRJ30sXG4gICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAnR28nLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3J30sXVxuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NvbW1vbiBRdWVzdGlvbnMnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnSG93IGRvIEkgZG8gc2lnbmF0dXJlIHZhbGlkYXRpb24/JywgbGluazogJy93YWxsZXQvc2lnLXZhbGlkYXRpb24nIH1cbiAgICAgICAgLy8gLi4uXG4gICAgICBdXG4gICAgfSxcbiAgXSxcblxuICAvLyBhcGlzXG4gICcvYXBpJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdSZWxheWVyJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL3JlbGF5ZXIvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvYXBpL3JlbGF5ZXIvaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdGZXRjaCBGZWUgT3B0aW9ucycsIGxpbms6ICcvYXBpL3JlbGF5ZXIvZXhhbXBsZXMvZmV0Y2gtZmVlLW9wdGlvbnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2VuZCBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL2FwaS9yZWxheWVyL2V4YW1wbGVzL3NlbmQtdHJhbnNhY3Rpb25zJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0ZldGNoIFRyYW5zYWN0aW9uIFJlY2VpcHRzJywgbGluazogJy9hcGkvcmVsYXllci9leGFtcGxlcy9mZXRjaC10cmFuc2FjdGlvbi1yZWNlaXB0cycgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdJbmRleGVyJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvaW5kZXhlci9vdmVydmlldyd9LFxuICAgICAgICB7dGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvYXBpL2luZGV4ZXIvaW5zdGFsbGF0aW9uJ30sXG4gICAgICAgIHt0ZXh0OiAnRXhhbXBsZXMnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogW1xuICAgICAgICB7dGV4dDogJ0ZldGNoIFRva2VucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvZmV0Y2gtdG9rZW5zJ30sXG4gICAgICAgIHt0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeScsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhY3Rpb24taGlzdG9yeSd9LFxuICAgICAgICB7dGV4dDogJ1VuaXF1ZSBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3VuaXF1ZS10b2tlbnMnfSxcbiAgICAgICAge3RleHQ6ICdUcmFuc2FjdGlvbiBIaXN0b3J5IFRva2VuIENvbnRyYWN0JywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy90cmFuc2F0aW9uLWhpc3RvcnktdG9rZW4tY29udHJhY3QnfSxcbiAgICAgICAge3RleHQ6ICdOYXRpdmUgTmV0d29yayBCYWxhbmNlJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9uYXRpdmUtbmV0d29yay1iYWxhbmNlJ30sXG4gICAgICAgIHt0ZXh0OiAnTWV0YWRhdGEgVGlwcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvbWV0YWRhdGEtdGlwcyd9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01ldGFkYXRhJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JyB9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVG9rZW4gTWV0YWRhdGEnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS90b2tlbi1tZXRhZGF0YScgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29udHJhY3QgTWV0YWRhdGEnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9jb250cmFjdC1tZXRhZGF0YScgfSxcbiAgICAgICAgeyB0ZXh0OiAnUkVTVCBBUEknLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9yZXN0LWFwaScgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01hcmtldHBsYWNlJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL292ZXJ2aWV3JyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdTY2hlbWEnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9zY2hlbWEnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2FwaScgfSxcbiAgICAgICAge3RleHQ6ICdFeGFtcGxlcycsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ0dldCBUb3AgT3JkZXJzJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9leGFtcGxlcy8wMy1nZXQtdG9wLW9yZGVycyd9LFxuICAgICAgICAgICAge3RleHQ6ICdHZXQgT3JkZXJib29rJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9leGFtcGxlcy8wNC1nZXQtb3JkZXJib29rJ30sXG4gICAgICAgICAgICB7dGV4dDogJ0dldCBVc2VyIEFjdGl2aXRpZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL2V4YW1wbGVzLzA1LWdldC11c2VyLWFjdGl2aXRpZXMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnQ3JlYXRpbmcgTWFya2V0IFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svZXhhbXBsZXMvMDYtb3JkZXJib29rLXRyYW5zYWN0aW9ucyd9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTm9kZSBHYXRld2F5JyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSAgICAgIF1cbiAgICB9LFxuICBdLFxuICBcbiAgLy8gU3VwcG9ydFxuICAnL3N1cHBvcnQnOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2VcXCdyZSBoaXJpbmchJywgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgIF1cbiAgfSxcblxuXG5cblxuXG59IGFzIFNpZGViYXJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjs7O0FDRXRCLElBQU0sU0FBUztBQUFBLEVBQ3BCO0FBQUEsSUFBRSxNQUFNO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLCtCQUErQixPQUFPLDhCQUE4QjtBQUFBLE1BQzdGLEVBQUUsTUFBTSxlQUFlLE1BQU0sb0NBQW9DLE9BQU8sbUNBQW1DO0FBQUEsTUFDM0csRUFBRSxNQUFNLGdCQUFnQixNQUFNLGtFQUFrRSxPQUFPLGlFQUFpRTtBQUFBLE1BQ3hLLEVBQUUsTUFBTSxZQUFZLE1BQU0sMkJBQTJCLE9BQU8sMEJBQTBCO0FBQUEsTUFDdEY7QUFBQSxRQUFFLE1BQU07QUFBQSxRQUFtQixNQUFNO0FBQUEsUUFBK0IsT0FBTztBQUFBLFFBQStCLE9BQU87QUFBQSxVQUMzRyxFQUFFLE1BQU0sWUFBWSxNQUFNLCtCQUErQixPQUFPLDhCQUE4QjtBQUFBLFFBQ2hHO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNBO0FBQUEsRUFDRTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHVCQUF1QixPQUFPLHNCQUFzQjtBQUFBLE1BQzFGLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSx1QkFBdUIsT0FBTyxzQkFBc0I7QUFBQSxNQUMxRixFQUFFLE1BQU0sYUFBYSxNQUFNLG1CQUFtQixPQUFPLGtCQUFrQjtBQUFBLE1BQ3ZFLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxvQ0FBb0MsT0FBTyxtQ0FBbUM7QUFBQSxJQUNwSDtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sU0FBUyxNQUFNLDBCQUEwQixPQUFPLHlCQUF5QjtBQUFBLE1BQ2pGLEVBQUUsTUFBTSxVQUFVLE1BQU0sMkJBQTJCLE9BQU8sMEJBQTBCO0FBQUEsTUFDcEYsRUFBRSxNQUFNLGNBQWMsTUFBTSxzQ0FBc0MsT0FBTyxxQ0FBcUM7QUFBQSxNQUM5RyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0saUNBQWlDLE9BQU8sZ0NBQWdDO0FBQUEsTUFDdEcsRUFBRSxNQUFNLE1BQU0sTUFBTSxvQkFBb0IsT0FBTyxtQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlwRTtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxlQUFlLE1BQU0sd0JBQXdCO0FBQUEsTUFDckQsRUFBRSxNQUFNLGVBQWUsTUFBTSx3QkFBd0I7QUFBQSxNQUNyRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0seUJBQXlCO0FBQUEsTUFDdkQsRUFBRSxNQUFNLG1CQUFtQixNQUFNLDRCQUE0QjtBQUFBLE1BQzdELEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxvQkFBb0I7QUFBQSxJQUNwRDtBQUFBLEVBQ0Y7QUFBQSxFQUVBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLFdBQVc7QUFBQSxNQUNwQyxFQUFFLE1BQU0sYUFBYSxNQUFNLHdDQUF3QztBQUFBLE1BQ25FLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSwyQkFBMkI7QUFBQSxNQUM1RCxFQUFFLE1BQU0sT0FBTyxNQUFNLCtCQUErQjtBQUFBLE1BQ3BELEVBQUUsTUFBTSxXQUFXLE1BQU0sOEJBQThCO0FBQUEsTUFDdkQsRUFBRSxNQUFNLGlCQUFrQixNQUFNLDZCQUE2QjtBQUFBLE1BQzdELEVBQUUsTUFBTSxjQUFjLE1BQU0sK0JBQStCO0FBQUEsSUFDN0Q7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLFVBQVU7QUFBQTtBQUFBLEVBRXJCLGNBQWM7QUFBQSxJQUNaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLDhCQUE4QjtBQUFBLFFBQ3hEO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBbUIsV0FBVztBQUFBLFVBQU0sT0FBTztBQUFBLFlBQ2pELEVBQUMsTUFBTSxZQUFZLE1BQU0saURBQWdEO0FBQUEsWUFDekUsRUFBQyxNQUFNLGNBQWMsTUFBTSxtREFBa0Q7QUFBQSxZQUM3RTtBQUFBLGNBQUMsTUFBTTtBQUFBLGNBQVksV0FBVztBQUFBLGNBQU0sT0FBTztBQUFBLGdCQUMzQyxFQUFDLE1BQU0sbUJBQW1CLE1BQU0saUVBQWdFO0FBQUEsZ0JBQ2hHLEVBQUMsTUFBTSxlQUFlLE1BQU0sNkRBQTREO0FBQUEsZ0JBQ3hGLEVBQUMsTUFBTSxjQUFjLE1BQU0sNERBQTJEO0FBQUEsZ0JBQ3RGLEVBQUMsTUFBTSx3QkFBd0IsTUFBTSxzRUFBcUU7QUFBQSxjQUN4RztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0U7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFvQixXQUFXO0FBQUEsVUFDdkMsT0FBTztBQUFBLFlBQ0wsRUFBQyxNQUFNLFlBQVksTUFBTSxrREFBaUQ7QUFBQSxZQUMxRSxFQUFDLE1BQU0sY0FBYyxNQUFNLG9EQUFtRDtBQUFBLFlBQzlFO0FBQUEsY0FBQyxNQUFNO0FBQUEsY0FBWSxXQUFXO0FBQUEsY0FBTSxPQUFPO0FBQUEsZ0JBQ3pDLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSxpRUFBZ0U7QUFBQSxnQkFDL0YsRUFBQyxNQUFNLDZDQUE2QyxNQUFNLCtEQUE4RDtBQUFBLGdCQUN4SCxFQUFDLE1BQU0sZ0NBQWdDLE1BQU0sK0RBQThEO0FBQUEsZ0JBQzNHLEVBQUMsTUFBTSxxQ0FBcUMsTUFBTSwrREFBOEQ7QUFBQSxnQkFDaEgsRUFBQyxNQUFNLHdCQUF3QixNQUFNLG1FQUFrRTtBQUFBLGdCQUN2RyxFQUFDLE1BQU0seUJBQXlCLE1BQU0sNkRBQTREO0FBQUEsZ0JBQ2xHLEVBQUMsTUFBTSxnQ0FBZ0MsTUFBTSw4REFBNkQ7QUFBQSxnQkFDMUcsRUFBQyxNQUFNLHlDQUF5QyxNQUFNLCtEQUE4RDtBQUFBLGdCQUNwSCxFQUFDLE1BQU0sbUNBQW1DLE1BQU0sMEVBQXlFO0FBQUEsZ0JBQ3pILEVBQUMsTUFBTSxtQ0FBbUMsTUFBTSxvRUFBbUU7QUFBQSxjQUNySDtBQUFBLFlBQ0Y7QUFBQSxZQUNFLEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSxzREFBcUQ7QUFBQSxZQUNsRixFQUFDLE1BQU0sdUJBQXVCLE1BQU0sbURBQWtEO0FBQUEsWUFDdEYsRUFBQyxNQUFNLGlCQUFpQixNQUFNLHVEQUFzRDtBQUFBLFlBQ3BGLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSx3REFBdUQ7QUFBQSxVQUN4RjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQTtBQUFBLE1BRU4sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSxtQ0FBbUM7QUFBQSxRQUM3RCxFQUFFLE1BQU0sMkJBQTJCLE1BQU0sa0RBQWtEO0FBQUEsUUFDM0Y7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFpQyxXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDL0QsRUFBQyxNQUFNLFlBQVksTUFBTSxnREFBK0M7QUFBQSxZQUN4RSxFQUFDLE1BQU0sY0FBYyxNQUFNLGtEQUFpRDtBQUFBLFlBQzVFO0FBQUEsY0FBQyxNQUFNO0FBQUEsY0FBWSxXQUFXO0FBQUEsY0FBTSxPQUFPO0FBQUEsZ0JBQzNDLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSwrREFBOEQ7QUFBQSxnQkFDN0YsRUFBQyxNQUFNLGlCQUFpQixNQUFNLDhEQUE2RDtBQUFBLGdCQUMzRixFQUFDLE1BQU0sdUJBQXVCLE1BQU0sb0VBQW1FO0FBQUEsZ0JBQ3ZHLEVBQUMsTUFBTSxnQ0FBZ0MsTUFBTSx1RUFBc0U7QUFBQSxjQUNqSDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUF5QixXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDdkQsRUFBRSxNQUFNLGlDQUFpQyxNQUFNLGlFQUFnRTtBQUFBO0FBQUE7QUFBQSxZQUcvRyxFQUFFLE1BQU0sc0NBQXNDLE1BQU0sNkRBQTREO0FBQUEsVUFDbEg7QUFBQSxRQUNGO0FBQUEsUUFDRTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQVksV0FBVztBQUFBLFVBQU0sT0FBTztBQUFBLFlBQzFDLEVBQUUsTUFBTSw4QkFBNkIsTUFBTSwrREFBK0Q7QUFBQSxVQUM1RztBQUFBLFFBQ0Y7QUFBQTtBQUFBLE1BRUE7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLGdCQUFnQixNQUFNLDBCQUEwQjtBQUFBLFFBQ3hELEVBQUUsTUFBTSxXQUFXLE1BQU0sK0NBQStDO0FBQUEsTUFDMUU7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBQyxNQUFNLFlBQVksTUFBTSw4QkFBNkI7QUFBQSxRQUN0RCxFQUFDLE1BQU0sZUFBZSxNQUFNLHFDQUFvQztBQUFBLFFBQ2hFLEVBQUMsTUFBTSxzQkFBc0IsTUFBTSx3Q0FBdUM7QUFBQSxRQUMxRSxFQUFDLE1BQU0sYUFBYSxNQUFNLCtCQUE4QjtBQUFBLFFBQ3hELEVBQUMsTUFBTSxZQUFZLE1BQU0sOEJBQTZCO0FBQUEsUUFDdEQsRUFBQyxNQUFNLGVBQWUsTUFBTSxpQ0FBZ0M7QUFBQSxRQUM1RCxFQUFDLE1BQU0sbUJBQW1CLE1BQU0scUNBQW9DO0FBQUEsUUFDcEUsRUFBQyxNQUFNLGdCQUFnQixNQUFNLGtDQUFpQztBQUFBLFFBQzlELEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSxrQ0FBaUM7QUFBQSxRQUM5RCxFQUFDLE1BQU0sV0FBVyxNQUFNLDZCQUE0QjtBQUFBLFFBQ3BELEVBQUMsTUFBTSxhQUFhLE1BQU0sK0JBQThCO0FBQUEsUUFDeEQsRUFBQyxNQUFNLFlBQVksTUFBTSxzQ0FBcUM7QUFBQSxNQUNoRTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0saUJBQWlCLE1BQU0sZ0RBQWdEO0FBQUE7QUFBQSxRQUUvRSxFQUFFLE1BQU0sMEJBQTBCLFdBQVcsTUFBTSxPQUFPO0FBQUEsVUFDeEQsRUFBRSxNQUFNLCtCQUErQixNQUFNLDBEQUEwRDtBQUFBLFFBQ3pHLEVBQUU7QUFBQSxRQUNGLEVBQUUsTUFBTSxzQkFBc0IsV0FBVyxNQUFNLE9BQU87QUFBQSxVQUNwRCxFQUFDLE1BQU0sY0FBYyxNQUFNLDBEQUF5RDtBQUFBLFVBQ3BGLEVBQUUsTUFBTSxlQUFlLFdBQVcsTUFBTSxPQUFPO0FBQUEsWUFDN0MsRUFBQyxNQUFNLFVBQVUsTUFBTSx5REFBd0Q7QUFBQSxZQUMvRSxFQUFDLE1BQU0sa0JBQWtCLE1BQU0saUVBQWdFO0FBQUEsWUFDL0YsRUFBQyxNQUFNLHdCQUF3QixNQUFNLHVFQUFzRTtBQUFBO0FBQUEsWUFFM0csRUFBQyxNQUFNLHNCQUFzQixNQUFNLHFFQUFvRTtBQUFBLFlBQ3ZHLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSxpRUFBZ0U7QUFBQSxZQUMvRixFQUFDLE1BQU0sbUJBQW1CLE1BQU0sa0VBQWlFO0FBQUEsVUFDbkcsRUFBQztBQUFBLFVBQ0QsRUFBRSxNQUFNLGVBQWUsV0FBVyxNQUFNLE9BQU87QUFBQSxZQUM3QyxFQUFDLE1BQU0sVUFBVSxNQUFNLHlEQUF3RDtBQUFBLFlBQy9FLEVBQUMsTUFBTSx3QkFBd0IsTUFBTSxnRUFBK0Q7QUFBQSxVQUN0RyxFQUFDO0FBQUEsUUFDSCxFQUFDO0FBQUEsUUFDRCxFQUFFLE1BQU0sdUJBQXVCLFdBQVcsTUFBTSxPQUFPO0FBQUEsVUFDbkQsRUFBQyxNQUFNLFlBQVksTUFBTSwrREFBOEQ7QUFBQSxVQUN2RixFQUFDLE1BQU0sV0FBVyxNQUFNLDhEQUE2RDtBQUFBLFVBQ3JGLEVBQUMsTUFBTSx3QkFBd0IsTUFBTSwyRUFBMEU7QUFBQSxRQUNqSCxFQUFFO0FBQUEsTUFDTjtBQUFBLElBQ0Y7QUFBQSxFQUVGO0FBQUEsRUFFQSxXQUFXO0FBQUEsSUFDVDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLDhCQUE4QixNQUFNLG1EQUFtRDtBQUFBLFFBQy9GLEVBQUUsTUFBTSwwQkFBMEIsTUFBTSwrQ0FBK0M7QUFBQSxRQUN2RixFQUFFLE1BQU0sZ0NBQWdDLE1BQU0sdURBQXVEO0FBQUEsUUFDckcsRUFBRSxNQUFNLDREQUE0RCxNQUFNLGdGQUFnRjtBQUFBLFFBQzFKLEVBQUUsTUFBTSwwQkFBMEIsTUFBTSwrQ0FBK0M7QUFBQSxRQUN2RixFQUFFLE1BQU0sbUNBQW1DLE1BQU0sd0RBQXdEO0FBQUEsUUFDekcsRUFBRSxNQUFNLDhDQUE4QyxNQUFNLDRFQUE0RTtBQUFBLE1BQzFJO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxtQ0FBbUMsTUFBTSxzREFBc0Q7QUFBQSxRQUN2RyxFQUFFLE1BQU0sa0NBQWtDLE1BQU0scURBQXFEO0FBQUEsUUFDckcsRUFBRSxNQUFNLDBCQUEwQixNQUFNLDZDQUE2QztBQUFBLFFBQ3JGLEVBQUUsTUFBTSxtQ0FBbUMsTUFBTSxzREFBc0Q7QUFBQSxRQUN2RyxFQUFFLE1BQU0sbUNBQW1DLE1BQU0sc0RBQXNEO0FBQUEsUUFDdkcsRUFBRSxNQUFNLHFDQUFxQyxNQUFNLHdEQUF3RDtBQUFBLFFBQzNHLEVBQUUsTUFBTSxvQ0FBb0MsTUFBTSx1REFBdUQ7QUFBQSxNQUMzRztBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxXQUFXLE1BQU0sNkNBQTZDO0FBQUEsUUFDdEUsRUFBRSxNQUFNLHlCQUF5QixNQUFNLDJEQUEyRDtBQUFBLFFBQ2xHLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSx3REFBd0Q7QUFBQSxRQUM1RixFQUFFLE1BQU0sc0JBQXNCLE1BQU0sd0RBQXdEO0FBQUEsUUFDNUYsRUFBRSxNQUFNLG9CQUFvQixNQUFNLHNEQUFzRDtBQUFBLFFBQ3hGLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxxREFBcUQ7QUFBQSxRQUN0RixFQUFFLE1BQU0sOENBQThDLE1BQU0seUZBQXlGO0FBQUEsTUFDdko7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sNkNBQTZDO0FBQUEsUUFDbkYsRUFBRSxNQUFNLHVDQUF1QyxNQUFNLGdEQUFnRDtBQUFBLFFBQ3JHLEVBQUUsTUFBTSxzQ0FBc0MsTUFBTSxvREFBb0Q7QUFBQTtBQUFBLE1BRTFHO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0EsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQTtBQUFBLE1BRU4sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFVLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUN4QyxFQUFFLE1BQU0sWUFBWSxNQUFNLDBCQUEwQjtBQUFBLFlBQ3BELEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSw4QkFBOEI7QUFBQSxZQUM1RCxFQUFFLE1BQU0sU0FBUyxNQUFNLHVCQUF1QjtBQUFBLFlBQzlDLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxnQ0FBZ0M7QUFBQSxZQUNoRSxFQUFFLE1BQU0sbUJBQW1CLE1BQU0saUNBQWlDO0FBQUEsWUFDbEUsRUFBRSxNQUFNLGFBQWEsTUFBTSwyQkFBMkI7QUFBQSxVQUN0RDtBQUFBLFFBQ0Y7QUFBQSxRQUVBO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBUyxXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDdkMsRUFBRSxNQUFNLFlBQVksTUFBTSx5QkFBeUI7QUFBQSxZQUNuRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sNkJBQTZCO0FBQUEsWUFDM0QsRUFBRSxNQUFNLFNBQVMsTUFBTSxzQkFBc0I7QUFBQSxZQUM3QyxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sK0JBQStCO0FBQUEsWUFDL0QsRUFBRSxNQUFNLHVCQUF1QixNQUFNLG9DQUFvQztBQUFBLFlBQ3pFLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxQ0FBcUM7QUFBQSxZQUMzRSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sOEJBQThCO0FBQUEsWUFDN0QsRUFBRSxNQUFNLG9CQUFvQixNQUFNLGlDQUFpQztBQUFBLFlBQ25FLEVBQUUsTUFBTSxhQUFhLE1BQU0sMEJBQTBCO0FBQUEsWUFDckQ7QUFBQSxjQUFFLE1BQU07QUFBQSxjQUFZLFdBQVc7QUFBQSxjQUFPLE9BQU87QUFBQSxnQkFDM0MsRUFBRSxNQUFNLGdCQUFnQixNQUFNLHNDQUFzQztBQUFBLGdCQUNwRSxFQUFFLE1BQU0sV0FBVyxNQUFNLGlDQUFpQztBQUFBLGdCQUMxRCxFQUFFLE1BQU0sV0FBVyxNQUFNLGlDQUFpQztBQUFBLGdCQUMxRCxFQUFFLE1BQU0sYUFBYSxNQUFNLG1DQUFtQztBQUFBLGdCQUM5RCxFQUFFLE1BQU0sYUFBYSxNQUFNLG1DQUFtQztBQUFBLGdCQUM5RCxFQUFFLE1BQU0sVUFBVSxNQUFNLGdDQUFnQztBQUFBLGNBQ3ZEO0FBQUEsWUFDRjtBQUFBLFVBQ0Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFVQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFlLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUM3QyxFQUFFLE1BQU0sWUFBWSxNQUFNLGdDQUFnQztBQUFBLFlBQzFELEVBQUUsTUFBTSxjQUFjLE1BQU0sdUNBQXVDO0FBQUEsWUFDbkUsRUFBRSxNQUFNLGlCQUFpQixNQUFNLHFDQUFxQztBQUFBLFlBQ3BFLEVBQUUsTUFBTSxZQUFZLE1BQU0sZ0NBQWdDO0FBQUEsWUFDMUQsRUFBRSxNQUFNLHFCQUFxQixNQUFNLHlDQUF5QztBQUFBLFVBQzlFO0FBQUEsUUFDRDtBQUFBLFFBQ0M7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUFjLFdBQVc7QUFBQSxVQUFNLE9BQU87QUFBQSxZQUM1QyxFQUFDLE1BQU0sWUFBWSxNQUFNLHFDQUFvQztBQUFBLFlBQzdELEVBQUMsTUFBTSxrQkFBa0IsTUFBTSw4Q0FBNkM7QUFBQSxZQUM1RSxFQUFDLE1BQU0sNkNBQTZDLE1BQU0sNENBQTJDO0FBQUEsWUFDckcsRUFBQyxNQUFNLGdDQUFnQyxNQUFNLDRDQUEyQztBQUFBLFlBQ3hGLEVBQUMsTUFBTSxxQ0FBcUMsTUFBTSw0Q0FBMkM7QUFBQSxZQUM3RixFQUFDLE1BQU0sd0JBQXdCLE1BQU0sZ0RBQStDO0FBQUEsWUFDcEYsRUFBQyxNQUFNLHlCQUF5QixNQUFNLDBDQUF5QztBQUFBLFlBQy9FLEVBQUMsTUFBTSxnQ0FBZ0MsTUFBTSwyQ0FBMEM7QUFBQSxZQUN2RixFQUFDLE1BQU0seUNBQXlDLE1BQU0sNENBQTJDO0FBQUEsWUFDakcsRUFBQyxNQUFNLG1DQUFtQyxNQUFNLHVEQUFzRDtBQUFBLFlBQ3RHLEVBQUMsTUFBTSxtQ0FBbUMsTUFBTSxpREFBZ0Q7QUFBQSxZQUNoRztBQUFBLGNBQUMsTUFBTTtBQUFBLGNBQXFCLFdBQVc7QUFBQSxjQUFNLE9BQU87QUFBQSxnQkFDbEQsRUFBQyxNQUFNLFlBQVksTUFBTSx5Q0FBd0M7QUFBQSxnQkFDakUsRUFBQyxNQUFNLGVBQWUsTUFBTSxnQ0FBK0I7QUFBQSxnQkFDM0QsRUFBQyxNQUFNLFNBQVMsTUFBTSxzQ0FBcUM7QUFBQSxnQkFDM0QsRUFBQyxNQUFNLGNBQWMsTUFBTSw0Q0FBMkM7QUFBQSxnQkFDdEUsRUFBQyxNQUFNLGdCQUFnQixNQUFNLDZDQUE0QztBQUFBLGdCQUN6RSxFQUFDLE1BQU0saUJBQWlCLE1BQU0sOENBQTZDO0FBQUEsZ0JBQzNFLEVBQUMsTUFBTSxhQUFhLE1BQU0sMENBQXlDO0FBQUEsZ0JBQ25FLEVBQUMsTUFBTSxPQUFPLE1BQU0sb0NBQW1DO0FBQUEsY0FDdEQ7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNFO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBTSxXQUFXO0FBQUEsVUFBTSxPQUFPO0FBQUEsWUFDcEMsRUFBQyxNQUFNLFlBQVksTUFBTSxtQkFBa0I7QUFBQSxVQUFFO0FBQUEsUUFFL0M7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxxQ0FBcUMsTUFBTSx5QkFBeUI7QUFBQTtBQUFBLE1BRTlFO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0EsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sd0JBQXdCO0FBQUEsUUFDbEQsRUFBRSxNQUFNLGdCQUFnQixNQUFNLDRCQUE0QjtBQUFBLFFBQzFEO0FBQUEsVUFBQyxNQUFNO0FBQUEsVUFBWSxXQUFXO0FBQUEsVUFBTyxPQUFPO0FBQUEsWUFDMUMsRUFBRSxNQUFNLHFCQUFxQixNQUFNLDBDQUEwQztBQUFBLFlBQzdFLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwwQ0FBMEM7QUFBQSxZQUM3RSxFQUFFLE1BQU0sOEJBQThCLE1BQU0sbURBQW1EO0FBQUEsVUFDL0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFDLE1BQU0sWUFBWSxNQUFNLHdCQUF1QjtBQUFBLFFBQ2hELEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSw0QkFBMkI7QUFBQSxRQUN4RDtBQUFBLFVBQUMsTUFBTTtBQUFBLFVBQVksV0FBVztBQUFBLFVBQU8sT0FBTztBQUFBLFlBQzVDLEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSxxQ0FBb0M7QUFBQSxZQUNqRSxFQUFDLE1BQU0sdUJBQXVCLE1BQU0sNENBQTJDO0FBQUEsWUFDL0UsRUFBQyxNQUFNLGlCQUFpQixNQUFNLHNDQUFxQztBQUFBLFlBQ25FLEVBQUMsTUFBTSxzQ0FBc0MsTUFBTSwwREFBeUQ7QUFBQSxZQUM1RyxFQUFDLE1BQU0sMEJBQTBCLE1BQU0sK0NBQThDO0FBQUEsWUFDckYsRUFBQyxNQUFNLGlCQUFpQixNQUFNLDZCQUE0QjtBQUFBLFVBQ3hEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSx5QkFBeUI7QUFBQSxRQUNuRDtBQUFBLFVBQUMsTUFBTTtBQUFBLFVBQVksV0FBVztBQUFBLFVBQU8sT0FBTztBQUFBLFlBQzVDLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSwrQkFBK0I7QUFBQSxZQUMvRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sa0NBQWtDO0FBQUEsWUFDckUsRUFBRSxNQUFNLFlBQVksTUFBTSx5QkFBeUI7QUFBQSxVQUNqRDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sNEJBQTRCO0FBQUE7QUFBQTtBQUFBLFFBR3REO0FBQUEsVUFBQyxNQUFNO0FBQUEsVUFBWSxXQUFXO0FBQUEsVUFBTyxPQUFPO0FBQUEsWUFDeEMsRUFBQyxNQUFNLGtCQUFrQixNQUFNLCtEQUE4RDtBQUFBLFlBQzdGLEVBQUMsTUFBTSxpQkFBaUIsTUFBTSw4REFBNkQ7QUFBQSxZQUMzRixFQUFDLE1BQU0sdUJBQXVCLE1BQU0sb0VBQW1FO0FBQUEsWUFDdkcsRUFBQyxNQUFNLGdDQUFnQyxNQUFNLHVFQUFzRTtBQUFBLFVBQ3ZIO0FBQUEsUUFDRjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSxvQkFBb0I7QUFBQSxNQUFPO0FBQUEsSUFDekQ7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLFlBQVk7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxXQUFXLE1BQU0sV0FBVztBQUFBLE1BQ3BDLEVBQUUsTUFBTSxhQUFhLE1BQU0sd0NBQXdDO0FBQUEsTUFDbkUsRUFBRSxNQUFNLE9BQU8sTUFBTSwrQkFBK0I7QUFBQSxNQUNwRCxFQUFFLE1BQU0sbUJBQW1CLE1BQU0sMkJBQTJCO0FBQUEsTUFDNUQsRUFBRSxNQUFNLFdBQVcsTUFBTSw4QkFBOEI7QUFBQSxNQUN2RCxFQUFFLE1BQU0saUJBQWtCLE1BQU0sNkJBQTZCO0FBQUEsTUFDN0QsRUFBRSxNQUFNLGNBQWMsTUFBTSwrQkFBK0I7QUFBQSxJQUM3RDtBQUFBLEVBQ0Y7QUFNRjs7O0FEaGNBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1AsU0FBUyxFQUFFLE9BQU8sb0JBQW9CLE1BQU0sbUJBQW1CO0FBQUEsRUFDL0QsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQTtBQUFBLEVBR0EsVUFBVTtBQUFBLEVBRVY7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW1CQSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtMLFdBQVc7QUFBQSxNQUNULFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQTtBQUFBLE1BRVg7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLFlBQVk7QUFBQSxVQUNWLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
