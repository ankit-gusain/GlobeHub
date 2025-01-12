import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import About from './pages/About.jsx'
import "./index.css"
import { Contact } from './pages/Contact.jsx'
import { Country } from './pages/Country.jsx'
import AppLayout from './Components/Layout/AppLayout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { CountryDetails } from './Components/Layout/CountryDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
