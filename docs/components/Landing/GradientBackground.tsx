import { ReactNode } from 'react'
import clsx from 'clsx'

export function GradientBackground({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={clsx('relative', className)}>
      <div className="absolute inset-0 z-0 flex items-center">
        <div className="w-full h-full max-h-[600px] dark:bg-gradient-dark bg-gradient-light" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
