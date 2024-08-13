import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WebLayout from './Components/Layout/WebLayout'
import TermsAndConditionPage from './Pages/TermsAndConditionPage'
import AboutUsPage from './Pages/AboutUsPage'
// import PaystackIntegration from './Utils/PaystackIntergration'
// import WebMaintenance from './Components/LandingPage/WebMaintenance'
import WebMaintenanceWithForm from './Utils/WebmaintenanceWithForm'

// import Index from './Components/Router/routes'


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/termsofservice' element={<TermsAndConditionPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/payforapackage' element={<WebMaintenanceWithForm/>} />
      </Route>
    )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App