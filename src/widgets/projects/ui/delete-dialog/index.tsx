import { FC, useState } from 'react'
import { useCookies } from 'react-cookie'

import { deleteProjects } from '@/api'

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
  name: string
}

export const DeleteProjectDialog: FC<Props> = ({ name }) => {
  const [isApprove, setIsApprove] = useState<boolean>(false)

  const [{ token }] = useCookies(['token'])

  const handleOk = async () => {
    await deleteProjects(token, name)

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Remove your project</DialogTitle>
          <DialogDescription>
            Your project has been remove, after you approve "Are you sure?".
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
