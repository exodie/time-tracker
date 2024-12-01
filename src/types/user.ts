export type User = {
  login: string
  password: string
}

export type UserState = User & {
  repeatPassword: string
}

export type UserResponseSignIn = {
  token: string
}
