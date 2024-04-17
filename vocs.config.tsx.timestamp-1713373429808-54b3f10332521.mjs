// vocs.config.tsx
import { defineConfig } from "file:///home/mwm/Projects/sequence-v2/docs-v2/node_modules/.pnpm/vocs@1.0.0-alpha.45_@types+react@18.2.75_react-dom@18.2.0_react@18.2.0_rollup@4.14.1_typescript@5.4.4/node_modules/vocs/_lib/index.js";

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
      }
    ]
  },
  {
    text: "Guides",
    items: [
      {
        text: "Web3 Game with WebGL",
        link: "/guides/webgl-guide",
        match: "/guides/webgl-guide",
        items: [
          { text: "Overview", link: "/guides/webgl-guide", match: "/guides/webgl-guide" }
        ]
      },
      { text: "Web3 Game with Unity", link: "/guides/unity-guide", match: "/guides/unity-guide" },
      { text: "Serverless Collectibles", link: "/guides/mint-collectibles-serverless", match: "/guides/mint-collectibles-serverless" },
      { text: "AI Lootboxes", link: "/guides/lootbox-guide", match: "/guides/lootbox-guide" },
      { text: "Custom Marketplace", link: "/guides/custom-marketplace", match: "/guides/custom-marketplace" }
    ]
  },
  {
    text: "SDKs",
    items: [
      { text: "Unity", link: "/sdk/unity/overview", match: "/sdk/unity/overview" },
      { text: "Unreal", link: "/sdk/unreal/overview", match: "/sdk/unreal/overview" },
      { text: "Typescript", link: "/sdk/typescript/guides/overview", match: "/sdk/typescript/guides/overview" },
      { text: "Sequence Kit", link: "/sdk/sequence-kit/overview", match: "/sdk/sequence-kit/overview" },
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
      text: "Wallets",
      items: [
        { text: "Overview", link: "/solutions/wallets/overview" },
        {
          text: "Embedded Wallet",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/embedded-wallet/overview" },
            { text: "Quickstart", link: "/solutions/wallets/embedded-wallet/quickstart" },
            {
              text: "Examples",
              collapsed: true,
              items: [
                { text: "Manage Sessions", link: "/solutions/wallets/embedded-wallet/examples/manage-sessions" },
                { text: "Use Wallets", link: "/solutions/wallets/embedded-wallet/examples/use-wallets" },
                { text: "Validation", link: "/solutions/wallets/embedded-wallet/examples/validation" },
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
          text: "Universal Wallet",
          collapsed: true,
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
            { text: "Sequence Kit", link: "/solutions/wallets/universal-wallet/sequence-kit" },
            { text: "Supported Platforms", link: "/solutions/wallets/universal-wallet/platforms" },
            { text: "Fiat On-Ramps", link: "/solutions/wallets/universal-wallet/fiat-on-ramps" },
            { text: "Key Management", link: "/solutions/wallets/universal-wallet/key-management" }
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
            { text: "Overview", link: "/solutions/marketplaces/orderbook/overview" },
            { text: "Quickstart", link: "/solutions/marketplaces/orderbook/quickstart" }
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
            { text: "Deploy a Collectible Contract", link: "/solutions/collectibles/contracts/deploy-an-item-collection" },
            // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
            // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
            { text: "Deploy an In-Game Currency (ERC20)", link: "/solutions/collectibles/contracts/deploy-ERC20-currency" }
          ]
        },
        {
          text: "Metadata",
          collapsed: true,
          items: [
            { text: "Manage Metadata in Builder", link: "/solutions/collectibles/metadata/manage-metadata-builder" }
          ]
        }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: "Payments",
      items: [
        // { text: 'NFT Checkout', link: '/solutions/nft-checkout' },
        { text: "Onramps", link: "/solutions/payments/onramps/fiat-on-ramps" }
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
        { text: "Why Smart Contract Wallets?", link: "/solutions/technical-references/wallet-contracts/why" },
        { text: "Contract Internals", collapsed: true, items: [
          { text: "Deployment", link: "/solutions/technical-references/internals/deployment" },
          { text: "Sequence v1", collapsed: true, items: [
            { text: "Deploy", link: "/solutions/technical-references/internals/v1/deploy" },
            { text: "Wallet Factory", link: "/solutions/technical-references/internals/v1/wallet-factory" },
            { text: "Wallet Configuration", link: "/solutions/technical-references/internals/v1/wallet-configuration" },
            // {text: 'Transaction Encoding', link: '/solutions/technical-references/internals/v1/07-transaction-encoding'},
            { text: "Signature Encoding", link: "/solutions/technical-references/internals/v1/signature-encoding" },
            { text: "Wallet Context", link: "/solutions/technical-references/internals/v1/wallet-context" },
            { text: "Contract Audits", link: "/solutions/technical-references/internals/v1/contract-audits" }
          ] },
          { text: "Sequence v2", collapsed: true, items: [
            { text: "Deploy", link: "/solutions/technical-references/internals/v2/deploy" },
            { text: "Wallet Configuration", link: "/solutions/technical-references/internals/v2/configuration" }
          ] }
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
          items: [
            { text: "Project Setup With Webpack", link: "/guides/webgl-guide#1-project-setup-with-webpack" },
            { text: "Integrate SequenceKit With WaaS", link: "/guides/webgl-guide#2-integrate-sequence-kit" },
            { text: "Deploy a Collectibles Contract", link: "/guides/webgl-guide#3-deploy-a-collectibles-contract" },
            { text: "Deploy a Remote Minter", link: "/guides/webgl-guide#4-deploy-a-remote-minter--mint-in-game-achievement-tokens" },
            { text: "Leverage Items In-game", link: "/guides/webgl-guide#5-leverage-items-in-game" },
            { text: "Burn In-game Achievement Tokens", link: "/guides/webgl-guide#6-burn-in-game-achievement-tokens" },
            { text: "(Optional) Integrate Embedded Wallet Into Sequence Kit", link: "/guides/webgl-guide#7-optional-integrate-embedded-wallet-into-sequence-kit" }
          ]
        },
        {
          text: "Build a Unity Game",
          collapsed: true,
          items: [
            { text: "Introduction", link: "/guides/unity-guide#intro-to-jelly-forest" },
            { text: "Build a Game Loop", link: "/guides/unity-guide#build-a-game-loop" },
            { text: "Integrate Embedded Wallets", link: "/guides/unity-guide#integrate-social-sign-in-and-sequences-embedded-wallet-solution" },
            { text: "Deploy Collectibles", link: "/guides/unity-guide#deploy-a-collectibles-contract" },
            { text: "Deploy Remote Minter", link: "/guides/unity-guide#deploy-a-remote-minter" },
            { text: "Minting Tokens to Inventory", link: "/guides/unity-guide#mint-in-game-tokens-to-the-players-inventory" },
            { text: "Purchase Collectibles with ERC20 Tokens", link: "/guides/unity-guide#burn-in-game-tokens-in-exchange-for-others" },
            { text: "Building an In-game Shop", link: "/guides/unity-guide#building-the-shop-pages-and-setting-the-minting-requirements" },
            { text: "Leverage Purchased Items In-game", link: "/guides/unity-guide#leverage-purchased-items-in-game" }
          ]
        },
        {
          text: "Build a Serverless Collectible",
          collapsed: true,
          items: [
            { text: "Setup Cloudflare Environment", link: "/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test", match: "/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test" },
            { text: "Deploy, Sponsor & Update Metadata For an ERC1155", link: "/guides/mint-collectibles-serverless#2-deploy-sponsor-and-update-metadata-for-an-erc1155-contract-with-builder" },
            { text: "Use EthAuthProof to Prevent EOA DDoS", link: "/guides/mint-collectibles-serverless#3-use-ethauthproof-to-prevent-eoa-ddos" },
            { text: "Mint a Collectible To Wallet", link: "/guides/mint-collectibles-serverless#4-mint-a-collectible-to-wallet" }
          ]
        },
        {
          text: "Build a Lootbox with AI Minting",
          collapsed: true,
          items: [
            { text: "Builder Console Signup & Project Creation", link: "/guides/lootbox-guide#1-builder-console-signup--project-creation" },
            { text: "Access Key Management", link: "/guides/lootbox-guide#2-access-key-management" },
            { text: "Sequence Kit integration", link: "/guides/lootbox-guide#3-sequence-kit-integration" },
            { text: "iframe-to-Dapp Communication", link: "/guides/lootbox-guide#4-iframe-to-dapp-communication" },
            { text: "Deploy a Contract & Sponsor Gas", link: "/guides/lootbox-guide#5-deploy-a-contract--sponsor-gas" },
            { text: "Deploy a Cloudflare Worker", link: "/guides/lootbox-guide#6-deploy-a-cloudflare-worker" },
            { text: "Generating AI Prompts & Images", link: "/guides/lootbox-guide#7-generating-ai-prompts--images" },
            { text: "Store Media To Sequence Metadata Service", link: "/guides/lootbox-guide#8-store-media-to-sequence-metadata-service" },
            { text: "Securing Your Cloudflare Worker", link: "/guides/lootbox-guide#9-securing-your-cloudflare-worker" },
            { text: "(Optional) Naive Mint Restriction Per Wallet", link: "/guides/lootbox-guide#10-optional-naive-mint-restriction-per-wallet" }
          ]
        },
        {
          text: "Build a Custom Marketplace",
          collapsed: true,
          items: [
            { text: "Minting", link: "/guides/custom-marketplace#1-minting" },
            { text: "Wallet Authentication", link: "/guides/custom-marketplace#2-wallet-authentication" },
            { text: "Blockchain Queries", link: "/guides/custom-marketplace#3-blockchain-queries" },
            { text: "Multi-wallet types", link: "/guides/custom-marketplace#4-multi-wallet-types" },
            { text: "Request Creation", link: "/guides/custom-marketplace#5-request-creation" },
            { text: "Order Accepting", link: "/guides/custom-marketplace#6-order-accepting" },
            { text: "(Optional) Enable Embedded Wallet", link: "/guides/custom-marketplace#7-optional-integrate-embedded-wallet-into-sequence-kit" }
          ]
        }
      ]
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: "Templates",
      items: [
        { text: "In-game Wallet Demo", link: "/guides/templates/template-in-game-wallet" },
        { text: "Build a Backend Transaction Manager", link: "/guides/templates/building-relaying-server" }
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
            { text: "Overview", link: "/sdk/unreal/overview" },
            { text: "Installation", link: "/sdk/unreal/installation" },
            { text: "Setup", link: "/sdk/unreal/setup" },
            { text: "Authentication", link: "/sdk/unreal/authentication" },
            { text: "API Integration", link: "/sdk/unreal/api-integration" },
            { text: "Packaging", link: "/sdk/unreal/packaging" }
          ]
        },
        {
          text: "Unity",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/unity/overview" },
            { text: "Installation", link: "/sdk/unity/installation" },
            { text: "Setup", link: "/sdk/unity/setup" },
            { text: "Authentication", link: "/sdk/unity/authentication" },
            { text: "Write to blockchain", link: "/sdk/unity/write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unity/read-from-blockchain" },
            { text: "Sign Messages", link: "/sdk/unity/sign-messages" },
            { text: "Deploy Contracts", link: "/sdk/unity/deploy-contracts" },
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
            { text: "Overview", link: "/sdk/sequence-kit/overview" },
            { text: "Quickstart", link: "/sdk/sequence-kit/getting-started" },
            { text: "Configuration", link: "/sdk/sequence-kit/configuration" },
            { text: "Checkout", link: "/sdk/sequence-kit/checkout" },
            { text: "Custom Connectors", link: "/sdk/sequence-kit/custom-connectors" }
          ]
        },
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
                { text: "SequenceKit", link: "/sdk/sequence-kit/overview" },
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
            { text: "Metadata Tips", link: "/api/indexer/metadata-tips" },
            { text: "Webhooks", link: "/api/indexer/examples/webhook-listener" }
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
  "/support": {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIGljb25Vcmw6IHsgbGlnaHQ6ICcvaW1nL2Zhdmljb24uaWNvJywgZGFyazogJy9pbWcvZmF2aWNvbi5pY28nIH0sXG4gIGxvZ29Vcmw6IHtcbiAgICBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsXG4gICAgZGFyazogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWRhcmsuc3ZnJyxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIC8vIE5PVEU6IHRha2luZyB1cCB2YWx1YWJsZSBzcGFjZSwgd2lsbCBtb3ZlIHRob3NlXG4gIC8vIHRvIGZvb3RlciBhbmQgb3RoZXIgc2VjdGlvbnNcbiAgLy8gc29jaWFsczogW1xuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdnaXRodWInLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdkaXNjb3JkJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ3gnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8veC5jb20vMHhzZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gXSxcblxuICB0aGVtZToge1xuICAgIC8vIGFjY2VudENvbG9yOiB7XG4gICAgLy8gICBsaWdodDogJyM0NDJDQTgnLFxuICAgIC8vICAgZGFyazogJyM5OUFERUQnLFxuICAgIC8vIH0sXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBmb250RmFtaWx5OiB7XG4gICAgICAgIGRlZmF1bHQ6ICdJbnRlcicsXG4gICAgICAgIC8vIG1vbm86ICdSb2JvdG8gTW9ubydcbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgbGlnaHQ6ICcjZjBmMGYwJyxcbiAgICAgICAgICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJhY2tncm91bmQ1OiB7XG4gICAgICAgIC8vICAgbGlnaHQ6ICcjZGRkZGRkJyxcbiAgICAgICAgLy8gICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBiYWNrZ3JvdW5kRGFyazoge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxNTE1MTUnXG4gICAgICAgIC8vIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL213bS9Qcm9qZWN0cy9zZXF1ZW5jZS12Mi9kb2NzLXYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9td20vUHJvamVjdHMvc2VxdWVuY2UtdjIvZG9jcy12Mi9uYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbXdtL1Byb2plY3RzL3NlcXVlbmNlLXYyL2RvY3MtdjIvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyLCBUb3BOYXYgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgY29uc3QgdG9wTmF2ID0gW1xuICB7IHRleHQ6ICdTb2x1dGlvbnMnLFxuICBpdGVtczogW1xuICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JywgbWF0Y2g6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnIH0sXG4gICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL292ZXJ2aWV3JyB9LFxuICAgIHsgdGV4dDogJ0NvbGxlY3RpYmxlcycsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LWFuLWl0ZW0tY29sbGVjdGlvbicsIG1hdGNoOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1hbi1pdGVtLWNvbGxlY3Rpb24nIH0sXG4gICAgeyB0ZXh0OiAnUGF5bWVudHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9wYXltZW50cy9vbnJhbXBzL2ZpYXQtb24tcmFtcHMnLCBtYXRjaDogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy9maWF0LW9uLXJhbXBzJyB9LFxuICAgIHsgdGV4dDogJ0J1aWxkZXIgQ29uc29sZScsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycgfSwgXG4gICAgXVxuICB9XG5dXG59LFxuICB7XG4gICAgdGV4dDogJ0d1aWRlcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1dlYjMgR2FtZSB3aXRoIFdlYkdMJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnLCBtYXRjaDogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnLCBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJywgbWF0Y2g6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJyB9LCBcbiAgICAgIF0gXG4gICAgfSxcbiAgICAgIHsgdGV4dDogJ1dlYjMgR2FtZSB3aXRoIFVuaXR5JywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUnLCBtYXRjaDogJy9ndWlkZXMvdW5pdHktZ3VpZGUnIH0sXG4gICAgICB7IHRleHQ6ICdTZXJ2ZXJsZXNzIENvbGxlY3RpYmxlcycsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MnLCBtYXRjaDogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcycgfSxcbiAgICAgIHsgdGV4dDogJ0FJIExvb3Rib3hlcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUnLCBtYXRjaDogJy9ndWlkZXMvbG9vdGJveC1ndWlkZScgfSxcbiAgICAgIHsgdGV4dDogJ0N1c3RvbSBNYXJrZXRwbGFjZScsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZScsIG1hdGNoOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UnIH1cbiAgICBdXG4gIH0sXG4gIHsgXG4gICAgdGV4dDogJ1NES3MnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdVbml0eScsIGxpbms6ICcvc2RrL3VuaXR5L292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VuaXR5L292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnVW5yZWFsJywgbGluazogJy9zZGsvdW5yZWFsL292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VucmVhbC9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1R5cGVzY3JpcHQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9vdmVydmlldycsIG1hdGNoOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC9vdmVydmlldycsIG1hdGNoOiAnL3Nkay9zZXF1ZW5jZS1raXQvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdHbycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL2dvL292ZXJ2aWV3JyB9LFxuICAgICAgLy8geyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnLCBtYXRjaDogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgIC8vIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL3JlYWN0bmF0aXZlJywgbWF0Y2g6ICcvc2RrL3JlYWN0bmF0aXZlJyB9LFxuICAgICAgLy8geyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJywgbWF0Y2g6ICcvc2RrL2lPUycgfVxuICAgIF1cbiAgfSxcblxuICAvLyByZXBsYWNlIGxpbmtzLlxuICB7IFxuICAgIHRleHQ6ICdBUElzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnUmVsYXllciBBUEknLCBsaW5rOiAnL2FwaS9yZWxheWVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnSW5kZXhlciBBUEknLCBsaW5rOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ05vZGUgR2F0ZXdheScsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSxcbiAgICBdXG4gIH0sXG5cbiAgeyBcbiAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgIHsgdGV4dDogJ1Jlc3RyaWN0ZWQgUmVnaW9ucycsIGxpbms6ICcvc3VwcG9ydC9yZXN0cmljdGVkLXJlZ2lvbnMnIH0sXG4gICAgICB7IHRleHQ6ICdUb2tlbiBEaXJlY3RvcnknLCBsaW5rOiAnL3N1cHBvcnQvdG9rZW4tZGlyZWN0b3J5JyB9LFxuICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICB7IHRleHQ6ICdEaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9zZXF1ZW5jZScgfSxcbiAgICAgIHsgdGV4dDogJ1dlXFwncmUgaGlyaW5nIScsIGxpbms6ICdodHRwczovL2hvcml6b24uaW8vY2FyZWVycycgfSxcbiAgICAgIHsgdGV4dDogJ0NvbnRhY3QgVXMnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICBdXG4gIH1cbl0gYXMgVG9wTmF2XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0ge1xuICAvLyBPdmVydmlld1xuICAnL3NvbHV0aW9ucyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnV2FsbGV0cycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCcsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvb3ZlcnZpZXcnfSxcbiAgICAgICAgICB7dGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9xdWlja3N0YXJ0J30sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgICAge3RleHQ6ICdNYW5hZ2UgU2Vzc2lvbnMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9tYW5hZ2Utc2Vzc2lvbnMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnVXNlIFdhbGxldHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy91c2Utd2FsbGV0cyd9LFxuICAgICAgICAgICAge3RleHQ6ICdWYWxpZGF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdmFsaWRhdGlvbid9LFxuICAgICAgICAgICAge3RleHQ6ICdUcmFuc2FjdGlvbiBSZWNlaXB0cycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL3RyYW5zYWN0aW9uLXJlY2VpcHRzJ30sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7dGV4dDogJ0FyY2hpdGVjdHVyZScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZSd9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdJbXBsZW1lbnRhdGlvbiBEZXRhaWxzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgICAge3RleHQ6ICdBY3Rpb24gcGF5bG9hZHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9pbXBsZW1lbnRhdGlvbi1kZXRhaWxzL2FjdGlvbi1wYXlsb2Fkcyd9LFxuICAgICAgICAgICAge3RleHQ6ICdSZXNwb25zZSBwYXlsb2FkcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2ltcGxlbWVudGF0aW9uLWRldGFpbHMvcmVzcG9uc2UtcGF5bG9hZHMnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnVHJ1c3QgQ29udHJhY3QgUmVjb3ZlcnkgRmxvdycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2ltcGxlbWVudGF0aW9uLWRldGFpbHMvdHJ1c3QtY29udHJhY3QtcmVjb3ZlcnktZmxvdyd9LFxuICAgICAgICAgICAge3RleHQ6ICdFbmNsYXZlLVZlcmlmaWNhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2ltcGxlbWVudGF0aW9uLWRldGFpbHMvZW5jbGF2ZS12ZXJpZmljYXRpb24nfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnSW50ZW50cycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2ltcGxlbWVudGF0aW9uLWRldGFpbHMvaW50ZW50cyd9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ1VuaXZlcnNhbCBXYWxsZXQnLCBjb2xsYXBzZWQ6IHRydWUsIFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvb3ZlcnZpZXcnfSxcbiAgICAgICAgICB7dGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvcXVpY2tzdGFydCd9LFxuICAgICAgICAgIHt0ZXh0OiAnRXhhbXBsZXMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7dGV4dDogJ0Nvbm5lY3QgV2FsbGV0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2Nvbm5lY3Qtd2FsbGV0J30sXG4gICAgICAgICAgICB7dGV4dDogJ0F1dGhlbnRpY2F0ZSBVc2VycyB3aXRoIE1lc3NhZ2UgU2lnbmF0dXJlJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2F1dGgtYWRkcmVzcyd9LFxuICAgICAgICAgICAge3RleHQ6ICdTaWduaW5nICYgVmVyaWZ5aW5nIE1lc3NhZ2VzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NpZ24tbWVzc2FnZSd9LFxuICAgICAgICAgICAge3RleHQ6ICdOby13YWxsZXQgY29uZmlybWF0aW9uIHNpZ25hdHVyZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2Vzc2lvbi1rZXlzJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtdHJhbnNhY3Rpb24nfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtMjAgVG9rZW5zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjMjAnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtNzIxIChORlQpIFRva2VucycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzcyMSd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjMTE1NSd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJ30sXG4gICAgICAgICAgICB7dGV4dDogJ0J1aWxkaW5nIEJhY2tlbmRzIHdpdGggU2VxdWVuY2UnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYnVpbGRpbmctYmFja2VuZHMnfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgICAge3RleHQ6ICdTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvc2VxdWVuY2Uta2l0J30sXG4gICAgICAgICAge3RleHQ6ICdTdXBwb3J0ZWQgUGxhdGZvcm1zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3BsYXRmb3Jtcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnRmlhdCBPbi1SYW1wcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9maWF0LW9uLXJhbXBzJ30sXG4gICAgICAgICAge3RleHQ6ICdLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9rZXktbWFuYWdlbWVudCd9XG4gICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01hcmtldHBsYWNlJyxcbiAgICAgIC8vIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdXaGl0ZS1sYWJlbCBNYXJrZXRwbGFjZScsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnVpbGQgeW91ciBDdXN0b20gTWFya2V0cGxhY2UnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy9vcmRlcmJvb2svb3ZlcnZpZXcnfSxcbiAgICAgICAgICB7dGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL3F1aWNrc3RhcnQnfSxcbiAgICAgICAgICBcbiAgICAgICAgXVxuICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb2xsZWN0aWJsZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95YWJsZSBDb250cmFjdHMnICwgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIENvbGxlY3RpYmxlIENvbnRyYWN0JywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uJ30sXG4gICAgICAgICAgLy8ge3RleHQ6ICdNaW50IEluLUdhbWUgSXRlbXMgYW5kIEFjaGlldmVtZW50cyAoRVJDMTE1NSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMC1taW50LWl0ZW1zLWZyb20tRVJDMTE1NSd9LFxuICAgICAgICAgIC8vIHt0ZXh0OiAnTWludCBEaWdpdGFsIENvbGxlY3RpYmxlcyAoRVJDNzIxKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAyLW1pbnQtY29sbGVjdGlibGVzLWZyb20tRVJDNzIxJ30sXG4gICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGFuIEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LUVSQzIwLWN1cnJlbmN5J30sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdNZXRhZGF0YScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2UgTWV0YWRhdGEgaW4gQnVpbGRlcicsbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL21ldGFkYXRhL21hbmFnZS1tZXRhZGF0YS1idWlsZGVyJyB9XG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgICAgIC8vIHsgdGV4dDogJ01pbnRlcicsIGxpbms6ICcvc29sdXRpb25zL21pbnRlcicgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1BheW1lbnRzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIC8vIHsgdGV4dDogJ05GVCBDaGVja291dCcsIGxpbms6ICcvc29sdXRpb25zL25mdC1jaGVja291dCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnT25yYW1wcycsIGxpbms6ICcvc29sdXRpb25zL3BheW1lbnRzL29ucmFtcHMvZmlhdC1vbi1yYW1wcycgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZGVyIENvbnNvbGUnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnfSxcbiAgICAgICAge3RleHQ6ICdHZXQgU3RhcnRlZCcsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZ2V0dGluZy1zdGFydGVkJ30sXG4gICAgICAgIHt0ZXh0OiAnUHJvamVjdCBNYW5hZ2VtZW50JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9wcm9qZWN0LW1hbmFnZW1lbnQnfSxcbiAgICAgICAge3RleHQ6ICdDb250cmFjdHMnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbnRyYWN0cyd9LFxuICAgICAgICB7dGV4dDogJ0dhcyBUYW5rJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuayd9LFxuICAgICAgICB7dGV4dDogJ1dhbGxldCBTREtzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93YWxsZXQtc2Rrcyd9LFxuICAgICAgICB7dGV4dDogJ0VtYmVkZGVkIFdhbGxldCcsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0J30sXG4gICAgICAgIHt0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9ub2RlLWdhdGV3YXknfSxcbiAgICAgICAge3RleHQ6ICdNYXJrZXRwbGFjZXMnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL21hcmtldHBsYWNlcyd9LFxuICAgICAgICB7dGV4dDogJ0luZGV4ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2luZGV4ZXInfSxcbiAgICAgICAge3RleHQ6ICdBbmFseXRpY3MnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2FuYWx5dGljcyd9LFxuICAgICAgICB7dGV4dDogJ1NldHRpbmdzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9wcm9qZWN0LXNldHRpbmdzJ30sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ0VJUDUxODkgdnMuIDQzMzcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy81MTg5LTQzMzcnIH0sXG4gICAgICAgIHsgdGV4dDogJ1doeSBTbWFydCBDb250cmFjdCBXYWxsZXRzPycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL3dhbGxldC1jb250cmFjdHMvd2h5JyB9LFxuICAgICAgICB7IHRleHQ6ICdDb250cmFjdCBJbnRlcm5hbHMnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdEZXBsb3ltZW50JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL2RlcGxveW1lbnQnfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXF1ZW5jZSB2MScsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL2RlcGxveSd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgRmFjdG9yeScsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtZmFjdG9yeSd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtY29uZmlndXJhdGlvbid9LFxuICAgICAgICAgICAgLy8ge3RleHQ6ICdUcmFuc2FjdGlvbiBFbmNvZGluZycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8wNy10cmFuc2FjdGlvbi1lbmNvZGluZyd9LFxuICAgICAgICAgICAge3RleHQ6ICdTaWduYXR1cmUgRW5jb2RpbmcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvc2lnbmF0dXJlLWVuY29kaW5nJ30sXG4gICAgICAgICAgICB7dGV4dDogJ1dhbGxldCBDb250ZXh0JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3dhbGxldC1jb250ZXh0J30sXG4gICAgICAgICAgICB7dGV4dDogJ0NvbnRyYWN0IEF1ZGl0cycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS9jb250cmFjdC1hdWRpdHMnfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXF1ZW5jZSB2MicsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICAgIHt0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2RlcGxveSd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsIGxpbms6IFwiL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjIvY29uZmlndXJhdGlvblwifSxcbiAgICAgICAgICBdfVxuICAgICAgICBdfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIFxuICBdLFxuXG4gICcvZ3VpZGVzJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHdWlkZXMnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkIGEgR2FtZSB3aXRoIFdlYkdMJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1Byb2plY3QgU2V0dXAgV2l0aCBXZWJwYWNrJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMS1wcm9qZWN0LXNldHVwLXdpdGgtd2VicGFjaycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW50ZWdyYXRlIFNlcXVlbmNlS2l0IFdpdGggV2FhUycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzItaW50ZWdyYXRlLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGEgQ29sbGVjdGlibGVzIENvbnRyYWN0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMy1kZXBsb3ktYS1jb2xsZWN0aWJsZXMtY29udHJhY3QnIH0sXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveSBhIFJlbW90ZSBNaW50ZXInLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM0LWRlcGxveS1hLXJlbW90ZS1taW50ZXItLW1pbnQtaW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0xldmVyYWdlIEl0ZW1zIEluLWdhbWUnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM1LWxldmVyYWdlLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1cm4gSW4tZ2FtZSBBY2hpZXZlbWVudCBUb2tlbnMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM2LWJ1cm4taW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJyhPcHRpb25hbCkgSW50ZWdyYXRlIEVtYmVkZGVkIFdhbGxldCBJbnRvIFNlcXVlbmNlIEtpdCcsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzctb3B0aW9uYWwtaW50ZWdyYXRlLWVtYmVkZGVkLXdhbGxldC1pbnRvLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIFVuaXR5IEdhbWUnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjaW50cm8tdG8tamVsbHktZm9yZXN0JyB9LFxuICAgICAgICB7IHRleHQ6ICdCdWlsZCBhIEdhbWUgTG9vcCcsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1aWxkLWEtZ2FtZS1sb29wJyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnRlZ3JhdGUgRW1iZWRkZWQgV2FsbGV0cycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2ludGVncmF0ZS1zb2NpYWwtc2lnbi1pbi1hbmQtc2VxdWVuY2VzLWVtYmVkZGVkLXdhbGxldC1zb2x1dGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IENvbGxlY3RpYmxlcycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2RlcGxveS1hLWNvbGxlY3RpYmxlcy1jb250cmFjdCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IFJlbW90ZSBNaW50ZXInLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNkZXBsb3ktYS1yZW1vdGUtbWludGVyJ30sXG4gICAgICAgIHsgdGV4dDogJ01pbnRpbmcgVG9rZW5zIHRvIEludmVudG9yeScsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI21pbnQtaW4tZ2FtZS10b2tlbnMtdG8tdGhlLXBsYXllcnMtaW52ZW50b3J5JyB9LFxuICAgICAgICB7IHRleHQ6ICdQdXJjaGFzZSBDb2xsZWN0aWJsZXMgd2l0aCBFUkMyMCBUb2tlbnMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNidXJuLWluLWdhbWUtdG9rZW5zLWluLWV4Y2hhbmdlLWZvci1vdGhlcnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0J1aWxkaW5nIGFuIEluLWdhbWUgU2hvcCcsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1aWxkaW5nLXRoZS1zaG9wLXBhZ2VzLWFuZC1zZXR0aW5nLXRoZS1taW50aW5nLXJlcXVpcmVtZW50cycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgUHVyY2hhc2VkIEl0ZW1zIEluLWdhbWUnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNsZXZlcmFnZS1wdXJjaGFzZWQtaXRlbXMtaW4tZ2FtZScgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIFNlcnZlcmxlc3MgQ29sbGVjdGlibGUnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU2V0dXAgQ2xvdWRmbGFyZSBFbnZpcm9ubWVudCcsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjMS1zZXR1cC1jbG91ZGZsYXJlLWVudmlyb25tZW50LXdpdGgtd3JhbmdsZXItY2xpLWFuZC1kZXBsb3ktYS10ZXN0JywgbWF0Y2g6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjMS1zZXR1cC1jbG91ZGZsYXJlLWVudmlyb25tZW50LXdpdGgtd3JhbmdsZXItY2xpLWFuZC1kZXBsb3ktYS10ZXN0J30sXG4gICAgICAgIHsgdGV4dDogJ0RlcGxveSwgU3BvbnNvciAmIFVwZGF0ZSBNZXRhZGF0YSBGb3IgYW4gRVJDMTE1NScsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjMi1kZXBsb3ktc3BvbnNvci1hbmQtdXBkYXRlLW1ldGFkYXRhLWZvci1hbi1lcmMxMTU1LWNvbnRyYWN0LXdpdGgtYnVpbGRlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnVXNlIEV0aEF1dGhQcm9vZiB0byBQcmV2ZW50IEVPQSBERG9TJywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMzLXVzZS1ldGhhdXRocHJvb2YtdG8tcHJldmVudC1lb2EtZGRvcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWludCBhIENvbGxlY3RpYmxlIFRvIFdhbGxldCcsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjNC1taW50LWEtY29sbGVjdGlibGUtdG8td2FsbGV0JyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkIGEgTG9vdGJveCB3aXRoIEFJIE1pbnRpbmcnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQnVpbGRlciBDb25zb2xlIFNpZ251cCAmIFByb2plY3QgQ3JlYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzEtYnVpbGRlci1jb25zb2xlLXNpZ251cC0tcHJvamVjdC1jcmVhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnQWNjZXNzIEtleSBNYW5hZ2VtZW50JywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMyLWFjY2Vzcy1rZXktbWFuYWdlbWVudCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnU2VxdWVuY2UgS2l0IGludGVncmF0aW9uJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMzLXNlcXVlbmNlLWtpdC1pbnRlZ3JhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnaWZyYW1lLXRvLURhcHAgQ29tbXVuaWNhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNC1pZnJhbWUtdG8tZGFwcC1jb21tdW5pY2F0aW9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdEZXBsb3kgYSBDb250cmFjdCAmIFNwb25zb3IgR2FzJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM1LWRlcGxveS1hLWNvbnRyYWN0LS1zcG9uc29yLWdhcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGVwbG95IGEgQ2xvdWRmbGFyZSBXb3JrZXInLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzYtZGVwbG95LWEtY2xvdWRmbGFyZS13b3JrZXInIH0sXG4gICAgICAgIHsgdGV4dDogJ0dlbmVyYXRpbmcgQUkgUHJvbXB0cyAmIEltYWdlcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNy1nZW5lcmF0aW5nLWFpLXByb21wdHMtLWltYWdlcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3RvcmUgTWVkaWEgVG8gU2VxdWVuY2UgTWV0YWRhdGEgU2VydmljZScsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjOC1zdG9yZS1tZWRpYS10by1zZXF1ZW5jZS1tZXRhZGF0YS1zZXJ2aWNlJyB9LFxuICAgICAgICB7IHRleHQ6ICdTZWN1cmluZyBZb3VyIENsb3VkZmxhcmUgV29ya2VyJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM5LXNlY3VyaW5nLXlvdXItY2xvdWRmbGFyZS13b3JrZXInIH0sXG4gICAgICAgIHsgdGV4dDogJyhPcHRpb25hbCkgTmFpdmUgTWludCBSZXN0cmljdGlvbiBQZXIgV2FsbGV0JywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMxMC1vcHRpb25hbC1uYWl2ZS1taW50LXJlc3RyaWN0aW9uLXBlci13YWxsZXQnIH0sXG5cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdWlsZCBhIEN1c3RvbSBNYXJrZXRwbGFjZScsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdNaW50aW5nJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzEtbWludGluZycgfSxcbiAgICAgICAgeyB0ZXh0OiAnV2FsbGV0IEF1dGhlbnRpY2F0aW9uJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzItd2FsbGV0LWF1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdCbG9ja2NoYWluIFF1ZXJpZXMnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMy1ibG9ja2NoYWluLXF1ZXJpZXMnIH0sXG4gICAgICAgIHsgdGV4dDogJ011bHRpLXdhbGxldCB0eXBlcycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM0LW11bHRpLXdhbGxldC10eXBlcycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVxdWVzdCBDcmVhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM1LXJlcXVlc3QtY3JlYXRpb24nIH0sXG4gICAgICAgIHsgdGV4dDogJ09yZGVyIEFjY2VwdGluZycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM2LW9yZGVyLWFjY2VwdGluZycgfSxcbiAgICAgICAgeyB0ZXh0OiAnKE9wdGlvbmFsKSBFbmFibGUgRW1iZWRkZWQgV2FsbGV0JywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzctb3B0aW9uYWwtaW50ZWdyYXRlLWVtYmVkZGVkLXdhbGxldC1pbnRvLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgIF1cbiAgICB9IFxuICBdXG59LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdJbnRlZ3JhdGUgdG9rZW4gcmV3YXJkcyBpbnRvIHlvdXIgRGlzY29yZCBzZXJ2ZXInLFxuICAgIC8vICAgbGluazogJy9ndWlkZXMvZGlzY29yZCdcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZW1wbGF0ZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnSW4tZ2FtZSBXYWxsZXQgRGVtbycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy90ZW1wbGF0ZS1pbi1nYW1lLXdhbGxldCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQnVpbGQgYSBCYWNrZW5kIFRyYW5zYWN0aW9uIE1hbmFnZXInLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvYnVpbGRpbmctcmVsYXlpbmctc2VydmVyJyB9XG4gICAgICAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSSBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScgfVxuICAgICAgXVxuICAgIH1cbl0sXG5cbiAgLy8gU0RLc1xuICAnL3Nkayc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2FtZSBFbmdpbmUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnVW5yZWFsJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5yZWFsL292ZXJ2aWV3JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VucmVhbC9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2V0dXAnLCBsaW5rOiAnL3Nkay91bnJlYWwvc2V0dXAnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQVBJIEludGVncmF0aW9uJywgbGluazogJy9zZGsvdW5yZWFsL2FwaS1pbnRlZ3JhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQYWNrYWdpbmcnLCBsaW5rOiAnL3Nkay91bnJlYWwvcGFja2FnaW5nJyB9XG4gICAgICAgICAgXSBcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAnVW5pdHknLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL3Nkay91bml0eS9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2V0dXAnLCBsaW5rOiAnL3Nkay91bml0eS9zZXR1cCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBdXRoZW50aWNhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1dyaXRlIHRvIGJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS93cml0ZS10by1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1JlYWQgZnJvbSBCbG9ja2NoYWluJywgbGluazogJy9zZGsvdW5pdHkvcmVhZC1mcm9tLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU2lnbiBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3VuaXR5L3NpZ24tbWVzc2FnZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IENvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L2RlcGxveS1jb250cmFjdHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0IFVJJywgbGluazogJy9zZGsvdW5pdHkvd2FsbGV0LXVpJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0FkdmFuY2VkJywgY29sbGFwc2VkOiB0cnVlLCAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2ludHJvZHVjdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC93YWxsZXRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ2xpZW50cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NsaWVudHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdUcmFuc2ZlcnMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC90cmFuc2ZlcnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb250cmFjdHMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC9jb250cmFjdHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdUb2tlbnMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC90b2tlbnMnIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiAnTW9iaWxlJyxcbiAgICAvLyAgIGl0ZW1zOiBbXG4gICAgLy8gICAgIHsgdGV4dDogJ0FuZHJvaWQnLCBsaW5rOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgIC8vICAgICB7IHRleHQ6ICdpT1MnLCBsaW5rOiAnL3Nkay9pT1MnIH0sXG4gICAgLy8gICAgIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL3JlYWN0LW5hdGl2ZScgfVxuICAgIC8vICAgXVxuICAgIC8vIH0sXG5cbiAgICB7XG4gICAgICB0ZXh0OiAnV2ViMycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdTZXF1ZW5jZUtpdCcsIGNvbGxhcHNlZDogdHJ1ZSwgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC9vdmVydmlldycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0L2dldHRpbmctc3RhcnRlZCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDb25maWd1cmF0aW9uJywgbGluazogJy9zZGsvc2VxdWVuY2Uta2l0L2NvbmZpZ3VyYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ2hlY2tvdXQnLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvY2hlY2tvdXQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ3VzdG9tIENvbm5lY3RvcnMnLCBsaW5rOiAnL3Nkay9zZXF1ZW5jZS1raXQvY3VzdG9tLWNvbm5lY3RvcnMnIH1cbiAgICAgICAgXVxuICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ1R5cGVTY3JpcHQnLCBjb2xsYXBzZWQ6IHRydWUsIGl0ZW1zOiBbXG4gICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL292ZXJ2aWV3J30sXG4gICAgICAgICAge3RleHQ6ICdDb25uZWN0IFdhbGxldCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2Nvbm5lY3Qtd2FsbGV0J30sXG4gICAgICAgICAge3RleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2F1dGgtYWRkcmVzcyd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2lnbmluZyAmIFZlcmlmeWluZyBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NpZ24tbWVzc2FnZSd9LFxuICAgICAgICAgIHt0ZXh0OiAnTm8td2FsbGV0IGNvbmZpcm1hdGlvbiBzaWduYXR1cmVzJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2Vzc2lvbi1rZXlzJ30sXG4gICAgICAgICAge3RleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtdHJhbnNhY3Rpb24nfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjMjAnfSxcbiAgICAgICAgICB7dGV4dDogJ1NlbmRpbmcgRVJDLTcyMSAoTkZUKSBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWVyYzcyMSd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjMTE1NSd9LFxuICAgICAgICAgIHt0ZXh0OiAnU2VuZGluZyBhIEJhdGNoIG9mIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJ30sXG4gICAgICAgICAge3RleHQ6ICdCdWlsZGluZyBCYWNrZW5kcyB3aXRoIFNlcXVlbmNlJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvYnVpbGRpbmctYmFja2VuZHMnfSxcbiAgICAgICAgICB7dGV4dDogJ1dhbGxldCBDb25uZWN0b3JzJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9vdmVydmlldyd9LFxuICAgICAgICAgICAge3RleHQ6ICdTZXF1ZW5jZUtpdCcsIGxpbms6ICcvc2RrL3NlcXVlbmNlLWtpdC9vdmVydmlldyd9LFxuICAgICAgICAgICAge3RleHQ6ICdXYWdtaScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93YWdtaSd9LFxuICAgICAgICAgICAge3RleHQ6ICdSYWluYm93S2l0JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3JhaW5ib3cta2l0J30sXG4gICAgICAgICAgICB7dGV4dDogJ1dlYjMgT25ib2FyZCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93ZWIzLW9uYm9hcmQnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnV2ViMyBSZWFjdCBWNicsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93ZWIzLXJlYWN0LXY2J30sXG4gICAgICAgICAgICB7dGV4dDogJ1dlYjNNb2RhbCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93ZWIzbW9kYWwnfSxcbiAgICAgICAgICAgIHt0ZXh0OiAnRkFRJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL0ZBUSd9LFxuICAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ0dvJywgY29sbGFwc2VkOiB0cnVlLCBpdGVtczogW1xuICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay9nby9vdmVydmlldyd9LF1cbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb21tb24gUXVlc3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0hvdyBkbyBJIGRvIHNpZ25hdHVyZSB2YWxpZGF0aW9uPycsIGxpbms6ICcvd2FsbGV0L3NpZy12YWxpZGF0aW9uJyB9XG4gICAgICAgIC8vIC4uLlxuICAgICAgXVxuICAgIH0sXG4gIF0sXG5cbiAgLy8gYXBpc1xuICAnL2FwaSc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnUmVsYXllcicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9yZWxheWVyL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS9yZWxheWVyL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAge3RleHQ6ICdFeGFtcGxlcycsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnRmV0Y2ggRmVlIE9wdGlvbnMnLCBsaW5rOiAnL2FwaS9yZWxheWVyL2V4YW1wbGVzL2ZldGNoLWZlZS1vcHRpb25zJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1NlbmQgVHJhbnNhY3Rpb25zJywgbGluazogJy9hcGkvcmVsYXllci9leGFtcGxlcy9zZW5kLXRyYW5zYWN0aW9ucycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdGZXRjaCBUcmFuc2FjdGlvbiBSZWNlaXB0cycsIGxpbms6ICcvYXBpL3JlbGF5ZXIvZXhhbXBsZXMvZmV0Y2gtdHJhbnNhY3Rpb24tcmVjZWlwdHMnIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSW5kZXhlcicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge3RleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnfSxcbiAgICAgICAge3RleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS9pbmRleGVyL2luc3RhbGxhdGlvbid9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IFtcbiAgICAgICAge3RleHQ6ICdGZXRjaCBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL2ZldGNoLXRva2Vucyd9LFxuICAgICAgICB7dGV4dDogJ1RyYW5zYWN0aW9uIEhpc3RvcnknLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3RyYW5zYWN0aW9uLWhpc3RvcnknfSxcbiAgICAgICAge3RleHQ6ICdVbmlxdWUgVG9rZW5zJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy91bmlxdWUtdG9rZW5zJ30sXG4gICAgICAgIHt0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeSBUb2tlbiBDb250cmFjdCcsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhdGlvbi1oaXN0b3J5LXRva2VuLWNvbnRyYWN0J30sXG4gICAgICAgIHt0ZXh0OiAnTmF0aXZlIE5ldHdvcmsgQmFsYW5jZScsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvbmF0aXZlLW5ldHdvcmstYmFsYW5jZSd9LFxuICAgICAgICB7dGV4dDogJ01ldGFkYXRhIFRpcHMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL21ldGFkYXRhLXRpcHMnfSxcbiAgICAgICAge3RleHQ6ICdXZWJob29rcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvd2ViaG9vay1saXN0ZW5lcid9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWV0YWRhdGEnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHt0ZXh0OiAnRXhhbXBsZXMnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdUb2tlbiBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL3Rva2VuLW1ldGFkYXRhJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb250cmFjdCBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL2NvbnRyYWN0LW1ldGFkYXRhJyB9LFxuICAgICAgICB7IHRleHQ6ICdSRVNUIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhL3Jlc3QtYXBpJyB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWFya2V0cGxhY2UnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbWFya2V0cGxhY2Uvb3ZlcnZpZXcnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ1NjaGVtYScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL3NjaGVtYScgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvYXBpJyB9LFxuICAgICAgICB7dGV4dDogJ0V4YW1wbGVzJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IFtcbiAgICAgICAgICB7dGV4dDogJ0NyZWF0aW5nIE1hcmtldCBPcmRlcnMgJiBMaXN0aW5ncycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL29yZGVyYm9vay10cmFuc2FjdGlvbnMnfSxcbiAgICAgICAgICB7dGV4dDogJ0dldCBUb3AgT3JkZXJzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LXRvcC1vcmRlcnMnfSxcbiAgICAgICAgICB7dGV4dDogJ0dldCBPcmRlcmJvb2snLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9nZXQtb3JkZXJib29rJ30sXG4gICAgICAgICAge3RleHQ6ICdHZXQgVXNlciBBY3Rpdml0aWVzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LXVzZXItYWN0aXZpdGllcyd9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JyB9ICAgICAgXVxuICAgIH0sXG4gIF0sXG4gIFxuICAvLyBTdXBwb3J0XG4gICcvc3VwcG9ydCc6IHtcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnU3VwcG9ydCcsIGxpbms6ICcvc3VwcG9ydCcgfSxcbiAgICAgIHsgdGV4dDogJ0NoYW5nZWxvZycsIGxpbms6ICdodHRwczovLzB4c2VxdWVuY2UuY2FubnkuaW8vY2hhbmdlbG9nJyB9LFxuICAgICAgeyB0ZXh0OiAnUmVzdHJpY3RlZCBSZWdpb25zJywgbGluazogJy9zdXBwb3J0L3Jlc3RyaWN0ZWQtcmVnaW9ucycgfSxcbiAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgeyB0ZXh0OiAnV2VcXCdyZSBoaXJpbmchJywgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgIF1cbiAgfSxcblxuXG5cblxuXG59IGFzIFNpZGViYXJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjs7O0FDRXRCLElBQU0sU0FBUztBQUFBLEVBQ3BCO0FBQUEsSUFBRSxNQUFNO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLCtCQUErQixPQUFPLDhCQUE4QjtBQUFBLE1BQzdGLEVBQUUsTUFBTSxlQUFlLE1BQU0sb0NBQW9DLE9BQU8sbUNBQW1DO0FBQUEsTUFDM0csRUFBRSxNQUFNLGdCQUFnQixNQUFNLCtEQUErRCxPQUFPLDhEQUE4RDtBQUFBLE1BQ2xLLEVBQUUsTUFBTSxZQUFZLE1BQU0sNkNBQTZDLE9BQU8sNENBQTRDO0FBQUEsTUFDMUg7QUFBQSxRQUFFLE1BQU07QUFBQSxRQUFtQixNQUFNO0FBQUEsUUFBK0IsT0FBTztBQUFBLFFBQStCLE9BQU87QUFBQSxVQUMzRyxFQUFFLE1BQU0sWUFBWSxNQUFNLCtCQUErQixPQUFPLDhCQUE4QjtBQUFBLFFBQ2hHO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNBO0FBQUEsRUFDRTtBQUFBLElBQ0UsTUFBTTtBQUFB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
