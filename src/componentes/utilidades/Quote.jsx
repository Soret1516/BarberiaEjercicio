import {Button, Card} from "react-bootstrap";
import axios from "axios";


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
                <Card.Img className="p-4 imgs " variant="top" src={`imgs/${v.imagenAgendador}`} />
                <Card.Body>
                <Card.Title>{v.nombre}</Card.Title>
                <Card.Text>
                Apellido: {v.apellido} <br/>
                Documento: {v.documento} <br/>
                Telefono: {v.telefono}<br/>
                correo:{v.correo}<br/>
                </Card.Text>

                
                <Button variant="danger" onClick={()=>deleteQuote(v.cita_id)}>Eliminar</Button>
                </Card.Body>
                </Card>

                )

                )
                )

            }

        </>
    );
}