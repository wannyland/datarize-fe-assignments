import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import PageRouter from './router/index.tsx'
import { theme } from './theme/index.ts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
          <RouterProvider router={PageRouter} />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
    ,
  </RecoilRoot>,
)
