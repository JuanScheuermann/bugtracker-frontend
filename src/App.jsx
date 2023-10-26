import React from 'react'
import { Layout } from './ProyectoApp/UI/Layout'
import { AppRouter } from './router/AppRouter'
import './app.css'

export const App = () => {
  return (
    <>
      <Layout>
        <AppRouter />
      </Layout>
    </>
  )
}

