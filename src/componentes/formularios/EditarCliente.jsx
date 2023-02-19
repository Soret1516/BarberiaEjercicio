import {Link, useParams} from "react-router-dom";
import {useGet} from "../../servicios/useGet";
import * as yup from "yup";
import axios from "axios";
import {Button, Card} from "react-bootstrap";
import {Formik} from "formik";
import {FormularioCliente} from "./FormularioCliente";
import {useEffect, useState} from "react";

export const EditarCliente = () => {

    const {id} = useParams("id");
    const {data, loading} =useGet(`http://localhost:3100/clientes/${id}`);



    const validaciones = yup.object({
        documento: yup.string().required(),
        nombre: yup.string().required(),
        apellido: yup.string().required(),
        telefono: yup.string().required(),
        correo: yup.string().required(),
        direccion: yup.string().required(),
        imagenCliente: yup.string().required()
    });



    let response = "";
    const actualizar = (datos) => {
        axios.put(`http://localhost:3100/clientes/${id}`, datos).then(({data}) => {
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
                    <Card.Img className="p-4 imgs " variant="top" src={`../../imgs/${data.imagenCliente}`} />
                    <Card.Body>
                        <Card.Title>{data.nombre}</Card.Title>
                        <Card.Text>
                            Apellido: {data.apellido} <br/>
                             Documento: {data.documento} <br/>
                             Telefono: {data.telefono}<br/>
                            direccion:{data.direccion}<br/>
                            correo:{data.correo}<br/>
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
                    <h3 className="text-primary"> Registro de cliente</h3>
                    <Formik
                        initialValues={data}
                        onSubmit={actualizar}
                        validationSchema={validaciones}
                    >

                        {(properties) => {
                            return <FormularioCliente props={properties}
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