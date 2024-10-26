import { Link } from 'react-router-dom'

import { AuthForm, AuthFormField, AuthFormFooter, AuthFormHeader } from '../form'

import { Button, Input, Label } from '@/shared/ui'

export const AuthSignIn = () => {
  return (
    <AuthForm>
      <AuthFormHeader
        title="Sign In"
        description="Enter your username with password to sign in into account."
      />

      <AuthFormField>
        <Label htmlFor="username">Username</Label>
        <Input placeholder="Username" id="username" type="text" required />
      </AuthFormField>
      <AuthFormField>
        <Label htmlFor="password">Password</Label>
        <Input placeholder="Password" id="password" type="password" required />
      </AuthFormField>

      <AuthFormFooter>
        <Button className="w-full">Continue</Button>
        <Link to={'/auth/signup'}>
          <Button variant={'outline'}>Sign up</Button>
        </Link>
      </AuthFormFooter>
    </AuthForm>
  )
}
