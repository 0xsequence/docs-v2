import { SmartLink } from './SmartLink'
import * as ICONS from './icons'

export const SDKsSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">SDKs</h3>
      <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8">
        Leverage our open source SDKs to easily integrate from any popular game
        development framework or language.
      </p>
    </div>
    <div className="flex flex-wrap gap-2 md:flex-row flex-col">
      <Card
        icon="UnityIcon"
        title="Unity"
        body="Integrate Sequence with our native Unity library."
        link="/sdk/unity/overview"
      />
      <Card
        icon="UnrealIcon"
        title="Unreal Engine"
        body="Integrate Sequence with our native Unreal Engine library."
        link="/sdk/unreal/overview"
      />
      <Card
        icon="GolangIcon"
        title="Go"
        body="Leverage Sequence APIs easily from your Go backend."
        link="/sdk/go/overview"
      />
        <Card
        icon="NodeJSIcon"
        title="Typescript"
        body="Integrate Sequence APIs with our TypeScript SDK."
        link="/sdk/typescript/guides/overview"
      />
      <Card
        icon="ReactIcon"
        title="Mobile"
        body="Integrate Sequence APIs for your mobile game with our React Native SDK"
        link="/sdk/mobile"
      />
      <Card
        icon="SequenceIcon"
        title="Sequence Kit"
        body="Add web onboarding for any web3 wallet."
        link="/sdk/sequence-kit/overview"
      />
      <Card
        icon="SequenceIcon"
        title="Embedded Wallet Mobile SDK"
        body="Onboard users using web2 socials to crypto, in native mobile apps."
        link="/sdk/sequence-kit/overview"
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
      className="hover-fade p-4 dark:bg-white-10 bg-white rounded-xl md:w-[calc(33%-(16px/3))]"
    >
      <p className="font-bold text-themed-primary text-xl leading-7 flex items-center gap-2">
        <IconComponent />
        {title}
      </p>
      <p className="text-sm font-medium text-themed-secondary">{body}</p>
    </SmartLink>
  )
}
