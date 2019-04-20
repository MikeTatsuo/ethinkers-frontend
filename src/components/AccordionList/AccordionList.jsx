import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card } from "react-bootstrap";

import UserData from "../UserData/UserData";
import DeleteButton from "../DeleteButton/DeleteButton";

import "./AccordionList.scss";

class AccordionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  mountCard(users = []) {
    if (users.length) {
      return (users.map(user => {
        return (<Card key={`"user-"${user.id}"`}>
          <Accordion.Toggle as={Card.Header} eventKey="0" className="user-name">
            {`${user.firstname} ${user.lastname}`} <DeleteButton key={`delete-${user.id}`} user={user} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><UserData user={user} /></Card.Body>
          </Accordion.Collapse>
        </Card>)
      }))
    } else {
      return (
        <Card>
          <Card.Header>
            NENHUM USUÁRIO ENCONTRADO!
          </Card.Header>
          <Card.Body>
            Não há nenhum usuário cadastrado no momento.
          </Card.Body>
        </Card>
      )
    }
  }

  render() {
    return (
      <Accordion defaultActiveKey="0">
        {this.props.users ? this.mountCard(this.props.users) : ""}
      </Accordion>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps)(AccordionList);
