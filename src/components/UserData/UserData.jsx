import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

class UserData extends Component {
  render() {
    if (this.props.user) {
      return (
        <Container className="text-left">
          <Row>
            <Col xs={4} md={2}>Nome:</Col>
            <Col xs={8} md={4}>{this.props.user.firstname}</Col>
            <Col xs={4} md={2}>Sobrenome:</Col>
            <Col xs={8} md={4}>{this.props.user.lastname}</Col>
          </Row>
          <Row>
            <Col xs={4} md={2}>Email:</Col>
            <Col xs={8} md={10}>{this.props.user.email}</Col>
          </Row>
          <Row>
            <Col xs={4} md={2}>Telefone:</Col>
            <Col xs={8} md={10}>{this.props.user.phone}</Col>
          </Row>
          <Row>
            <Col xs={4} md={2}>CPF:</Col>
            <Col xs={8} md={10}>{this.props.user.cpf}</Col>
          </Row>
        </Container>
      )
    }
    return
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.users[ownProps.user]
})

export default connect(mapStateToProps)(UserData);
