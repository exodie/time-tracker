import { Link, useRouteError } from 'react-router-dom'

import { Button } from '@/shared/ui'

type Error = {
  status: number
}

export const ErrorBoundary = () => {
  const error = useRouteError() as Error

  return (
    <section className="flex flex-col items-center my-24 gap-y-4">
      <div className="flex flex-col items-center gap-y-1">
        <h1 className="font-mono text-4xl font-medium">{error.status}</h1>
        <p className="font-light text-2xl">Oh, something seems to have gone wrong</p>
      </div>

      <Link to={'/'}>
        <Button>Redirect to home</Button>
      </Link>
    </section>
  )
}
