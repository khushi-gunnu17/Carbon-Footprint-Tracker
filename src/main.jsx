import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Calculate from './pages/Calculate.jsx'
import Calculate_House from './pages/Calculate_House.jsx'
import Result from './pages/Result.jsx'
import Result_House from './pages/Result_House.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />

      {/* for individual page */}
      <Route path='calculate' element={<Calculate />}/>
      <Route path='result' element={<Result />} />
      
      {/* for household page */}
      <Route path='calculate-household' element={<Calculate_House />} />
      <Route path='result-household' element={<Result_House />} />

      {/* about and contact us pages */}
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)