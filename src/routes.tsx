import App from './App'
import { ErrorBoundary, AuthView, AuthSignIn, HomeView, AuthSignUp } from './views'

import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <HomeView />
      },
      {
        path: 'auth',
        element: <AuthView />,
        children: [
          {
            path: 'signin',
            element: <AuthSignIn />
          },
          {
            path: 'signup',
            element: <AuthSignUp />
          }
        ]
      }
    ]
  }
])
