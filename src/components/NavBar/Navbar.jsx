import React, { Component } from "react";
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
							<LinkContainer to="/ethinkers-frontend">
								<Nav.Link>Cadastrar</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/ethinkers-frontend/lista_usuarios">
								<Nav.Link>Lista de Usuários</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}

export default NavBar;