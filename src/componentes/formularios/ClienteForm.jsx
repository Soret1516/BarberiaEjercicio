import * as yup from "yup";
import axios from "axios";
import {Card} from "react-bootstrap";
import {Formik} from "formik";
import {FormularioCliente} from "./FormularioCliente";

export const ClienteForm = () => {
    const validaciones = yup.object({
        documento: yup.string().required(),
        nombre: yup.string().required(),
        apellido: yup.string().required(),
        telefono: yup.string().required(),
        correo: yup.string().required(),
        direccion: yup.string().required(),
       
       
    });

    const initialValues={
        nombre: "", documento: "", apellido: '', telefono: "", imagenProducto: "", correo: ""};

    let response = "";
    const registrar = (datos) => {
        axios.post('http://localhost:3100/clientes', datos).then(({data}) => {
            response = data;
            window.location.href = window.location.href;
        })
            .catch(error => {
                console.log(error.response.data.message)
            })
    }
    return (
        <>

            <div className="w-75 mx-auto mt-5 ">
                <Card className="w-50 mx-auto p-4 bg-light mt-3 shadow">
                    <h3 className="text-primary"> Registro de cliente</h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={registrar}
                        validationSchema={validaciones}
                    >

                        {(properties) => {
                            return <FormularioCliente props={properties}
                            />
                        }}

                    </Formik>

                </Card>
            </div>
        </>
    );

}