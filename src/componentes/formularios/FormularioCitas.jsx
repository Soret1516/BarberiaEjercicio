import {Button, FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap";

export const FormularioCitas = ({props}) => {

    //Se obtienen las configuraciones de Formik, para controlar los valores de los datos del formulario
    const {touched, values, handleChange, handleSubmit, errors} = props


    return (

        <Form onSubmit={e => handleSubmit(e)}>
            <FormGroup className="my-3">
            <FloatingLabel
                controlId="floatingInput"
                label="Nombre"
                className="mb-3"
            >
                <FormControl type="text" name="nombre" placeholder="Nombre Completo"
                             value={values.nombre}
                             onChange={handleChange}
                />
            </FloatingLabel>
               
                <FloatingLabel
                    controlId="floatingInput"
                    label="Documento de identidad"
                    className="mb-3"
                >
                    <FormControl type="text" name="documento" placeholder="Documento de identidad"
                                 value={values.documento}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Telefono"
                    className="mb-3"
                >
                    <FormControl type="text" name="telefono" placeholder="Telefono "
                                 value={values.telefono}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
               

                <FloatingLabel
                    controlId="floatingInput"
                    label="correo"
                    className="mb-3"
                >
                    <FormControl type="text" name="correo" placeholder="correo"
                                 value={values.correo}
                                 onChange={handleChange}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Imagen del agendador"
                    className="mb-3"
                >
                    <FormControl type="text" name="imagenAgendador" placeholder="Imagen del agendador"
                                 value={values.imagenAgendador}
                                 onChange={handleChange}
                    />
                </FloatingLabel>


                

        </FormGroup>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}