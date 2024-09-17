import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const ImageHeader = () => {

    return (
        <Container fluid >
            <Row>
                <Col>
                    <video className="img-fluid" autoplay loop>
                        <source src="../assets/audio/webm_page_bg_vietnamese.webm" type="video/mp4" />
                    </video>
                </Col>
            </Row>
        </Container>
    )
}

export default ImageHeader;