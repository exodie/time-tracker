import { FC, useState } from 'react'
import { useCookies } from 'react-cookie'

import { updateNotions } from '@/api'

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  Label,
  Input,
  DialogFooter
} from '@/shared/ui'

type Props = {
  projectId: string
  notionId: string
}

type NotionsUpdate = {
  projectId: string
  notionId: string
  newName?: string
  newDescription?: string
  newStartTime?: string
  newEndTime?: string
}

export const UpdateNotionDialog: FC<Props> = ({ projectId, notionId }) => {
  const [data, setData] = useState<NotionsUpdate>({
    projectId,
    notionId
  })

  const [{ token }] = useCookies(['token'])

  const handleOk = async () => {
    await updateNotions(token, data)

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit your notions</DialogTitle>
          <DialogDescription>
            Make changes into your notions as optional name and description. Click save
            when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              New name
            </Label>
            <Input
              id="name"
              value={data.newName}
              onChange={(e) => setData({ ...data, newName: e.target.value })}
              placeholder="New recipies"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              New description
            </Label>
            <Input
              id="description"
              value={data.newDescription}
              onChange={(e) => setData({ ...data, newDescription: e.target.value })}
              placeholder="This new projects..."
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startTime" className="text-right">
              Start time
            </Label>
            <Input
              id="startTime"
              type="time"
              disabled
              value={data.newStartTime}
              onChange={(e) => setData({ ...data, newDescription: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endTime" className="text-right">
              End time
            </Label>
            <Input
              id="endTime"
              type="time"
              value={data.newEndTime}
              disabled
              onChange={(e) => setData({ ...data, newDescription: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleOk}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
