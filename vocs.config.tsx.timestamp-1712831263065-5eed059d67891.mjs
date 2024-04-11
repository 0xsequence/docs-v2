// vocs.config.tsx
import { defineConfig } from "file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/vocs@1.0.0-alpha.40_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0_rollup@4.12.0_typescript@5.3.3/node_modules/vocs/_lib/index.js";

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
      { text: "Custom Marketplace", link: "/guides/template-marketplace-api", match: "/guides/template-marketplace-api" }
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
          text: "In-Game Wallet",
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
                { text: "Orderbook Transactions", link: "/solutions/marketplaces/orderbook/examples/06-orderbook-transactions" }
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
        ] }
      ]
    }
  ],
  "/guides": [
    {
      text: "Build a game with WebGL",
      collapsed: true,
      items: [
        { text: "Integrate SequenceKit with WaaS", link: "/guides/webgl-guide#integrate-sequencekit-with-waas" },
        { text: "Deploy a collectibles contract", link: "/guides/webgl-guide#deploy-a-collectibles-contract" },
        { text: "Deploy a remote minter", link: "/guides/webgl-guide#deploy-a-remote-minter" },
        { text: "Mint in-game achievement tokens", link: "/guides/webgl-guide#mint-in-game-achievement-tokens" },
        { text: "Burn in-game achievement tokens", link: "/guides/webgl-guide#burn-in-game-achievement-tokens" },
        { text: "Integrate an embedded marketplace", link: "/guides/webgl-guide#integrate-an-embedded-marketplace" },
        { text: "Leverage purchased items in-game", link: "/guides/webgl-guide#leverage-purchased-items-in-game" }
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
      text: "Building a Custom Marketplace",
      link: "/guides/template-marketplace-api"
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: "Templates",
      items: [
        { text: "In-Game Wallet Demo", link: "/guides/templates/template-embedded-wallet" },
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
      collapsed: true,
      items: [
        { text: "Overview", link: "/api/relayer/overview" },
        {
          text: "Examples",
          collapsed: true,
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
      collapsed: true,
      items: [
        { text: "Overview", link: "/api/indexer/overview" },
        { text: "Installation", link: "/api/indexer/installation" },
        {
          text: "Examples",
          collapsed: true,
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
      collapsed: true,
      items: [
        { text: "Overview", link: "/api/metadata/overview" },
        { text: "Token Metadata", link: "/api/metadata/token-metadata" },
        { text: "Contract Metadata", link: "/api/metadata/contract-metadata" },
        { text: "REST API", link: "/api/metadata/rest-api" }
      ]
    },
    {
      text: "Marketplace",
      collapsed: true,
      items: [
        { text: "Overview", link: "/api/marketplace/overview" },
        { text: "Schema", link: "/api/marketplace/schema" },
        { text: "Marketplace API", link: "/api/marketplace/api" },
        {
          text: "Examples",
          collapsed: true,
          items: []
        }
      ]
    },
    {
      text: "Node Gateway",
      collapsed: true,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIGljb25Vcmw6IHsgbGlnaHQ6ICcvaW1nL2Zhdmljb24uaWNvJywgZGFyazogJy9pbWcvZmF2aWNvbi5pY28nIH0sXG4gIGxvZ29Vcmw6IHtcbiAgICBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsXG4gICAgZGFyazogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWRhcmsuc3ZnJyxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIC8vIE5PVEU6IHRha2luZyB1cCB2YWx1YWJsZSBzcGFjZSwgd2lsbCBtb3ZlIHRob3NlXG4gIC8vIHRvIGZvb3RlciBhbmQgb3RoZXIgc2VjdGlvbnNcbiAgLy8gc29jaWFsczogW1xuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdnaXRodWInLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdkaXNjb3JkJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ3gnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8veC5jb20vMHhzZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gXSxcblxuICB0aGVtZToge1xuICAgIC8vIGFjY2VudENvbG9yOiB7XG4gICAgLy8gICBsaWdodDogJyM0NDJDQTgnLFxuICAgIC8vICAgZGFyazogJyM5OUFERUQnLFxuICAgIC8vIH0sXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBmb250RmFtaWx5OiB7XG4gICAgICAgIGRlZmF1bHQ6ICdJbnRlcicsXG4gICAgICAgIC8vIG1vbm86ICdSb2JvdG8gTW9ubydcbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgbGlnaHQ6ICcjZjBmMGYwJyxcbiAgICAgICAgICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJhY2tncm91bmQ1OiB7XG4gICAgICAgIC8vICAgbGlnaHQ6ICcjZGRkZGRkJyxcbiAgICAgICAgLy8gICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBiYWNrZ3JvdW5kRGFyazoge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxNTE1MTUnXG4gICAgICAgIC8vIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9qYW1lc2xhd3Rvbi9Db2RpbmcvZG9jcy12MlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2phbWVzbGF3dG9uL0NvZGluZy9kb2NzLXYyL25hdi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvamFtZXNsYXd0b24vQ29kaW5nL2RvY3MtdjIvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyLCBUb3BOYXYgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgY29uc3QgdG9wTmF2ID0gW1xuICB7IHRleHQ6ICdTb2x1dGlvbnMnLFxuICBpdGVtczogW1xuICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JywgbWF0Y2g6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnIH0sXG4gICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL292ZXJ2aWV3JyB9LFxuICAgIHsgdGV4dDogJ0NvbGxlY3RpYmxlcycsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvMDEtZGVwbG95LWFuLWl0ZW0tY29sbGVjdGlvbicsIG1hdGNoOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzAxLWRlcGxveS1hbi1pdGVtLWNvbGxlY3Rpb24nIH0sXG4gICAgeyB0ZXh0OiAnUGF5bWVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9uZnQtY2hlY2tvdXQnLCBtYXRjaDogJy9zb2x1dGlvbnMvbmZ0LWNoZWNrb3V0JyB9LFxuICAgIHsgdGV4dDogJ0J1aWxkZXIgQ29uc29sZScsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSwgXG4gICAgXVxuICB9XG5dXG59LFxuICB7IFxuICAgIHRleHQ6ICdHdWlkZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdXZWIzIEdhbWUgd2l0aCBXZWJHTCcsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJywgbWF0Y2g6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2ViMyBHYW1lIHdpdGggVW5pdHknLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZScsIG1hdGNoOiAnL2d1aWRlcy91bml0eS1ndWlkZScgfSxcbiAgICAgIHsgdGV4dDogJ0xvb3Rib3hlcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gnLCBtYXRjaDogJy9ndWlkZXMvbG9vdGJveCcgfSxcbiAgICAgIHsgdGV4dDogJ0N1c3RvbSBNYXJrZXRwbGFjZScsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScsIG1hdGNoOiAnL2d1aWRlcy90ZW1wbGF0ZS1tYXJrZXRwbGFjZS1hcGknIH1cbiAgICBdXG4gIH0sXG4gIHsgXG4gICAgdGV4dDogJ1NES3MnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdVbml0eScsIGxpbms6ICcvc2RrL3VuaXR5LzAxLW92ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VuaXR5LzAxLW92ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnVW5yZWFsJywgbGluazogJy9zZGsvdW5yZWFsLzAxLW92ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VucmVhbC8wMS1vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1R5cGVzY3JpcHQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9vdmVydmlldycsIG1hdGNoOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMS1vdmVydmlldycsIG1hdGNoOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdHbycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL2dvL292ZXJ2aWV3JyB9LFxuICAgICAgLy8geyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnLCBtYXRjaDogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgIC8vIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL3JlYWN0bmF0aXZlJywgbWF0Y2g6ICcvc2RrL3JlYWN0bmF0aXZlJyB9LFxuICAgICAgLy8geyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJywgbWF0Y2g6ICcvc2RrL2lPUycgfVxuICAgIF1cbiAgfSxcblxuICAvLyByZXBsYWNlIGxpbmtzLlxuICB7IFxuICAgIHRleHQ6ICdBUElzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnUmVsYXllciBBUEknLCBsaW5rOiAnL2FwaS9yZWxheWVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnSW5kZXhlciBBUEknLCBsaW5rOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ05vZGUgR2F0ZXdheScsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSxcbiAgICBdXG4gIH0sXG5cbiAgeyBcbiAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgIHsgdGV4dDogJ1Rva2VuIERpcmVjdG9yeScsIGxpbms6ICcvc3VwcG9ydC90b2tlbi1kaXJlY3RvcnknIH0sXG4gICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2VcXCdyZSBoaXJpbmchJywgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgIF1cbiAgfVxuXSBhcyBUb3BOYXZcblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSB7XG4gIC8vIE92ZXJ2aWV3XG4gICcvc29sdXRpb25zJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdXYWxsZXRzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW4tR2FtZSBXYWxsZXQnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0LzAxLW92ZXJ2aWV3J30sXG4gICAgICAgICAge3RleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvMDItcXVpY2tzdGFydCd9LFxuICAgICAgICAgIHt0ZXh0OiAnRXhhbXBsZXMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdNYW5hZ2UgU2Vzc2lvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy8wMy1tYW5hZ2Utc2Vzc2lvbnMnfSxcbiAgICAgICAgICB7dGV4dDogJ1VzZSBXYWxsZXRzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvMDQtdXNlLXdhbGxldHMnfSxcbiAgICAgICAgICB7dGV4dDogJ1ZhbGlkYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy8wNS12YWxpZGF0aW9uJ30sXG4gICAgICAgICAge3RleHQ6ICdUcmFuc2FjdGlvbiBSZWNlaXB0cycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzLzA2LXRyYW5zYWN0aW9uLXJlY2VpcHRzJ30sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgICB7IHRleHQ6ICdVbml2ZXJzYWwgV2FsbGV0JywgY29sbGFwc2VkOiB0cnVlLCBcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzAxLW92ZXJ2aWV3J30sXG4gICAgICAgICAge3RleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzAyLXF1aWNrc3RhcnQnfSxcbiAgICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgICAge3RleHQ6ICdDb25uZWN0IFdhbGxldCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wMS1jb25uZWN0LXdhbGxldCd9LFxuICAgICAgICAgICAge3RleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wMi1hdXRoLWFkZHJlc3MnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2lnbmluZyAmIFZlcmlmeWluZyBNZXNzYWdlcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wMy1zaWduLW1lc3NhZ2UnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnTm8td2FsbGV0IGNvbmZpcm1hdGlvbiBzaWduYXR1cmVzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzLzA0LXNlc3Npb24ta2V5cyd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wNS1zZW5kLXRyYW5zYWN0aW9uJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wNi1zZW5kLWVyYzIwJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTcyMSAoTkZUKSBUb2tlbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvMDctc2VuZC1lcmM3MjEnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wOC1zZW5kLWVyYzExNTUnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBhIEJhdGNoIG9mIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy8wOS1zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucyd9LFxuICAgICAgICAgICAge3RleHQ6ICdCdWlsZGluZyBCYWNrZW5kcyB3aXRoIFNlcXVlbmNlJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzLzEwLWJ1aWxkaW5nLWJhY2tlbmRzJ30sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VxdWVuY2UgS2l0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0LzA0LXNlcXVlbmNlLWtpdCd9LFxuICAgICAgICAgIHt0ZXh0OiAnU3VwcG9ydGVkIFBsYXRmb3JtcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC8wNS1wbGF0Zm9ybXMnfSxcbiAgICAgICAgICB7dGV4dDogJ0ZpYXQgT24tUmFtcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDYtZmlhdC1vbi1yYW1wcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnS2V5IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvMDcta2V5LW1hbmFnZW1lbnQnfVxuICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnV2hpdGUtbGFiZWwgTWFya2V0cGxhY2UnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvd2hpdGUtbGFiZWwtbWFya2V0cGxhY2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1aWxkIHlvdXIgQ3VzdG9tIE1hcmtldHBsYWNlJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rLzAxLW92ZXJ2aWV3J30sXG4gICAgICAgICAge3RleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay8wMi1xdWlja3N0YXJ0J30sXG4gICAgICAgICAge3RleHQ6ICdFeGFtcGxlcycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ0dldCBUb3AgT3JkZXJzJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9leGFtcGxlcy8wMy1nZXQtdG9wLW9yZGVycyd9LFxuICAgICAgICAgIHt0ZXh0OiAnR2V0IE9yZGVyYm9vaycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svZXhhbXBsZXMvMDQtZ2V0LW9yZGVyYm9vayd9LFxuICAgICAgICAgIHt0ZXh0OiAnR2V0IFVzZXIgQWN0aXZpdGllcycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svZXhhbXBsZXMvMDUtZ2V0LXVzZXItYWN0aXZpdGllcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnT3JkZXJib29rIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svZXhhbXBsZXMvMDYtb3JkZXJib29rLXRyYW5zYWN0aW9ucyd9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb2xsZWN0aWJsZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95YWJsZSBDb250cmFjdHMnICwgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIENvbGxlY3RpYmxlIENvbnRyYWN0JywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy8wMS1kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uJ30sXG4gICAgICAgICAgLy8ge3RleHQ6ICdNaW50IEluLUdhbWUgSXRlbXMgYW5kIEFjaGlldmVtZW50cyAoRVJDMTE1NSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMC1taW50LWl0ZW1zLWZyb20tRVJDMTE1NSd9LFxuICAgICAgICAgIC8vIHt0ZXh0OiAnTWludCBEaWdpdGFsIENvbGxlY3RpYmxlcyAoRVJDNzIxKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAyLW1pbnQtY29sbGVjdGlibGVzLWZyb20tRVJDNzIxJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGFuIEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvMDItZGVwbG95LUVSQzIwLWN1cnJlbmN5J30sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdNZXRhZGF0YScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2UgTWV0YWRhdGEgaW4gQnVpbGRlcicsbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL21ldGFkYXRhLzgwMC1tYW5hZ2UtbWV0YWRhdGEtYnVpbGRlcicgfVxuICAgICAgICBdLFxuICAgICAgfVxuICAgICAgICAvLyB7IHRleHQ6ICdNaW50ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9taW50ZXInIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdQYXltZW50cycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdORlQgQ2hlY2tvdXQnLCBsaW5rOiAnL3NvbHV0aW9ucy9uZnQtY2hlY2tvdXQnIH0sXG4gICAgICAgIHsgdGV4dDogJ09ucmFtcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9wYXltZW50cy9vbnJhbXBzLzAxLWZpYXQtb24tcmFtcHMnIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGRlciBDb25zb2xlJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnR2V0IFN0YXJ0ZWQnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2dldHRpbmctc3RhcnRlZCcgfSxcbiAgICAgICAge3RleHQ6ICdQcm9qZWN0IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCd9LFxuICAgICAgICB7dGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29udHJhY3RzJ30sXG4gICAgICAgIHt0ZXh0OiAnR2FzIFRhbmsnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2dhcy10YW5rJ30sXG4gICAgICAgIHt0ZXh0OiAnV2FsbGV0IFNES3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3dhbGxldC1zZGtzJ30sXG4gICAgICAgIHt0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9ub2RlLWdhdGV3YXknfSxcbiAgICAgICAge3RleHQ6ICdNYXJrZXRwbGFjZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL21hcmtldHBsYWNlcyd9LFxuICAgICAgICB7dGV4dDogJ0luZGV4ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2luZGV4ZXInfSxcbiAgICAgICAge3RleHQ6ICdBbmFseXRpY3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2FuYWx5dGljcyd9LFxuICAgICAgICB7dGV4dDogJ1NldHRpbmdzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9wcm9qZWN0LXNldHRpbmdzJ30sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ0VJUDUxODkgdnMuIDQzMzcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy81MTg5LTQzMzcnIH0sXG4gICAgICAgIHsgdGV4dDogJ1NtYXJ0IENvbnRyYWN0IFdhbGxldHMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnV2h5IHNtYXJ0IGNvbnRyYWN0IHdhbGxldHM/JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvd2FsbGV0LWNvbnRyYWN0cy8wMS13aHknIH0sXG4gICAgICAgIF0gfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29udHJhY3QgSW50ZXJuYWxzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnRGVwbG95bWVudCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy8wMS1kZXBsb3ltZW50J30sXG4gICAgICAgICAgeyB0ZXh0OiAnU2VxdWVuY2UgdjEnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ0RlcGxveScsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8wMS1kZXBsb3knfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IEZhY3RvcnknLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvMDMtd2FsbGV0LWZhY3RvcnknfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvMDQtd2FsbGV0LWNvbmZpZ3VyYXRpb24nfSxcbiAgICAgICAgICAgIC8vIHt0ZXh0OiAnVHJhbnNhY3Rpb24gRW5jb2RpbmcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvMDctdHJhbnNhY3Rpb24tZW5jb2RpbmcnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2lnbmF0dXJlIEVuY29kaW5nJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxLzA4LXNpZ25hdHVyZS1lbmNvZGluZyd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29udGV4dCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8xMS13YWxsZXQtY29udGV4dCd9LFxuICAgICAgICAgICAge3RleHQ6ICdDb250cmFjdCBBdWRpdHMnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvMTItY29udHJhY3QtYXVkaXRzJ30sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2VxdWVuY2UgdjInLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ0RlcGxveScsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92Mi8wMS1kZXBsb3knfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLCBsaW5rOiBcIi9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyLzA0LWNvbmZpZ3VyYXRpb25cIn0sXG4gICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICAgIF1cbiAgICB9LFxuICAgIFxuICBdLFxuXG4gICcvZ3VpZGVzJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIGdhbWUgd2l0aCBXZWJHTCcsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgU2VxdWVuY2VLaXQgd2l0aCBXYWFTJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjaW50ZWdyYXRlLXNlcXVlbmNla2l0LXdpdGgtd2FhcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGEgY29sbGVjdGlibGVzIGNvbnRyYWN0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjZGVwbG95LWEtY29sbGVjdGlibGVzLWNvbnRyYWN0JyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSByZW1vdGUgbWludGVyJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjZGVwbG95LWEtcmVtb3RlLW1pbnRlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWludCBpbi1nYW1lIGFjaGlldmVtZW50IHRva2VucycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlI21pbnQtaW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1cm4gaW4tZ2FtZSBhY2hpZXZlbWVudCB0b2tlbnMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNidXJuLWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgYW4gZW1iZWRkZWQgbWFya2V0cGxhY2UnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNpbnRlZ3JhdGUtYW4tZW1iZWRkZWQtbWFya2V0cGxhY2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0xldmVyYWdlIHB1cmNoYXNlZCBpdGVtcyBpbi1nYW1lJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjbGV2ZXJhZ2UtcHVyY2hhc2VkLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGQgYSBtb2JpbGUgVW5pdHkgZ2FtZScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgU2VxdWVuY2VLaXQgd2l0aCBXYWFTJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjaW50ZWdyYXRlLXNlcXVlbmNla2l0LXdpdGgtd2FhcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGEgY29sbGVjdGlibGVzIGNvbnRyYWN0JywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtY29sbGVjdGlibGVzLWNvbnRyYWN0JyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSByZW1vdGUgbWludGVyJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtcmVtb3RlLW1pbnRlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWludCBpbi1nYW1lIGFjaGlldmVtZW50IHRva2VucycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI21pbnQtaW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1cm4gaW4tZ2FtZSBhY2hpZXZlbWVudCB0b2tlbnMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNidXJuLWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgYW4gZW1iZWRkZWQgbWFya2V0cGxhY2UnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRlZ3JhdGUtYW4tZW1iZWRkZWQtbWFya2V0cGxhY2UnIH0sXG4gICAgICAgIHsgdGV4dDogJ0xldmVyYWdlIHB1cmNoYXNlZCBpdGVtcyBpbi1nYW1lJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbGV2ZXJhZ2UtcHVyY2hhc2VkLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGQgYSBsb290Ym94IHdpdGggQUkgbWludGluZycsXG4gICAgICBsaW5rOiAnL2d1aWRlcy9sb290Ym94J1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkaW5nIGEgQ3VzdG9tIE1hcmtldHBsYWNlJyxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaSdcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdJbnRlZ3JhdGUgdG9rZW4gcmV3YXJkcyBpbnRvIHlvdXIgRGlzY29yZCBzZXJ2ZXInLFxuICAgIC8vICAgbGluazogJy9ndWlkZXMvZGlzY29yZCdcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZW1wbGF0ZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnSW4tR2FtZSBXYWxsZXQgRGVtbycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy90ZW1wbGF0ZS1lbWJlZGRlZC13YWxsZXQnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1aWxkIGEgQmFja2VuZCBUcmFuc2FjdGlvbiBNYW5hZ2VyJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzLzAyLWJ1aWxkaW5nLXJlbGF5aW5nLXNlcnZlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnU2VydmVybGVzcyBNaW50aW5nIG9mIENvbGxlY3RpYmxlcycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy8wMy1taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzJyB9XG4gICAgICAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSSBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcblxuICAvLyBTREtzXG4gICcvc2RrJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHYW1lIEVuZ2luZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdVbnJlYWwnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bnJlYWwvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9zZGsvdW5yZWFsLzAyLWluc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VucmVhbC8wMy1zZXR1cCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBdXRoZW50aWNhdGlvbicsIGxpbms6ICcvc2RrL3VucmVhbC8wNC1hdXRoZW50aWNhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBUEkgSW50ZWdyYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvMDUtYXBpLWludGVncmF0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1BhY2thZ2luZycsIGxpbms6ICcvc2RrL3VucmVhbC8wNi1wYWNrYWdpbmcnIH1cbiAgICAgICAgICBdIFxuICAgICAgICB9LFxuXG4gICAgICAgIHsgdGV4dDogJ1VuaXR5JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5pdHkvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9zZGsvdW5pdHkvMDItaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NldHVwJywgbGluazogJy9zZGsvdW5pdHkvMDMtc2V0dXAnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL3Nkay91bml0eS8wNC1hdXRoZW50aWNhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdXcml0ZSB0byBibG9ja2NoYWluJywgbGluazogJy9zZGsvdW5pdHkvMDUtd3JpdGUtdG8tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5LzA2LXJlYWQtZnJvbS1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NpZ24gTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay91bml0eS8wNy1zaWduLW1lc3NhZ2VzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0RlcGxveSBDb250cmFjdHMnLCBsaW5rOiAnL3Nkay91bml0eS8wOC1kZXBsb3ktY29udHJhY3RzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1dhbGxldCBVSScsIGxpbms6ICcvc2RrL3VuaXR5LzA5LXdhbGxldC11aScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBZHZhbmNlZCcsIGNvbGxhcHNlZDogdHJ1ZSwgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC8wMS1pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXYWxsZXRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDItd2FsbGV0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NsaWVudHMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC8wMy1jbGllbnRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVHJhbnNmZXJzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDQtdHJhbnNmZXJzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDUtY29udHJhY3RzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVG9rZW5zJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvMDYtdG9rZW5zJyB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ01vYmlsZScsXG4gICAgLy8gICBpdGVtczogW1xuICAgIC8vICAgICB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAvLyAgICAgeyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJyB9LFxuICAgIC8vICAgICB7IHRleHQ6ICdSZWFjdCBOYXRpdmUnLCBsaW5rOiAnL3Nkay9yZWFjdC1uYXRpdmUnIH1cbiAgICAvLyAgIF1cbiAgICAvLyB9LFxuXG4gICAge1xuICAgICAgdGV4dDogJ1dlYjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU2VxdWVuY2VLaXQnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDEtb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMi1nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29uZmlndXJhdGlvbicsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC8wMy1jb25maWd1cmF0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NoZWNrb3V0JywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzA0LWNoZWNrb3V0JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0N1c3RvbSBDb25uZWN0b3JzJywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0LzA1LWN1c3RvbS1jb25uZWN0b3JzJyB9XG4gICAgICAgIF1cbiAgICAgICB9LFxuICAgICAgICB7IHRleHQ6ICdUeXBlU2NyaXB0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy9vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wMS1jb25uZWN0LXdhbGxldCd9LFxuICAgICAgICAgIHt0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wMi1hdXRoLWFkZHJlc3MnfSxcbiAgICAgICAgICB7dGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wMy1zaWduLW1lc3NhZ2UnfSxcbiAgICAgICAgICB7dGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzA0LXNlc3Npb24ta2V5cyd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wNS1zZW5kLXRyYW5zYWN0aW9uJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wNi1zZW5kLWVyYzIwJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC8wMy1ndWlkZXMvMDctc2VuZC1lcmM3MjEnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTExNTUgKENvbGxlY3RpYmxlKSBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wOC1zZW5kLWVyYzExNTUnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0LzAzLWd1aWRlcy8wOS1zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucyd9LFxuICAgICAgICAgIHt0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvMDMtZ3VpZGVzLzEwLWJ1aWxkaW5nLWJhY2tlbmRzJ30sXG4gICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29ubmVjdG9ycycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvMDEtb3ZlcnZpZXcnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VxdWVuY2VLaXQnLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvMDEtb3ZlcnZpZXcnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2FnbWknLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvMDMtd2FnbWknfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnUmFpbmJvd0tpdCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy8wNC1yYWluYm93LWtpdCd9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzIE9uYm9hcmQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvMDUtd2ViMy1vbmJvYXJkJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1dlYjMgUmVhY3QgVjYnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvMDYtd2ViMy1yZWFjdC12Nid9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzTW9kYWwnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvMDctd2ViM21vZGFsJ30sXG4gICAgICAgICAgICB7dGV4dDogJ0ZBUScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy8wOC1GQVEnfSxcbiAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgICB7IHRleHQ6ICdHbycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnfSxdXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29tbW9uIFF1ZXN0aW9ucycsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdIb3cgZG8gSSBkbyBzaWduYXR1cmUgdmFsaWRhdGlvbj8nLCBsaW5rOiAnL3dhbGxldC9zaWctdmFsaWRhdGlvbicgfVxuICAgICAgICAvLyAuLi5cbiAgICAgIF1cbiAgICB9LFxuICBdLFxuXG4gIC8vIGFwaXNcbiAgJy9hcGknOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1JlbGF5ZXInLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9yZWxheWVyL292ZXJ2aWV3JyB9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0ZldGNoIEZlZSBPcHRpb25zJywgbGluazogJy9hcGkvcmVsYXllci9leGFtcGxlcy9mZXRjaC1mZWUtb3B0aW9ucycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZW5kIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvYXBpL3JlbGF5ZXIvZXhhbXBsZXMvc2VuZC10cmFuc2FjdGlvbnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRmV0Y2ggVHJhbnNhY3Rpb24gUmVjZWlwdHMnLCBsaW5rOiAnL2FwaS9yZWxheWVyL2V4YW1wbGVzL2ZldGNoLXRyYW5zYWN0aW9uLXJlY2VpcHRzJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0luZGV4ZXInLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnfSxcbiAgICAgICAge3RleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS9pbmRleGVyL2luc3RhbGxhdGlvbid9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICB7dGV4dDogJ0ZldGNoIFRva2VucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvZmV0Y2gtdG9rZW5zJ30sXG4gICAgICAgIHt0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeScsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhY3Rpb24taGlzdG9yeSd9LFxuICAgICAgICB7dGV4dDogJ1VuaXF1ZSBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3VuaXF1ZS10b2tlbnMnfSxcbiAgICAgICAge3RleHQ6ICdUcmFuc2FjdGlvbiBIaXN0b3J5IFRva2VuIENvbnRyYWN0JywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy90cmFuc2F0aW9uLWhpc3RvcnktdG9rZW4tY29udHJhY3QnfSxcbiAgICAgICAge3RleHQ6ICdOYXRpdmUgTmV0d29yayBCYWxhbmNlJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9uYXRpdmUtbmV0d29yay1iYWxhbmNlJ30sXG4gICAgICAgIHt0ZXh0OiAnTWV0YWRhdGEgVGlwcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvbWV0YWRhdGEtdGlwcyd9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01ldGFkYXRhJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ1Rva2VuIE1ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEvdG9rZW4tbWV0YWRhdGEnIH0sXG4gICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0IE1ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEvY29udHJhY3QtbWV0YWRhdGEnIH0sXG4gICAgICAgIHsgdGV4dDogJ1JFU1QgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvcmVzdC1hcGknIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdTY2hlbWEnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9zY2hlbWEnIH0sXG4gICAgICAgIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2FwaScgfSxcbiAgICAgICAge3RleHQ6ICdFeGFtcGxlcycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ05vZGUgR2F0ZXdheScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSAgICAgIF1cbiAgICB9LFxuICBdLFxuICBcbiAgLy8gU3VwcG9ydFxuICAnL3N1cHBvcnQnOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2VcXCdyZSBoaXJpbmchJywgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgIF1cbiAgfVxuXG59IGFzIFNpZGViYXJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjs7O0FDRXRCLElBQU0sU0FBUztBQUFBLEVBQ3BCO0FBQUEsSUFBRSxNQUFNO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sV0FBVyxN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
