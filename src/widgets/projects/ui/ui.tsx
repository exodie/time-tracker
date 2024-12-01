import { CreateProjectDialog } from './create-dialog'
import { ProjectList } from './list'

import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

import { getAllProjects } from '@/api'

import type { Projects } from '@/types'

export const ProjectsWidget = () => {
  const [{ token }] = useCookies(['token'])

  const [projects, setProjects] = useState<Projects[]>()

  useEffect(() => {
    if (!token) {
      window.location.href = '/auth/signin'
    }
  }, [token])

  useEffect(() => {
    fallback()
  }, [])

  const fallback = async () => {
    const response = await getAllProjects(token)

    if (!response) return

    setProjects(response)
  }

  return (
    <section className="flex flex-col my-4 gap-y-4">
      <div className="flex sm:flex-row sm:items-center flex-col gap-2">
        <h1 className="font-mono text-2xl font-medium">Projects</h1>
        <CreateProjectDialog />
      </div>

      {projects && <ProjectList projects={projects} />}
    </section>
  )
}
