
import {ModalFooter} from "react-bootstrap";
import {useGet} from "../servicios/useGet";

export const Clientes = () => {

    const data =useGet('http://localhost:3100/clientes');

    return(
        <>
                <ModalFooter/>
        </>
    );
}