import { Info } from 'lucide-react'

import { Link } from 'react-router-dom'

import { Button, ModeToggle } from '@/shared/ui'

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex flex-row items-center justify-between w-full space-x-2 p-4">
      <Link
        to={'https://github.com/exodie/time-tracker'} target="_blank"
        className="hover:text-blue-700 focus:text-blue-700 hover:cursor-pointer"
      >
        @exodie
      </Link>

      <div className="flex gap-x-2 items-center">
        <Button size={'icon'} variant={'outline'}>
          <Info />
        </Button>
        <ModeToggle />
      </div>
    </footer>
  )
}
