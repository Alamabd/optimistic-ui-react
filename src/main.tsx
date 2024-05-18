import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/upload',
    Component: Upload
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
