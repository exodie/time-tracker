import { mockNotes } from './mocks'

import { Link } from 'react-router-dom'

import { Button } from '@/shared/ui'

export const ProjectList = () => {
  return (
    <ul className="flex flex-col gap-y-2">
      {mockNotes.map(({ title, description, notesValue, hoursValue }, index) => (
        <li
          key={index}
          className="flex flex-row items-center justify-between px-2 py-4 border border-foreground rounded-lg"
        >
          <div className="flex flex-col gap-y-2">
            <h3 className="font-medium text-xl">{title}</h3>
            <p className="font-light text-lg text-foreground/70">{description}</p>
          </div>

          <div className="flex flex-row items-center gap-x-4">
            <span className="font-mono text-lg">Notes: {notesValue},</span>
            <span className="font-mono text-lg">Hours: {hoursValue}</span>
            <Link to={`/notes/${title.toLowerCase()}`}>
              <Button>Implement</Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
