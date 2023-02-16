
import axios from "axios";
import {Formik} from "formik";
import {FormularioProducto} from "./FormularioProducto";
import * as yup from 'yup';
import {Card} from "react-bootstrap";
import {useState} from "react";

export const ProductoForm = () => {

    const validaciones = yup.object({
        nombre: yup.string().required(),
        descripcion: yup.string().required(),
        valor: yup.number().required(),
        cantidad: yup.number().required(),
        imagenProducto: yup.string().required()
    });

    const [registraStatus,setregistraStatus] = useState(true);
    const initialValues={
        nombre: "", descripcion: "", valor: 0, cantidad: 0, imagenProducto: ""};

    let response = "";
    const registrar = (datos) => {
        axios.post('http://localhost:3100/productos', datos).then(({data}) => {
            response = data;
            setregistraStatus(false);
        })
            .catch(error => {
                console.log(error.response.data.message)
            })
    }
    return (
        <>

            <div className="w-75 mx-auto mt-5 ">
                <Card className="w-50 mx-auto p-4 bg-light mt-3 shadow">
                    <h3 className="text-primary"> Registre su producto</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={registrar}
                validationSchema={validaciones}
            >

                {(properties) => {
                    return <FormularioProducto props={properties}
                    />
                }}

            </Formik>

                </Card>
            </div>
        </>
    );
}