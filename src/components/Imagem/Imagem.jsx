import React, { Component } from "react";
import { Image, Col } from "react-bootstrap";

import image from "../../assets/image.png"

class Imagem extends Component {
    render() {
        return (
            <Col xs={12} md={6} className="p-0">
                <Image src={image} fluid />
            </Col>
        );
    }
}

export default Imagem;