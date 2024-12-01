import { FC, useState } from 'react'
import { useCookies } from 'react-cookie'

import { searchNotions } from '@/api'

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogDescription
} from '@/shared/ui'

import { Notions } from '@/types'

type Props = {
  projectId: string
}

export const ReportNotionDialog: FC<Props> = ({ projectId }) => {
  const [{ token }] = useCookies(['token'])

  const [notions, setNotions] = useState<Notions[]>([])

  const handleGenerate = async () => {
    const report = await searchNotions(token, projectId)

    if (!report) return

    setNotions(report)
  }

  const handleOk = async () => {
    const csvRows: string[] = []
    const headers = [
      'ID',
      'Name',
      'Description',
      'Start Time',
      'End Time',
      'Project ID',
      'Created At',
      'Updated At'
    ]
    csvRows.push(headers.join('    '))

    for (const note of notions) {
      const row = [
        note.ID,
        note.name,
        note.description,
        new Date(note.startTime).toLocaleString(),
        new Date(note.endTime).toLocaleString(),
        note.project.$id,
        new Date(note.created_at).toLocaleString(),
        new Date(note.updated_at).toLocaleString()
      ]
      csvRows.push(row.join('    '))
    }

    const csvString = csvRows.join('\n')
    const blob = new Blob([csvString], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'notes.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Report</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Report of your project</DialogTitle>
          <DialogDescription>
            Click generate to create report message with your notions.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Button onClick={handleGenerate}>Generate</Button>
          <div className="overflow-y-scroll max-h-fit gap-2">
            {notions.map((note) => (
              <ul
                key={note.ID}
                className="p-3 my-2 border border-foreground rounded-xl"
              >
                <h3 className="font-medium">Notion name: {note.name}</h3>
                <li>Description: {note.description}</li>
                <li>Start Time: {new Date(note.startTime).toLocaleString()}</li>
                <li>End Time: {new Date(note.endTime).toLocaleString()}</li>
                <li>Project ID: {note.project.$id}</li>
                <li>Created At: {new Date(note.created_at).toLocaleString()}</li>
                <li>Updated At: {new Date(note.updated_at).toLocaleString()}</li>
              </ul>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleOk}>
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
