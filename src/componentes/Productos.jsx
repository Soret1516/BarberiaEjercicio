import {useGet} from "../servicios/useGet";

export const Productos = () => {
    const data =useGet('http://localhost:3100/productos');
  return(
      <>
      </>
      );
}