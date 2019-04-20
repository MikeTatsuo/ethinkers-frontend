import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class SubmitButton extends Component {
  render() {
    return (
      <Button>
        Cadastrar
      </Button>
    );
  }
}

export default connect()(SubmitButton);