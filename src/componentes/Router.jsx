import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Clientes} from "./Clientes";
import {Home} from "./Home";
import {Citas} from "./Citas";
import {Productos} from "./Productos";
import {Container, ModalFooter, Nav, Navbar, NavLink} from "react-bootstrap";
import {NavBar} from "./NavBar";
import {EditarProducto} from "./formularios/EditarProducto";

export const Router = () => {
  return(
      <BrowserRouter>
            <NavBar/>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/clientes"} element={<Clientes/>}/>
              <Route path={"/citas"} element={<Citas/>}/>
              <Route path={"/productos"} element={<Productos/>}/>
              <Route path={"/productos/producto/:id"} element={<EditarProducto/>}/>
          </Routes>
            <ModalFooter className=" bg-dark navbar-dark p-3 mt-4"> <p className="d-block m-auto text-light"> Barberia System </p></ModalFooter>
      </BrowserRouter>
  );
}