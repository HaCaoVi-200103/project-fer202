import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button, Col, Container, Row } from 'react-bootstrap';

import { withRouter } from 'react-router-dom/cjs/react-router-dom';

const Details = (props) => {
    // const { id } = useParams(); 
    const imagePath = [
        '../assets/images/hero_capsule.jpg',
        '../assets/images/hero_capsule (1).jpg',      
        '../assets/images/hero_capsule (2).jpg',
        
         
]

   
    const selectedItem =props.match.params.id;
    console.log('>>>>>>>>>>>',selectedItem)
    if (!selectedItem) {
        return <div>Item not found</div>;
    }
  

    return (
        <div>
        <Container style={{
            backgroundColor: 'lightblue'
        }}>
            <Row>
                <Col className='col-md-6 col-sm-12' style={{
                    display:'flex',
                    justifyContent: 'flex-start'
                }}>
                  <h4 style={{
                    color:'white'
                  }}>{selectedItem.name}</h4>
                </Col>
                <Col className='col-md-6 col-sm-12' style={{
                     display:'flex',
                    justifyContent: 'flex-end',
                }}>
                  <Button style={{
                    backgroundColor:'lightskyblue',
                    border: 'none',
                    color: 'blue',
                    borderRadius:  'none',
                   
                  }}>Community Hub</Button>
                </Col>
            </Row>
            <Row style={{
                height: 'fit-content',
                    backgroundColor: 'lightblue'
            }}>
                <Col className='col-md-6 col-sm-12' style={{
                    width: '50%',
                    height: '400px',
                }}>                
                <iframe style={{
                    width: '100%',
                    height: '100%',
                }}  id="movie_256963929" playsinline="true" class="highlight_player_item highlight_movie" poster="https://cdn.akamai.steamstatic.com/steam/apps/256963929/movie.293x165.jpg?t=1692194178" preload="none" src="https://cdn.akamai.steamstatic.com/steam/apps/256963929/movie480_vp9.webm?t=1692194178" data-hd-src="https://cdn.akamai.steamstatic.com/steam/apps/256963929/movie_max_vp9.webm?t=1692194178"></iframe>
                <div>
                <img className='mx-2' src="https://cdn.akamai.steamstatic.com/steam/apps/1203620/ss_999b4ec40da6cc556d484ca69fde4869ac42f333.116x65.jpg?t=1709115015"></img>
                <img className='mx-1' src="https://cdn.akamai.steamstatic.com/steam/apps/1203620/ss_6b3ed7e66f6e8aed4f64d7e636527ed8c060471a.116x65.jpg?t=1709115015"></img>
                <img className='mx-1' src="https://cdn.akamai.steamstatic.com/steam/apps/1203620/ss_2558b2235f58d2a0f5165d79a327509ff1f42871.116x65.jpg?t=1709115015"></img>
                <img className='mx-1' src="https://cdn.akamai.steamstatic.com/steam/apps/1203620/ss_d4e5572f349f237be844ef8d5acd120b314cf532.116x65.jpg?t=1709115015"></img>
                <img className='mx-1' src="https://cdn.akamai.steamstatic.com/steam/apps/1203620/ss_9a6fee7b4e19bfc714054bef715e1378a7c1ef69.116x65.jpg?t=1709115015"></img>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                </div>
                </Col>
                <Col className='col-md-6 col-sm-12' style={{
                    width: '50%',
                    height: 'fit-content'
                    
                }}>
                <img style={{
                    width:'100%',
                    height: '100%',
                    objectFit: 'cover'
                }} src={imagePath[selectedItem -1]} alt={selectedItem.name} />
                <p>{selectedItem.description}</p>
                <p>RECENT REVIEWS: <span style={{color: 'blue'}}>Very Positive</span><span style={{color: 'lightsalmon'}}>(7,081)</span></p>
                <p>ALL REVIEWS: <span style={{color: 'blue'}}>Very Positive</span><span style={{color: 'lightsalmon'}}>(39,995)</span></p>
                <p>RELASE DATE: <span style={{color: 'lightsalmon'}}>{selectedItem.date}</span></p>
                </Col>
            </Row>
        </Container>
        <Container>
                <Row>
                    <div className='content'>
                    <h2>Reviews</h2>
                    <p>
                    “Enshrouded will likely be an instant hit for anyone who’s ever wanted to build a castle in a fantasy world full of danger, and it makes all that building fun and easy with an intuitive set of tools.”
                    </p>
                    <p>
                    “I could personally see myself losing days of my life to exploring Enshrouded's wilds.”
                    </p>
                    <p>
                    “The best building system in the survival genre.”
                    </p>
                    </div>
                    <div class="game_area_description">
					<h2>JOIN OUR DISCORD</h2>									
                    <p><a href="https://steamcommunity.com/linkfilter/?u=https%3A%2F%2Fdiscord.gg%2FEnshrouded" target="_blank" rel=" noopener">
                    <img style={{
                        width:'100%',
                    }} src="https://cdn.akamai.steamstatic.com/steam/apps/1203620/extras/5._JOIN_OUR_DISCORD.gif?t=1709115015"/>
                    </a></p>									
                    </div>
                    <div>
                    <h2 class="bb_tag"><strong>SURVIVE THE SHROUD</strong></h2>
                    <p>You start with nothing but the will to survive the wilds. You must scrape and scavenge through the ruined remnants of a lost kingdom, and fend off the beasts that hunger for your flesh.</p>
                    <p>Journey through forests, caves, dungeons, searching for secret knowledge and treasure. Build the strength to venture into the Shroud and bring the fight back to the horrors of the deep.</p>
                    <img style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',                        
                    }} src="https://cdn.akamai.steamstatic.com/steam/apps/1203620/extras/1._SURVIVE_THE_LOST_KINGDOM.gif?t=1709115015"></img>
                    </div>
                    <div>
                    <h2 class="bb_tag"><strong>HEART POUNDING ACTION COMBAT</strong></h2>
                    <p>The Shroud consumes the land it corrupts, mutating and guiding all life it encounters. Cleave your way through ravaging factions and formidable bosses, battling Scavenger in the forests, Vukah in the caves, and Fell creatures in the mist.</p>
                    <p>Duck, parry, and surprise your foes with unexpected fighting skills and powerful spells. Exploit the weaknesses of your enemies as you develop your own unique playstyle with an in-depth skill tree system.</p>
                    </div>
                </Row>
        </Container>
        </div>
       
        
        
       
    );
};

export default withRouter(Details);
