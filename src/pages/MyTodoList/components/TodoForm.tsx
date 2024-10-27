import {Formik} from "formik";
import {Button, Col, Form, Row} from "react-bootstrap";


type TodoFormProps = {
    title: string,
    buttonText: string,
    submit: (values: any) => void,
    initValues: {
        title: string,
    }
}

const TodoForm = (props: TodoFormProps) => {
    return <>
        <h1 className="text-center mb-4">{props.title}</h1>
        <Row>
        <Col className="text-center mb-6">
            <Formik
                initialValues={props.initValues}
                //validate={}
                onSubmit={(values, { setSubmitting }) => {
                    props.submit(values)
                    setSubmitting(false);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="todoInput">
                            <Form.Label className='me-4'>Todo title</Form.Label>
                            <input
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                                style={{ width: '100%', height: '50px', padding: '10px' }}
                            />
                            {errors.title && touched.title && errors.title}
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            {props.buttonText}
                        </Button>
                    </form>
                )}
            </Formik>
        </Col>

        </Row>
        </>
}

export default TodoForm
