import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Clientes} from "./Clientes";
import {Home} from "./Home";
import {Citas} from "./Citas";
import {Productos} from "./Productos";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {NavBar} from "./NavBar";

export const Router = () => {
  return(
      <BrowserRouter>
            <NavBar/>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/clientes"} element={<Clientes/>}/>
              <Route path={"/citas"} element={<Citas/>}/>
              <Route path={"/productos"} element={<Productos/>}/>
          </Routes>
      </BrowserRouter>
  );
}