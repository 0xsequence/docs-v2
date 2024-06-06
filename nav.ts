import type { Sidebar, TopNav } from 'vocs'

export const topNav = [
  { text: 'Solutions', 
  items: [
    { text: 'Wallets', link: '/solutions/wallets/overview', match: '/solutions/wallets/overview' },
    { text: 'Marketplace', link: '/solutions/marketplaces/overview', match: '/solutions/marketplaces/overview' },
    { text: 'Collectibles', link: '/solutions/collectibles/contracts/deploy-an-item-collection', match: '/solutions/collectibles/contracts/deploy-an-item-collection' },
    { text: 'Payments', link: '/solutions/payments/onramps/fiat-on-ramps', match: '/solutions/payments/onramps/fiat-on-ramps' },
    { text: 'Builder Console', link: '/solutions/builder/overview', match: '/solutions/builder/overview', items: [
      { text: 'Overview', link: '/solutions/builder/overview', match: '/solutions/builder/overview' }, 
    ]
  },
  { text: 'Chain Support', link: '/solutions/technical-references/chain-support', match: '/solutions/technical-references/chain-support' },
]
},
  {
    text: 'Guides',
    items: [
      { text: 'Web3 Game with WebGL', link: '/guides/webgl-guide', match: '/guides/webgl-guide', items: [
        { text: 'Overview', link: '/guides/webgl-guide', match: '/guides/webgl-guide' }, 
      ] 
    },
      { text: 'Web3 Game with Unity', link: '/guides/unity-guide', match: '/guides/unity-guide' },
      { text: 'Collectible Minting', link: '/guides/mint-collectibles-serverless', match: '/guides/mint-collectibles-serverless' },
      { text: 'Collection Management', link: '/guides/metadata-guide', match: '/guides/metadata-guide' },
      { text: 'AI Treasure Chests', link: '/guides/treasure-chest-guide', match: '/guides/treasure-chest-guide' },
      { text: 'Custom Marketplace', link: '/guides/custom-marketplace', match: '/guides/custom-marketplace' },
      { text: 'Embedded Wallet', link: '/guides/templates/template-in-game-wallet', match: '/guides/templates/template-in-game-wallet' },
      { text: 'Transaction Engine', link: '/guides/templates/building-relaying-server', match: '/guides/templates/building-relaying-server' },
    ]
  },
  { 
    text: 'SDKs',
    items: [
      { text: 'Unity', link: '/sdk/unity/overview', match: '/sdk/unity/overview' },
      { text: 'Unreal', link: '/sdk/unreal/overview', match: '/sdk/unreal/overview' },
      { text: 'Typescript', link: '/sdk/typescript/guides/overview', match: '/sdk/typescript/guides/overview' },
      { text: 'Sequence Kit', link: '/sdk/sequence-kit/overview', match: '/sdk/sequence-kit/overview' },
      { text: 'Go', link: '/sdk/go/overview', match: '/sdk/go/overview' },
      // { text: 'Android', link: '/sdk/android', match: '/sdk/android' },
      { text: 'React Native', link: '/sdk/reactnative', match: '/sdk/reactnative' },
      // { text: 'iOS', link: '/sdk/iOS', match: '/sdk/iOS' }
    ]
  },

  // replace links.
  { 
    text: 'APIs',
    items: [
      { text: 'Transactions API', link: '/api/transactions/overview', match: '/api/transactions/overview' },
      { text: 'Analytics API', link: '/api/analytics/overview', match: '/api/analytics/overview'},
      { text: 'Indexer API', link: '/api/indexer/overview',  match: '/api/indexer/overview' },
      { text: 'Metadata API', link: '/api/metadata/overview',  match: '/api/metadata/overview' },
      { text: 'Marketplace API', link: '/api/marketplace/overview',  match: '/api/marketplace/overview' },
      { text: 'Node Gateway', link: '/api/node-gateway',  match: '/api/node-gateway' },
    ]
  },

  { 
    text: 'Support',
    items: [
      { text: 'Support', link: '/support' },
      { text: 'Changelog', link: 'https://0xsequence.canny.io/changelog' },
      { text: 'Restricted Regions', link: '/support/restricted-regions' },
      { text: 'Token Directory', link: '/support/token-directory' },
      { text: 'FAQ', link: 'https://support.sequence.xyz' },
      { text: 'Discord', link: 'https://discord.gg/sequence' },
      { text: 'We\'re hiring!', link: 'https://horizon.io/careers' },
      { text: 'Contact Us', link: 'https://support.sequence.xyz' },
    ]
  }
] as TopNav

export const sidebar = {
  // Overview
  '/solutions': [
    {
      text: 'Wallets',
      items: [
        { text: 'Overview', link: '/solutions/wallets/overview' },
        { text: 'Embedded Wallet', collapsed: true, link: '/solutions/wallets/embedded-wallet/overview', match: '/solutions/wallets/embedded-wallet/overview', items: [
          {text: 'Overview', link: '/solutions/wallets/embedded-wallet/overview'},
          {text: 'Quickstart', link: '/solutions/wallets/embedded-wallet/quickstart'},
          {
            text: 'Examples', collapsed: true, items: [
            {text: 'Manage Sessions', link: '/solutions/wallets/embedded-wallet/examples/manage-sessions'},
            {text: 'Use Wallets', link: '/solutions/wallets/embedded-wallet/examples/use-wallets'},
            {text: 'On-ramp', link: '/solutions/wallets/embedded-wallet/examples/on-ramp'},
            {text: 'Validation', link: '/solutions/wallets/embedded-wallet/examples/validation'},
            {text: 'Verification', link: '/solutions/wallets/embedded-wallet/examples/verification'},
            {text: 'Transaction Receipts', link: '/solutions/wallets/embedded-wallet/examples/transaction-receipts'},
            ]
          },
          {text: 'Architecture', link: '/solutions/wallets/embedded-wallet/architecture'},
          {
            text: 'Implementation Details', collapsed: true, link: '/solutions/wallets/embedded-wallet/implementation-details/action-payloads', items: [
            {text: 'Action payloads', link: '/solutions/wallets/embedded-wallet/implementation-details/action-payloads'},
            {text: 'Response payloads', link: '/solutions/wallets/embedded-wallet/implementation-details/response-payloads'},
            {text: 'Trust Contract Recovery Flow', link: '/solutions/wallets/embedded-wallet/implementation-details/trust-contract-recovery-flow'},
            {text: 'Enclave-Verification', link: '/solutions/wallets/embedded-wallet/implementation-details/enclave-verification'},
            {text: 'Intents', link: '/solutions/wallets/embedded-wallet/implementation-details/intents'},
            ]
          },
        ]
      },
        { text: 'Universal Wallet', collapsed: true, link: '/solutions/wallets/universal-wallet/overview',
        items: [
          {text: 'Overview', link: '/solutions/wallets/universal-wallet/overview'},
          {text: 'Quickstart', link: '/solutions/wallets/universal-wallet/quickstart'},
          {text: 'Examples', collapsed: true, link: '/solutions/wallets/universal-wallet/examples/connect-wallet', items: [
            {text: 'Connect Wallet', link: '/solutions/wallets/universal-wallet/examples/connect-wallet'},
            {text: 'Authenticate Users with Message Signature', link: '/solutions/wallets/universal-wallet/examples/auth-address'},
            {text: 'Signing & Verifying Messages', link: '/solutions/wallets/universal-wallet/examples/sign-message'},
            {text: 'No-wallet confirmation signatures', link: '/solutions/wallets/universal-wallet/examples/session-keys'},
            {text: 'Sending Transactions', link: '/solutions/wallets/universal-wallet/examples/send-transaction'},
            {text: 'Sending ERC-20 Tokens', link: '/solutions/wallets/universal-wallet/examples/send-erc20'},
            {text: 'Sending ERC-721 (NFT) Tokens', link: '/solutions/wallets/universal-wallet/examples/send-erc721'},
            {text: 'Sending ERC-1155 (Collectible) Tokens', link: '/solutions/wallets/universal-wallet/examples/send-erc1155'},
            {text: 'Sending a Batch of Transactions', link: '/solutions/wallets/universal-wallet/examples/send-batch-transactions'},
            {text: 'Building Backends with Sequence', link: '/solutions/wallets/universal-wallet/examples/building-backends'},
          ]
        },
        //  {text: 'Sequence Kit', link: '/solutions/wallets/universal-wallet/sequence-kit'},
          {text: 'Supported Platforms', link: '/solutions/wallets/universal-wallet/platforms'},
          {text: 'Fiat On-Ramps', link: '/solutions/wallets/universal-wallet/fiat-on-ramps'},
          {text: 'Key Management', link: '/solutions/wallets/universal-wallet/key-management'}
        ]
        }
      ]
    },
    {
      text: 'Marketplace',
      // collapsed: true,
      items: [
        { text: 'Overview', link: '/solutions/marketplaces/overview' },
        { text: 'White-label Marketplace', link: '/solutions/marketplaces/white-label-marketplace' },
        { text: 'Build your Custom Marketplace', collapsed: true, link: '/solutions/marketplaces/orderbook/overview', items: [
          {text: 'Overview', link: '/solutions/marketplaces/orderbook/overview'},
          {text: 'Quickstart', link: '/solutions/marketplaces/orderbook/quickstart'},
          
        ]
       }
      ]
    },
    {
      text: 'Collectibles',
      items: [
        { text: 'Deployable Contracts' , collapsed: true, link: '/solutions/collectibles/contracts/deploy-an-item-collection', items: [
          { text: 'Deploy a Collectible Contract', link: '/solutions/collectibles/contracts/deploy-an-item-collection'},
          // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
          // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
          { text: 'Deploy an In-Game Currency (ERC20)', link: '/solutions/collectibles/contracts/deploy-ERC20-currency'},
        ],
      },
        { 
          text: 'Metadata', collapsed: true, link: '/solutions/collectibles/metadata/manage-metadata-builder', items: [
          { text: 'Manage Metadata in Builder', link: '/solutions/collectibles/metadata/manage-metadata-builder' }
        ],
      }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: 'Payments',
      items: [
        // { text: 'NFT Checkout', link: '/solutions/nft-checkout' },
        { text: 'On-ramps', link: '/solutions/payments/onramps/fiat-on-ramps' },
      ]
    },
    {
      text: 'Builder Console',
      collapsed: true,
      link: '/solutions/builder/overview',
      items: [
        {text: 'Overview', link: '/solutions/builder/overview'},
        {text: 'Get Started', link: '/solutions/builder/getting-started'},
        {text: 'Project Management', link: '/solutions/builder/project-management'},
        {text: 'Collections', link: '/solutions/builder/collections'},
        {text: 'Contracts', link: '/solutions/builder/contracts'},
        {text: 'Gas Tank', link: '/solutions/builder/gas-tank'},
        {text: 'Wallet SDKs', link: '/solutions/builder/wallet-sdks'},
        {text: 'Embedded Wallet', link: '/solutions/builder/embedded-wallet', collapsed: true, items: [
          {text: 'Overview', link: '/solutions/builder/embedded-wallet'},
          {text: 'Google Configuration', link: '/solutions/builder/embedded-wallet/google-configuration'},
          {text: 'Apple Configuration', link: '/solutions/builder/embedded-wallet/apple-configuration'},
        ]},
        {text: 'Node Gateway', link: '/solutions/builder/node-gateway'},
        {text: 'Marketplaces', link: '/solutions/builder/marketplaces'},
        {text: 'Indexer', link: '/solutions/builder/indexer'},
        {text: 'Webhooks', link: '/solutions/builder/webhooks'},
        {text: 'Analytics', link: '/solutions/builder/analytics'},
        {text: 'Settings', link: '/solutions/builder/project-settings'},
      ]
    },
    {
      text: 'Technical References',
      items: [
        { text: 'Chain Support', link: '/solutions/technical-references/chain-support' },
        // { text: 'EIP5189 vs. 4337', link: '/solutions/technical-references/5189-4337' },
        { text: 'Why Smart Contract Wallets?', link: '/solutions/technical-references/wallet-contracts/why' },
        { text: 'Contract Internals', collapsed: true, link: '/solutions/technical-references/internals/deployment', items: [
          {text: 'Deployment', link: '/solutions/technical-references/internals/deployment'},
          { text: 'Sequence v1', collapsed: true, link: '/solutions/technical-references/internals/v1/deploy', items: [
            {text: 'Deploy', link: '/solutions/technical-references/internals/v1/deploy'},
            {text: 'Wallet Factory', link: '/solutions/technical-references/internals/v1/wallet-factory'},
            {text: 'Wallet Configuration', link: '/solutions/technical-references/internals/v1/wallet-configuration'},
            // {text: 'Transaction Encoding', link: '/solutions/technical-references/internals/v1/07-transaction-encoding'},
            {text: 'Signature Encoding', link: '/solutions/technical-references/internals/v1/signature-encoding'},
            {text: 'Wallet Context', link: '/solutions/technical-references/internals/v1/wallet-context'},
            {text: 'Contract Audits', link: '/solutions/technical-references/internals/v1/contract-audits'},
          ]},
          { text: 'Sequence v2', collapsed: true, link: '/solutions/technical-references/internals/v2/deploy', items: [
            {text: 'Deploy', link: '/solutions/technical-references/internals/v2/deploy'},
            {text: 'Wallet Configuration', link: "/solutions/technical-references/internals/v2/configuration"},
          ]}
        ]},
      ]
    },
    
  ],

  '/guides': [
    {
      text: 'Guides',
      collapsed: false,
      items: [
    {
      text: 'Build a Game with WebGL',
      collapsed: true,
      link: '/guides/webgl-guide',
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
      text: 'Build a Unity Game',
      collapsed: true,
      link: '/guides/unity-guide',
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
      text: 'Build a Collectible Minting Service',
      collapsed: true,
      link: '/guides/mint-collectibles-serverless',
      // items: [
      //   { text: 'Introduction', link: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api', match: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api'},
      //   { text: 'Setup Cloudflare Environment', link: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test', match: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test'},
      //   { text: 'Deploy, Sponsor & Update Metadata For an ERC1155', link: '/guides/mint-collectibles-serverless#2-deploy-sponsor-and-update-metadata-for-an-erc1155-contract-with-sequence-builder'},
      //   { text: 'Use EthAuthProof to Prevent EOA DDoS', link: '/guides/mint-collectibles-serverless#3-use-ethauthproof-to-prevent-eoa-ddos' },
      //   { text: 'Mint a Collectible To Wallet', link: '/guides/mint-collectibles-serverless#4-mint-a-collectible-to-wallet' },
      // ]
    },
    {
      text: 'Manage Collection Metadata',
      collapsed: true,
      link: '/guides/metadata-guide',
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
      text: 'Build a Treasure Chest with AI Minting',
      collapsed: true,
      link: '/guides/treasure-chest-guide',
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
    {
      text: 'Build a Custom Marketplace',
      collapsed: true,
      link: '/guides/custom-marketplace',
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
      text: 'Templates',
      items: [
        { text: 'Embedded Wallet Demo', link: '/guides/templates/template-embedded-wallet' },
        { text: 'Build a Backend Transaction Manager', link: '/guides/templates/building-relaying-server' }
        // { text: 'Marketplace API Demo', link: '/guides/templates/template-marketplace-api' }
      ]
    }
],

  // SDKs
  '/sdk': [
    {
      text: 'Game Engine',
      // collapsed: true,
      items: [
        { text: 'Unity', collapsed: true, link: '/sdk/unity/overview', items: [
          { text: 'Overview', link: '/sdk/unity/overview' },
          { text: 'Installation', link: '/sdk/unity/installation' },
          { text: 'Setup', link: '/sdk/unity/setup' },
          { text: 'Authentication', link: '/sdk/unity/authentication' },
          { text: 'Write to blockchain', link: '/sdk/unity/write-to-blockchain' },
          { text: 'Read from Blockchain', link: '/sdk/unity/read-from-blockchain' },
          { text: 'Sign Messages', link: '/sdk/unity/sign-messages' },
          { text: 'Deploy Contracts', link: '/sdk/unity/deploy-contracts' },
          { text: 'On-Ramp Funds via Credit Card', link: '/sdk/unity/onboard-user-funds'},
          { text: 'Wallet UI', link: '/sdk/unity/wallet-ui' },
          { text: 'Advanced', collapsed: true,  items: [
            { text: 'Introduction', link: '/sdk/unity/Advanced/introduction' },
            { text: 'Wallets', link: '/sdk/unity/Advanced/wallets' },
            { text: 'Clients', link: '/sdk/unity/Advanced/clients' },
            { text: 'Transfers', link: '/sdk/unity/Advanced/transfers' },
            { text: 'Contracts', link: '/sdk/unity/Advanced/contracts' },
            { text: 'Tokens', link: '/sdk/unity/Advanced/tokens' }
             ]
           },
          ]
        },
        { text: 'Unreal', collapsed: true, link: '/sdk/unreal/overview', items: [
          { text: 'Overview', link: '/sdk/unreal/overview' },
          { text: 'Installation', link: '/sdk/unreal/installation' }, 
          { text: 'Setup', link: '/sdk/unreal/setup' },
          { text: 'Authentication', link: '/sdk/unreal/authentication' },
          { text: 'API Integration', link: '/sdk/unreal/api-integration' },
          { text: 'Packaging', link: '/sdk/unreal/packaging' }
          ] 
        }
      ]
    },
    {
      text: 'Mobile',
      items: [
        // { text: 'Android', link: '/sdk/android' },
        // { text: 'iOS', link: '/sdk/iOS' },
        { text: 'React Native', link: '/sdk/reactnative' }
      ]
    },

    {
      text: 'Web3',
      items: [
        { text: 'Sequence Kit', collapsed: true, link: '/sdk/sequence-kit/overview', items: [
          { text: 'Overview', link: '/sdk/sequence-kit/overview' },
          { text: 'Quickstart', link: '/sdk/sequence-kit/getting-started' },
          { text: 'Configuration', link: '/sdk/sequence-kit/configuration' },
          { text: 'On-ramp', link: '/sdk/sequence-kit/on-ramp' },
          { text: 'Checkout', link: '/sdk/sequence-kit/checkout' },
          { text: 'Custom Connectors', link: '/sdk/sequence-kit/custom-connectors' }
        ]
       },
        { text: 'TypeScript', collapsed: true, link: '/sdk/typescript/guides/overview', items: [
          {text: 'Overview', link: '/sdk/typescript/guides/overview'},
          {text: 'Connect Wallet', link: '/sdk/typescript/guides/connect-wallet'},
          {text: 'Authenticate Users with Message Signature', link: '/sdk/typescript/guides/auth-address'},
          {text: 'Signing & Verifying Messages', link: '/sdk/typescript/guides/sign-message'},
          {text: 'No-wallet confirmation signatures', link: '/sdk/typescript/guides/session-keys'},
          {text: 'Sending Transactions', link: '/sdk/typescript/guides/send-transaction'},
          {text: 'Sending ERC-20 Tokens', link: '/sdk/typescript/guides/send-erc20'},
          {text: 'Sending ERC-721 (NFT) Tokens', link: '/sdk/typescript/guides/send-erc721'},
          {text: 'Sending ERC-1155 (Collectible) Tokens', link: '/sdk/typescript/guides/send-erc1155'},
          {text: 'Sending a Batch of Transactions', link: '/sdk/typescript/guides/send-batch-transactions'},
          {text: 'Building Backends with Sequence', link: '/sdk/typescript/guides/building-backends'},
          {text: 'Wallet Connectors', collapsed: true, items: [
            {text: 'Overview', link: '/sdk/typescript/connectors/overview'},
            {text: 'Wagmi', link: '/sdk/typescript/connectors/wagmi'},
            {text: 'RainbowKit', link: '/sdk/typescript/connectors/rainbow-kit'},
            {text: 'Web3 Onboard', link: '/sdk/typescript/connectors/web3-onboard'},
            {text: 'Web3 React V6', link: '/sdk/typescript/connectors/web3-react-v6'},
            {text: 'Web3Modal', link: '/sdk/typescript/connectors/web3modal'},
            {text: 'FAQ', link: '/sdk/typescript/connectors/FAQ'},
             ]
          }
        ]
      },
        { text: 'Go', collapsed: true, link: '/sdk/go/overview', items: [
          {text: 'Overview', link: '/sdk/go/overview'},]
        
        }
      ]
    },
    {
      text: 'Common Questions',
      collapsed: true,
      items: [
        { text: 'How do I do signature validation?', link: '/solutions/wallets/universal-wallet/examples/auth-address' }
        // ...
      ]
    },
  ],

  // apis
  '/api': [
    {
      text: 'Transactions',
      collapsed: false,
      link: '/api/transactions/overview',
      items: [
        { text: 'Overview', link: '/api/transactions/overview' },
        { text: 'Installation', link: '/api/transactions/installation' },
        {text: 'Examples', collapsed: false, link: '/api/transactions/examples/fetch-fee-options', items: [
          { text: 'Fetch Fee Options', link: '/api/transactions/examples/fetch-fee-options' },
          { text: 'Send Transactions', link: '/api/transactions/examples/send-transactions' },
          { text: 'Fetch Transaction Receipts', link: '/api/transactions/examples/fetch-transaction-receipts' },
          ]
        }
      ]
    },
    {
      text: 'Indexer',
      collapsed: false,
      link: '/api/indexer/overview',
      items: [
        {text: 'Overview', link: '/api/indexer/overview'},
        {text: 'Installation', link: '/api/indexer/installation'},
        {text: 'Examples', collapsed: false, link: '/api/indexer/examples/fetch-tokens', items: [
        {text: 'Fetch Tokens', link: '/api/indexer/examples/fetch-tokens'},
        {text: 'Transaction History', link: '/api/indexer/examples/transaction-history'},
        {text: 'Unique Tokens', link: '/api/indexer/examples/unique-tokens'},
        {text: 'Transaction History Token Contract', link: '/api/indexer/examples/transation-history-token-contract'},
        {text: 'Native Network Balance', link: '/api/indexer/examples/native-network-balance'},
        {text: 'Metadata Tips', link: '/api/indexer/metadata-tips'},
        {text: 'Webhooks', link: '/api/indexer/examples/webhook-listener'},
        {text: 'Subscriptions', link: '/api/indexer/examples/subscriptions'}
          ]
        }
      ]
    },
    {
      text: 'Analytics',
      collapsed: false,
      link: '/api/analytics/overview',
      items: [
        {text: 'Overview', link: '/api/analytics/overview'},
        {text: 'Examples', collapsed: false, link: '/api/analytics/examples/wallets', items: [
        {text: 'Wallets', link: '/api/analytics/examples/wallets'},
        {text: 'Marketplaces', link: '/api/analytics/examples/marketplace'},
          ]
        }
      ]
    },
    {
      text: 'Metadata',
      collapsed: false,
      link: '/api/metadata/overview',
      items: [
        { text: 'Overview', link: '/api/metadata/overview' },
        {text: 'Examples', collapsed: false, link: '/api/metadata/token-metadata', items: [
        { text: 'Token Metadata', link: '/api/metadata/token-metadata' },
        { text: 'Contract Metadata', link: '/api/metadata/contract-metadata' },
        { text: 'REST API', link: '/api/metadata/rest-api' }
          ]
        }
      ]
    },
    {
      text: 'Marketplace',
      collapsed: false,
      link: '/api/marketplace/overview',
      items: [
        { text: 'Overview', link: '/api/marketplace/overview' },
        // { text: 'Schema', link: '/api/marketplace/schema' },
        // { text: 'Marketplace API', link: '/api/marketplace/api' },
        {text: 'Examples', collapsed: false, link: '/api/marketplace/examples/orderbook-transactions', items: [
          {text: 'Creating Market Orders & Listings', link: '/api/marketplace/examples/orderbook-transactions'},
          {text: 'Get Top Orders', link: '/api/marketplace/examples/get-top-orders'},
          {text: 'Get Orderbook', link: '/api/marketplace/examples/get-orderbook'},
          {text: 'Get User Activities', link: '/api/marketplace/examples/get-user-activities'},
            ]
          }
      ]
    },
    {
      text: 'Node Gateway',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/node-gateway' }      ]
    },
  ],
  
  // Support
  '/support': {
    items: [
      { text: 'Support', link: '/support' },
      { text: 'Changelog', link: 'https://0xsequence.canny.io/changelog' },
      { text: 'Restricted Regions', link: '/support/restricted-regions' },
      { text: 'FAQ', link: 'https://support.sequence.xyz' },
      { text: 'Token Directory', link: '/support/token-directory' },
      { text: 'Discord', link: 'https://discord.gg/sequence' },
      { text: 'We\'re hiring!', link: 'https://horizon.io/careers' },
      { text: 'Contact Us', link: 'https://support.sequence.xyz' },
    ]
  },





} as Sidebar
