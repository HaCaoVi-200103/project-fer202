import React from 'react'
import '../style/index.css'
import { Container, Card, Row, Col, Button, CardGroup } from 'react-bootstrap';


function Cart() {
  return (
    <div className='cart-game'>
      <Container>
        <div
          className='text-start'>
          <h6>Home Your Shopping Cart</h6>
          <h3 className='text-white cart'>Your Shopping Cart</h3>
        </div>
        <Row>
          <Col xs={8} md={6}>
            <Card>
              <img src='../assets/images/image_1.jpg' />
              <h4 className='mt-3 mx-3'>Dota 2</h4>
              <div className='mt-2 mx-3' style={{ display: 'flex' }}><p style={{ textDecorationLine: 'line-through' }}>200.000đ</p> <p style={{ color: 'red', paddingLeft: '10px' }}>Discount: 30%</p></div><div><p style={{ color: 'yellowgreen', paddingLeft: '10px' }}>157.000đ</p></div>
              <Button className='mb-3 mt-1 mx-3 bg-dark text-white'>Purchase</Button>
            </Card>
          </Col>

          <Col xs={8} md={6}>
            <Card>
              <img src='../assets/images/image_2.jpg' />
              <h4 className='mt-3 mx-3'>Dota 3</h4>
              <div className='mt-2 mx-3' style={{ display: 'flex' }}><p style={{ textDecorationLine: 'line-through' }}>300.000đ</p> <p style={{ color: 'red', paddingLeft: '10px' }}>Discount: 30%</p></div><div><p style={{ color: 'yellowgreen', paddingLeft: '10px' }}>257.000đ</p></div>
              <Button className='mb-3 mt-1 mx-3 bg-dark text-white'>Purchase</Button>
            </Card>
          </Col>
        </Row>
        <h4 className='text-white recommend'>RECOMMENDATIONS FOR YOU</h4>
        <Row>
          <CardGroup>
            <Card className='m-2'>
              <Card.Img variant="top" src='../assets/images/image_3.jpg' />
              <Card.Body>
                <Card.Title>FC24</Card.Title>
                <Card.Text>
                  EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever with HyperMotionV, PlayStyles optimised by Opta, and an enhanced Frostbite™ Engine.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div style={{ display: 'flex' }}><p style={{ textDecorationLine: 'line-through' }}>1.090.000đ</p><p style={{ color: 'yellowgreen', paddingLeft: '10px' }}>218.000đ</p></div>
                <Button className='bg-dark text-white'>Add Cart</Button>
              </Card.Footer>
            </Card>

            <Card className='m-2'>
              <Card.Img variant="top" src='../assets/images/image_4.jpg' />
              <Card.Body>
                <Card.Title>Grand The Auto V</Card.Title>
                <Card.Text>
                  Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div style={{ display: 'flex' }}><p style={{ textDecorationLine: 'line-through' }}>608.000đ</p><p style={{ color: 'yellowgreen', paddingLeft: '10px' }}>227.000đ</p></div>
                <Button className='bg-dark text-white'>Add Cart</Button>
              </Card.Footer>
            </Card>

            <Card className='m-2'>
              <Card.Img variant="top" src='../assets/images/image_5.jpg' />
              <Card.Body>
                <Card.Title>Baldur's Gate 3</Card.Title>
                <Card.Text>
                  Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div style={{ display: 'flex' }}><p style={{ textDecorationLine: 'line-through' }}>990.000đ</p><p style={{ color: 'yellowgreen', paddingLeft: '10px' }}>891.000đ</p></div>
                <Button className='bg-dark text-white'>Add Cart</Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </div>
  )
}

export default Cart;
