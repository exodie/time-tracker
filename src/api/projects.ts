import ky from 'ky'

import type { Notions, Projects } from '@/types/projects'

import { API_URL } from '@/constants'

export const getAllProjects = async (token: string) => {
  const response = await ky
    .get(`${API_URL}/projects`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .json<Projects[]>()

  if (!response) {
    console.log('error::getAllProjects::bad-response')
  }

  return response
}

export const getProjectById = async (token: string, projectId: string) => {
  const response = await ky
    .get(`${API_URL}/projects/search?projectId=${projectId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .json<Projects[]>()

  if (!response) {
    console.log('error::getProjectById::bad-response')
  }

  return response
}

export const createProjects = async (
  token: string,
  data: { name: string; description?: string }
) => {
  const response = await ky
    .post(`${API_URL}/projects`, {
      headers: { Authorization: `Bearer ${token}` },
      json: data
    })
    .json()

  if (!response) {
    console.log('error::createProjects::bad-response')
  }
}

export const updateProjects = async (
  token: string,
  name: string,
  data: Partial<{ newName: string; newDescription: string }>
) => {
  const response = await ky
    .put(`${API_URL}/projects`, {
      headers: { Authorization: `Bearer ${token}` },
      json: { name, newName: data?.newName, newDescription: data?.newDescription }
    })
    .json()

  if (!response) {
    console.log('error::updateProjects::bad-response')
  }
}

export const deleteProjects = async (token: string, projectName: string) => {
  const response = await ky
    .delete(`${API_URL}/projects`, {
      headers: { Authorization: `Bearer ${token}` },
      searchParams: { projectName }
    })
    .json()

  if (!response) {
    console.log('error::deleteProjects::bad-response')
  }
}

export const createNotions = async (
  token: string,
  data: {
    projectId: string
    name: string
    description?: string
    startTime: string
    endTime: string
  }
) => {
  const response = await ky
    .post(`${API_URL}/notions`, {
      headers: { Authorization: `Bearer ${token}` },
      json: data
    })
    .json()

  if (!response) {
    console.log('error::createNotions::bad-response')
  }
}

export const updateNotions = async (
  token: string,
  data: {
    projectId: string
    notionId: string
    newName?: string
    newDescription?: string
    newStartTime?: string
    newEndTime?: string
  }
) => {
  const response = await ky
    .put(`${API_URL}/notions`, {
      headers: { Authorization: `Bearer ${token}` },
      json: data
    })
    .json()

  if (!response) {
    console.log('error::updateNotions::bad-response')
  }
}

export const deleteNotions = async (
  token: string,
  data: { projectId: string; notionId: string }
) => {
  const response = await ky
    .delete(`${API_URL}/notions`, {
      headers: { Authorization: `Bearer ${token}` },
      json: data
    })
    .json()

  if (!response) {
    console.log('error::deleteNotions::bad-response')
  }
}

export const searchNotions = async (token: string, projectId: string) => {
  const response = await ky
    .get(`${API_URL}/notions/search`, {
      headers: { Authorization: `Bearer ${token}` },
      searchParams: { projectId }
    })
    .json<Notions[]>()

  if (!response) {
    console.log('error::searchNotions::bad-response')
  }

  return response
}
