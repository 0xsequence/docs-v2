import clsx from 'clsx'
import * as ICONS from './icons'

export const SolutionsSection = () => (
  <section className="flex flex-col gap-5 border-t border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Solutions</h3>
      <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80">
        Follow our solution guides to boost your game's acquisition,
        monetization and retention with the power of web3.
      </p>
    </div>
    <div className="flex gap-4">
      <SolutionsGroup
        theme="purple"
        heading="Acquire players"
        items={[
          {
            icon: 'WalletIcon',
            title: 'Universal Wallet',
            body: 'Easily onboard web3-native players with a complete Universal Wallet.',
            link: '/solutions/wallets/universal-wallet/01-overview',
          },
          {
            icon: 'WalletIcon',
            title: 'Embedded Wallet',
            body: 'Gasless Transactions. No popups. Deliver a seamless experience for both web2 and web3 players with Sequence Wallet-as-a-Service embedded into your game or app.',
            link: '/solutions/wallets/embedded-wallet/01-overview',
          },
          {
            icon: 'CollectiblesIcon',
            title: 'Collectibles',
            body: 'Manage contracts and collections with our no-code Builder.',
            link: '/solutions/collectibles/contracts/01-deploy-an-item-collection',
          },
          // {
          //   icon: 'AirdropperIcon',
          //   title: 'Airdropper',
          //   body: 'Create airdrop campaigns and target players with airdrops.',
          //   link: '/',
          // },
        ]}
      />
      <SolutionsGroup
        theme="green"
        heading="Earn more revenue"
        items={[
          {
            icon: 'MarketplaceIcon',
            title: 'Marketplace',
            body: 'Launch an in-game collectibles marketplace within minutes.',
            link: '/solutions/marketplaces/white-label-marketplace',
          },
          {
            icon: 'SequenceIcon',
            title: 'Orderbook API',
            body: 'Integrate custom in-game marketplaces with our APIs.',
            link: '/solutions/marketplaces/orderbook/01-overview',
          },
          {
            icon: 'CartIcon',
            title: 'NFT Checkout',
            body: 'Offer easy purchases with credit card, crypto, IAP support.',
            link: '/',
          },
          {
            icon: 'SequenceIcon',
            title: 'Onramps',
            body: 'Allow players to convert from fiat to any crypto globally.',
            link: '/solutions/payments/onramps/01-fiat-on-ramps',
          },
        ]}
      />
      <SolutionsGroup
        theme="yellow"
        heading="Retain and grow"
        items={[
          {
            icon: 'MinterIcon',
            title: 'Minter',
            body: 'Securely mint achievement tokens tied to your game.',
            link: '/guides/webgl-guide#deploy-a-remote-minter',
          },
          {
            icon: 'AnalyticsIcon',
            title: 'Analytics',
            body: 'Track every aspect of web3 activity within your games.',
            link: '/solutions/builder/analytics',
          },
          // {
          //   icon: 'DiscordIcon',
          //   title: 'Discord Bot',
          //   body: 'Manage contracts and collections with our no-code Builder.',
          //   link: '/',
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
                <p className="flex items-center gap-2 text-xl leading-7 font-bold text-themed-primary">
                  <IconComponent />
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
