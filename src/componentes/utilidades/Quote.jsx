import {Button, Card} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

export const Quote = ({props}) => {

    const {data} = props;

    const deleteQuote = (id)=> {

        console.log(id);
        axios.delete(`http://localhost:3100/citas/${id}`).
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
                <Card.Img className="p-4 imgs " variant="top" src={`imgs/${v.imgCliente} `} />
                <Card.Body>
                <Card.Title>{v.barbero}</Card.Title>
                <Card.Text>
                Fecha: {v.fecha} <br/>
                nombre del servicio: {v.nombreServicio}<br/>
                descripcionServicio:{v.descripcionServicio}<br/>
                direccion del cliente: {v.direccionCliente} <br/>
                valor del servicio: {v.valorServicio}
                </Card.Text>
                <div className="d-flex flex-wrap w-75">
                        <Button variant="danger" className="d-block  m-auto" onClick={()=>deleteQuote(v.cita_id)}>Eliminar</Button>
                        <Link to={`cita/${v.cita_id}`} className="text-decoration-none">
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