import clsx from 'clsx'
import * as ICONS from './icons'

export const SolutionsSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Solutions</h3>
      <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80">
        Follow our solution guides to boost your game's acquisition,
        monetization and retention with the power of web3.
      </p>
    </div>
    <div className="flex gap-4">
      {SOLUTIONS_GROUPS.map((group, index) => (
        <SolutionsGroup key={index} {...group} />
      ))}
    </div>
  </section>
)

type SolutionsGroupProps = {
  heading: string
  items: { icon: keyof typeof ICONS; title: string; body: string }[]
  theme: 'purple' | 'green' | 'yellow'
}

const SolutionsGroup = ({ heading, items, theme }: SolutionsGroupProps) => {
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
            <div
              key={index}
              className={clsx('p-4 dark:bg-white-10 rounded-md z-10', {
                ['bg-light-purple']: theme === 'purple',
                ['bg-light-green']: theme === 'green',
                ['bg-light-yellow']: theme === 'yellow',
              })}
            >
              <div className="flex gap-2">
                <p
                  className={clsx(
                    'flex items-center gap-2 text-xl leading-7 dark:text-white font-bold',
                    {
                      ['text-dark-purple']: theme === 'purple',
                      ['text-dark-green']: theme === 'green',
                      ['text-dark-yellow']: theme === 'yellow',
                    }
                  )}
                >
                  <IconComponent />
                  {item.title}
                </p>
              </div>
              <p className="text-themed-secondary text-sm font-medium">
                {item.body}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const SOLUTIONS_GROUPS: SolutionsGroupProps[] = [
  {
    theme: 'purple',
    heading: 'Acquire players',
    items: [
      {
        icon: 'WalletIcon',
        title: 'Universal Wallet',
        body: 'Easily onboard web3-native players with a complete Universal Wallet.',
      },
      {
        icon: 'WalletIcon',
        title: 'Embedded Wallet',
        body: 'Gasless Transactions. No popups. Deliver a seamless experience for both web2 and web3 players with Sequence Wallet-as-a-Service embedded into your game or app.',
      },
      {
        icon: 'CollectiblesIcon',
        title: 'Collectibles',
        body: 'Manage contracts and collections with our no-code Builder.',
      },
      {
        icon: 'AirdropperIcon',
        title: 'Airdropper',
        body: 'Create airdrop campaigns and target players with airdrops.',
      },
    ],
  },

  {
    theme: 'green',
    heading: 'Earn more revenue',
    items: [
      {
        icon: 'MarketplaceIcon',
        title: 'Marketplace',
        body: 'Easily onboard web3-native players with a complete Universal Wallet.',
      },
      {
        icon: 'SequenceIcon',
        title: 'Orderbook API',
        body: 'Gasless Transactions. No popups. Deliver a seamless experience for both web2 and web3 players with Sequence Wallet-as-a-Service embedded into your game or app.',
      },
      {
        icon: 'CartIcon',
        title: 'NFT Checkout',
        body: 'Manage contracts and collections with our no-code Builder.',
      },
      {
        icon: 'SequenceIcon',
        title: 'Onramps',
        body: 'Create airdrop campaigns and target players with airdrops.',
      },
    ],
  },
  {
    theme: 'yellow',
    heading: 'Retain and grow',
    items: [
      {
        icon: 'MinterIcon',
        title: 'Minter',
        body: 'Easily onboard web3-native players with a complete Universal Wallet.',
      },
      {
        icon: 'AnalyticsIcon',
        title: 'Analytics',
        body: 'Gasless Transactions. No popups. Deliver a seamless experience for both web2 and web3 players with Sequence Wallet-as-a-Service embedded into your game or app.',
      },
      {
        icon: 'DiscordIcon',
        title: 'Discord Bot',
        body: 'Manage contracts and collections with our no-code Builder.',
      },
    ],
  },
]
