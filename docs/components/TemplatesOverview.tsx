import { SmartLink } from './Landing/SmartLink'

export const TemplatesOverview = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Templates</h3>
      <p className="text-md leading-6 font-medium dark:text-white-80 text-black-80 mr-8">
        Kickstart your Sequence integration with our open source code templates to
        accelerate your time to market.
      </p>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <h4 className="text-2xl text-themed-primary font-bold pt-5">Web3</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <TemplateCard
        title="Embedded Wallet Template for Web"
        body="Example template for your web application to kickstart integrating embedded wallets."
        link="https://github.com/0xsequence/demo-waas-auth"
        demolink="https://0xsequence.github.io/demo-waas-auth/"
      />
            <TemplateCard
        title="Embedded Wallet Template React Native"
        body="Example template for your mobile to kickstart integrating embedded wallets in React Native."
        link="https://github.com/0xsequence/demo-waas-react-native"
      />
    </div>
  </section>
)

const TemplateCard = ({
  title,
  body,
  link,
  demolink,
  image,
}: {
  title: string
  body: string
  link: string
  demolink?: string
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
      <div className="flex gap-4">
      <SmartLink
        href={link}
        className="hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit"
      >
        Read guide
      </SmartLink>
      {demolink && <SmartLink
        href={demolink}
        className="hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit"
      >
        Demo
      </SmartLink>}
      </div>
    </div>
  )
}
