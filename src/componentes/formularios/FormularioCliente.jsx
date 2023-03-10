import {Button, FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap";

export const FormularioCliente = ({props}) => {

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
                <FormControl type="text" name="nombre" placeholder="Nombre del cliente "
                             value={values.nombre}
                             onChange={handleChange}
                />
            </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Apellido"
                    className="mb-3"
                >
                    <FormControl type="text" name="apellido" placeholder="Apellido del cliente"
                                 value={values.apellido}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Documento"
                    className="mb-3"
                >
                    <FormControl type="text" name="documento" placeholder="Documento del cliente"
                                 value={values.documento}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Telefono"
                    className="mb-3"
                >
                    <FormControl type="text" name="telefono" placeholder="Telefono del cliente"
                                 value={values.telefono}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="direccion"
                    className="mb-3"
                >
                    <FormControl type="text" name="direccion" placeholder=" direccion"
                                 value={values.direccion}
                                 onChange={handleChange}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="correo"
                    className="mb-3"
                >
                    <FormControl type="text" name="correo" placeholder="correo del cliente"
                                 value={values.correo}
                                 onChange={handleChange}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Imagen del Cliente"
                    className="mb-3"
                >
                    <FormControl type="text" name="imagenCliente" placeholder="Imagen del Cliente"
                                 value={values.imagenCliente}
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