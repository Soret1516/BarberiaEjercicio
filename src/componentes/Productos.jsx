import {useGet} from "../servicios/useGet";
import {ProductoForm} from "./formularios/ProductoForm";
import {Product} from "./utilidades/Product";

export const Productos = () => {
    const data =useGet('http://localhost:3100/productos');



  return(
      <>
          <div className="m-auto d-flex w-75 flex-wrap mt-5 pt-5">
              <Product props={data}></Product>
          </div>
          <ProductoForm/>
      </>
      );
}