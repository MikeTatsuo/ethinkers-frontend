import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import navLogo from "../../assets/ethinkers_logo.png";

import "./NavBar.scss";

class NavBar extends Component {
	render() {
		return (
			<header>
				<Navbar bg="light" expand="lg">
					<LinkContainer to="/">
						<Navbar.Brand>
							<Image src={navLogo} id="navbar-logo" />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<LinkContainer to="/">
								<Nav.Link>Cadastrar</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/lista_usuarios">
								<Nav.Link>Lista de Usuários</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps)(NavBar);