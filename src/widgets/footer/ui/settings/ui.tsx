import { Settings } from 'lucide-react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/ui'

export const SettingsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={'icon'} variant={'outline'}>
          <Settings />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Customize your environment in the app</DialogDescription>
        </DialogHeader>

        <ul className="flex flex-col gap-y-2">
          <li className="flex flex-row items-center gap-x-2">
            <span>Language: </span>
            <Button>EN</Button>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}
