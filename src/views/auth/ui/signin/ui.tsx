import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

import { AuthForm, AuthFormField, AuthFormFooter, AuthFormHeader } from '../form'

import { signInApi } from '@/api'

import { Button, Input, Label } from '@/shared/ui'

import { User } from '@/types'

export const AuthSignIn = () => {
  const [user, setUser] = useState<User>({} as User)

  const [_, setCookie] = useCookies(['token'])

  const handleClickContinue = async () => {
    const response = await signInApi(user)

    if (!response) return

    setCookie('token', response.token, {
      path: '/',
      expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    })

    window.location.href = '/'
  }

  return (
    <AuthForm>
      <AuthFormHeader
        title="Sign In"
        description="Enter your login with password to sign in into account."
      />

      <AuthFormField>
        <Label htmlFor="login">Login</Label>
        <Input
          value={user.login}
          onChange={(e) => setUser({ ...user, login: e.target.value })}
          placeholder="Login"
          id="login"
          type="text"
          required
        />
      </AuthFormField>
      <AuthFormField>
        <Label htmlFor="password">Password</Label>
        <Input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          id="password"
          type="password"
          required
        />
      </AuthFormField>

      <AuthFormFooter>
        <Button className="w-full" onClick={handleClickContinue}>
          Continue
        </Button>
        <Link to={'/auth/signup'}>
          <Button variant={'outline'}>Sign up</Button>
        </Link>
      </AuthFormFooter>
    </AuthForm>
  )
}
