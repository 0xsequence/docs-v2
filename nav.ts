import type { Sidebar, TopNav } from 'vocs'

export const topNav = [
  { text: 'Solutions',
  items: [
    { text: 'Wallets', link: '/solutions/wallets/overview', match: '/solutions/wallets/overview' },
    { text: 'Marketplace', link: '/solutions/marketplaces/overview', match: '/solutions/marketplaces/overview' },
    { text: 'Collectibles', link: '/solutions/collectibles/contracts/01-deploy-an-item-collection', match: '/solutions/collectibles/contracts/01-deploy-an-item-collection' },
    { text: 'Payments', link: '/solutions/nft-checkout', match: '/solutions/nft-checkout' },
    { text: 'Builder Console', link: '/solutions/builder/overview', match: '/solutions/builder/overview', items: [
      { text: 'Overview', link: '/solutions/builder/overview', match: '/solutions/builder/overview' }, 
    ]
  }
]
},
  { 
    text: 'Guides',
    items: [
      { text: 'Web3 Game with WebGL', link: '/guides/webgl-guide', match: '/guides/webgl-guide' },
      { text: 'Web3 Game with Unity', link: '/guides/unity-guide', match: '/guides/unity-guide' },
      { text: 'Lootboxes', link: '/guides/lootbox', match: '/guides/lootbox' },
      { text: 'Custom Marketplace', link: '/guides/custom-marketplace-guide', match: '/guides/custom-marketplace-guide' }
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
      // { text: 'React Native', link: '/sdk/reactnative', match: '/sdk/reactnative' },
      // { text: 'iOS', link: '/sdk/iOS', match: '/sdk/iOS' }
    ]
  },

  // replace links.
  { 
    text: 'APIs',
    items: [
      { text: 'Relayer API', link: '/api/relayer/overview' },
      { text: 'Indexer API', link: '/api/indexer/overview' },
      { text: 'Metadata API', link: '/api/metadata/overview' },
      { text: 'Marketplace API', link: '/api/marketplace/overview' },
      { text: 'Node Gateway', link: '/api/node-gateway' },
    ]
  },

  { 
    text: 'Support',
    items: [
      { text: 'Support', link: '/support' },
      { text: 'Changelog', link: 'https://0xsequence.canny.io/changelog' },
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
        { text: 'Embedded Wallet', collapsed: true, items: [
          {text: 'Overview', link: '/solutions/wallets/embedded-wallet/overview'},
          {text: 'Quickstart', link: '/solutions/wallets/embedded-wallet/quickstart'},
          {text: 'Examples', collapsed: true, items: [
          {text: 'Manage Sessions', link: '/solutions/wallets/embedded-wallet/examples/manage-sessions'},
          {text: 'Use Wallets', link: '/solutions/wallets/embedded-wallet/examples/use-wallets'},
          {text: 'Validation', link: '/solutions/wallets/embedded-wallet/examples/validation'},
          {text: 'Transaction Receipts', link: '/solutions/wallets/embedded-wallet/examples/transaction-receipts'},
            ]
          }
        ]
      },
        { text: 'Universal Wallet', collapsed: true, 
        items: [
          {text: 'Overview', link: '/solutions/wallets/universal-wallet/overview'},
          {text: 'Quickstart', link: '/solutions/wallets/universal-wallet/quickstart'},
          {text: 'Examples', collapsed: true, items: [
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
          {text: 'Sequence Kit', link: '/solutions/wallets/universal-wallet/sequence-kit'},
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
        { text: 'Build your Custom Marketplace', collapsed: true, items: [
          {text: 'Overview', link: '/solutions/marketplaces/orderbook/overview'},
          {text: 'Quickstart', link: '/solutions/marketplaces/orderbook/quickstart'},
          {text: 'Examples', collapsed: true, items: [
          {text: 'Get Top Orders', link: '/solutions/marketplaces/orderbook/examples/get-top-orders'},
          {text: 'Get Orderbook', link: '/solutions/marketplaces/orderbook/examples/get-orderbook'},
          {text: 'Get User Activities', link: '/solutions/marketplaces/orderbook/examples/get-user-activities'},
          {text: 'Creating Market Transactions', link: '/solutions/marketplaces/orderbook/examples/orderbook-transactions'},
            ]
          }
        ]
       }
      ]
    },
    {
      text: 'Collectibles',
      items: [
        { text: 'Deployable Contracts' , collapsed: true, items: [
          { text: 'Deploy a Collectible Contract', link: '/solutions/collectibles/contracts/deploy-an-item-collection'},
          // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
          // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
          { text: 'Deploy an In-Game Currency (ERC20)', link: '/solutions/collectibles/contracts/deploy-ERC20-currency'},
        ],
      },
        { 
          text: 'Metadata', collapsed: true, items: [
          { text: 'Manage Metadata in Builder',link: '/solutions/collectibles/metadata/manage-metadata-builder' }
        ],
      }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: 'Payments',
      items: [
        // { text: 'NFT Checkout', link: '/solutions/nft-checkout' },
        { text: 'Onramps', link: '/solutions/payments/onramps/fiat-on-ramps' },
      ]
    },
    {
      text: 'Builder Console',
      collapsed: true,
      items: [
        {text: 'Overview', link: '/solutions/builder/overview'},
        {text: 'Get Started', link: '/solutions/builder/getting-started'},
        {text: 'Project Management', link: '/solutions/builder/project-management'},
        {text: 'Contracts', link: '/solutions/builder/contracts'},
        {text: 'Gas Tank', link: '/solutions/builder/gas-tank'},
        {text: 'Wallet SDKs', link: '/solutions/builder/wallet-sdks'},
        {text: 'Embedded Wallet', link: '/solutions/builder/in-game-wallet'},
        {text: 'Node Gateway', link: '/solutions/builder/node-gateway'},
        {text: 'Marketplaces', link: '/solutions/builder/marketplaces'},
        {text: 'Indexer', link: '/solutions/builder/indexer'},
        {text: 'Analytics', link: '/solutions/builder/analytics'},
        {text: 'Settings', link: '/solutions/builder/project-settings'},
      ]
    },
    {
      text: 'Technical References',
      items: [
        { text: 'Chain Support', link: '/solutions/technical-references/chain-support' },
        // { text: 'EIP5189 vs. 4337', link: '/solutions/technical-references/5189-4337' },
        { text: 'Smart Contract Wallets', collapsed: true, items: [
          { text: 'Why smart contract wallets?', link: '/solutions/technical-references/wallet-contracts/why' },
        ] },
        { text: 'Contract Internals', collapsed: true, items: [
          {text: 'Deployment', link: '/solutions/technical-references/internals/deployment'},
          { text: 'Sequence v1', collapsed: true, items: [
            {text: 'Deploy', link: '/solutions/technical-references/internals/v1/deploy'},
            {text: 'Wallet Factory', link: '/solutions/technical-references/internals/v1/wallet-factory'},
            {text: 'Wallet Configuration', link: '/solutions/technical-references/internals/v1/wallet-configuration'},
            // {text: 'Transaction Encoding', link: '/solutions/technical-references/internals/v1/07-transaction-encoding'},
            {text: 'Signature Encoding', link: '/solutions/technical-references/internals/v1/signature-encoding'},
            {text: 'Wallet Context', link: '/solutions/technical-references/internals/v1/wallet-context'},
            {text: 'Contract Audits', link: '/solutions/technical-references/internals/v1/contract-audits'},
          ]},
          { text: 'Sequence v2', collapsed: true, items: [
            {text: 'Deploy', link: '/solutions/technical-references/internals/v2/deploy'},
            {text: 'Wallet Configuration', link: "/solutions/technical-references/internals/v2/configuration"},
          ]}
        ]},
        { text: 'Wallet as a Service', collapsed: true, items: [
            {text: 'Overview', link: '/solutions/technical-references/wallet-as-a-service/overview'},
            {text: 'Intents', link: '/solutions/technical-references/wallet-as-a-service/intents'},
            {text: 'Enclave verification', link: '/solutions/technical-references/wallet-as-a-service/enclave-verification'},
          ] }
      ]
    },
    
  ],

  '/guides': [
    {
      text: 'Build a game with WebGL',
      collapsed: true,
      items: [
        { text: 'Project setup with webpack', link: '/guides/webgl-guide#1-project-setup-with-webpack' },
        { text: 'Integrate Sequence Kit', link: '/guides/webgl-guide#2-integrate-sequence-kit' },
        { text: 'Deploy collectibles contract', link: '/guides/webgl-guide#3-deploy-a-collectibles-contract' },
        { text: 'Deploy a remote minter & mint in-game achievement tokens', link: '/guides/webgl-guide#4-deploy-a-remote-minter--mint-in-game-achievement-tokens' },
        { text: 'Leverage items in-game', link: '/guides/webgl-guide#5-leverage-items-in-game' },
        { text: 'Burn in-game achievement tokens', link: '/guides/webgl-guide#6-burn-in-game-achievement-tokens' },
        { text: 'Integrate Embedded Wallet into Sequence Kit', link: '/guides/webgl-guide#7-optional-integrate-in-game-wallet-into-sequence-kit' },
      ]
    },
    {
      text: 'Build a mobile Unity game',
      collapsed: true,
      items: [
        { text: 'Integrate SequenceKit with WaaS', link: '/guides/unity-guide#integrate-sequencekit-with-waas' },
        { text: 'Deploy a collectibles contract', link: '/guides/unity-guide#deploy-a-collectibles-contract' },
        { text: 'Deploy a remote minter', link: '/guides/unity-guide#deploy-a-remote-minter' },
        { text: 'Mint in-game achievement tokens', link: '/guides/unity-guide#mint-in-game-achievement-tokens' },
        { text: 'Burn in-game achievement tokens', link: '/guides/unity-guide#burn-in-game-achievement-tokens' },
        { text: 'Integrate an embedded marketplace', link: '/guides/unity-guide#integrate-an-embedded-marketplace' },
        { text: 'Leverage purchased items in-game', link: '/guides/unity-guide#leverage-purchased-items-in-game' },
      ]
    },
    {
      text: 'Build a lootbox with AI minting',
      link: '/guides/lootbox'
    },
    { text: 'Serverless Minting of Collectibles', collapsed: true, 
    items: [
      { text: 'Setup Cloudflare Environment', link: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test' },
      { text: 'Deploy a collectibles contract', link: '/guides/mint-collectibles-serverless#2-deploy-sponsor-and-update-metadata-for-an-erc1155-contract-with-builder' },
      { text: 'Deploy a remote minter', link: '/guides/mint-collectibles-serverless#3-use-ethauthproof-to-prevent-eoa-ddos' },
      { text: 'Mint in-game achievement tokens', link: '/guides/mint-collectibles-serverless#4-mint-a-collectible-to-wallet' },
    ] 
  },
    {
      text: 'Build a Custom Marketplace',
      collapsed: true,
      items: [
        { text: 'Minting', link: '/guides/custom-marketplace-guide#1-minting' },
        { text: 'Wallet authentication', link: '/guides/custom-marketplace-guide#2-wallet-authentication' },
        { text: 'Blockchain queries', link: '/guides/custom-marketplace-guide#3-blockchain-queries' },
        { text: 'Multi-Wallet types', link: '/guides/custom-marketplace-guide#4-multi-wallet-types' },
        { text: 'Request creation', link: '/guides/custom-marketplace-guide#5-request-creation' },
        { text: 'Order accepting', link: '/guides/custom-marketplace-guide#6-order-accepting' },
        { text: 'Integrate Embedded Wallet into Sequence Kit', link: '/guides/custom-marketplace-guide#7-optional-integrate-in-game-wallet-into-sequence-kit' },
      ]
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: 'Templates',
      items: [
        { text: 'In-game Wallet Demo', link: '/guides/templates/template-in-game-wallet' },
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
        { text: 'Unreal', collapsed: true, items: [
          { text: 'Overview', link: '/sdk/unreal/overview' },
          { text: 'Installation', link: '/sdk/unreal/installation' },
          { text: 'Setup', link: '/sdk/unreal/setup' },
          { text: 'Authentication', link: '/sdk/unreal/authentication' },
          { text: 'API Integration', link: '/sdk/unreal/api-integration' },
          { text: 'Packaging', link: '/sdk/unreal/packaging' }
          ] 
        },

        { text: 'Unity', collapsed: true, items: [
          { text: 'Overview', link: '/sdk/unity/overview' },
          { text: 'Installation', link: '/sdk/unity/installation' },
          { text: 'Setup', link: '/sdk/unity/setup' },
          { text: 'Authentication', link: '/sdk/unity/authentication' },
          { text: 'Write to blockchain', link: '/sdk/unity/write-to-blockchain' },
          { text: 'Read from Blockchain', link: '/sdk/unity/read-from-blockchain' },
          { text: 'Sign Messages', link: '/sdk/unity/sign-messages' },
          { text: 'Deploy Contracts', link: '/sdk/unity/deploy-contracts' },
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
      text: 'Web3',
      items: [
        { text: 'SequenceKit', collapsed: true, items: [
          { text: 'Overview', link: '/sdk/sequence-kit/overview' },
          { text: 'Quickstart', link: '/sdk/sequence-kit/getting-started' },
          { text: 'Configuration', link: '/sdk/sequence-kit/configuration' },
          { text: 'Checkout', link: '/sdk/sequence-kit/checkout' },
          { text: 'Custom Connectors', link: '/sdk/sequence-kit/custom-connectors' }
        ]
       },
        { text: 'TypeScript', collapsed: true, items: [
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
            {text: 'SequenceKit', link: '/sdk/sequence-kit/overview'},
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
        { text: 'Go', collapsed: true, items: [
          {text: 'Overview', link: '/sdk/go/overview'},]
        
        }
      ]
    },
    {
      text: 'Common Questions',
      collapsed: true,
      items: [
        { text: 'How do I do signature validation?', link: '/wallet/sig-validation' }
        // ...
      ]
    },
  ],

  // apis
  '/api': [
    {
      text: 'Relayer',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/relayer/overview' },
        { text: 'Installation', link: '/api/relayer/installation' },
        {text: 'Examples', collapsed: false, items: [
          { text: 'Fetch Fee Options', link: '/api/relayer/examples/fetch-fee-options' },
          { text: 'Send Transactions', link: '/api/relayer/examples/send-transactions' },
          { text: 'Fetch Transaction Receipts', link: '/api/relayer/examples/fetch-transaction-receipts' },
          ]
        }
      ]
    },
    {
      text: 'Indexer',
      collapsed: false,
      items: [
        {text: 'Overview', link: '/api/indexer/overview'},
        {text: 'Installation', link: '/api/indexer/installation'},
        {text: 'Examples', collapsed: false, items: [
        {text: 'Fetch Tokens', link: '/api/indexer/examples/fetch-tokens'},
        {text: 'Transaction History', link: '/api/indexer/examples/transaction-history'},
        {text: 'Unique Tokens', link: '/api/indexer/examples/unique-tokens'},
        {text: 'Transaction History Token Contract', link: '/api/indexer/examples/transation-history-token-contract'},
        {text: 'Native Network Balance', link: '/api/indexer/examples/native-network-balance'},
        {text: 'Metadata Tips', link: '/api/indexer/metadata-tips'},
        {text: 'Webhooks', link: '/api/indexer/examples/webhook-listener'}
          ]
        }
      ]
    },
    {
      text: 'Metadata',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/metadata/overview' },
        {text: 'Examples', collapsed: false, items: [
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
      items: [
        { text: 'Overview', link: '/api/marketplace/overview' },
        // { text: 'Schema', link: '/api/marketplace/schema' },
        // { text: 'Marketplace API', link: '/api/marketplace/api' },
        {text: 'Examples', collapsed: false, items: [
            {text: 'Get Top Orders', link: '/solutions/marketplaces/orderbook/examples/get-top-orders'},
            {text: 'Get Orderbook', link: '/solutions/marketplaces/orderbook/examples/get-orderbook'},
            {text: 'Get User Activities', link: '/solutions/marketplaces/orderbook/examples/get-user-activities'},
            {text: 'Creating Market Transactions', link: '/solutions/marketplaces/orderbook/examples/orderbook-transactions'},
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
      { text: 'FAQ', link: 'https://support.sequence.xyz' },
      { text: 'Token Directory', link: '/support/token-directory' },
      { text: 'Discord', link: 'https://discord.gg/sequence' },
      { text: 'We\'re hiring!', link: 'https://horizon.io/careers' },
      { text: 'Contact Us', link: 'https://support.sequence.xyz' },
    ]
  },





} as Sidebar
