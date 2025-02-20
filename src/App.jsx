import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root /> } >
        <Route index element={ <Home /> } />
        <Route path='/registration' element={ <Registration /> } />
        <Route path='/login' element={ <Login /> } />
      </Route>
    )
  )



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
