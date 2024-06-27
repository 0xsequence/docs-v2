// vocs.config.tsx
import { defineConfig } from "file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/vocs@1.0.0-alpha.45_@types+react@18.2.75_react-dom@18.2.0_react@18.2.0_rollup@4.14.1_typescript@5.4.4/node_modules/vocs/_lib/index.js";

// nav.ts
var topNav = [
  {
    text: "Solutions",
    items: [
      { text: "Wallets", link: "/solutions/wallets/overview", match: "/solutions/wallets/overview" },
      { text: "Marketplace", link: "/solutions/marketplaces/overview", match: "/solutions/marketplaces/overview" },
      { text: "Collectibles", link: "/solutions/collectibles/contracts/deploy-an-item-collection", match: "/solutions/collectibles/contracts/deploy-an-item-collection" },
      { text: "Payments", link: "/solutions/payments/onramps/fiat-on-ramps", match: "/solutions/payments/onramps/fiat-on-ramps" },
      {
        text: "Builder Console",
        link: "/solutions/builder/overview",
        match: "/solutions/builder/overview",
        items: [
          { text: "Overview", link: "/solutions/builder/overview", match: "/solutions/builder/overview" }
        ]
      },
      { text: "Chain Support", link: "/solutions/technical-references/chain-support", match: "/solutions/technical-references/chain-support" }
    ]
  },
  {
    text: "Resources",
    items: [
      { text: "Guides", link: "/guides/guide-overview", match: "/guides/guide-overview" },
      { text: "Templates", link: "/guides/template-overview", match: "/guides/template-overview" }
    ]
  },
  {
    text: "SDKs",
    items: [
      { text: "Unity", link: "/sdk/unity/overview", match: "/sdk/unity/overview" },
      { text: "Unreal", link: "/sdk/unreal/overview", match: "/sdk/unreal/overview" },
      { text: "Typescript", link: "/sdk/typescript/guides/overview", match: "/sdk/typescript/guides/overview" },
      { text: "Sequence Kit", link: "/solutions/wallets/sequence-kit/overview", match: "/solutions/wallets/sequence-kit/overview" },
      { text: "Go", link: "/sdk/go/overview", match: "/sdk/go/overview" },
      // { text: 'Android', link: '/sdk/android', match: '/sdk/android' },
      { text: "Mobile", link: "/sdk/mobile", match: "/sdk/mobile" }
      // { text: 'iOS', link: '/sdk/iOS', match: '/sdk/iOS' }
    ]
  },
  // replace links.
  {
    text: "APIs",
    items: [
      { text: "Transactions API", link: "/api/transactions/overview", match: "/api/transactions/overview" },
      { text: "Analytics API", link: "/api/analytics/overview", match: "/api/analytics/overview" },
      { text: "Indexer API", link: "/api/indexer/overview", match: "/api/indexer/overview" },
      { text: "Metadata API", link: "/api/metadata/overview", match: "/api/metadata/overview" },
      { text: "Marketplace API", link: "/api/marketplace/overview", match: "/api/marketplace/overview" },
      { text: "Node Gateway", link: "/api/node-gateway", match: "/api/node-gateway" }
    ]
  },
  {
    text: "Support",
    items: [
      { text: "Support", link: "/support" },
      { text: "Changelog", link: "https://0xsequence.canny.io/changelog" },
      { text: "Restricted Regions", link: "/support/restricted-regions" },
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
      text: "Overview",
      link: "/solutions/builder/overview"
    },
    {
      text: "Getting Started",
      link: "/solutions/builder/getting-started"
    },
    {
      text: "Onboard",
      items: [
        { text: "Overview", link: "/solutions/wallets/overview" },
        {
          text: "Embedded Wallet",
          link: "/solutions/wallets/embedded-wallet/overview",
          collapsed: false,
          items: [
            { text: "Overview", link: "/solutions/wallets/embedded-wallet/overview" },
            { text: "Quickstart", link: "/solutions/wallets/embedded-wallet/quickstart" },
            {
              text: "Setup",
              collapsed: true,
              items: [
                { text: "Configuration", link: "/solutions/builder/embedded-wallet" },
                { text: "Google Setup", link: "/solutions/builder/embedded-wallet/google-configuration" },
                { text: "Apple Setup", link: "/solutions/builder/embedded-wallet/apple-configuration" }
              ]
            },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Manage Sessions", link: "/solutions/wallets/embedded-wallet/examples/manage-sessions" },
                { text: "Use Wallets", link: "/solutions/wallets/embedded-wallet/examples/use-wallets" },
                { text: "On-ramp", link: "/solutions/wallets/embedded-wallet/examples/on-ramp" },
                { text: "Validation", link: "/solutions/wallets/embedded-wallet/examples/validation" },
                { text: "Verification", link: "/solutions/wallets/embedded-wallet/examples/verification" },
                { text: "Transaction Receipts", link: "/solutions/wallets/embedded-wallet/examples/transaction-receipts" }
              ]
            },
            { text: "Architecture", link: "/solutions/wallets/embedded-wallet/architecture" },
            {
              text: "Implementation Details",
              collapsed: true,
              items: [
                { text: "Action payloads", link: "/solutions/wallets/embedded-wallet/implementation-details/action-payloads" },
                { text: "Response payloads", link: "/solutions/wallets/embedded-wallet/implementation-details/response-payloads" },
                { text: "Trust Contract Recovery Flow", link: "/solutions/wallets/embedded-wallet/implementation-details/trust-contract-recovery-flow" },
                { text: "Enclave-Verification", link: "/solutions/wallets/embedded-wallet/implementation-details/enclave-verification" },
                { text: "Intents", link: "/solutions/wallets/embedded-wallet/implementation-details/intents" }
              ]
            }
          ]
        },
        {
          text: "Sequence Kit",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/sequence-kit/overview" },
            { text: "Quickstart", link: "/solutions/wallets/sequence-kit/getting-started" },
            { text: "Configuration", link: "/solutions/wallets/sequence-kit/configuration" },
            { text: "On-ramp", link: "/solutions/wallets/sequence-kit/on-ramp" },
            { text: "Checkout", link: "/solutions/wallets/sequence-kit/checkout" },
            { text: "Custom Connectors", link: "/solutions/wallets/sequence-kit/custom-connectors" }
          ]
        },
        {
          text: "Wallet Linking",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/link-wallets/overview" },
            { text: "Integration Guide", link: "/solutions/wallets/link-wallets/integration-guide" }
          ]
        },
        {
          text: "Universal Wallet",
          collapsed: true,
          link: "/solutions/wallets/universal-wallet/overview",
          items: [
            { text: "Overview", link: "/solutions/wallets/universal-wallet/overview" },
            { text: "Quickstart", link: "/solutions/wallets/universal-wallet/quickstart" },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Connect Wallet", link: "/solutions/wallets/universal-wallet/examples/connect-wallet" },
                { text: "Authenticate Users with Message Signature", link: "/solutions/wallets/universal-wallet/examples/auth-address" },
                { text: "Signing & Verifying Messages", link: "/solutions/wallets/universal-wallet/examples/sign-message" },
                { text: "No-wallet confirmation signatures", link: "/solutions/wallets/universal-wallet/examples/session-keys" },
                { text: "Sending Transactions", link: "/solutions/wallets/universal-wallet/examples/send-transaction" },
                { text: "Sending ERC-20 Tokens", link: "/solutions/wallets/universal-wallet/examples/send-erc20" },
                { text: "Sending ERC-721 (NFT) Tokens", link: "/solutions/wallets/universal-wallet/examples/send-erc721" },
                { text: "Sending ERC-1155 (Collectible) Tokens", link: "/solutions/wallets/universal-wallet/examples/send-erc1155" },
                { text: "Sending a Batch of Transactions", link: "/solutions/wallets/universal-wallet/examples/send-batch-transactions" },
                { text: "Building Backends with Sequence", link: "/solutions/wallets/universal-wallet/examples/building-backends" }
              ]
            },
            //  {text: 'Sequence Kit', link: '/solutions/wallets/universal-wallet/sequence-kit'},
            { text: "Supported Platforms", link: "/solutions/wallets/universal-wallet/platforms" },
            { text: "Fiat On-Ramps", link: "/solutions/wallets/universal-wallet/fiat-on-ramps" },
            { text: "Key Management", link: "/solutions/wallets/universal-wallet/key-management" }
          ]
        }
      ]
    },
    {
      text: "Monetize",
      // collapsed: true,
      items: [
        { text: "Overview", link: "/solutions/marketplaces/overview" },
        { text: "White-label Marketplace", link: "/solutions/marketplaces/white-label-marketplace" },
        {
          text: "Build your Custom Marketplace",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/marketplaces/orderbook/overview" },
            { text: "Quickstart", link: "/solutions/marketplaces/orderbook/quickstart" }
          ]
        },
        { text: "Fiat On-ramps", link: "/solutions/payments/onramps/fiat-on-ramps", match: "/solutions/payments/onramps/fiat-on-ramps" }
      ]
    },
    {
      text: "Power",
      items: [
        { text: "Overview", link: "/solutions/power-overview" },
        {
          text: "Deployable Contracts",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/builder/contracts" },
            { text: "Deploy a Collectible Contract", link: "/solutions/collectibles/contracts/deploy-an-item-collection" },
            // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
            // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
            { text: "Deploy an In-Game Currency (ERC20)", link: "/solutions/collectibles/contracts/deploy-ERC20-currency" }
          ]
        },
        {
          text: "Manage Collections",
          link: "/solutions/builder/collections"
        },
        {
          text: "Querying Blockchain Data",
          collapsed: false,
          items: [
            { text: "Indexer", link: "/solutions/builder/indexer" },
            { text: "Webhooks", link: "/solutions/builder/webhooks" }
          ]
        },
        {
          text: "Analytics",
          link: "/solutions/builder/analytics"
        },
        {
          text: "Transaction Manager",
          link: "/solutions/builder/transactions"
        },
        {
          text: "Gas Sponsorship",
          link: "/solutions/builder/gas-tank"
        },
        {
          text: "Node Gateway",
          link: "/solutions/builder/node-gateway"
        }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    // {
    //   text: 'Sequence Builder',
    //   link: '/solutions/builder/overview',
    //   match: '/solutions/builder/overview',
    // },
    {
      text: "Technical References",
      items: [
        { text: "Chain Support", link: "/solutions/technical-references/chain-support" },
        { text: "Builder Project Management", link: "/solutions/builder/project-management" },
        { text: "Builder Settings", link: "/solutions/builder/project-settings" },
        // { text: 'EIP5189 vs. 4337', link: '/solutions/technical-references/5189-4337' },
        { text: "Why Smart Contract Wallets?", link: "/solutions/technical-references/wallet-contracts/why" },
        { text: "Contract Internals", collapsed: true, items: [
          { text: "Deployment", link: "/solutions/technical-references/internals/deployment" },
          { text: "Sequence v1", collapsed: true, items: [
            { text: "Deploy", link: "/solutions/technical-references/internals/v1/deploy" },
            { text: "Wallet Factory", link: "/solutions/technical-references/internals/v1/wallet-factory" },
            { text: "Wallet Configuration", link: "/solutions/technical-references/internals/v1/wallet-configuration" },
            // {text: 'Transaction Encoding', link: '/solutions/technical-references/internals/v1/07-transaction-encoding'},
            { text: "Signature Encoding", link: "/solutions/technical-references/internals/v1/signature-encoding" },
            { text: "Wallet Context", link: "/solutions/technical-references/internals/v1/wallet-context" }
          ] },
          { text: "Sequence v2", collapsed: true, items: [
            { text: "Deploy", link: "/solutions/technical-references/internals/v2/deploy" },
            { text: "Wallet Configuration", link: "/solutions/technical-references/internals/v2/configuration" }
          ] },
          { text: "Contract Audits", link: "/solutions/technical-references/internals/contract-audits" }
        ] }
      ]
    }
  ],
  "/guides": [
    {
      text: "Guides",
      collapsed: false,
      items: [
        {
          text: "Build a Game with WebGL",
          collapsed: true,
          link: "/guides/webgl-guide"
          // items: [
          //   { text: 'Introduction', link: '/guides/webgl-guide#aviator-web3-game-with-webgl' },
          //   { text: 'Project Setup With Webpack', link: '/guides/webgl-guide#1-project-setup-with-webpack' },
          //   { text: 'Integrate Sequence Kit With WaaS', link: '/guides/webgl-guide#2-integrate-sequence-kit' },
          //   { text: 'Deploy a Collectibles Contract', link: '/guides/webgl-guide#3-deploy-a-collectibles-contract' },
          //   { text: 'Deploy a Remote Minter', link: '/guides/webgl-guide#4-deploy-a-remote-minter--mint-in-game-achievement-tokens' },
          //   { text: 'Leverage Items In-game', link: '/guides/webgl-guide#5-leverage-items-in-game' },
          //   { text: 'Burn In-game Achievement Tokens', link: '/guides/webgl-guide#6-burn-in-game-achievement-tokens' },
          //   { text: '(Optional) Integrate Embedded Wallet Into Sequence Kit', link: '/guides/webgl-guide#7-optional-integrate-embedded-wallet-into-sequence-kit' },
          // ]
        },
        {
          text: "Build a Unity Game",
          collapsed: true,
          link: "/guides/unity-guide"
          // items: [
          //   { text: 'Introduction', link: '/guides/unity-guide#intro-to-jelly-forest' },
          //   { text: 'Build a Game Loop', link: '/guides/unity-guide#build-a-game-loop' },
          //   { text: 'Integrate Embedded Wallets', link: '/guides/unity-guide#integrate-social-sign-in-and-sequences-embedded-wallet-solution' },
          //   { text: 'Deploy Collectibles', link: '/guides/unity-guide#deploy-a-collectibles-contract' },
          //   { text: 'Deploy Remote Minter', link: '/guides/unity-guide#deploy-a-remote-minter'},
          //   { text: 'Minting Tokens to Inventory', link: '/guides/unity-guide#mint-in-game-tokens-to-the-players-inventory' },
          //   { text: 'Purchase Collectibles with ERC20 Tokens', link: '/guides/unity-guide#burn-in-game-tokens-in-exchange-for-others' },
          //   { text: 'Building an In-game Shop', link: '/guides/unity-guide#building-the-shop-pages-and-setting-the-minting-requirements' },
          //   { text: 'Leverage Purchased Items In-game', link: '/guides/unity-guide#leverage-purchased-items-in-game' },
          // ]
        },
        {
          text: "Build a Collectible Minting Service",
          collapsed: true,
          link: "/guides/mint-collectibles-serverless"
          // items: [
          //   { text: 'Introduction', link: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api', match: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api'},
          //   { text: 'Setup Cloudflare Environment', link: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test', match: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test'},
          //   { text: 'Deploy, Sponsor & Update Metadata For an ERC1155', link: '/guides/mint-collectibles-serverless#2-deploy-sponsor-and-update-metadata-for-an-erc1155-contract-with-sequence-builder'},
          //   { text: 'Use EthAuthProof to Prevent EOA DDoS', link: '/guides/mint-collectibles-serverless#3-use-ethauthproof-to-prevent-eoa-ddos' },
          //   { text: 'Mint a Collectible To Wallet', link: '/guides/mint-collectibles-serverless#4-mint-a-collectible-to-wallet' },
          // ]
        },
        {
          text: "Manage Collection Metadata",
          collapsed: true,
          link: "/guides/metadata-guide"
          // items: [
          //   { text: 'Obtain a Secret API Key', link: '/guides/metadata-guide#1-obtain-a-secret-api-key'},
          //   { text: 'Create Collection', link: '/guides/metadata-guide#2-create-collection-from-a-curl-request' },
          //   { text: 'Create Token', link: '/guides/metadata-guide#3-create-token-using-tokenid' },
          //   { text: 'Create Asset', link: '/guides/metadata-guide#4-create-asset-using-tokenid' },
          //   { text: 'Store an Image', link: '/guides/metadata-guide#5-store-image-asset' },
          //   { text: 'Update to Non-private', link: '/guides/metadata-guide#6-update-non-private-token' },
          //   { text: 'Publish Collection', link: '/guides/metadata-guide#7-publish-collection-from-a-curl-request' },
          //   { text: 'Render Asset from API', link: '/guides/metadata-guide#8-render-asset-from-api-publicly' },
          // ]
        },
        {
          text: "Build a Treasure Chest with AI Minting",
          collapsed: true,
          link: "/guides/treasure-chest-guide"
          // items: [
          //   { text: 'Sequence Builder Console Signup & Project Creation', link: '/guides/lootbox-guide#1-builder-console-signup--project-creation' },
          //   { text: 'Access Key Management', link: '/guides/lootbox-guide#2-access-key-management' },
          //   { text: 'Sequence Kit integration', link: '/guides/lootbox-guide#3-sequence-kit-integration' },
          //   { text: 'iframe-to-Dapp Communication', link: '/guides/lootbox-guide#4-iframe-to-dapp-communication' },
          //   { text: 'Deploy a Contract & Sponsor Gas', link: '/guides/lootbox-guide#5-deploy-a-contract--sponsor-gas' },
          //   { text: 'Deploy a Cloudflare Worker', link: '/guides/lootbox-guide#6-deploy-a-cloudflare-worker' },
          //   { text: 'Generating AI Prompts & Images', link: '/guides/lootbox-guide#7-generating-ai-prompts--images' },
          //   { text: 'Store Media To Sequence Metadata Service', link: '/guides/lootbox-guide#8-store-media-to-sequence-metadata-service' },
          //   { text: 'Securing Your Cloudflare Worker', link: '/guides/lootbox-guide#9-securing-your-cloudflare-worker' },
          //   { text: '(Optional) Naive Mint Restriction Per Wallet', link: '/guides/lootbox-guide#10-optional-naive-mint-restriction-per-wallet' },
          // ]
        },
        { text: "Build a Backend Transaction Service", collapsed: true, link: "/guides/building-relaying-server" },
        {
          text: "Leverage Sequence Analytics API in Dune",
          collapsed: true,
          link: "/guides/analytics-guide"
        },
        {
          text: "Build an Embedded Wallet Linking Service",
          collapsed: true,
          link: "/guides/linked-wallets-guide"
        },
        {
          text: "Build a Custom Marketplace",
          collapsed: true,
          link: "/guides/custom-marketplace"
          // items: [
          //   { text: 'Minting', link: '/guides/custom-marketplace#1-minting' },
          //   { text: 'Wallet Authentication', link: '/guides/custom-marketplace#2-wallet-authentication' },
          //   { text: 'Blockchain Queries', link: '/guides/custom-marketplace#3-blockchain-queries' },
          //   { text: 'Multi-wallet types', link: '/guides/custom-marketplace#4-multi-wallet-types' },
          //   { text: 'Request Creation', link: '/guides/custom-marketplace#5-request-creation' },
          //   { text: 'Order Accepting', link: '/guides/custom-marketplace#6-order-accepting' },
          //   { text: '(Optional) Enable Embedded Wallet', link: '/guides/custom-marketplace#7-optional-integrate-embedded-wallet-into-sequence-kit' },
          // ]
        }
      ]
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: "Templates",
      link: "/guides/template-overview"
      // items: [
      //   { text: 'Embedded Wallet Demo', link: '/guides/templates/template-embedded-wallet' },
      //   { text: 'Build a Backend Transaction Manager', link: '/guides/templates/building-relaying-server' }
      //   // { text: 'Marketplace API Demo', link: '/guides/templates/template-marketplace-api' }
      // ]
    }
  ],
  // SDKs
  "/sdk": [
    {
      text: "Game Engine",
      // collapsed: true,
      items: [
        {
          text: "Unity",
          collapsed: true,
          match: "/sdk/unity/overview",
          items: [
            { text: "Overview", link: "/sdk/unity/overview" },
            { text: "Installation", link: "/sdk/unity/installation" },
            { text: "Setup", link: "/sdk/unity/setup" },
            { text: "Authentication", link: "/sdk/unity/authentication" },
            { text: "Write to blockchain", link: "/sdk/unity/write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unity/read-from-blockchain" },
            { text: "Sign Messages", link: "/sdk/unity/sign-messages" },
            { text: "Deploy Contracts", link: "/sdk/unity/deploy-contracts" },
            { text: "On-Ramp Funds via Credit Card", link: "/sdk/unity/onboard-user-funds" },
            { text: "Wallet UI", link: "/sdk/unity/wallet-ui" },
            {
              text: "Advanced",
              collapsed: true,
              items: [
                { text: "Introduction", link: "/sdk/unity/Advanced/introduction" },
                { text: "Wallets", link: "/sdk/unity/Advanced/wallets" },
                { text: "Clients", link: "/sdk/unity/Advanced/clients" },
                { text: "Transfers", link: "/sdk/unity/Advanced/transfers" },
                { text: "Contracts", link: "/sdk/unity/Advanced/contracts" },
                { text: "Tokens", link: "/sdk/unity/Advanced/tokens" }
              ]
            }
          ]
        },
        {
          text: "Unreal",
          collapsed: true,
          match: "/sdk/unreal/overview",
          items: [
            { text: "Overview", link: "/sdk/unreal/overview" },
            { text: "Installation", link: "/sdk/unreal/installation" },
            { text: "Upgrading", link: "/sdk/unreal/upgrading" },
            { text: "Setup", link: "/sdk/unreal/setup" },
            { text: "Authentication", link: "/sdk/unreal/authentication" },
            { text: "Packaging", link: "/sdk/unreal/packaging" },
            { text: "API", link: "/sdk/unreal/api" }
          ]
        }
      ]
    },
    {
      text: "Mobile",
      items: [
        // { text: 'Android', link: '/sdk/android' },
        // { text: 'iOS', link: '/sdk/iOS' },
        { text: "React Native", link: "/sdk/mobile" }
      ]
    },
    {
      text: "Web3",
      items: [
        {
          text: "TypeScript",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/typescript/guides/overview" },
            { text: "Connect Wallet", link: "/sdk/typescript/guides/connect-wallet" },
            { text: "Authenticate Users with Message Signature", link: "/sdk/typescript/guides/auth-address" },
            { text: "Signing & Verifying Messages", link: "/sdk/typescript/guides/sign-message" },
            { text: "No-wallet confirmation signatures", link: "/sdk/typescript/guides/session-keys" },
            { text: "Sending Transactions", link: "/sdk/typescript/guides/send-transaction" },
            { text: "Sending ERC-20 Tokens", link: "/sdk/typescript/guides/send-erc20" },
            { text: "Sending ERC-721 (NFT) Tokens", link: "/sdk/typescript/guides/send-erc721" },
            { text: "Sending ERC-1155 (Collectible) Tokens", link: "/sdk/typescript/guides/send-erc1155" },
            { text: "Sending a Batch of Transactions", link: "/sdk/typescript/guides/send-batch-transactions" },
            { text: "Building Backends with Sequence", link: "/sdk/typescript/guides/building-backends" },
            {
              text: "Wallet Connectors",
              collapsed: true,
              items: [
                { text: "Overview", link: "/sdk/typescript/connectors/overview" },
                { text: "Wagmi", link: "/sdk/typescript/connectors/wagmi" },
                { text: "RainbowKit", link: "/sdk/typescript/connectors/rainbow-kit" },
                { text: "Web3 Onboard", link: "/sdk/typescript/connectors/web3-onboard" },
                { text: "Web3 React V6", link: "/sdk/typescript/connectors/web3-react-v6" },
                { text: "Web3Modal", link: "/sdk/typescript/connectors/web3modal" },
                { text: "FAQ", link: "/sdk/typescript/connectors/FAQ" }
              ]
            }
          ]
        },
        {
          text: "Go",
          link: "/sdk/go/overview",
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
        { text: "How do I do signature validation?", link: "/solutions/wallets/universal-wallet/examples/auth-address" }
        // ...
      ]
    }
  ],
  // apis
  "/api": [
    {
      text: "Transactions",
      collapsed: false,
      link: "/api/transactions/overview",
      items: [
        { text: "Overview", link: "/api/transactions/overview" },
        { text: "Installation", link: "/api/transactions/installation" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Fetch Fee Options", link: "/api/transactions/examples/fetch-fee-options" },
            { text: "Send Transactions", link: "/api/transactions/examples/send-transactions" },
            { text: "Fetch Transaction Receipts", link: "/api/transactions/examples/fetch-transaction-receipts" }
          ]
        }
      ]
    },
    {
      text: "Indexer",
      collapsed: false,
      link: "/api/indexer/overview",
      items: [
        { text: "Overview", link: "/api/indexer/overview" },
        { text: "Installation", link: "/api/indexer/installation" },
        {
          text: "Examples",
          collapsed: false,
          link: "/api/indexer/examples/fetch-tokens",
          items: [
            { text: "Fetch Tokens", link: "/api/indexer/examples/fetch-tokens" },
            { text: "Transaction History", link: "/api/indexer/examples/transaction-history" },
            { text: "Unique Tokens", link: "/api/indexer/examples/unique-tokens" },
            { text: "Transaction History Token Contract", link: "/api/indexer/examples/transation-history-token-contract" },
            { text: "Native Network Balance", link: "/api/indexer/examples/native-network-balance" },
            { text: "Metadata Tips", link: "/api/indexer/metadata-tips" },
            { text: "Webhooks", link: "/api/indexer/examples/webhook-listener" },
            { text: "Subscriptions", link: "/api/indexer/examples/subscriptions" }
          ]
        }
      ]
    },
    {
      text: "Analytics",
      collapsed: false,
      link: "/api/analytics/overview",
      items: [
        { text: "Overview", link: "/api/analytics/overview" },
        {
          text: "Examples",
          collapsed: false,
          link: "/api/analytics/examples/wallets",
          items: [
            { text: "Wallets", link: "/api/analytics/examples/wallets" },
            { text: "Marketplaces", link: "/api/analytics/examples/marketplace" }
          ]
        }
      ]
    },
    {
      text: "Metadata",
      collapsed: false,
      link: "/api/metadata/overview",
      items: [
        { text: "Overview", link: "/api/metadata/overview" },
        {
          text: "Examples",
          collapsed: false,
          link: "/api/metadata/token-metadata",
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
      link: "/api/marketplace/overview",
      items: [
        { text: "Overview", link: "/api/marketplace/overview" },
        // { text: 'Schema', link: '/api/marketplace/schema' },
        // { text: 'Marketplace API', link: '/api/marketplace/api' },
        {
          text: "Examples",
          collapsed: false,
          link: "/api/marketplace/examples/orderbook-transactions",
          items: [
            { text: "Creating Market Orders & Listings", link: "/api/marketplace/examples/orderbook-transactions" },
            { text: "Get Top Orders", link: "/api/marketplace/examples/get-top-orders" },
            { text: "Get Orderbook", link: "/api/marketplace/examples/get-orderbook" },
            { text: "Get User Activities", link: "/api/marketplace/examples/get-user-activities" }
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
  "/support": [
    {
      text: "Support",
      items: [
        { text: "Support", link: "/support" },
        { text: "Changelog", link: "https://0xsequence.canny.io/changelog" },
        { text: "Restricted Regions", link: "/support/restricted-regions" },
        { text: "FAQ", link: "https://support.sequence.xyz" },
        { text: "Token Directory", link: "/support/token-directory" },
        { text: "Discord", link: "https://discord.gg/sequence" },
        { text: "We're hiring!", link: "https://horizon.io/careers" },
        { text: "Contact Us", link: "https://support.sequence.xyz" }
      ]
    },
    {
      text: "Sequence Builder Admin",
      items: [
        { text: "Project Management", link: "/support/builder/project-management" },
        { text: "Project Settings", link: "/support/builder/project-settings" }
      ]
    }
  ]
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
    colorScheme: "dark",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIGljb25Vcmw6IHsgbGlnaHQ6ICcvaW1nL2Zhdmljb24uaWNvJywgZGFyazogJy9pbWcvZmF2aWNvbi5pY28nIH0sXG4gIGxvZ29Vcmw6IHtcbiAgICBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsXG4gICAgZGFyazogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWRhcmsuc3ZnJyxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIC8vIE5PVEU6IHRha2luZyB1cCB2YWx1YWJsZSBzcGFjZSwgd2lsbCBtb3ZlIHRob3NlXG4gIC8vIHRvIGZvb3RlciBhbmQgb3RoZXIgc2VjdGlvbnNcbiAgLy8gc29jaWFsczogW1xuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdnaXRodWInLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdkaXNjb3JkJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ3gnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8veC5jb20vMHhzZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gXSxcblxuICB0aGVtZToge1xuICAgIC8vIGFjY2VudENvbG9yOiB7XG4gICAgLy8gICBsaWdodDogJyM0NDJDQTgnLFxuICAgIC8vICAgZGFyazogJyM5OUFERUQnLFxuICAgIC8vIH0sXG4gICAgY29sb3JTY2hlbWU6ICdkYXJrJyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgZGVmYXVsdDogJ0ludGVyJyxcbiAgICAgICAgLy8gbW9ubzogJ1JvYm90byBNb25vJ1xuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBsaWdodDogJyNmMGYwZjAnLFxuICAgICAgICAgIGRhcms6ICcjMTExMTExJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYmFja2dyb3VuZDU6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTExMTExJyxcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGJhY2tncm91bmREYXJrOiB7XG4gICAgICAgIC8vICAgbGlnaHQ6ICcjZGRkZGRkJyxcbiAgICAgICAgLy8gICBkYXJrOiAnIzE1MTUxNSdcbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2phbWVzbGF3dG9uL0NvZGluZy9kb2NzLXYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamFtZXNsYXd0b24vQ29kaW5nL2RvY3MtdjIvbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYW1lc2xhd3Rvbi9Db2RpbmcvZG9jcy12Mi9uYXYudHNcIjtpbXBvcnQgdHlwZSB7IFNpZGViYXIsIFRvcE5hdiB9IGZyb20gJ3ZvY3MnXG5cbmV4cG9ydCBjb25zdCB0b3BOYXYgPSBbXG4gIHsgdGV4dDogJ1NvbHV0aW9ucycsIFxuICBpdGVtczogW1xuICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JywgbWF0Y2g6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnIH0sXG4gICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL292ZXJ2aWV3JyB9LFxuICAgIHsgdGV4dDogJ0NvbGxlY3RpYmxlcycsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LWFuLWl0ZW0tY29sbGVjdGlvbicsIG1hdGNoOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1hbi1pdGVtLWNvbGxlY3Rpb24nIH0sXG4gICAgeyB0ZXh0OiAnUGF5bWVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9wYXltZW50cy9vbnJhbXBzL2ZpYXQtb24tcmFtcHMnLCBtYXRjaDogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy9maWF0LW9uLXJhbXBzJyB9LFxuICAgIHsgdGV4dDogJ0J1aWxkZXIgQ29uc29sZScsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSwgXG4gICAgXVxuICB9LFxuICB7IHRleHQ6ICdDaGFpbiBTdXBwb3J0JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydCcsIG1hdGNoOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9jaGFpbi1zdXBwb3J0JyB9LFxuXVxufSxcbiAge1xuICAgIHRleHQ6ICdSZXNvdXJjZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgeyB0ZXh0OiAnR3VpZGVzJywgbGluazogJy9ndWlkZXMvZ3VpZGUtb3ZlcnZpZXcnLCBtYXRjaDogJy9ndWlkZXMvZ3VpZGUtb3ZlcnZpZXcnIH0sXG4gICAgeyB0ZXh0OiAnVGVtcGxhdGVzJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnLCBtYXRjaDogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnIH0sXG4gICAgXVxuICB9LFxuICB7IFxuICAgIHRleHQ6ICdTREtzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVW5pdHknLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1VucmVhbCcsIGxpbms6ICcvc2RrL3VucmVhbC9vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdUeXBlc2NyaXB0JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vdmVydmlldycsIG1hdGNoOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ0dvJywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvZ28vb3ZlcnZpZXcnIH0sXG4gICAgICAvLyB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcsIG1hdGNoOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgeyB0ZXh0OiAnTW9iaWxlJywgbGluazogJy9zZGsvbW9iaWxlJywgbWF0Y2g6ICcvc2RrL21vYmlsZScgfSxcbiAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycsIG1hdGNoOiAnL3Nkay9pT1MnIH1cbiAgICBdXG4gIH0sXG5cbiAgLy8gcmVwbGFjZSBsaW5rcy5cbiAgeyBcbiAgICB0ZXh0OiAnQVBJcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1RyYW5zYWN0aW9ucyBBUEknLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnLCBtYXRjaDogJy9hcGkvdHJhbnNhY3Rpb25zL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnQW5hbHl0aWNzIEFQSScsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycsIG1hdGNoOiAnL2FwaS9hbmFseXRpY3Mvb3ZlcnZpZXcnfSxcbiAgICAgIHsgdGV4dDogJ0luZGV4ZXIgQVBJJywgbGluazogJy9hcGkvaW5kZXhlci9vdmVydmlldycsICBtYXRjaDogJy9hcGkvaW5kZXhlci9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ01ldGFkYXRhIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JywgIG1hdGNoOiAnL2FwaS9tZXRhZGF0YS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL292ZXJ2aWV3JywgIG1hdGNoOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ05vZGUgR2F0ZXdheScsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScsICBtYXRjaDogJy9hcGkvbm9kZS1nYXRld2F5JyB9LFxuICAgIF1cbiAgfSxcblxuICB7IFxuICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnU3VwcG9ydCcsIGxpbms6ICcvc3VwcG9ydCcgfSxcbiAgICAgIHsgdGV4dDogJ0NoYW5nZWxvZycsIGxpbms6ICdodHRwczovLzB4c2VxdWVuY2UuY2FubnkuaW8vY2hhbmdlbG9nJyB9LFxuICAgICAgeyB0ZXh0OiAnUmVzdHJpY3RlZCBSZWdpb25zJywgbGluazogJy9zdXBwb3J0L3Jlc3RyaWN0ZWQtcmVnaW9ucycgfSxcbiAgICAgIHsgdGV4dDogJ1Rva2VuIERpcmVjdG9yeScsIGxpbms6ICcvc3VwcG9ydC90b2tlbi1kaXJlY3RvcnknIH0sXG4gICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2VcXCdyZSBoaXJpbmchJywgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgIF1cbiAgfVxuXSBhcyBUb3BOYXZcblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSB7XG4gIC8vIE92ZXJ2aWV3XG4gICcvc29sdXRpb25zJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdHZXR0aW5nIFN0YXJ0ZWQnLFxuICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nZXR0aW5nLXN0YXJ0ZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ09uYm9hcmQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdFbWJlZGRlZCBXYWxsZXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9vdmVydmlldycsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L292ZXJ2aWV3J30sXG4gICAgICAgICAge3RleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvcXVpY2tzdGFydCd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2V0dXAnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldCd9LFxuICAgICAgICAgICAge3RleHQ6ICdHb29nbGUgU2V0dXAnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldC9nb29nbGUtY29uZmlndXJhdGlvbid9LFxuICAgICAgICAgICAge3RleHQ6ICdBcHBsZSBTZXR1cCcsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L2FwcGxlLWNvbmZpZ3VyYXRpb24nfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgICAge3RleHQ6ICdNYW5hZ2UgU2Vzc2lvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9tYW5hZ2Utc2Vzc2lvbnMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnVXNlIFdhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy91c2Utd2FsbGV0cyd9LFxuICAgICAgICAgICAge3RleHQ6ICdPbi1yYW1wJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvb24tcmFtcCd9LFxuICAgICAgICAgICAge3RleHQ6ICdWYWxpZGF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdmFsaWRhdGlvbid9LFxuICAgICAgICAgICAge3RleHQ6ICdWZXJpZmljYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy92ZXJpZmljYXRpb24nfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnVHJhbnNhY3Rpb24gUmVjZWlwdHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy90cmFuc2FjdGlvbi1yZWNlaXB0cyd9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge3RleHQ6ICdBcmNoaXRlY3R1cmUnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUnfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnSW1wbGVtZW50YXRpb24gRGV0YWlscycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnQWN0aW9uIHBheWxvYWRzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvaW1wbGVtZW50YXRpb24tZGV0YWlscy9hY3Rpb24tcGF5bG9hZHMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnUmVzcG9uc2UgcGF5bG9hZHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9pbXBsZW1lbnRhdGlvbi1kZXRhaWxzL3Jlc3BvbnNlLXBheWxvYWRzJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1RydXN0IENvbnRyYWN0IFJlY292ZXJ5IEZsb3cnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9pbXBsZW1lbnRhdGlvbi1kZXRhaWxzL3RydXN0LWNvbnRyYWN0LXJlY292ZXJ5LWZsb3cnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnRW5jbGF2ZS1WZXJpZmljYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9pbXBsZW1lbnRhdGlvbi1kZXRhaWxzL2VuY2xhdmUtdmVyaWZpY2F0aW9uJ30sXG4gICAgICAgICAgICB7dGV4dDogJ0ludGVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9pbXBsZW1lbnRhdGlvbi1kZXRhaWxzL2ludGVudHMnfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnU2VxdWVuY2UgS2l0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb25maWd1cmF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnT24tcmFtcCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L29uLXJhbXAnIH0sXG4gICAgICAgIHsgdGV4dDogJ0NoZWNrb3V0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY2hlY2tvdXQnIH0sXG4gICAgICAgIHsgdGV4dDogJ0N1c3RvbSBDb25uZWN0b3JzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY3VzdG9tLWNvbm5lY3RvcnMnIH1cbiAgICAgIF1cbiAgICAgfSxcblxuICAgICAgICB7IHRleHQ6ICdXYWxsZXQgTGlua2luZycsIGNvbGxhcHNlZDogdHJ1ZSwgXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvbGluay13YWxsZXRzL292ZXJ2aWV3J30sXG4gICAgICAgICAge3RleHQ6ICdJbnRlZ3JhdGlvbiBHdWlkZScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvbGluay13YWxsZXRzL2ludGVncmF0aW9uLWd1aWRlJ31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ1VuaXZlcnNhbCBXYWxsZXQnLCBjb2xsYXBzZWQ6IHRydWUsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9vdmVydmlldycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9xdWlja3N0YXJ0J30sXG4gICAgICAgICAge3RleHQ6ICdFeGFtcGxlcycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvY29ubmVjdC13YWxsZXQnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2lnbi1tZXNzYWdlJ30sXG4gICAgICAgICAgICB7dGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZXNzaW9uLWtleXMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC10cmFuc2FjdGlvbid9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1lcmMyMCd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjNzIxJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTExNTUgKENvbGxlY3RpYmxlKSBUb2tlbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1lcmMxMTU1J30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9idWlsZGluZy1iYWNrZW5kcyd9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gIHt0ZXh0OiAnU2VxdWVuY2UgS2l0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3NlcXVlbmNlLWtpdCd9LFxuICAgICAgICAgIHt0ZXh0OiAnU3VwcG9ydGVkIFBsYXRmb3JtcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9wbGF0Zm9ybXMnfSxcbiAgICAgICAgICB7dGV4dDogJ0ZpYXQgT24tUmFtcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZmlhdC1vbi1yYW1wcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnS2V5IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQva2V5LW1hbmFnZW1lbnQnfVxuICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTW9uZXRpemUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ1doaXRlLWxhYmVsIE1hcmtldHBsYWNlJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL3doaXRlLWxhYmVsLW1hcmtldHBsYWNlJyB9LFxuICAgICAgICB7IHRleHQ6ICdCdWlsZCB5b3VyIEN1c3RvbSBNYXJrZXRwbGFjZScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svcXVpY2tzdGFydCd9LFxuICAgICAgICBdXG4gICAgICAgfSxcbiAgICAgICB7IHRleHQ6ICdGaWF0IE9uLXJhbXBzJywgbGluazogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy9maWF0LW9uLXJhbXBzJywgbWF0Y2g6ICcvc29sdXRpb25zL3BheW1lbnRzL29ucmFtcHMvZmlhdC1vbi1yYW1wcycgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdQb3dlcicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3Bvd2VyLW92ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3lhYmxlIENvbnRyYWN0cycgLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbnRyYWN0cyd9LFxuICAgICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIENvbGxlY3RpYmxlIENvbnRyYWN0JywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uJ30sXG4gICAgICAgICAgLy8ge3RleHQ6ICdNaW50IEluLUdhbWUgSXRlbXMgYW5kIEFjaGlldmVtZW50cyAoRVJDMTE1NSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMC1taW50LWl0ZW1zLWZyb20tRVJDMTE1NSd9LFxuICAgICAgICAgIC8vIHt0ZXh0OiAnTWludCBEaWdpdGFsIENvbGxlY3RpYmxlcyAoRVJDNzIxKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAyLW1pbnQtY29sbGVjdGlibGVzLWZyb20tRVJDNzIxJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGFuIEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LUVSQzIwLWN1cnJlbmN5J30sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbGxlY3Rpb25zJ1xuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6ICdRdWVyeWluZyBCbG9ja2NoYWluIERhdGEnLCBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvaW5kZXhlcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93ZWJob29rcyd9LFxuICAgICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogJ0FuYWx5dGljcycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvYW5hbHl0aWNzJyBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiAnVHJhbnNhY3Rpb24gTWFuYWdlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvdHJhbnNhY3Rpb25zJyBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiAnR2FzIFNwb25zb3JzaGlwJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuaycgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogJ05vZGUgR2F0ZXdheScsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbm9kZS1nYXRld2F5JyBcbiAgICAgIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ01pbnRlcicsIGxpbms6ICcvc29sdXRpb25zL21pbnRlcicgfVxuICAgICAgXVxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXInLFxuICAgIC8vICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIHt0ZXh0OiAnQnVpbGRlciBQcm9qZWN0IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCd9LFxuICAgICAgICB7dGV4dDogJ0J1aWxkZXIgU2V0dGluZ3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL3Byb2plY3Qtc2V0dGluZ3MnfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnRUlQNTE4OSB2cy4gNDMzNycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzLzUxODktNDMzNycgfSxcbiAgICAgICAgeyB0ZXh0OiAnV2h5IFNtYXJ0IENvbnRyYWN0IFdhbGxldHM/JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvd2FsbGV0LWNvbnRyYWN0cy93aHknIH0sXG4gICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0IEludGVybmFscycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ0RlcGxveW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvZGVwbG95bWVudCd9LFxuICAgICAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIHYxJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgICAge3RleHQ6ICdEZXBsb3knLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvZGVwbG95J30sXG4gICAgICAgICAgICB7dGV4dDogJ1dhbGxldCBGYWN0b3J5JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3dhbGxldC1mYWN0b3J5J30sXG4gICAgICAgICAgICB7dGV4dDogJ1dhbGxldCBDb25maWd1cmF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3dhbGxldC1jb25maWd1cmF0aW9uJ30sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ1RyYW5zYWN0aW9uIEVuY29kaW5nJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxLzA3LXRyYW5zYWN0aW9uLWVuY29kaW5nJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NpZ25hdHVyZSBFbmNvZGluZycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS9zaWduYXR1cmUtZW5jb2RpbmcnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2FsbGV0IENvbnRleHQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWNvbnRleHQnfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXF1ZW5jZSB2MicsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2RlcGxveSd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsIGxpbms6IFwiL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjIvY29uZmlndXJhdGlvblwifSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7dGV4dDogJ0NvbnRyYWN0IEF1ZGl0cycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy9jb250cmFjdC1hdWRpdHMnfSxcbiAgICAgICAgXX0sXG4gICAgICBdXG4gICAgfSxcbiAgICBcbiAgXSxcblxuICAnL2d1aWRlcyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR3VpZGVzJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIEdhbWUgd2l0aCBXZWJHTCcsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZScsXG4gICAgICAvLyBpdGVtczogW1xuICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNhdmlhdG9yLXdlYjMtZ2FtZS13aXRoLXdlYmdsJyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdQcm9qZWN0IFNldHVwIFdpdGggV2VicGFjaycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzEtcHJvamVjdC1zZXR1cC13aXRoLXdlYnBhY2snIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ0ludGVncmF0ZSBTZXF1ZW5jZSBLaXQgV2l0aCBXYWFTJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMi1pbnRlZ3JhdGUtc2VxdWVuY2Uta2l0JyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBDb2xsZWN0aWJsZXMgQ29udHJhY3QnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMzLWRlcGxveS1hLWNvbGxlY3RpYmxlcy1jb250cmFjdCcgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IGEgUmVtb3RlIE1pbnRlcicsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzQtZGVwbG95LWEtcmVtb3RlLW1pbnRlci0tbWludC1pbi1nYW1lLWFjaGlldmVtZW50LXRva2VucycgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgSXRlbXMgSW4tZ2FtZScsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzUtbGV2ZXJhZ2UtaXRlbXMtaW4tZ2FtZScgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnQnVybiBJbi1nYW1lIEFjaGlldmVtZW50IFRva2VucycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzYtYnVybi1pbi1nYW1lLWFjaGlldmVtZW50LXRva2VucycgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnKE9wdGlvbmFsKSBJbnRlZ3JhdGUgRW1iZWRkZWQgV2FsbGV0IEludG8gU2VxdWVuY2UgS2l0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNy1vcHRpb25hbC1pbnRlZ3JhdGUtZW1iZWRkZWQtd2FsbGV0LWludG8tc2VxdWVuY2Uta2l0JyB9LFxuICAgICAgLy8gXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkIGEgVW5pdHkgR2FtZScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZScsXG4gICAgICAvLyBpdGVtczogW1xuICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRyby10by1qZWxseS1mb3Jlc3QnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ0J1aWxkIGEgR2FtZSBMb29wJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjYnVpbGQtYS1nYW1lLWxvb3AnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ0ludGVncmF0ZSBFbWJlZGRlZCBXYWxsZXRzJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjaW50ZWdyYXRlLXNvY2lhbC1zaWduLWluLWFuZC1zZXF1ZW5jZXMtZW1iZWRkZWQtd2FsbGV0LXNvbHV0aW9uJyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgQ29sbGVjdGlibGVzJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtY29sbGVjdGlibGVzLWNvbnRyYWN0JyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgUmVtb3RlIE1pbnRlcicsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2RlcGxveS1hLXJlbW90ZS1taW50ZXInfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnTWludGluZyBUb2tlbnMgdG8gSW52ZW50b3J5JywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbWludC1pbi1nYW1lLXRva2Vucy10by10aGUtcGxheWVycy1pbnZlbnRvcnknIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ1B1cmNoYXNlIENvbGxlY3RpYmxlcyB3aXRoIEVSQzIwIFRva2VucycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1cm4taW4tZ2FtZS10b2tlbnMtaW4tZXhjaGFuZ2UtZm9yLW90aGVycycgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnQnVpbGRpbmcgYW4gSW4tZ2FtZSBTaG9wJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjYnVpbGRpbmctdGhlLXNob3AtcGFnZXMtYW5kLXNldHRpbmctdGhlLW1pbnRpbmctcmVxdWlyZW1lbnRzJyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdMZXZlcmFnZSBQdXJjaGFzZWQgSXRlbXMgSW4tZ2FtZScsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2xldmVyYWdlLXB1cmNoYXNlZC1pdGVtcy1pbi1nYW1lJyB9LFxuICAgICAgLy8gXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkIGEgQ29sbGVjdGlibGUgTWludGluZyBTZXJ2aWNlJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MnLFxuICAgICAgLy8gaXRlbXM6IFtcbiAgICAgIC8vICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyNtaW50LWNvbGxlY3RpYmxlcy11c2luZy1hLWdhc2xlc3Mtc2VydmVybGVzcy10cmFuc2FjdGlvbnMtYXBpJywgbWF0Y2g6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjbWludC1jb2xsZWN0aWJsZXMtdXNpbmctYS1nYXNsZXNzLXNlcnZlcmxlc3MtdHJhbnNhY3Rpb25zLWFwaSd9LFxuICAgICAgLy8gICB7IHRleHQ6ICdTZXR1cCBDbG91ZGZsYXJlIEVudmlyb25tZW50JywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMxLXNldHVwLWNsb3VkZmxhcmUtZW52aXJvbm1lbnQtd2l0aC13cmFuZ2xlci1jbGktYW5kLWRlcGxveS1hLXRlc3QnLCBtYXRjaDogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMxLXNldHVwLWNsb3VkZmxhcmUtZW52aXJvbm1lbnQtd2l0aC13cmFuZ2xlci1jbGktYW5kLWRlcGxveS1hLXRlc3QnfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95LCBTcG9uc29yICYgVXBkYXRlIE1ldGFkYXRhIEZvciBhbiBFUkMxMTU1JywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMyLWRlcGxveS1zcG9uc29yLWFuZC11cGRhdGUtbWV0YWRhdGEtZm9yLWFuLWVyYzExNTUtY29udHJhY3Qtd2l0aC1zZXF1ZW5jZS1idWlsZGVyJ30sXG4gICAgICAvLyAgIHsgdGV4dDogJ1VzZSBFdGhBdXRoUHJvb2YgdG8gUHJldmVudCBFT0EgRERvUycsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjMy11c2UtZXRoYXV0aHByb29mLXRvLXByZXZlbnQtZW9hLWRkb3MnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ01pbnQgYSBDb2xsZWN0aWJsZSBUbyBXYWxsZXQnLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzQtbWludC1hLWNvbGxlY3RpYmxlLXRvLXdhbGxldCcgfSxcbiAgICAgIC8vIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbiBNZXRhZGF0YScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZScsXG4gICAgICAvLyBpdGVtczogW1xuICAgICAgLy8gICB7IHRleHQ6ICdPYnRhaW4gYSBTZWNyZXQgQVBJIEtleScsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzEtb2J0YWluLWEtc2VjcmV0LWFwaS1rZXknfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnQ3JlYXRlIENvbGxlY3Rpb24nLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSMyLWNyZWF0ZS1jb2xsZWN0aW9uLWZyb20tYS1jdXJsLXJlcXVlc3QnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ0NyZWF0ZSBUb2tlbicsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzMtY3JlYXRlLXRva2VuLXVzaW5nLXRva2VuaWQnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ0NyZWF0ZSBBc3NldCcsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzQtY3JlYXRlLWFzc2V0LXVzaW5nLXRva2VuaWQnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ1N0b3JlIGFuIEltYWdlJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNS1zdG9yZS1pbWFnZS1hc3NldCcgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnVXBkYXRlIHRvIE5vbi1wcml2YXRlJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNi11cGRhdGUtbm9uLXByaXZhdGUtdG9rZW4nIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ1B1Ymxpc2ggQ29sbGVjdGlvbicsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzctcHVibGlzaC1jb2xsZWN0aW9uLWZyb20tYS1jdXJsLXJlcXVlc3QnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ1JlbmRlciBBc3NldCBmcm9tIEFQSScsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzgtcmVuZGVyLWFzc2V0LWZyb20tYXBpLXB1YmxpY2x5JyB9LFxuICAgICAgLy8gXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkIGEgVHJlYXN1cmUgQ2hlc3Qgd2l0aCBBSSBNaW50aW5nJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL3RyZWFzdXJlLWNoZXN0LWd1aWRlJyxcbiAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAvLyAgIHsgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXIgQ29uc29sZSBTaWdudXAgJiBQcm9qZWN0IENyZWF0aW9uJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMxLWJ1aWxkZXItY29uc29sZS1zaWdudXAtLXByb2plY3QtY3JlYXRpb24nIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ0FjY2VzcyBLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMi1hY2Nlc3Mta2V5LW1hbmFnZW1lbnQnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCBpbnRlZ3JhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMy1zZXF1ZW5jZS1raXQtaW50ZWdyYXRpb24nIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ2lmcmFtZS10by1EYXBwIENvbW11bmljYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzQtaWZyYW1lLXRvLWRhcHAtY29tbXVuaWNhdGlvbicgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IGEgQ29udHJhY3QgJiBTcG9uc29yIEdhcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNS1kZXBsb3ktYS1jb250cmFjdC0tc3BvbnNvci1nYXMnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSBhIENsb3VkZmxhcmUgV29ya2VyJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM2LWRlcGxveS1hLWNsb3VkZmxhcmUtd29ya2VyJyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdHZW5lcmF0aW5nIEFJIFByb21wdHMgJiBJbWFnZXMnLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzctZ2VuZXJhdGluZy1haS1wcm9tcHRzLS1pbWFnZXMnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ1N0b3JlIE1lZGlhIFRvIFNlcXVlbmNlIE1ldGFkYXRhIFNlcnZpY2UnLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzgtc3RvcmUtbWVkaWEtdG8tc2VxdWVuY2UtbWV0YWRhdGEtc2VydmljZScgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnU2VjdXJpbmcgWW91ciBDbG91ZGZsYXJlIFdvcmtlcicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjOS1zZWN1cmluZy15b3VyLWNsb3VkZmxhcmUtd29ya2VyJyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICcoT3B0aW9uYWwpIE5haXZlIE1pbnQgUmVzdHJpY3Rpb24gUGVyIFdhbGxldCcsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMTAtb3B0aW9uYWwtbmFpdmUtbWludC1yZXN0cmljdGlvbi1wZXItd2FsbGV0JyB9LFxuXG4gICAgICAvLyBdXG4gICAgfSxcbiAgICB7IHRleHQ6ICdCdWlsZCBhIEJhY2tlbmQgVHJhbnNhY3Rpb24gU2VydmljZScsIGNvbGxhcHNlZDogdHJ1ZSwgbGluazogJy9ndWlkZXMvYnVpbGRpbmctcmVsYXlpbmctc2VydmVyJyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdMZXZlcmFnZSBTZXF1ZW5jZSBBbmFseXRpY3MgQVBJIGluIER1bmUnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgbGluazogJy9ndWlkZXMvYW5hbHl0aWNzLWd1aWRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhbiBFbWJlZGRlZCBXYWxsZXQgTGlua2luZyBTZXJ2aWNlJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL2xpbmtlZC13YWxsZXRzLWd1aWRlJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkIGEgQ3VzdG9tIE1hcmtldHBsYWNlJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZScsXG4gICAgICAvLyBpdGVtczogW1xuICAgICAgLy8gICB7IHRleHQ6ICdNaW50aW5nJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzEtbWludGluZycgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnV2FsbGV0IEF1dGhlbnRpY2F0aW9uJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzItd2FsbGV0LWF1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdCbG9ja2NoYWluIFF1ZXJpZXMnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMy1ibG9ja2NoYWluLXF1ZXJpZXMnIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ011bHRpLXdhbGxldCB0eXBlcycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM0LW11bHRpLXdhbGxldC10eXBlcycgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnUmVxdWVzdCBDcmVhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM1LXJlcXVlc3QtY3JlYXRpb24nIH0sXG4gICAgICAvLyAgIHsgdGV4dDogJ09yZGVyIEFjY2VwdGluZycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM2LW9yZGVyLWFjY2VwdGluZycgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnKE9wdGlvbmFsKSBFbmFibGUgRW1iZWRkZWQgV2FsbGV0JywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzctb3B0aW9uYWwtaW50ZWdyYXRlLWVtYmVkZGVkLXdhbGxldC1pbnRvLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgIC8vIF1cbiAgICB9IFxuICBdXG59LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdJbnRlZ3JhdGUgdG9rZW4gcmV3YXJkcyBpbnRvIHlvdXIgRGlzY29yZCBzZXJ2ZXInLFxuICAgIC8vICAgbGluazogJy9ndWlkZXMvZGlzY29yZCdcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZW1wbGF0ZXMnLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZS1vdmVydmlldydcbiAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAvLyAgIHsgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLWVtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnQnVpbGQgYSBCYWNrZW5kIFRyYW5zYWN0aW9uIE1hbmFnZXInLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvYnVpbGRpbmctcmVsYXlpbmctc2VydmVyJyB9XG4gICAgICAvLyAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSSBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScgfVxuICAgICAgLy8gXVxuICAgIH1cbl0sXG5cbiAgLy8gU0RLc1xuICAnL3Nkayc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2FtZSBFbmdpbmUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVW5pdHknLCBjb2xsYXBzZWQ6IHRydWUsIG1hdGNoOiAnL3Nkay91bml0eS9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL3Nkay91bml0eS9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2V0dXAnLCBsaW5rOiAnL3Nkay91bml0eS9zZXR1cCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBdXRoZW50aWNhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1dyaXRlIHRvIGJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS93cml0ZS10by1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1JlYWQgZnJvbSBCbG9ja2NoYWluJywgbGluazogJy9zZGsvdW5pdHkvcmVhZC1mcm9tLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2lnbiBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3VuaXR5L3NpZ24tbWVzc2FnZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IENvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L2RlcGxveS1jb250cmFjdHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnT24tUmFtcCBGdW5kcyB2aWEgQ3JlZGl0IENhcmQnLCBsaW5rOiAnL3Nkay91bml0eS9vbmJvYXJkLXVzZXItZnVuZHMnfSxcbiAgICAgICAgICB7IHRleHQ6ICdXYWxsZXQgVUknLCBsaW5rOiAnL3Nkay91bml0eS93YWxsZXQtdWknIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQWR2YW5jZWQnLCBjb2xsYXBzZWQ6IHRydWUsICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvaW50cm9kdWN0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3dhbGxldHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDbGllbnRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvY2xpZW50cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1RyYW5zZmVycycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3RyYW5zZmVycycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VucycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3Rva2VucycgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ1VucmVhbCcsIGNvbGxhcHNlZDogdHJ1ZSwgbWF0Y2g6ICcvc2RrL3VucmVhbC9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9zZGsvdW5yZWFsL2luc3RhbGxhdGlvbicgfSwgXG4gICAgICAgICAgeyB0ZXh0OiAnVXBncmFkaW5nJywgbGluazogJy9zZGsvdW5yZWFsL3VwZ3JhZGluZycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VucmVhbC9zZXR1cCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBdXRoZW50aWNhdGlvbicsIGxpbms6ICcvc2RrL3VucmVhbC9hdXRoZW50aWNhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQYWNrYWdpbmcnLCBsaW5rOiAnL3Nkay91bnJlYWwvcGFja2FnaW5nJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0FQSScsIGxpbms6ICcvc2RrL3VucmVhbC9hcGknIH1cbiAgICAgICAgICBdIFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTW9iaWxlJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIC8vIHsgdGV4dDogJ0FuZHJvaWQnLCBsaW5rOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdpT1MnLCBsaW5rOiAnL3Nkay9pT1MnIH0sXG4gICAgICAgIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL21vYmlsZScgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0ZXh0OiAnV2ViMycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdUeXBlU2NyaXB0JywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9vdmVydmlldyd9LFxuICAgICAgICAgIHt0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9jb25uZWN0LXdhbGxldCd9LFxuICAgICAgICAgIHt0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9hdXRoLWFkZHJlc3MnfSxcbiAgICAgICAgICB7dGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zaWduLW1lc3NhZ2UnfSxcbiAgICAgICAgICB7dGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3Nlc3Npb24ta2V5cyd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLXRyYW5zYWN0aW9uJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWVyYzIwJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmM3MjEnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTExNTUgKENvbGxlY3RpYmxlKSBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWVyYzExNTUnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucyd9LFxuICAgICAgICAgIHt0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2J1aWxkaW5nLWJhY2tlbmRzJ30sXG4gICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29ubmVjdG9ycycsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvb3ZlcnZpZXcnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2FnbWknLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2FnbWknfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnUmFpbmJvd0tpdCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9yYWluYm93LWtpdCd9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzIE9uYm9hcmQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1vbmJvYXJkJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1dlYjMgUmVhY3QgVjYnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1yZWFjdC12Nid9LFxuICAgICAgICAgICAge3RleHQ6ICdXZWIzTW9kYWwnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViM21vZGFsJ30sXG4gICAgICAgICAgICB7dGV4dDogJ0ZBUScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9GQVEnfSxcbiAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgICB7IHRleHQ6ICdHbycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JywgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnfSxdXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29tbW9uIFF1ZXN0aW9ucycsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdIb3cgZG8gSSBkbyBzaWduYXR1cmUgdmFsaWRhdGlvbj8nLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJyB9XG4gICAgICAgIC8vIC4uLlxuICAgICAgXVxuICAgIH0sXG4gIF0sXG5cbiAgLy8gYXBpc1xuICAnL2FwaSc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnVHJhbnNhY3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgIHt0ZXh0OiAnRXhhbXBsZXMnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0ZldGNoIEZlZSBPcHRpb25zJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL2ZldGNoLWZlZS1vcHRpb25zJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NlbmQgVHJhbnNhY3Rpb25zJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL3NlbmQtdHJhbnNhY3Rpb25zJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0ZldGNoIFRyYW5zYWN0aW9uIFJlY2VpcHRzJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL2ZldGNoLXRyYW5zYWN0aW9uLXJlY2VpcHRzJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0luZGV4ZXInLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGxpbms6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnfSxcbiAgICAgICAge3RleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS9pbmRleGVyL2luc3RhbGxhdGlvbid9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9mZXRjaC10b2tlbnMnLCBpdGVtczogW1xuICAgICAgICB7dGV4dDogJ0ZldGNoIFRva2VucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvZmV0Y2gtdG9rZW5zJ30sXG4gICAgICAgIHt0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeScsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhY3Rpb24taGlzdG9yeSd9LFxuICAgICAgICB7dGV4dDogJ1VuaXF1ZSBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3VuaXF1ZS10b2tlbnMnfSxcbiAgICAgICAge3RleHQ6ICdUcmFuc2FjdGlvbiBIaXN0b3J5IFRva2VuIENvbnRyYWN0JywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy90cmFuc2F0aW9uLWhpc3RvcnktdG9rZW4tY29udHJhY3QnfSxcbiAgICAgICAge3RleHQ6ICdOYXRpdmUgTmV0d29yayBCYWxhbmNlJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9uYXRpdmUtbmV0d29yay1iYWxhbmNlJ30sXG4gICAgICAgIHt0ZXh0OiAnTWV0YWRhdGEgVGlwcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvbWV0YWRhdGEtdGlwcyd9LFxuICAgICAgICB7dGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy93ZWJob29rLWxpc3RlbmVyJ30sXG4gICAgICAgIHt0ZXh0OiAnU3Vic2NyaXB0aW9ucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvc3Vic2NyaXB0aW9ucyd9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQW5hbHl0aWNzJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBsaW5rOiAnL2FwaS9hbmFseXRpY3Mvb3ZlcnZpZXcnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldyd9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgbGluazogJy9hcGkvYW5hbHl0aWNzL2V4YW1wbGVzL3dhbGxldHMnLCBpdGVtczogW1xuICAgICAgICB7dGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL2FwaS9hbmFseXRpY3MvZXhhbXBsZXMvd2FsbGV0cyd9LFxuICAgICAgICB7dGV4dDogJ01hcmtldHBsYWNlcycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9leGFtcGxlcy9tYXJrZXRwbGFjZSd9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01ldGFkYXRhJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBsaW5rOiAnL2FwaS9tZXRhZGF0YS9vdmVydmlldycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JyB9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgbGluazogJy9hcGkvbWV0YWRhdGEvdG9rZW4tbWV0YWRhdGEnLCBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdUb2tlbiBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL3Rva2VuLW1ldGFkYXRhJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb250cmFjdCBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL2NvbnRyYWN0LW1ldGFkYXRhJyB9LFxuICAgICAgICB7IHRleHQ6ICdSRVNUIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhL3Jlc3QtYXBpJyB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWFya2V0cGxhY2UnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL292ZXJ2aWV3JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbWFya2V0cGxhY2Uvb3ZlcnZpZXcnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ1NjaGVtYScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL3NjaGVtYScgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvYXBpJyB9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvb3JkZXJib29rLXRyYW5zYWN0aW9ucycsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdDcmVhdGluZyBNYXJrZXQgT3JkZXJzICYgTGlzdGluZ3MnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9vcmRlcmJvb2stdHJhbnNhY3Rpb25zJ30sXG4gICAgICAgICAge3RleHQ6ICdHZXQgVG9wIE9yZGVycycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC10b3Atb3JkZXJzJ30sXG4gICAgICAgICAge3RleHQ6ICdHZXQgT3JkZXJib29rJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LW9yZGVyYm9vayd9LFxuICAgICAgICAgIHt0ZXh0OiAnR2V0IFVzZXIgQWN0aXZpdGllcycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC11c2VyLWFjdGl2aXRpZXMnfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTm9kZSBHYXRld2F5JyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSAgICAgIF1cbiAgICB9LFxuICBdLFxuICBcbiAgLy8gU3VwcG9ydFxuICAnL3N1cHBvcnQnOiBcbiAgICBbXG4gICAgICB7XG4gICAgdGV4dDogJ1N1cHBvcnQnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdTdXBwb3J0JywgbGluazogJy9zdXBwb3J0JyB9LFxuICAgICAgeyB0ZXh0OiAnQ2hhbmdlbG9nJywgbGluazogJ2h0dHBzOi8vMHhzZXF1ZW5jZS5jYW5ueS5pby9jaGFuZ2Vsb2cnIH0sXG4gICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICB7IHRleHQ6ICdUb2tlbiBEaXJlY3RvcnknLCBsaW5rOiAnL3N1cHBvcnQvdG9rZW4tZGlyZWN0b3J5JyB9LFxuICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICB7IHRleHQ6ICdXZVxcJ3JlIGhpcmluZyEnLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXSwgXG4gIH0sXG4gIHtcbiAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXIgQWRtaW4nLFxuICBpdGVtczogW1xuICAgIHsgdGV4dDogJ1Byb2plY3QgTWFuYWdlbWVudCcsIGxpbms6ICcvc3VwcG9ydC9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCcgfSxcbiAgICB7IHRleHQ6ICdQcm9qZWN0IFNldHRpbmdzJywgbGluazogJy9zdXBwb3J0L2J1aWxkZXIvcHJvamVjdC1zZXR0aW5ncycgfSxcbiAgICBdLFxuICB9XG5dXG5cblxuXG5cblxuXG5cbn0gYXMgU2lkZWJhclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsb0JBQW9COzs7QUNFdEIsSUFBTSxTQUFTO0FBQUEsRUFDcEI7QUFBQSxJQUFFLE1BQU07QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxXQUFXLE1BQU0sK0JBQStCLE9BQU8sOEJBQThCO0FBQUEsTUFDN0YsRUFBRSxNQUFNLGVBQWUsTUFBTSxvQ0FBb0MsT0FBTyxtQ0FBbUM7QUFBQSxNQUMzRyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sK0RBQStELE9BQU8sOERBQThEO0FBQUEsTUFDbEssRUFBRSxNQUFNLFlBQVksTUFBTSw2Q0FBNkMsT0FBTyw0Q0FBNEM7QUFBQSxNQUMxSDtBQUFBLFFBQUUsTUFBTTtBQUFBLFFBQW1CLE1BQU07QUFBQSxRQUErQixPQUFPO0FBQUEsUUFBK0IsT0FBTztBQUFBLFVBQzNHLEVB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
