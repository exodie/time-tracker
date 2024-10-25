import { SpecsContent } from './content'
import { version } from '@/../package.json'
import { Info } from 'lucide-react'

import {
  Button,
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@/shared/ui'

export const FooterSpecsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={'icon'} variant={'outline'}>
          <Info />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-mono">Tracker specs.</DialogTitle>
          <DialogDescription className="font-mono">
            Version: <strong>{version}</strong>
          </DialogDescription>
        </DialogHeader>

        <SpecsContent />
      </DialogContent>
    </Dialog>
  )
}
