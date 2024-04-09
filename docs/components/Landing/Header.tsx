import { ReactNode } from 'react'
import { MatrixBackground } from './MatrixBackground'

export const Header = ({ logo }: { logo: ReactNode }) => (
  <MatrixBackground className="pt-20 pb-40 -mb-10 px-5 z-0">
    <section className="flex flex-col items-center gap-4 max-w-screen-lg mx-auto">
      {logo}
      <h2 className="text-xl font-bold text-themed-primary max-w-3xl text-center text-wrap">
        {`Welcome to Sequence docs. Here you can learn about the modular Sequence products that empower game developers to build engaging web3 games on any Ethereum-compatible chain.`}
      </h2>
    </section>
  </MatrixBackground>
)
