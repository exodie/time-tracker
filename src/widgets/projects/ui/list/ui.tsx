import { EyeIcon } from 'lucide-react'

import { FC } from 'react'
import { Link } from 'react-router-dom'

import { DeleteProjectDialog } from '../delete-dialog'
import { UpdateProjectDialog } from '../edit-dialog'

import { Button } from '@/shared/ui'

import type { Projects } from '@/types/projects'

type Props = {
  projects: Projects[]
}

export const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <ul className="flex flex-col gap-y-2">
      {projects.map(({ ID, name, description, notions }) => (
        <li
          key={ID}
          className="flex flex-row items-center justify-between px-2 py-4 border border-foreground rounded-lg"
        >
          <div className="flex flex-col gap-y-2">
            <h3 className="font-medium text-xl">{name}</h3>
            <p className="font-light text-lg text-foreground/70">{description}</p>
          </div>

          <div className="flex sm:flex-row sm:items-center flex-col gap-2">
            <div className="flex flex-col mr-2">
              <span className="font-mono text-lg">Notes: {notions?.length ?? 0}</span>
            </div>
            <Link to={`/notes/${ID}`}>
              <Button className="gap-x-1">
                Open <EyeIcon size={28} />
              </Button>
            </Link>
            <UpdateProjectDialog name={name} />
            <DeleteProjectDialog name={name} />
          </div>
        </li>
      ))}
    </ul>
  )
}
