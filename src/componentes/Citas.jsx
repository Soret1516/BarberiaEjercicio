import {useGet} from "../servicios/useGet";
import { CitaForm } from "./formularios/CitaForm";
import {Quote} from "./utilidades/Quote";


export const Citas = () => {
    const data =useGet('http://localhost:3100/citas');
    
    return (
        <>
           <div className="m-auto d-flex w-75 flex-wrap mt-5 pt-5">
              <Quote props={data}></Quote>
          </div>
          <CitaForm/>
          
        </>
    );
}