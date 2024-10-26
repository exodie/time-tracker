import { Link } from 'react-router-dom'

import { AuthForm, AuthFormField, AuthFormFooter, AuthFormHeader } from '../form'

import { Button, Input, Label } from '@/shared/ui'

export const AuthSignUp = () => {
  return (
    <AuthForm>
      <AuthFormHeader
        title="Sign Up"
        description="Enter your username with email and password to sign up your account."
      />

      <AuthFormField>
        <Label htmlFor="username">Username</Label>
        <Input placeholder="Username" id="username" type="text" required />
      </AuthFormField>
      <AuthFormField>
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Email" id="email" type="email" required />
      </AuthFormField>
      <AuthFormField>
        <Label htmlFor="password">Password</Label>
        <Input placeholder="Password" id="password" type="password" required />
      </AuthFormField>
      <AuthFormField>
        <Label htmlFor="repeat-password">Repeat password</Label>
        <Input placeholder="Password" id="repeat-password" type="password" required />
      </AuthFormField>

      <AuthFormFooter>
        <Button className="w-full">Continue</Button>
        <Link to={'/auth/signin'}>
          <Button variant={'outline'}>Sign in</Button>
        </Link>
      </AuthFormFooter>
    </AuthForm>
  )
}
