import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, redirect } from 'react-router-dom'

import { AuthForm, AuthFormField, AuthFormFooter, AuthFormHeader } from '../form'

import { signUpApi } from '@/api'

import { Button, Input, Label } from '@/shared/ui'

import type { UserState } from '@/types'

export const AuthSignUp = () => {
  const [user, setUser] = useState<UserState>({} as UserState)

  const [_, setCookie] = useCookies(['token'])

  const handleClickContinue = async () => {
    if (user.password !== user.repeatPassword) {
      return
    }

    const token = await signUpApi({ login: user.login, password: user.password })

    setCookie('token', token, {
      expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    })

    redirect('/')
  }

  return (
    <AuthForm>
      <AuthFormHeader
        title="Sign Up"
        description="Enter your login and password and repeat password to sign up your account."
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
      <AuthFormField>
        <Label htmlFor="repeat-password">Repeat password</Label>
        <Input
          value={user.repeatPassword}
          onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
          placeholder="Repeat your password"
          id="repeat-password"
          type="password"
          required
        />
      </AuthFormField>
      <AuthFormFooter>
        <Button className="w-full" onClick={handleClickContinue}>
          Continue
        </Button>
        <Link to={'/auth/signin'}>
          <Button variant={'outline'}>Sign in</Button>
        </Link>
      </AuthFormFooter>
    </AuthForm>
  )
}
