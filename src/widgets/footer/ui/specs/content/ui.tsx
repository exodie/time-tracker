import { Link } from 'react-router-dom'

import { Button } from '@/shared/ui'

export const SpecsContent = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Link to={'https://google-form'} target="_blank">
        <Button className="w-full">Send bug</Button>
      </Link>
      <Link to={'https://t.me/notexodie'} target="_blank">
        <Button className="w-full" variant={'secondary'}>
          Send message
        </Button>
      </Link>
    </div>
  )
}
