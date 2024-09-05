import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WebLayout from './Components/Layout/WebLayout'
import TermsAndConditionPage from './Pages/TermsAndConditionPage'
import AboutUsPage from './Pages/AboutUsPage'
import BlogPage from './Pages/BlogPage'
import BlogDetails from './Components/BlogPage/BlogDetails'
import PrivacyPolicies from './Pages/PrivacyPolicies'
import ConfirmationPage from './Pages/ConfirmationPage'



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/termsofservice' element={<TermsAndConditionPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/blog/:slug' element={<BlogDetails/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicies/>}/>
        <Route path='/consultaionconfirmed' element={<ConfirmationPage/>}/>
      </Route>
    )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App