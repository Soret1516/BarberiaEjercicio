import {Button, FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap";

export const FormularioCitas = ({props}) => {

    //Se obtienen las configuraciones de Formik, para controlar los valores de los datos del formulario
    const {touched, values, handleChange, handleSubmit, errors} = props


    return (

        <Form onSubmit={e => handleSubmit(e)}>
            <FormGroup className="my-3">
            <FloatingLabel
                controlId="floatingInput"
                label="fecha"
                className="mb-3"
            >
                <FormControl type="date" name="fecha" placeholder="Fecha"
                             value={values.fecha}
                             onChange={handleChange}
                />
            </FloatingLabel>
               
                <FloatingLabel
                    controlId="floatingInput"
                    label="barbero"
                    className="mb-3"
                >
                    <FormControl type="text" name="barbero" placeholder="Barbero"
                                 value={values.barbero}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="nombreServicio"
                    className="mb-3"
                >
                    <FormControl type="text" name="nombreServicio" placeholder="ingrese el nombre del servicio "
                                 value={values.nombreServicio}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
               

                <FloatingLabel
                    controlId="floatingInput"
                    label="descripcionServicio"
                    className="mb-3"
                >
                    <FormControl type="text" name="descripcionServicio" placeholder="descripcion del servicio"
                                 value={values.descripcionServicio}
                                 onChange={handleChange}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="imgCliente"
                    className="mb-3"
                >
                    <FormControl type="text" name="imgCliente" placeholder="Imagen del cliente"
                                 value={values.imgCliente}
                                 onChange={handleChange}
                    />
                </FloatingLabel>

                
                <FloatingLabel
                    controlId="floatingInput"
                    label="direccionCliente"
                    className="mb-3"
                >
                    <FormControl type="text" name="direccionCliente" placeholder="direccion del cliente"
                                 value={values.direccionCliente}
                                 onChange={handleChange}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="valorServicio"
                    className="mb-3"
                >
                    <FormControl type="text" name="valorServicio" placeholder="Valor del servicio"
                                 value={values.valorServicio}
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