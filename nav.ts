import type { Sidebar, TopNav } from 'vocs'

export const topNav = [
  { text: 'Solutions',
  items: [
    { text: 'Wallets', link: '/solutions/wallets/overview', match: '/solutions/wallets/overview' },
    { text: 'Marketplace', link: '/solutions/marketplaces/overview', match: '/solutions/marketplaces/overview' },
    { text: 'Collectibles', link: '/solutions/collectibles/contracts/01-deploy-an-item-collection', match: '/solutions/collectibles/contracts/01-deploy-an-item-collection' },
    { text: 'Payments', link: '/solutions/nft-checkout', match: '/solutions/nft-checkout' },
    { text: 'No-code Builder', link: '/solutions/builder/overview', match: '/solutions/builder/overview', items: [
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
      { text: 'Custom Marketplace', link: '/guides/template-marketplace-api', match: '/guides/template-marketplace-api' }
    ]
  },
  { 
    text: 'SDKs',
    items: [
      { text: 'Unity', link: '/sdk/unity/01-overview', match: '/sdk/unity/01-overview' },
      { text: 'Unreal', link: '/sdk/unreal/01-overview', match: '/sdk/unreal/01-overview' },
      { text: 'Typescript', link: '/sdk/typescript/03-guides/overview', match: '/sdk/typescript/03-guides/overview' },
      { text: 'Sequence Kit', link: '/sdk/sequence-kit/01-overview', match: '/sdk/sequence-kit/01-overview' },
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
      { text: 'Relayer API', link: '/api/relayer' },
      { text: 'Indexer API', link: '/api/indexer/01-overview' },
      { text: 'Metadata API', link: '/api/metadata/overview' },
      { text: 'Marketplace API', link: '/api/marketplace' },
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
        { text: 'In-Game Wallet', collapsed: true, items: [
          {text: 'Overview', link: '/solutions/wallets/embedded-wallet/01-overview'},
          {text: 'Quickstart', link: '/solutions/wallets/embedded-wallet/02-quickstart'},
          {text: 'Examples', collapsed: true, items: [
          {text: 'Manage Sessions', link: '/solutions/wallets/embedded-wallet/examples/03-manage-sessions'},
          {text: 'Use Wallets', link: '/solutions/wallets/embedded-wallet/examples/04-use-wallets'},
          {text: 'Validation', link: '/solutions/wallets/embedded-wallet/examples/05-validation'},
          {text: 'Transaction Receipts', link: '/solutions/wallets/embedded-wallet/examples/06-transaction-receipts'},
            ]
          }
        ]
      },
        { text: 'Universal Wallet', collapsed: true, 
        items: [
          {text: 'Overview', link: '/solutions/wallets/universal-wallet/01-overview'},
          {text: 'Quickstart', link: '/solutions/wallets/universal-wallet/02-quickstart'},
          {text: 'Examples', collapsed: true, items: [
            {text: 'Connect Wallet', link: '/solutions/wallets/universal-wallet/examples/01-connect-wallet'},
            {text: 'Authenticate Users with Message Signature', link: '/solutions/wallets/universal-wallet/examples/02-auth-address'},
            {text: 'Signing & Verifying Messages', link: '/solutions/wallets/universal-wallet/examples/03-sign-message'},
            {text: 'No-wallet confirmation signatures', link: '/solutions/wallets/universal-wallet/examples/04-session-keys'},
            {text: 'Sending Transactions', link: '/solutions/wallets/universal-wallet/examples/05-send-transaction'},
            {text: 'Sending ERC-20 Tokens', link: '/solutions/wallets/universal-wallet/examples/06-send-erc20'},
            {text: 'Sending ERC-721 (NFT) Tokens', link: '/solutions/wallets/universal-wallet/examples/07-send-erc721'},
            {text: 'Sending ERC-1155 (Collectible) Tokens', link: '/solutions/wallets/universal-wallet/examples/08-send-erc1155'},
            {text: 'Sending a Batch of Transactions', link: '/solutions/wallets/universal-wallet/examples/09-send-batch-transactions'},
            {text: 'Building Backends with Sequence', link: '/solutions/wallets/universal-wallet/examples/10-building-backends'},
          ]
        },
          {text: 'Sequence Kit', link: '/solutions/wallets/universal-wallet/04-sequence-kit'},
          {text: 'Supported Platforms', link: '/solutions/wallets/universal-wallet/05-platforms'},
          {text: 'Fiat On-Ramps', link: '/solutions/wallets/universal-wallet/06-fiat-on-ramps'},
          {text: 'Key Management', link: '/solutions/wallets/universal-wallet/07-key-management'}
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
          {text: 'Overview', link: '/solutions/marketplaces/orderbook/01-overview'},
          {text: 'Quickstart', link: '/solutions/marketplaces/orderbook/02-quickstart'},
          {text: 'Examples', collapsed: true, items: [
          {text: 'Get Top Orders', link: '/solutions/marketplaces/orderbook/examples/03-get-top-orders'},
          {text: 'Get Orderbook', link: '/solutions/marketplaces/orderbook/examples/04-get-orderbook'},
          {text: 'Get User Activities', link: '/solutions/marketplaces/orderbook/examples/05-get-user-activities'},
          {text: 'Orderbook Transactions', link: '/solutions/marketplaces/orderbook/examples/06-orderbook-transactions'},
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
          { text: 'Deploy a Collectible Contract', link: '/solutions/collectibles/contracts/01-deploy-an-item-collection'},
          // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
          // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
          { text: 'Deploy an In-Game Currency (ERC20)', link: '/solutions/collectibles/contracts/02-deploy-ERC20-currency'},
        ],
      },
        { 
          text: 'Metadata', collapsed: true, items: [
          { text: 'Manage Metadata in Builder',link: '/solutions/collectibles/metadata/800-manage-metadata-builder' }
        ],
      }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    {
      text: 'Payments',
      items: [
        { text: 'NFT Checkout', link: '/solutions/nft-checkout' },
        { text: 'Onramps', link: '/solutions/payments/onramps/01-fiat-on-ramps' },
      ]
    },
    {
      text: 'No-code Builder',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/solutions/builder/overview' },
        { text: 'Get Started', link: '/solutions/builder/getting-started' },
        {text: 'Project Management', link: '/solutions/builder/project-management'},
        {text: 'Contracts', link: '/solutions/builder/contracts'},
        {text: 'Gas Tank', link: '/solutions/builder/gas-tank'},
        {text: 'Wallet SDKs', link: '/solutions/builder/wallet-sdks'},
        {text: 'Node Gateway', link: '/solutions/builder/node-gateway'},
        {text: 'Marketplaces', link: '/solutions/builder/marketplaces'},
        {text: 'Indexer', link: '/solutions/builder/indexer'},
        {text: 'Settings', link: '/solutions/builder/project-settings'},
      ]
    },
    {
      text: 'Technical References',
      items: [
        { text: 'Chain Support', link: '/solutions/technical-references/chain-support' },
        // { text: 'EIP5189 vs. 4337', link: '/solutions/technical-references/5189-4337' },
        { text: 'Smart Contract Wallets', collapsed: true, items: [
          { text: 'Why smart contract wallets?', link: '/solutions/technical-references/wallet-contracts/01-why' },
          { text: 'Universal Deployer', link: '/solutions/technical-references/wallet-contracts/02-universal-deployer' },
          {text: 'Wallet Factory', link: '/solutions/technical-references/wallet-contracts/03-wallet-factory'},
          {text: 'Wallet Configuration', link: '/solutions/technical-references/wallet-contracts/04-wallet-configuration'},
          // {text: 'Modules & Wallet update', link: 'solutions/technical-references/wallet-contracts/05-modules-and-updates'},
          // {text: 'MainModuleUpgradeable & configuration migration', link: 'solutions/technical-references/wallet-contracts/06-main-module-upgradeable'},
          {text: 'Transaction Encoding', link: '/solutions/technical-references/wallet-contracts/07-transaction-encoding'},
          {text: 'Signature Encoding', link: '/solutions/technical-references/wallet-contracts/08-signature-encoding'},
          // {text: 'Nested Transaction Batching', link: 'solutions/technical-references/wallet-contracts/09-nested-transaction-batching'},
          // {text: 'GuestModule and on-demand deployment', link: 'solutions/technical-references/wallet-contracts/10-guest-module'},
          {text: 'Wallet Context', link: '/solutions/technical-references/wallet-contracts/11-wallet-context'},
          {text: 'Contract Audits', link: '/solutions/technical-references/wallet-contracts/12-contract-audits'},
        ] }
      ]
    },
    
  ],

  '/guides': [
    {
      text: 'Build a game with WebGL',
      collapsed: true,
      items: [
        { text: 'Integrate SequenceKit with WaaS', link: '/guides/webgl-guide#integrate-sequencekit-with-waas' },
        { text: 'Deploy a collectibles contract', link: '/guides/webgl-guide#deploy-a-collectibles-contract' },
        { text: 'Deploy a remote minter', link: '/guides/webgl-guide#deploy-a-remote-minter' },
        { text: 'Mint in-game achievement tokens', link: '/guides/webgl-guide#mint-in-game-achievement-tokens' },
        { text: 'Burn in-game achievement tokens', link: '/guides/webgl-guide#burn-in-game-achievement-tokens' },
        { text: 'Integrate an embedded marketplace', link: '/guides/webgl-guide#integrate-an-embedded-marketplace' },
        { text: 'Leverage purchased items in-game', link: '/guides/webgl-guide#leverage-purchased-items-in-game' },
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
    {
      text: 'Building a Custom Marketplace',
      link: '/guides/template-marketplace-api'
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: 'Templates',
      items: [
        { text: 'In-Game Wallet Demo', link: '/guides/templates/template-embedded-wallet' },
        { text: 'Build a Backend Transaction Manager', link: '/guides/templates/02-building-relaying-server' },
        { text: 'Serverless Minting of Collectibles', link: '/guides/templates/03-mint-collectibles-serverless' }
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
          { text: 'Overview', link: '/sdk/unreal/01-overview' },
          { text: 'Installation', link: '/sdk/unreal/02-installation' },
          { text: 'Setup', link: '/sdk/unreal/03-setup' },
          { text: 'Authentication', link: '/sdk/unreal/04-authentication' },
          { text: 'API Integration', link: '/sdk/unreal/05-api-integration' },
          { text: 'Packaging', link: '/sdk/unreal/06-packaging' }
          ] 
        },

        { text: 'Unity', collapsed: true, items: [
          { text: 'Overview', link: '/sdk/unity/01-overview' },
          { text: 'Installation', link: '/sdk/unity/02-installation' },
          { text: 'Setup', link: '/sdk/unity/03-setup' },
          { text: 'Authentication', link: '/sdk/unity/04-authentication' },
          { text: 'Write to blockchain', link: '/sdk/unity/05-write-to-blockchain' },
          { text: 'Read from Blockchain', link: '/sdk/unity/06-read-from-blockchain' },
          { text: 'Sign Messages', link: '/sdk/unity/07-sign-messages' },
          { text: 'Deploy Contracts', link: '/sdk/unity/08-deploy-contracts' },
          { text: 'Wallet UI', link: '/sdk/unity/09-wallet-ui' },
          { text: 'Advanced', collapsed: true,  items: [
            { text: 'Introduction', link: '/sdk/unity/Advanced/01-introduction' },
            { text: 'Wallets', link: '/sdk/unity/Advanced/02-wallets' },
            { text: 'Clients', link: '/sdk/unity/Advanced/03-clients' },
            { text: 'Transfers', link: '/sdk/unity/Advanced/04-transfers' },
            { text: 'Contracts', link: '/sdk/unity/Advanced/05-contracts' },
            { text: 'Tokens', link: '/sdk/unity/Advanced/06-tokens' }
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
          { text: 'Overview', link: '/sdk/sequence-kit/01-overview' },
          { text: 'Quickstart', link: '/sdk/sequence-kit/02-getting-started' },
          { text: 'Configuration', link: '/sdk/sequence-kit/03-configuration' },
          { text: 'Checkout', link: '/sdk/sequence-kit/04-checkout' },
          { text: 'Custom Connectors', link: '/sdk/sequence-kit/05-custom-connectors' }
        ]
       },
        { text: 'TypeScript', collapsed: true, items: [
          {text: 'Overview', link: '/sdk/typescript/03-guides/overview'},
          {text: 'Connect Wallet', link: '/sdk/typescript/03-guides/01-connect-wallet'},
          {text: 'Authenticate Users with Message Signature', link: '/sdk/typescript/03-guides/02-auth-address'},
          {text: 'Signing & Verifying Messages', link: '/sdk/typescript/03-guides/03-sign-message'},
          {text: 'No-wallet confirmation signatures', link: '/sdk/typescript/03-guides/04-session-keys'},
          {text: 'Sending Transactions', link: '/sdk/typescript/03-guides/05-send-transaction'},
          {text: 'Sending ERC-20 Tokens', link: '/sdk/typescript/03-guides/06-send-erc20'},
          {text: 'Sending ERC-721 (NFT) Tokens', link: '/sdk/typescript/03-guides/07-send-erc721'},
          {text: 'Sending ERC-1155 (Collectible) Tokens', link: '/sdk/typescript/03-guides/08-send-erc1155'},
          {text: 'Sending a Batch of Transactions', link: '/sdk/typescript/03-guides/09-send-batch-transactions'},
          {text: 'Building Backends with Sequence', link: '/sdk/typescript/03-guides/10-building-backends'},
          {text: 'Wallet Connectors', collapsed: true, items: [
            {text: 'Overview', link: '/sdk/typescript/connectors/01-overview'},
            {text: 'SequenceKit', link: '/sdk/sequence-kit/01-overview'},
            {text: 'Wagmi', link: '/sdk/typescript/connectors/03-wagmi'},
            {text: 'RainbowKit', link: '/sdk/typescript/connectors/04-rainbow-kit'},
            {text: 'Web3 Onboard', link: '/sdk/typescript/connectors/05-web3-onboard'},
            {text: 'Web3 React V6', link: '/sdk/typescript/connectors/06-web3-react-v6'},
            {text: 'Web3Modal', link: '/sdk/typescript/connectors/07-web3modal'},
            {text: 'FAQ', link: '/sdk/typescript/connectors/08-FAQ'},
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
      collapsed: true,
      items: [
        { text: 'Overview', link: '/api/relayer' },
        { text: 'Relayer Examples', link: '/api/relayer/examples' },
      ]
    },
    {
      text: 'Indexer',
      collapsed: true,
      items: [
        {text: 'Overview', link: '/api/indexer/01-overview'},
        {text: 'Installation', link: '/api/indexer/02-installation'},
        {text: 'Fetch Tokens', link: '/api/indexer/03-fetch-tokens'},
        {text: 'Transaction History', link: '/api/indexer/04-transaction-history'},
        {text: 'Unique Tokens', link: '/api/indexer/05-unique-tokens'},
        {text: 'Transaction History Token Contract', link: '/api/indexer/06-transation-history-token-contract'},
        {text: 'Native Network Balance', link: '/api/indexer/07-native-network-balance'},
        {text: 'Indexing Tips', link: '/api/indexer/08-metadata-tips'},
      ]
    },
    {
      text: 'Metadata',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/api/metadata/overview' },
        { text: 'Token Metadata', link: '/api/metadata/token-metadata' },
        { text: 'Contract Metadata', link: '/api/metadata/contract-metadata' },
        { text: 'REST API', link: '/api/metadata/rest-api' }
      ]
    },
    {
      text: 'Marketplace',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/api/marketplace' },
        { text: 'Schema', link: '/api/marketplace/schema' },
        { text: 'Marketplace API', link: '/api/marketplace/api' },
        { text: 'Marketplace Examples', link: '/api/marketplace/examples' },
      ]
    },
    {
      text: 'Node Gateway',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/api/node-gateway' },
        { text: 'Etc', link: '/api/node-gateway/etc' },
      ]
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
  }

} as Sidebar
