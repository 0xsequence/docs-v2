export const GuidesSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Guides</h3>
      <p className="text-md leading-6 font-medium text-themed-secondary">
        Follow our step-by-step guides and open source code templates to
        accelerate your time to market.
      </p>
    </div>
    <div className="flex flex-wrap gap-4">
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
    </div>
  </section>
)

type GuideCardProps = {}

const GuideCard = ({}: GuideCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white-10 rounded-xl w-[calc(50%-8px)]">
      <div className="rounded-md overflow-hidden w-full aspect-[2] bg-red-100">
        <img
          src="https://unsplash.it/500/300"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-xl leading-7 text-themed-primary font-bold">
        Build a web3 game with WebGL
      </p>
      <p className="text-themed-secondary text-md font-medium leading-6">
        Follow a step by step guide to build a web-based game demo that
        leverages Sequence Embedded Wallet with custom in-game achievement
        tokens.
      </p>
      <a className="hover-fade rounded-md bg-white-15 px-4 py-3 text-themed-primary text-sm font-bold w-fit">
        Read guide
      </a>
    </div>
  )
}
