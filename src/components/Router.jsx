import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Clientes} from "./Clientes";

export const Router = () => {
  return(
      <BrowserRouter>
          <Routes>
              <Route path={"/barberia"} element={<Clientes/>} />
          </Routes>
      </BrowserRouter>
  );
}