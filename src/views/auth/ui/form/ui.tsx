import { type PropsWithChildren } from 'react'

export const AuthForm = ({ children }: PropsWithChildren) => {
  return (
    <form className="flex flex-col items-center w-4/12 mx-auto gap-y-2">
      {children}
    </form>
  )
}
