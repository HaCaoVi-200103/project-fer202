import React from "react";
import { Button, Col, Container, Dropdown, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/style.css'
import { FaDownload } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class NavBar extends React.Component {
    onclickToHome=()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <Container  className="pt-1 pb-4" fluid style={{background:'#2f3542'}}>
                <Row className="text-end pt-0">
                    <Col >
                   <button style={{background:"#10ac84",color:'white',border:'none',fontSize:'13px'}}><FaDownload/>  Cài đặt Steam</button>
                   <span className="ms-2" style={{color:'#c8d6e5'}}><a>đăng nhập </a>  | <a>ngôn ngữ <GoTriangleDown/></a>
                   </span>
                    </Col>
                </Row>
                <Row>
                    <Col onClick={() => this.onclickToHome()} className="text-end" md={3}>
                        <Image width={'70%'} className="img-fluid" src="./assets/images/logo_steam.svg"></Image>
                    </Col>
                    <Col md={5} className="text-center">
                        <Row className="mt-3" style={{color:'white'}}>
                            <Col md={3} id="slider1"><NavLink className="NavLink" to="/" exact={true}>CỬA HÀNG</NavLink></Col>
                            <Col md={3} id="slider2"><NavLink className="NavLink" to="/comunication">CỘNG ĐỒNG</NavLink></Col>
                            <Col md={3} id="slider3"><NavLink className="NavLink" to="/info">THÔNG TIN</NavLink></Col>
                            <Col md={3} id="slider4"><NavLink className="NavLink" to="/support">HỖ TRỢ</NavLink></Col>
                        </Row>

                        
                        
                        
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(NavBar);