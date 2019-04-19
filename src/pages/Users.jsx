import React, { Component } from "react";
import { connect } from "react-redux";
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

const mapStatetoProps = () => ({

})

export default connect(mapStatetoProps, {

})(Users);