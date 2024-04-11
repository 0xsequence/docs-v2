import { SmartLink } from './SmartLink'

export const GuidesSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Guides</h3>
      <p className="text-md leading-6 font-medium dark:text-white-80 text-black-80">
        Follow our step-by-step guides and open source code templates to
        accelerate your time to market.
      </p>
    </div>
    <div className="flex flex-wrap gap-4">
      <GuideCard
        title="Build a web3 game with WebGL"
        body="Follow a step by step guide to build a web-based game demo that leverages Sequence In-Game Wallet with custom in-game achievement tokens."
        link="/guides/webgl-guide/#integrate-sequencekit-with-waas"
      />
      <GuideCard
        title="Build a web3 game with Unity"
        body="Learn how to build an engaging iOS and Android game that uses Sequence In-Game Wallets under the hood for an integrated marketplace and in-game currency."
        link="/guides/webgl-guide/#integrate-sequencekit-with-waas"
      />
      <GuideCard
        title="Create web3 lootboxes"
        body="With this tutorial, build a web-based maze where lootbox items are generated using AI and dynamically minted into the player's universal wallet."
        link="/guides/webgl-guide/#integrate-sequencekit-with-waas"
      />
      <GuideCard
        title="Orderbook Marketplace"
        body="Build an API-driven marketplace where players can mint, then sell or buy items using a custom web-based interface leveraging Sequence Orderbook APIs."
        link="/solutions/marketplaces/orderbook/01-overview"
      />
    </div>
  </section>
)

const GuideCard = ({
  title,
  body,
  link,
}: {
  title: string
  body: string
  link: string
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 dark:bg-white-10 bg-white rounded-xl w-[calc(50%-8px)]">
      <div className="rounded-md overflow-hidden w-full aspect-[2]">
        <img
          src="https://unsplash.it/500/300"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-xl leading-7 text-themed-primary font-bold">{title}</p>
      <p className="text-themed-secondary text-md font-medium leading-6">
        {body}
      </p>
      <SmartLink
        href={link}
        className="hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit"
      >
        Read guide
      </SmartLink>
    </div>
  )
}
