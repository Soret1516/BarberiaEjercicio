import {Button, Card} from "react-bootstrap";
import axios from "axios";

export const Client = ({props}) => {

    const {data} = props;

    const deleteClient = (id)=> {

        console.log(id);
        axios.delete(`http://localhost:3100/clientes/${id}`).
            then(()=>{
            window.location.href = window.location.href;
        }).
            catch()
    };

    return(
        <>
            {
                data!= null &&data.map((v,k)=>

                (
                (
                <Card key={k} className="d-block   mx-4 my-3">
                <Card.Img className="p-4 imgs " variant="top" src={`imgs/${v.imagenProducto}`} />
                <Card.Body>
                <Card.Title>{v.nombre}</Card.Title>
                <Card.Text>
            {v.descripcion} <br/>
                Existencia: {v.cantidad} <br/>
                Valor: ${v.valor} <br/>
                </Card.Text>
                <Button variant="danger" onClick={()=>deleteClient(v.producto_id)}>Eliminar</Button>
                </Card.Body>
                </Card>

                )

                )
                )

            }

        </>
    );
}