import * as yup from "yup";
import axios from "axios";
import {Card} from "react-bootstrap";
import {Formik} from "formik";
import { FormularioCitas } from "./FormularioCitas";
import {useState} from "react";


export const CitaForm = () => {
    const validaciones = yup.object({
        fecha: yup.date().required(),
        barbero: yup.string().required(),
        nombreServicio: yup.string().required(),
        descripcionServicio: yup.string().required(),
        imgCliente: yup.string().required(),
        direccionCliente:yup.string().required(),
        valorServicio:yup.string().required()
    });

    const initialValues={
        fecha:"2023-02-19", barbero: "",  nombreServicio: "", descripcionServicio: "" ,imgCliente: "",direccionCliente:"" ,valorServicio:""};

    let response = "";
    const registrar = (datos) => {
        axios.post('http://localhost:3100/citas', datos).then(({data}) => {
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
                    <h3 className="text-primary"> Registro de Cita</h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={registrar}
                        validationSchema={validaciones}
                    >

                        {(properties) => {
                            return <FormularioCitas props={properties}
                            />
                        }}

                    </Formik>

                </Card>
            </div>
        </>
    );

}