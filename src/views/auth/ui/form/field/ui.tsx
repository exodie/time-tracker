import { type PropsWithChildren } from 'react'

export const AuthFormField = ({ children }: PropsWithChildren) => {
  return <div className="grid w-full items-center gap-1.5">{children}</div>
}
