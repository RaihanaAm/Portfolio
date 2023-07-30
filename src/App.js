import { NavBar } from "./layout/NavBar/NavBar"
import { Home } from "./pages/home/home"
import "./_app.scss"

export const App = () => {

  return (
    <div className="app">
    <NavBar/>
    <Home/>
    </div>
  )

}