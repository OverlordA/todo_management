import {Formik} from "formik";
import {Col, Container, Row} from "react-bootstrap";


type TodoFormProps = {
    title: string,
    submit: (values: any) => void,
    initValues: {
        title: string,
    }
}

const TodoForm = (props: TodoFormProps) => {
    return <Container>
        <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
                <h3>{props.title}</h3>
            </Col>
            <Col xs={3}></Col>
        </Row>
        <Row>
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
                        <Container>
                            <Row>
                                <Col xs={3}> </Col>
                                <Col xs={6}>
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                    />
                                    {errors.title && touched.title && errors.title}
                                </Col>
                                <Col xs={3}> </Col>
                            </Row>
                            <Row>
                                <Col  xs={3}/>
                                <Col  xs={6}>
                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </Col>
                                <Col  xs={3}/>
                            </Row>
                        </Container>
                    </form>
                )}
            </Formik>
        </Row>
    </Container>
}

export default TodoForm
