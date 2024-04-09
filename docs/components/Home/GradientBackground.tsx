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
        <div
          className="w-full h-full max-h-[600px]"
          style={{
            background: BLUE_GRADIENT,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

const BLUE_GRADIENT = [
  'linear-gradient(180deg, #F0F0F0 0%, rgba(255, 255, 255, 0.00) 49.83%, #F0F0F0 100%)',
  'linear-gradient(90deg, #D2E4FF 0%, rgba(210, 228, 255, 0.50) 25.3%, rgba(255, 255, 255, 0.00) 49.83%, rgba(210, 228, 255, 0.50) 75.47%, #D2E4FF 100%)',
].join(',')
