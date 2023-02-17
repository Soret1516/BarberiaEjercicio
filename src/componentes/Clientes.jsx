
import {ClienteForm} from "./formularios/ClienteForm";
import {ModalFooter} from "react-bootstrap";
import {useGet} from "../servicios/useGet";
import { Client } from "./utilidades/Client";

export const Clientes = () => {
    const data =useGet('http://localhost:3100/clientes');

    return(
        <>
             <>
          <div className="m-auto d-flex w-75 flex-wrap mt-5 pt-5">
              <Client props={data}></Client>
          </div>
          <ClienteForm/>
      </>   <ModalFooter/>
        </>
    );
}