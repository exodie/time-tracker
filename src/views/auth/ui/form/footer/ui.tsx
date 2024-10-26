import { type PropsWithChildren } from 'react'

export const AuthFormFooter = ({ children }: PropsWithChildren) => {
  return <div className="w-full flex flex-row items-center gap-x-2">{children}</div>
}
