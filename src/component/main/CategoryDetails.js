import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaFilter } from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class CategoryDetails extends React.Component {
    state = {
        listCategory: [
            {
                cate_id: 1,
                name: 'It Takes Two',
                img: '../assets/giaido/header (1).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 1,
                name: 'HITMAN 3',
                img: '../assets/giaido/header (2).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 1,
                name: 'Stray',
                img: '../assets/giaido/header (3).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 1,
                name: 'Escape the Backrooms',
                img: '../assets/giaido/header (4).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 1,
                name: 'Atomic Heart',
                img: '../assets/giaido/header.jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            // ------------------------------------
            {
                cate_id: 2,
                name: 'FINAL FANTASY VII REMAKE INTERGRADE',
                img: '../assets/doikhang/header (1).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 2,
                name: 'Street Fighter™ 6',
                img: '../assets/doikhang/header (2).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 2,
                name: 'NARAKA: BLADEPOINT',
                img: '../assets/doikhang/header_alt_assets_9.jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 2,
                name: 'Like a Dragon: Infinite Wealth',
                img: '../assets/doikhang/header (5).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 2,
                name: 'Brawlhalla',
                img: '../assets/doikhang/header.jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            //------------------------------------------------------------
            {
                cate_id: 3,
                name: 'FINAL FANTASY VII REMAKE INTERGRADE',
                img: '../assets/doikhang/header (1).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 3,
                name: 'Street Fighter™ 6',
                img: '../assets/doikhang/header (2).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 3,
                name: 'NARAKA: BLADEPOINT',
                img: '../assets/doikhang/header_alt_assets_9.jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 3,
                name: 'Like a Dragon: Infinite Wealth',
                img: '../assets/doikhang/header (5).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 3,
                name: 'Brawlhalla',
                img: '../assets/doikhang/header.jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            //---------------------------------------
            {
                cate_id: 4,
                name: 'FINAL FANTASY VII REMAKE INTERGRADE',
                img: '../assets/doikhang/header (1).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 4,
                name: 'Street Fighter™ 6',
                img: '../assets/doikhang/header (2).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 4,
                name: 'NARAKA: BLADEPOINT',
                img: '../assets/doikhang/header_alt_assets_9.jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 4,
                name: 'Like a Dragon: Infinite Wealth',
                img: '../assets/doikhang/header (5).jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
            {
                cate_id: 4,
                name: 'Brawlhalla',
                img: '../assets/doikhang/header.jpg',
                theloai: ['Phối hợp', 'Hành động', 'Chơi nhiều người'],
                danhgia: 123.423,
                per: '50%',
                discount: '1.061.500đ',
                price: '530.500đ'
            },
        ],
        checkCate: ''
    }
    componentDidMount(){
        
        console.log('>>>>>>>>>>', this.props)
        console.log('>>>>>>>>>>Check ID', this.props.match.params.id)
        this.setState({
            checkCate: this.props.match.params.id
        })

        
    }

    onClickToCart = () =>{
        this.props.history.push('/addtocart')
    }
    render() {
        let { listCategory, checkCate } = this.state;
        console.log('>>>>>>>>>>Check', checkCate)
        return (
            <Container className="mt-5" style={{ color: 'white', background: '#8c7ae6' }}>
                <Row className="mt-5">
                    {(parseInt(checkCate) === 1 ? <h1>GIẢI ĐỐ</h1>:(parseInt(checkCate) === 2 ? <h1>ĐỐI KHÁNG</h1>:(parseInt(checkCate) === 3 ? <h1>SINH TỒN</h1>:(parseInt(checkCate) === 4 ? <h1>ROGUE-LIKE</h1>:"" ) ) ) )
                    
                    }
                </Row>
                <Row>
                    <Col style={{ width: 'fit-content', margin: 'auto' }} md={2}>TẤT CẢ SẢN PHẨM</Col>
                    <Col style={{ width: 'fit-content', margin: 'auto' }} md={2}>MỚI & ĐANG NỔI </Col>
                    <Col style={{ width: 'fit-content', margin: 'auto' }} md={2}>BÁN CHẠY NHẤT</Col>
                    <Col style={{ width: 'fit-content', margin: 'auto' }} md={2}>ĐÁNH GIÁ CAO</Col>
                    <Col style={{ width: 'fit-content', margin: 'auto' }} md={2}>GIẢM GIÁ</Col>
                    <Col style={{ width: 'fit-content', margin: 'auto' }} md={2}>SẮP RA MẮT PHỔ BIẾN</Col>
                </Row>
                <Row className="text-start mt-2">
                    <Col><FaFilter />  THU HẸP THEO</Col>
                </Row>
                {listCategory.map((item, index) => {
                    if (item.cate_id === parseInt(checkCate)) {

                        return (
                            <Row className="mt-3" style={{ background: '#353b48', margin: '3px' }}>
                                <Col md={3}>
                                    <img className="img-fluid" src={item.img}></img>
                                </Col>
                                <Col md={9}>
                                    <Row className="mt-1">
                                        <Col className="text-start"><h3>{item.name}</h3></Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-start mt-1">

                                            {item.theloai.map((item, index) => {
                                                return (
                                                    <span className="me-1 mb-0" style={{ background: 'transparent', border: '#9c88ff 1px solid', padding: '3px 20px' }}>{item}</span>
                                                )
                                            })}

                                        </Col>
                                    </Row>
                                    <Row className="">
                                        <Col className="text-start mt-0 mb-0 pb-0" md={6}>
                                            <p>21 THG1, 2022 <SiWindows11></SiWindows11></p>
                                            <p style={{ paddingBottom: '0px' }}><span style={{ color: '#4cd137' }}>Rất tích cực</span> | <span>{item.danhgia} Đánh giá của người dùng</span></p>
                                        </Col>
                                        <Col md={6}>
                                            {/* <span style={{ background: '#badc58', color: 'black', padding: '1px 5px' }}><strong>40%</strong></span> <del style={{ color: 'grey' }}>1023132</del> <span style={{ color: 'white' }}>123321</span> */}
                                            <Row className="mt-3">
                                                <Col style={{ display: 'flex', textAlign: 'center' }}>
                                                    <span className="pt-3" style={{ background: '#badc58', color: 'black', padding: '0px 10px' }}><strong style={{ fontSize: '20px' }}>{item.per}</strong></span>
                                                    <div style={{ background: '#2f3640', padding: '5px 20px' }}>
                                                        <del style={{ color: '#7f8fa6' }}><strong>{item.discount}</strong></del> <br /> <span style={{ color: '#4cd137' }}><strong>{item.price}</strong></span>
                                                    </div>
                                                    <div className="pt-3" style={{ background: '#badc58', color: 'white', padding: '10px 20px' }}>
                                                        <h5 onClick={()=> this.onClickToCart()}>Thêm vào giỏ hàng</h5>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )

                    }
                })}

            </Container>
        )
    }
}

export default withRouter(CategoryDetails);