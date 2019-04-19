import React, { Component } from "react";
import { Form, Image, Col } from "react-bootstrap";
import { connect } from "react-redux";

import Botao from "../SubmitButton/SubmitButton";
import logo from "../../assets/ethinkers_logo.png"

class Formulario extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <Image src={logo} />
        <p>Por favor, complete o cadastro abaixo</p>
        <Form>
          <Form.Row>
            <Form.Group as={Col} sm={12} md={6} controlId="ethinkerCadastroNome">
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6} controlId="ethinkerCadastroSobrenome">
              <Form.Control type="text" placeholder="Sobrenome" />
            </Form.Group>
          </Form.Row>
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
      </Col >
    );
  }
}

const mapStateToProps = () => {

}

const mapActionToProps = {

}

export default connect(mapStateToProps, mapActionToProps)(Formulario);