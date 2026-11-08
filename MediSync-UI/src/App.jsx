import {Route, Routes} from "react-router-dom"
import Menu from "./Menu"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Booking from "./Booking"
import Login from "./Login"

export default function App(){
  return <div>
    <h1>MediSync</h1>
     <div className="container-fluid">
        <main className="tm-main">

        <Routes>

          <Route path="/" element ={<Home/>}></Route>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/contact" element ={<Contact/>}></Route>
          <Route path="/booking" element ={<Booking/>}></Route>
          <Route path="/login" element ={<Login/>}></Route>
        </Routes>
          <Menu/>
              <footer className="row tm-row">
                <hr className="col-12"/>
                <div className="col-md-6 col-12 tm-color-gray">
                    Design: <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-external-link">YUVRAJ </a>
                </div>
                <div className="col-md-6 col-12 tm-color-gray tm-copyright">
                    Copyright 2026 mediSync Healthcare
                </div>
            </footer>
        </main>
    </div>
  </div>
}
