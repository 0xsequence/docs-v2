import clsx from 'clsx'
import * as ICONS from './icons'

export const SolutionsSection = () => (
  <section className="flex flex-col gap-5 border-t border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Solutions</h3>
      <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8">
        Follow our solution guides to boost your game's onboarding experience,
        unlock new ways to monetize and power your game with the Sequence platform.
      </p>
    </div>
    <div className="flex md:flex-row flex-col gap-4">
      <SolutionsGroup
        theme="purple"
        heading="Onboard players"
        items={[
          {
            icon: 'WalletIcon',
            title: 'Embedded Wallet',
            body: 'Gasless Transactions. No popups. Deliver a seamless experience for both web2 and web3 players with Sequence embedded into your game or app, compatible with nearly any platform or game engine.',
            link: '/solutions/wallets/embedded-wallet/overview',
          },
          {
            icon: 'MinterIcon',
            title: 'Sequence Kit',
            body: 'Built on top of wagmi, onboard web2 users or native crypto users with an existing wallet to your web game or app.',
            link: '/solutions/wallets/sequence-kit/overview',
          },
          {
            icon: 'AirdropperIcon',
            title: 'Wallet Linking',
            body: 'Enable users to link their embedded wallet in your game with an external wallet - allowing you to query assets, balances, and allow easy flow of liquidity to your game.',
            link: '/solutions/wallets/link-wallets/overview',
          },
          {
            icon: 'WalletIcon',
            title: 'Universal Wallet',
            body: 'Easily onboard web3-native players with a complete Universal Wallet.',
            link: '/solutions/wallets/universal-wallet/overview',
          },
        ]}
      />
      <SolutionsGroup
        theme="green"
        heading="Earn more revenue"
        items={[
          {
            icon: 'MarketplaceIcon',
            title: 'White-Label Marketplace',
            body: 'Launch an in-game collectibles marketplace within minutes.',
            link: '/solutions/marketplaces/white-label-marketplace',
          },
          {
            icon: 'SequenceIcon',
            title: 'Marketplace APIs',
            body: 'Integrate custom in-game marketplaces with our APIs.',
            link: '/solutions/marketplaces/orderbook/overview',
          },
          {
            icon: 'CartIcon',
            title: 'NFT Checkout',
            body: 'Offer easy purchases with credit card, crypto, IAP support.',
            link: '/solutions/wallets/sequence-kit/checkout',
          },
          {
            icon: 'NodeGatewayIcon',
            title: 'Fiat On-ramps',
            body: 'Allow players to convert from fiat to crypto globally.',
            link: '/solutions/payments/onramps/fiat-on-ramps',
          },
        ]}
      />
      <SolutionsGroup
        theme="yellow"
        heading="Power your game"
        items={[
          {
            icon: 'IndexerIcon',
            title: 'Indexer',
            body: 'Performantly query wallets and contracts to use in your game or app.',
            link: '/solutions/builder/indexer',
          },
          {
            icon: 'CollectiblesIcon',
            title: 'Contracts & Collectibles',
            body: 'Import any contract or deploy a new one with our audited smart contract suite. Manage your collection metadata at scale.',
            link: '/solutions/collectibles/contracts/deploy-an-item-collection',
          },
          {
            icon: 'AnalyticsIcon',
            title: 'Analytics',
            body: 'Track every aspect of web3 activity within your games.',
            link: '/solutions/builder/analytics',
          },
          {
            icon: 'MinterIcon',
            title: 'Transaction Manager',
            body: 'Scalable transactions with batching, access-control, parallelization, automatic reorg management with our transactions API.',
            link: '/solutions/transactions-api/overview',
          },
          // {
          //   icon: 'MinterIcon',
          //   title: 'Minter',
          //   body: 'Securely mint achievement tokens tied to your game.',
          //   link: '/guides/mint-collectibles-serverless/',
          // },
        ]}
      />
    </div>
  </section>
)

const SolutionsGroup = ({
  heading,
  items,
  theme,
}: {
  heading: string
  items: {
    icon: keyof typeof ICONS
    title: string
    body: string
    link: string
  }[]
  theme: 'purple' | 'green' | 'yellow'
}) => {
  return (
    <div className="flex-1 h-fit shrink-0 rounded-xl dark:bg-white-10 bg-white overflow-hidden">
      <div className="flex flex-col gap-3 p-4 relative">
        <div
          className={clsx(
            'absolute inset-0 opacity-20 z-0 pointer-events-none',
            {
              ['dark:bg-gradient-to-b from-[#3400A0] to-transparent']:
                theme === 'purple',
              ['dark:bg-gradient-to-b from-[#0A3F16] to-transparent']:
                theme === 'green',
              ['dark:bg-gradient-to-b from-[#897031] to-transparent']:
                theme === 'yellow',
            }
          )}
        />
        <p className="px-4 font-bold text-themed-primary z-10">{heading}</p>
        {items.map((item, index) => {
          const IconComponent = ICONS[item.icon]

          return (
            <a
              key={index}
              href={item.link}
              className="hover-fade p-4 rounded-md z-10 dark:bg-white-10 bg-black-7"
            >
              <div className="flex gap-2">
                <p className="flex items-start gap-2 text-xl leading-7 font-bold text-themed-primary">
                  <span className="mt-1">
                    <IconComponent />
                  </span>
                  {item.title}
                </p>
              </div>
              <p className="text-themed-secondary text-sm font-medium">
                {item.body}
              </p>
            </a>
          )
        })}
      </div>
    </div>
  )
}
