import { FC } from 'react'

import { UpdateNotionDialog } from '../edit-dialog'

import type{ Notions } from '@/types/projects'
import { DeleteNotionDialog } from '../delete-dialog'

type Props = {
  projectId: string
  notions: Notions[]
}

export const NotesList: FC<Props> = ({ projectId, notions }) => {
  return (
    <ul className="flex flex-col gap-y-2">
      {notions.map(({ ID, name, description }, index) => (
        <li
          key={index}
          className="flex flex-row items-center justify-between px-2 py-4 border border-foreground rounded-lg"
        >
          <div className="flex flex-col gap-y-2">
            <h3 className="font-medium text-xl">{name}</h3>
            <p className="font-light text-lg text-foreground/70">
              {description ?? 'Отсутсвует'}
            </p>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <div className="flex space-x-1">
              <UpdateNotionDialog projectId={projectId} notionId={ID} />
              <DeleteNotionDialog projectId={projectId} notionId={ID} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
