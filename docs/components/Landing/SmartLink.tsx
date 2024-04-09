import { PropsWithoutRef } from 'react'

export const SmartLink = ({
  href,
  ...props
}: PropsWithoutRef<JSX.IntrinsicElements['a']>) => {
  if (href?.startsWith('/')) return <a href={href} {...props} />

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
}
