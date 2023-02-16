import {Button, Card} from "react-bootstrap";

export const Product = ({props}) => {

    const {data} = props;

    return(
        <>
            {
                data!= null &&data.map((v,k)=>

                (
                (
                <Card key={k} className="d-block w-25 mx-4 my-3">
                <Card.Img className="p-4" variant="top" src={`imgs/${v.imagenProducto}`} />
                <Card.Body>
                <Card.Title>{v.nombre}</Card.Title>
                <Card.Text>
            {v.descripcion} <br/>
                Existencia: {v.cantidad} <br/>
                Valor: ${v.valor} <br/>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                )

                )
                )

            }

        </>
    );
}