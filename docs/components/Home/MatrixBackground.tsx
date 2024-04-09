import { ReactNode } from 'react'
import clsx from 'clsx'

export function MatrixBackground({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={clsx('relative', className)}>
      <div className="absolute inset-0 z-0 flex items-center dark:bg-matrix-dark bg-matrix-light mix-blend-normal dark:mix-blend-multiply">
        <div
          style={{
            height: '100%',
            width: '100%',
            maxHeight: '465px',
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
