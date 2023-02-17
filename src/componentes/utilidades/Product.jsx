import {Button, Card} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

export const Product = ({props}) => {

    const {data} = props;

    const deleteProduct = (id)=> {

        console.log(id);
        axios.delete(`http://localhost:3100/productos/${id}`).
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
                    <div className="d-flex flex-wrap w-75">
                        <Button variant="danger" className="d-block  m-auto" onClick={()=>deleteProduct(v.producto_id)}>Eliminar</Button>
                        <Link to={`producto/${v.producto_id}`} className="text-decoration-none">
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