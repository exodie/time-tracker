import { RootLayout } from './widgets'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}

export default App
