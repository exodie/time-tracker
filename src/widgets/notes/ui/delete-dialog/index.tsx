import { FC, useState } from 'react'
import { useCookies } from 'react-cookie'

import { deleteNotions } from '@/api'

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  Label,
  DialogFooter,
  Switch
} from '@/shared/ui'

type Props = {
  projectId: string
  notionId: string
}

export const DeleteNotionDialog: FC<Props> = ({ projectId, notionId }) => {
  const [isApprove, setIsApprove] = useState<boolean>(false)

  const [{ token }] = useCookies(['token'])

  const handleOk = async () => {
    await deleteNotions(token, { projectId, notionId })

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Remove your notion</DialogTitle>
          <DialogDescription>
            Your notion has been remove, after you approve "Are you sure?".
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Are you sure?
          </Label>
          <Switch
            checked={isApprove}
            onCheckedChange={() => setIsApprove((prev) => !prev)}
          />
        </div>
        <DialogFooter>
          <Button
            disabled={!isApprove}
            variant="destructive"
            type="submit"
            onClick={handleOk}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
