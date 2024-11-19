import { NotesList } from './list'
import { ArrowLeft } from 'lucide-react'

import { Link } from 'react-router-dom'

const PROJECT_NAME_MOCK = 'Project1'

export const Notes = () => {
  return (
    <section className="flex flex-col my-4 gap-y-4">
      <Link to={'/'} className="flex space-x-4 text-blue-600 hover:text-blue-500 font-medium w-fit">
        <ArrowLeft /> Projects
      </Link>

      <h1 className="font-mono text-2xl font-medium">Notes on {PROJECT_NAME_MOCK}</h1>

      <NotesList />
    </section>
  )
}
