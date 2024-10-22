import { Link } from 'react-router-dom'

import { Button } from '@/shared/ui'

export const Header = () => {
  return (
    <header className="absolute top-0 flex flex-row items-center justify-between w-full space-x-2 p-4">
      <h1 className="font-medium font-mono text-2xl">Tracker</h1>

      <Link to={'/auth/signin'}>
        <Button>Sign In</Button>
      </Link>
    </header>
  )
}
