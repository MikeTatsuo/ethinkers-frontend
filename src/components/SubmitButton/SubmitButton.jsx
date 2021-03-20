import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addUser } from "../../actions/Users.action";

class SubmitButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addUser(this.props.values);
  }

  render() {
    return (
      <Button onClick={this.handleClick} >
        Cadastrar
      </Button>
    );
  }
}

export default connect(null, { addUser })(SubmitButton);