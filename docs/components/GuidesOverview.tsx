import { SmartLink } from './Landing/SmartLink'

export const GuidesOverview = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Guides</h3>
      <p className="text-md leading-6 font-medium dark:text-white-80 text-black-80 mr-8">
        Follow our step-by-step guides and open source code templates to
        accelerate your time to market.
      </p>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <h4 className="text-2xl text-themed-primary font-bold">Game Developers</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <GuideCard
        title="Build a Mobile Game with Unity + Sequence"
        body="Learn how to build an engaging iOS and Android game that uses Sequence Embedded Wallets under the hood for an integrated marketplace and in-game currency."
        link="/guides/unity-guide"
        image="/img/unity/jellyforest.webp"
      />
        <GuideCard
        title="Create a Dungeon Crawler game with AI generated rewards"
        body="With this tutorial, build a web-based maze where lootbox items are generated using AI and dynamically minted into the player's universal wallet."
        link="/guides/treasure-chest-guide"
        image="/img/guides/treasure-chest/dungeonMintor.png"
      />
      <GuideCard
        title="Build a WebGL Game in Typescript"
        body="Follow a step by step guide to build a web-based game demo that leverages Sequence Embedded Wallet with custom in-game achievement tokens."
        link="/guides/webgl-guide"
        image="/img/aviator.png"
      />
    </div>

    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <h4 className="text-2xl text-themed-primary font-bold pt-5">Web3</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <GuideCard
        title="Build a scalable NFT Minting Service"
        body="Leveraging Sequence's Transaction API and a serverless environment, you will build a scalable minting service for NFT mints or any other transactions that automatically handles blockchain complexities like reorgs, nonce management, and transaction parallelization."
        link="/guides/mint-collectibles-serverless"
        image="/img/guides/overview/sword.png"
      />
            <GuideCard
        title="Creating a Custom Marketplace with Sequence"
        body="Build an API-driven marketplace where players can mint, then sell or buy items using a custom web-based interface leveraging Sequence Orderbook APIs."
        link="/guides/custom-marketplace"
        image="/img/guides/overview/marketplace.png"

      />
      <GuideCard
        title="Sequence Analytics API in Dune"
        body="Guide for querying information about usage from your users for your specific project leveraging a serverless Cloudflare Worker."
        link="/guides/analytics-guide"
        image="/img/guides/analytics/dune-analytics.jpg"

      />
      <GuideCard
        title="Backend Transaction Service for NodeJS"
        body="Guide for a scalable transaction service for your NodeJS backend to eliminate complexities around re-orgs, nonce management, parallelization, and more."
        link="/guides/templates/building-relaying-server"
        image="/img/guides/overview/nodejs.png"

      />
      <GuideCard
        title="Creating, storing, and managing collectibles metadata"
        body="By utilizing Sequence's Metadata API, you can programatically create, manage, and store metadata associated with your NFTs from nearly any environment. We'll walk you through how to call these REST-APIs to organize your collections for your game or experience."
        link="/guides/metadata-guide"
        image="/img/guides/overview/storage.png"
      />

    </div>
  </section>
)

const GuideCard = ({
  title,
  body,
  link,
  image,
}: {
  title: string
  body: string
  link: string
  image?: string
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 dark:bg-white-10 bg-white rounded-xl md:w-[calc(50%-8px)]">
      {image && (
        <div className="rounded-md overflow-hidden w-full aspect-[2]">
          <img src={image} className="object-cover w-full h-full" />
        </div>
      )}
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
