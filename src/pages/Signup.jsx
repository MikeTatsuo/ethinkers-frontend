import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Container } from "react-bootstrap";

import Imagem from "../components/Imagem/Imagem";
import Formulario from "../components/Formulario/Formulario";

class Signup extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Imagem />
					<Formulario />
				</Row>
			</Container>
		);
	}
}

const mapStatetoProps = () => ({

})

export default connect(mapStatetoProps)(Signup);