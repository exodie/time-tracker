import { PropsWithChildren } from 'react'

import { Header, Footer } from '@/widgets'

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col px-4 md:px-6 py-2">{children}</main>
      <Footer />
    </>
  )
}
