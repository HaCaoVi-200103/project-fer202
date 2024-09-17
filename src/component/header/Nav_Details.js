import React from "react";
import { Button, Col, Container, InputGroup, NavLink, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
class Nav_Details extends React.Component {
    render() {
        return (
            <Container style={{ color: 'white' ,background:'#2980b9'}}>
                <Row className="" style={{fontSize:'14px',fontWeight:'700'}}>

                            
                            <Col className="mt-2" md={2}><NavLink >Cửa hàng của bạn</NavLink></Col>
                            <Col className="mt-2" md={2}><NavLink>Mới & Đáng chú ý</NavLink></Col>
                            <Col className="mt-2" style={{width:'70px',margin:'0px',padding:'0px'}} md={2}><NavLink>Danh mục</NavLink></Col>
                            <Col className="mt-2" md={2}><NavLink>Cửa hàng điểm</NavLink></Col>
                            <Col className="mt-2" md={1}><NavLink>Tin Tức</NavLink></Col>
                            <Col className="mt-2" md={1}><NavLink>Labs</NavLink></Col>
                            
                     
                        <Col md={3}>
                        <Form>
                            <InputGroup style={{margin:'3px 0px',padding:'-10px 0px'}}>
                            <Form.Control style={{ backgroundColor:'#778ca3',border:'none',}}  placeholder="tìm kiếm"></Form.Control>
                            <InputGroup.Text style={{backgroundColor:'#a5b1c2'}}><FaSearch/></InputGroup.Text>
                            </InputGroup>
                        </Form>
                        </Col>
                   
                </Row>
            </Container>
        )
    }
}

export default Nav_Details;