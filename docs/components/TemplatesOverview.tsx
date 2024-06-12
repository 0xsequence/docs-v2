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
    <h4 className="text-2xl text-themed-primary font-bold pt-5">Onboarding</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <TemplateCard
        title="Embedded Wallet Template for Web"
        body="Example template for your web application to integrate the use of an Embedded Wallet."
        link="https://github.com/0xsequence/demo-waas-auth"
        demolink="https://0xsequence.github.io/demo-waas-auth/"
      />
      <TemplateCard
        title="Embedded Wallet Template for React Native"
        body="Example template for your mobile to integrate the use of an Embedded Wallet in React Native."
        link="https://github.com/0xsequence/demo-waas-react-native"
      />
      <TemplateCard
        title="Embedded Wallet Template for Wallet Linking"
        body="Example template for integrators to allow players to link other EOA wallets they own for transferring assets or for verification purposes."
        link="https://github.com/0xsequence-demos/demo-waas-wallet-link"
        demolink='https://0xsequence.github.io/demo-waas-auth/'
      />
      <TemplateCard
        title="Embedded Wallet Template for Wallet Verification"
        body="Example template for your web application to verify the ownership of an Embedded Wallet using a backend nonce storing server, with the option to include an expiry."
        link="https://github.com/0xsequence-demos/template-embedded-wallet-verification"
      />
      <TemplateCard
        title="Embedded Wallet Template for Google & Apple Auth"
        body="Example template for your web application project using an Embedded Wallet that enables the use of Google and Apple auth for deployed dapps."
        link="https://github.com/0xsequence-demos/template-embedded-wallet-web2-auth"
      />
      <TemplateCard
        title="Sequence Kit Template using React"
        body="Example template for your web application to integrate Sequence Kit using React to allow sign-in into your application."
        link="https://github.com/0xsequence/kit/tree/master/examples/react"
        demolink='https://0xsequence.github.io/kit/'
      />
      <TemplateCard
        title="Sequence Kit Template using Next.js"
        body="Example template for your web application to integrate Sequence Kit using Next.js to allow sign-in into your application."
        link="https://github.com/0xsequence/kit/tree/master/examples/next"
      />

      <TemplateCard
        title="Sequence Kit Template using WebGL & Vanilla Javascript"
        body="Example template for your web application for a minimal WebGL JavaScript starter repo for using React based Sequence Kit."
        link="https://github.com/0xsequence-demos/template-webgl-js-sequence-kit-starter"
      />
      </div>
      <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <h4 className="text-2xl text-themed-primary font-bold">APIs</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <TemplateCard
        title="Wallet Analytics API Template using a Cloudflare Worker"
        body="Example template for querying data from the Sequence Stack in order to render analytics to your community."
        link="https://github.com/0xsequence-demos/template-cloudflare-worker-wallets-analytics"
      />

      <TemplateCard
        title="Transactions API Template using a Cloudflare Worker"
        body="Example template for integrators allow users to mint collectibles using the Sequence Transactions API for gasless serverless transactions for infrastructure that can scale elastically."
        link="https://github.com/0xsequence-demos/template-cloudflare-worker-sequence-transactions-api"
      />
            <TemplateCard
        title="Transactions API Template in Go"
        body="Example template for integrators to allow users to mint collectibles using the Sequence Transactions API for gasless transactions on infrastructure using Go."
        link="https://github.com/0xsequence-demos/template-go-sequence-transactions-api"
      />
      <TemplateCard
        title="Transactions API Template using a NodeJS / Express Backend"
        body="Example template for integrators to allow users to mint collectibles using the Sequence Transactions API for gasless transactions on infrastructure using NodeJs & Express."
        link="https://github.com/0xsequence-demos/template-node-transactions-backend"
      />
      <TemplateCard
        title="Indexer Webhooks Callback Template using a Cloudflare Worker"
        body="Example template for integrators to build experiences that allows systems to be called upon across the internet based on the emission of a blockchain event using a Cloudflare Worker."
        link="https://github.com/0xsequence-demos/template-cloudflare-worker-webhook"
      />
      <TemplateCard
        title="Indexer Webhooks Callback Template using a Nodejs / Express Server"
        body="Example template for integrators to build experiences that allows systems to be called upon across the internet based on the emission of a blockchain event for infrastructure using Nodejs & Express."
        link="https://github.com/0xsequence-demos/template-nodejs-webhook-server"
      />
      </div>
              <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <h4 className="text-2xl text-themed-primary font-bold">Monetization</h4>
    </div>

    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <TemplateCard
        title="Sequence Market Protocol Template using Sequence Kit"
        body="Example template for your web application to allow users to sign in with Sequence Kit and place orders on the Sequence Market Protocol contracts."
        link="https://github.com/0xsequence-demos/template-simple-marketplace"
      />

      </div>

    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
    <h4 className="text-2xl text-themed-primary font-bold">Games</h4>
    </div>

    <div className="flex flex-wrap gap-4 md:flex-row flex-col">

          <TemplateCard
        title="Dungeon Crawler HUD Template in Javascript"
        body="Example template for your web application to kickstart a dungeon crawler game with a map HUD."
        link="https://github.com/0xsequence-demos/template-dungeon-crawler-map-hud"
        demolink='https://0xsequence-demos.github.io/template-dungeon-crawler-map-hud/'
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
        Repo
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
