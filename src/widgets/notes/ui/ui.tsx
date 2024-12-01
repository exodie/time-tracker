import { NotesList } from './list'
import { ArrowLeft } from 'lucide-react'

import { useCallback, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, redirect, useParams } from 'react-router-dom'

import { getProjectById } from '@/api'

import type { Notions } from '@/types/projects'
import { CreateNotionDialog } from './create-dialog'
import { ReportNotionDialog } from './report-dialog'

const PROJECT_NAME_MOCK = 'Project1'

export const Notes = () => {
  const { id } = useParams()
  const [{ token }] = useCookies(['token'])
  const [notions, setNotions] = useState<Notions[]>([])
  const [nameOfProject, setNameOfProjects] = useState<string>(PROJECT_NAME_MOCK)

  const fallback = useCallback(async () => {
    const response = await getProjectById(token, id ?? '')

    if (!response) return

    const element = response[0]

    setNotions(element.notions)
    setNameOfProjects(element.name)
  }, [notions])

  useEffect(() => {
    if (!token) {
      redirect('/auth/signin')
    }
  }, [token])

  useEffect(() => {
    fallback()
  }, [])

  return (
    <section className="flex flex-col my-4 gap-y-4">
      <Link
        to={'/'}
        className="flex space-x-4 text-blue-600 hover:text-blue-500 font-medium w-fit"
      >
        <ArrowLeft /> Projects
      </Link>

      <div className="flex sm:flex-row sm:items-center flex-col gap-2">
        <h1 className="font-mono text-2xl font-medium">Notes on {nameOfProject}</h1>
        <CreateNotionDialog projectId={id ?? ''} />
        {notions.length >= 1 && <ReportNotionDialog projectId={id ?? ''} />}
      </div>

      {notions && <NotesList projectId={id ?? ''} notions={notions} />}
    </section>
  )
}
