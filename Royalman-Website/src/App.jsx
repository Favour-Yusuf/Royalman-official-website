import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WebLayout from './Components/Layout/WebLayout'
import TermsAndConditionPage from './Pages/TermsAndConditionPage'
import AboutUsPage from './Pages/AboutUsPage'

// import Index from './Components/Router/routes'


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/termsofservice' element={<TermsAndConditionPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
      </Route>
    )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App