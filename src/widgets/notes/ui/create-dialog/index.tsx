import { FC, useState } from 'react'
import { useCookies } from 'react-cookie'

import { createNotions } from '@/api'

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
}

export const CreateNotionDialog: FC<Props> = ({ projectId }) => {
  const [data, setData] = useState<{
    projectId: string
    name: string
    description?: string
    startTime: string
    endTime: string
  }>({
    projectId,
    name: '',
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString()
  })

  const [{ token }] = useCookies(['token'])

  const handleOk = async () => {
    await createNotions(token, data)

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add notions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Additional notions</DialogTitle>
          <DialogDescription>
            Make new notions with data. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
              placeholder="Recipies"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              placeholder="This projects..."
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
              value={data.description}
              onChange={(e) => setData({ ...data, startTime: e.target.value })}
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
              value={data.description}
              onChange={(e) => setData({ ...data, endTime: e.target.value })}
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
