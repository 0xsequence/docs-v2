export const SupportSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Support</h3>
      <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80">
        Follow our solution guides to boost your game's acquisition,
        monetization and retention with the power of web3.
      </p>
    </div>
    <div className="flex flex-wrap gap-x-10 gap-y-5">
      <SupportItem
        title="Chat Support"
        body="Easily onboard web3-native players with a complete Universal Wallet."
      />
      <SupportItem
        title="Community"
        body="Easily onboard web3-native players with a complete Universal Wallet."
      />
      <SupportItem
        title="Contact our team"
        body="Easily onboard web3-native players with a complete Universal Wallet."
      />
      <SupportItem
        title="Knowledge Base"
        body="Easily onboard web3-native players with a complete Universal Wallet."
      />
    </div>
  </section>
)

const SupportItem = ({ title, body }: { title: string; body: string }) => (
  <div className="w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5">
        {body}
      </p>
    </div>
    <a className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary">
      Contact us
    </a>
  </div>
)
