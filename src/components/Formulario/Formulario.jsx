import React, { Component } from "react";
import { Form, Image, Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import SubmitButton from "../SubmitButton/SubmitButton";
import logo from "../../assets/ethinkers_logo.png";

import "./Formulario.scss";

const schema = Yup.object().shape({
  firstname: Yup.string().required("Campo de preenchimento obrigatório."),
  lastname: Yup.string().required("Campo de preenchimento obrigatório."),
  email: Yup.string().email("e-mail inválido, não possui @").required("Campo de preenchimento obrigatório."),
  phone: Yup.number().typeError("Digite somente os números").required("Campo de preenchimento obrigatório."),
  cpf: Yup.number().typeError("Digite somente os números.").max(99999999999, "CPF inválido").required("Campo de preenchimento obrigatório."),
  terms: Yup.bool().required("Aceitação dos termos é obrigatória.").test("terms", "Aceitação dos termos é obrigatória.", (terms) => terms ? true : false)
})

const initialSchema = {
  firstname: "",
  lastname: "",
  email: "",
  terms: false
}

const validation = (values) => {
  if (values) {
    schema.validate(values).then(valid => {
      return true;
    }).catch(err => {
      return false
    })
  }
}


function F() {
  return (
    <Formik validationSchema={schema} onSubmit={(values) => { this.setState({ values: values }); validation(values); }} initialValues={initialSchema}>
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="ethinkerCadastroNome">
                  <Form.Control type="text" name="firstname" placeholder="Nome" onChange={handleChange} isInvalid={errors.firstname} value={values.firstname} />
                  <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId="ethinkerCadastroSobrenome">
                  <Form.Control type="text" name="lastname" placeholder="Sobrenome" onChange={handleChange} isInvalid={errors.lastname} value={values.lastname} />
                  <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="ethinkerCadastroEmail">
              <Form.Control type="text" name="email" placeholder="e-mail" onChange={handleChange} isInvalid={errors.email} value={values.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="ethinkerCadastroTel">
              <Form.Control type="number" name="phone" placeholder="Telefone" onChange={handleChange} isInvalid={errors.phone} value={values.phone} />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="ethinkerCadastroCPF">
              <Form.Control type="number" name="cpf" placeholder="CPF" onChange={handleChange} isInvalid={errors.cpf} value={values.cpf} />
              <Form.Control.Feedback type="invalid">{errors.cpf}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="ethinkerCadastroTermos">
              <Form.Check type="checkbox" name="terms" label="Eu aceito os termos e condições" onChange={handleChange} isInvalid={errors.terms} feedback={errors.terms} value={values.terms} />
            </Form.Group>
            <SubmitButton values={values} disabled={!validation(values)} />
          </Form>
        )}
    </Formik>
  );
}

class Formulario extends Component {

  render() {
    return (
      <Col xs={12} md={6} className="d-flex">
        <Container className="align-self-center">
          <Image src={logo} className="form-logo" />
          <p>Por favor, complete o cadastro abaixo</p>
          <F />
          <p>
            Não tem conta? Cadastre-se aqui!
        </p>
        </Container>
      </Col >
    );
  }
}

export default connect()(Formulario);