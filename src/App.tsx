import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import {GlobalCss} from './styles'
import CardRestaurants from './components/CardRestaurants'

const rotas = createBrowserRouter([
  {
    path:'/',
    element:(
      <>
      <CardRestaurants />
      </>
    )
  }
])


function App() {

  return (
    <>
    <GlobalCss />
    <div className='container'>
      <Header />
    </div>
    <RouterProvider router={rotas} />
    </>
  )
}

export default App
