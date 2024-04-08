export const SDKsSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">SDKs</h3>
      <p className="text-md leading-6 font-medium text-themed-secondary max-w-xl">
        Leverage our open source SDKs to easily integrate from any popular game
        development framework or language.
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </section>
)

type CardProps = {}

const Card = ({}: CardProps) => {
  return (
    <div className="p-4 bg-white-10 rounded-xl w-[calc(33%-(16px/3))]">
      <p className="font-bold text-themed-primary text-xl leading-7">Unity</p>
      <p className="text-sm font-medium text-themed-secondary">
        Easily onboard web3-native players with a complete Universal Wallet.
      </p>
    </div>
  )
}
