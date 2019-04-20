import React, { Component } from "react";
import { Container } from "react-bootstrap";

import AccordionList from "../components/AccordionList/AccordionList"

class Users extends Component {
	render() {
		return (
			<Container>
				<AccordionList />
			</Container>
		);
	}
}

export default Users;