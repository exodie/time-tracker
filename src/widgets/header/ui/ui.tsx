import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

import { Button } from '@/shared/ui'

export const Header = () => {
  const [cookie] = useCookies(['token'])

  return (
    <header className="sticky top-0 flex flex-row items-center justify-between w-full space-x-2 p-4 bg-background">
      <Link to={'/'}>
        <h1 className="font-medium font-mono text-2xl">Tracker</h1>
      </Link>

      <ul className="flex flex-row items-center gap-x-2">
        <li>
          {!cookie.token && (
            <Link to={'/auth/signin'}>
              <Button>Sign In</Button>
            </Link>
          )}
        </li>
      </ul>
    </header>
  )
}
