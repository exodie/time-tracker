import ky from 'ky'

import type { User, UserResponseSignIn } from '@/types'

import { API_URL } from '@/constants'

export const signUpApi = async (userData: User) => {
  const response = await ky
    .post(`${API_URL}/users/signUp`, { json: userData })
    .json<UserResponseSignIn>()

  if (!response) return

  return response
}

export const signInApi = async (userData: User) => {
  const response = await ky
    .post(`${API_URL}/users/login`, { json: userData })
    .json<UserResponseSignIn>()

  if (!response) return

  return response
}