import { RootLayout } from './widgets'

import { CookiesProvider } from 'react-cookie'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <CookiesProvider>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </CookiesProvider>
  )
}

export default App
