import { SmartLink } from './SmartLink'
import * as ICONS from './icons'

export const SDKsSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">SDKs</h3>
      <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80">
        Leverage our open source SDKs to easily integrate from any popular game
        development framework or language.
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      <Card
        icon="UnityIcon"
        title="Unity"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/sdk/unity/01-overview"
      />
      <Card
        icon="UnrealIcon"
        title="Unreal Engine"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/sdk/unreal/01-overview"
      />
      <Card
        icon="GolangIcon"
        title="Go"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/sdk/go/overview"
      />
      <Card
        icon="NodeJSIcon"
        title="Node.js"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/"
      />
      <Card
        icon="IOSIcon"
        title="iOS"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/"
      />
      <Card
        icon="AndroidIcon"
        title="Android"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/"
      />
      <Card
        icon="ReactIcon"
        title="React Native"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/"
      />
      <Card
        icon="SequenceIcon"
        title="Sequence Kit"
        body="Easily onboard web3-native players with a complete Universal Wallet."
        link="/"
      />
    </div>
  </section>
)

const Card = ({
  title,
  body,
  icon,
  link,
}: {
  title: string
  body: string
  icon: keyof typeof ICONS
  link: string
}) => {
  const IconComponent = ICONS[icon]

  return (
    <SmartLink
      href={link}
      className="hover-fade p-4 dark:bg-white-10 bg-white rounded-xl w-[calc(33%-(16px/3))]"
    >
      <p className="font-bold text-themed-primary text-xl leading-7 flex items-center gap-2">
        <IconComponent />
        {title}
      </p>
      <p className="text-sm font-medium text-themed-secondary">{body}</p>
    </SmartLink>
  )
}
