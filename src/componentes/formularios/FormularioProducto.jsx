import {Button, FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {useEffect} from "react";

export const FormularioProducto = ({props}) => {

    //Se obtienen las configuraciones de Formik, para controlar los valores de los datos del formulario
    const {touched, values, handleChange, handleSubmit, errors} = props



    return (

        <Form onSubmit={e => handleSubmit(e)}>
            <FormGroup className="my-3">
            <FloatingLabel
                controlId="floatingInput"
                label="Nombre del Producto"
                className="mb-3"
            >
                <FormControl type="text" name="nombre" placeholder="Nombnre del producto"
                             value={values.nombre}
                             onChange={handleChange}
                />
            </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Descripcion del Producto"
                    className="mb-3"
                >
                    <FormControl type="text" name="descripcion" placeholder="Descripcion del producto"
                                 value={values.descripcion}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Valor del Producto"
                    className="mb-3"
                >
                    <FormControl type="number" name="valor" placeholder="Valor del producto"
                                 value={values.valor}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Cantidad del Producto"
                    className="mb-3"
                >
                    <FormControl type="number" name="cantidad" placeholder="Cantidad del producto"
                                 value={values.cantidad}
                                 onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Imagen del Producto"
                    className="mb-3"
                >
                    <FormControl type="text" name="imagenProducto" placeholder="Imagen del producto"
                                 value={values.imagenProducto}
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