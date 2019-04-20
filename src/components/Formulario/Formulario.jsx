import React, { Component } from "react";
import { Form, Image, Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";

import Botao from "../SubmitButton/SubmitButton";
import logo from "../../assets/ethinkers_logo.png";

import "./Formulario.scss";

class Formulario extends Component {
  render() {
    return (
      <Col xs={12} md={6} className="d-flex">
        <Container className="align-self-center">
          <Image src={logo} className="form-logo" />
          <p>Por favor, complete o cadastro abaixo</p>
          <Form>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="ethinkerCadastroNome">
                  <Form.Control type="text" placeholder="Nome" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId="ethinkerCadastroSobrenome">
                  <Form.Control type="text" placeholder="Sobrenome" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="ethinkerCadastroEmail">
              <Form.Control type="email" placeholder="e-mail" />
            </Form.Group>
            <Form.Group controlId="ethinkerCadastroTel">
              <Form.Control type="tel" placeholder="Telefone" />
            </Form.Group>
            <Form.Group controlId="ethinkerCadastroCPF">
              <Form.Control type="text" placeholder="CPF" />
            </Form.Group>
            <Form.Group controlId="ethinkerCadastroTermos">
              <Form.Check type="checkbox" label="Eu aceito os termos e condições" />
            </Form.Group>
            <Botao />
          </Form>
          <p>
            Não tem conta? Cadastre-se aqui!
        </p>
        </Container>
      </Col >

    );
  }
}

export default connect()(Formulario);