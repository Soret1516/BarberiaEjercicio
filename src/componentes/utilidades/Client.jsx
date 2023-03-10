import {Button, Card} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

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
                <Card.Img className="p-4 imgs " variant="top" src={`imgs/${v.imagenCliente}`} />
                <Card.Body>
                <Card.Title>{v.nombre}</Card.Title>
                <Card.Text>
                Apellido: {v.apellido} <br/>
                Documento: {v.documento} <br/>
                Telefono: {v.telefono}<br/>
                direccion:{v.direecion}<br/>
                correo:{v.correo}<br/>
                </Card.Text>

                <div className="d-flex flex-wrap w-75">
                       <Button variant="danger" className="d-block  m-auto" onClick={()=>deleteClient(v.cliente_id)}>Eliminar</Button>
                        <Link to={`cliente/${v.cliente_id}`} className="text-decoration-none">
                            <Button variant="dark" className="d-block  m-auto" >Editar</Button>
                        </Link>
                    </div>
                
                </Card.Body>
                </Card>

                )

                )
                )

            }

        </>
    );
}