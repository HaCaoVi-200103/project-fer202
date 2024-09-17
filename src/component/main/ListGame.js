import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
class ListGame extends React.Component {
    state = {
        list: [
            {
                id: 1,
                images: '../assets/images/capsule_616x353.jpg',
                per: '-90%',
                discount: '1.420.500đ',
                price: '530.500đ'
            },
            {
                id: 2,
                images: '../assets/images/capsule_616x353(1).jpg',
                per: '-43%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 3,
                images: '../assets/images/capsule_616x353 (2).jpg',
                per: '-60%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 4,
                images: '../assets/images/capsule_616x353 (3).jpg',
                per: '-34%',
                discount: '1.061.500đ',
                price: '530.500đ'
            }
        ],
        list2: [
            {
                id: 8,
                images: '../assets/images/capsule_616x353 (7).jpg',
                per: '-23%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 9,
                images: '../assets/images/capsule_616x353 (8).jpg',
                per: '-22%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 10,
                images: '../assets/images/capsule_616x353 (9).jpg',
                per: '-42%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 11,
                images: '../assets/images/capsule_616x353 (10).jpg',
                per: '-62%',
                discount: '1.061.500đ',
                price: '530.500đ'
            }
        ],
        list1: [
            {
                id: 5,
                images: '../assets/images/capsule_616x353 (4).jpg',
                per: '-75%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 6,
                images: '../assets/images/capsule_616x353 (5).jpg',
                per: '-45%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 7,
                images: '../assets/images/capsule_616x353 (6).jpg',
                per: '-35%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
        ],
        list3: [
            {
                id: 12,
                images: '../assets/images/capsule_616x353 (11).jpg',
                per: '-12%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 13,
                images: '../assets/images/capsule_616x353 (12).jpg',
                per: '-32%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                id: 14,
                images: '../assets/images/capsule_616x353 (13).jpg',
                per: '-63%',
                discount: '1.061.500đ',
                price: '530.500đ'
            }
        ]
    }
    render() {
        let { list, list1, list2, list3 } = this.state;
        var count = 0;
        var count1 = 0;
        return (
            <Container>
                <Row>
                    {list.map((item, index) => {

                        count++;
                        if (count <= 4) {
                            return (
                                <Col className="text-start mt-1" md={3}>
                                    <img className="img-fluid" src={item.images}></img>
                                    <div style={{ fontSize: '10px' }}>
                                        <span style={{ background: '#badc58', color: 'black', padding: '1px 5px' }}><strong>{item.per}</strong></span> <del style={{ color: 'grey' }}>{item.discount}</del> <span style={{ color: 'white' }}>{item.price}</span>  </div>
                                </Col>
                            )
                        }

                    })}


                </Row>
                <Row className="mt-2">
                    {list1.map((item, index) => {
                        count1++;
                        if (count1 <= 3) {
                            return (

                                <Col className="text-start mt-1" md={4}>
                                    <img className="img-fluid" src={item.images}></img>
                                    <div style={{ fontSize: '10px' }}>
                                        <span style={{ background: '#badc58', color: 'black', padding: '1px 5px' }}><strong>{item.per}</strong></span> <del style={{ color: 'grey' }}>{item.discount}</del> <span style={{ color: 'white' }}>{item.price}</span>  </div>
                                </Col>
                            )
                        }

                    })}

                </Row>

                <Row>
                    {list2.map((item, index) => {

                        count++;

                        return (
                            <Col className="text-start mt-1" md={3}>
                                <img className="img-fluid" src={item.images}></img>
                                <div style={{ fontSize: '10px' }}>
                                    <span style={{ background: '#badc58', color: 'black', padding: '1px 5px' }}><strong>{item.per}</strong></span> <del style={{ color: 'grey' }}>{item.discount}</del> <span style={{ color: 'white' }}>{item.price}</span> </div>
                            </Col>
                        )

                    })}
                </Row>
                <Row className="mt-2">
                    {list3.map((item, index) => {
                        count1++;

                        return (

                            <Col className="text-start mt-1" md={4}>
                                <img className="img-fluid" src={item.images}></img>
                                <div style={{ fontSize: '10px' }}>
                                    <span style={{ background: '#badc58', color: 'black', padding: '1px 5px' }}><strong>{item.per}</strong></span> <del style={{ color: 'grey' }}>{item.discount}</del> <span style={{ color: 'white' }}>{item.price}</span></div>
                            </Col>
                        )


                    })}

                </Row>

            </Container>
        )
    }
}

export default ListGame;