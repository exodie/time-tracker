import { useState } from 'react'
import { useCookies } from 'react-cookie'

import { createProjects } from '@/api'

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

export const CreateProjectDialog = () => {
  const [data, setData] = useState<{ name: string; description: string }>({
    name: '',
    description: ''
  })

  const [{ token }] = useCookies(['token'])

  const handleOk = async () => {
    await createProjects(token, data)

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add projects</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Additional projects</DialogTitle>
          <DialogDescription>
            Make new projects with name and optional description. Click save when you're
            done.
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
