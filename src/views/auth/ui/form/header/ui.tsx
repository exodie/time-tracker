import { FC } from 'react'

type Header = {
  title: string
  description: string
}

export const AuthFormHeader: FC<Header> = ({ title, description }) => {
  return (
    <>
      <h1 className="font-medium text-3xl font-mono">{title}</h1>
      <p className="font-light text-lg text-center font-mono">{description}</p>
    </>
  )
}
