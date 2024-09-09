import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'

const router = createBrowserRouter([
  {
    //ELEMENTO PAI
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //ELEMENTO FILHO
    children:[
      {path:'/', element:<Home/>},
      {path:'/Login', element:<Login/>,}
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
