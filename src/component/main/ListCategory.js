import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class ListCategory extends React.Component {
    state = {

        imgandcolor: [
            {
                cate_id: '1',
                img: '../assets/images/fighting_martial_arts.png',
                color: ' rgb(139,0,0)',
                name: 'GIẢI ĐỐ',
                tod: '/giaido'
            },
            {
                cate_id: '2',
                img: '../assets/images/download.png',
                color: 'rgb(0,0,139)',
                name: 'ĐỐI KHÁNG',
                tod: '/doikhang'
            },
            {
                cate_id: '3',
                img: '../assets/images/survival.png',
                color: 'rgb(184,134,11)',
                name: 'SINH TỒN',
                tod: '/sinhton'
            },
            {
                cate_id: '4',
                img: '../assets/images/rogue_like_rogue_lite.png',
                color: 'rgb(0,100,0)',
                name: 'ROGUE-LIKE',
                tod: '/roguelike'
            },
        ],
    }

    onClickToCuyen = (item) => {
        this.props.history.push(`/details/${item.cate_id}`)
    }
    render() {
        let { imgandcolor } = this.state
        return (
            <Container className="mb-5" style={{ color: 'white' }}>
                <Row className="text-center">
                    <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h4 style={{ display: 'inline', padding: '10px 15px' }}>DUYỆT THEO THỂ LOẠI</h4>
                        <span className="mb-2" style={{ fontSize: '11px', background: '#6ab04c', padding: '10px 15px', borderRadius: '5px', color: 'black', fontWeight: '500' }}>CÒN NỮA, VÀO MỘT HẠNG MỤC DƯỚI ĐÂY VÀ NHẬN HÌNH DÁN MIỄN PHÍ HÀNG NGÀY</span>
                    </Col>
                </Row>
                <Row className="mt-3">


                    {imgandcolor.map((item, index) => {
                        return (
                            <Col key={index} onClick={() => this.onClickToCuyen(item)} md={3} style={{ position: 'relative', padding: '0px 5px' }}>

                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0), ${item.color} 100%)`,
                                    zIndex: 1, /* Ensures the gradient is above the image */
                                }} />
                                <img className="img-fluid" src={item.img} style={{
                                    zIndex: 0, /* Ensures the image is below the gradient */
                                }} />
                                <h5 style={{ position: 'absolute', left: '0', right: '0', bottom: '0', zIndex: 1 }}>{item.name}</h5>

                            </Col>
                        )
                    })}

                </Row>
            </Container>
        )
    }
}

export default withRouter(ListCategory);