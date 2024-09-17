import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class ItemThreeImage extends React.Component {
    state = {

            threeImageInfo: [
                {
                    id: 1,
                    image: '../assets/images/hero_capsule.jpg',
                    per: '-50%',
                    discount: '1.061.500đ',
                    price: '530.500đ'
                },
                {
                    id: 2,
                    image: '../assets/images/hero_capsule (1).jpg',
                    per: '50%',
                    discount: '1.061.500đ',
                    price: '530.500đ'
                },
                {
                    id: 3,
                    image: '../assets/images/hero_capsule (2).jpg',
                    per: '50%',
                    discount: '1.061.500đ',
                    price: '530.500đ'
                }
            ]
            

    }
    onClickToCarousel = (item) =>{
                this.props.history.push(`/carousel/${item.id}`)
    }
    render() {
        let { threeImageInfo, listdata } = this.state;
        return (
            <Container style={{ width: '80%' }}>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {threeImageInfo.map((item, index) => {
                                return (
                                    <Col onClick={()=> this.onClickToCarousel(item)} md={4}>
                                        <Card style={{ position: 'relative', border: 'none' }}>
                                            <Card.Img className="img-fluid" src={item.image}></Card.Img>
                                            <Card.Text style={{ position: 'absolute', bottom: '0px', right: '0px', background: 'black' }}>
                                                <span style={{ background: '#badc58', color: 'black', padding: '1px 5px' }}><strong>{item.per}</strong></span> <del style={{ color: 'grey' }}>{item.discount}</del> <span style={{ color: 'white' }}>{item.price}</span>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Carousel.Item>
                </Carousel>


            </Container>
        )
    }
}

export default withRouter(ItemThreeImage);