import { ProjectList } from './list'

export const Projects = () => {
  return (
    <section className="flex flex-col my-4 gap-y-4">
      <h1 className="font-mono text-2xl font-medium">Projects</h1>

      <ProjectList />
    </section>
  )
}
