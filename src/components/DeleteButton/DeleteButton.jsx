import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { deleteUser } from "../../actions/Users.action";

class DeleteButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      delete: false
    }
  }

  handleClick() {
    if (this.state.delete) return;

    this.setState({
      delete: true
    }, () => {
      this.props.deleteUser(this.props.user.id)
    })
  }

  render() {
    const deleteState = this.state.delete ? "danger" : "outline-danger";

    return (
      <Button className="float-right" variant={deleteState} onClick={this.handleClick}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.users[ownProps.user]
})

export default connect(mapStateToProps, { deleteUser })(DeleteButton);