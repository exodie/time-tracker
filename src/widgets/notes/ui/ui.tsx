import { NotesList } from './list'

const PROJECT_NAME_MOCK = 'Project1'

export const Notes = () => {
  return (
    <section className="flex flex-col my-4 gap-y-4">
      <h1 className="font-mono text-2xl font-medium">Notes on {PROJECT_NAME_MOCK}</h1>

      <NotesList />
    </section>
  )
}
