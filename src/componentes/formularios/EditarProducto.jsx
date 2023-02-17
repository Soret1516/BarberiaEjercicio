import {Link, useParams} from "react-router-dom";
import {useGet} from "../../servicios/useGet";
import * as yup from "yup";
import axios from "axios";
import {Button, Card} from "react-bootstrap";
import {Formik} from "formik";
import {FormularioProducto} from "./FormularioProducto";
import {useEffect, useState} from "react";

export const EditarProducto = () => {

    const {id} = useParams("id");
    const {data, loading} =useGet(`http://localhost:3100/productos/${id}`);



    const validaciones = yup.object({
        nombre: yup.string().required(),
        descripcion: yup.string().required(),
        valor: yup.number().required(),
        cantidad: yup.number().required(),
        imagenProducto: yup.string().required()
    });



    let response = "";
    const actualizar = (datos) => {
        axios.put(`http://localhost:3100/productos/${id}`, datos).then(({data}) => {
            response = data;
            window.location.href = window.location.href;
        })
            .catch(error => {
                console.log(error.response.data.message)
            })
    }
    const [render, setRender] = useState(false)
    const mostrarFormulario = ()=>{
        setRender(true);
    }
    return(
        <div className="mt-5">
            {
                loading || (
                    <Card  className="d-block   mx-4 my-3">
                    <Card.Img className="p-4 imgs " variant="top" src={`../../imgs/${data.imagenProducto}`} />
                    <Card.Body>
                        <Card.Title>{data.nombre}</Card.Title>
                        <Card.Text>
                            {data.descripcion} <br/>
                            Existencia: {data.cantidad} <br/>
                            Valor: ${data.valor} <br/>
                        </Card.Text>
                        <div className="d-flex flex-wrap w-75">
                            <Button variant="dark" className="d-block  m-auto" onClick={mostrarFormulario} >Editar</Button>
                        </div>
                    </Card.Body>
                </Card>)

            }
            {
                render&&(
                    <div className="w-75 mx-auto mt-5 ">
                        <Card className="w-50 mx-auto p-4 bg-light mt-3 shadow">
                            <h3 className="text-primary"> Registre su producto</h3>
                            <Formik
                                initialValues={data}
                                onSubmit={actualizar}
                                validationSchema={validaciones}
                            >

                                {(properties) => {
                                    return <FormularioProducto props={properties}
                                    />
                                }}

                            </Formik>

                        </Card>
                    </div>
                )
            }


        </div>
    );

}