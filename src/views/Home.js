import React from "react";
import NavBar from "../component/header/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import ImageHeader from "../component/header/ImageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Nav_Details from "../component/header/Nav_Details";
import ItemThreeImage from "../component/header/ItemThreeImage";
import ListGame from "../component/main/ListGame";
import ListCategory from "../component/main/ListCategory";
import CategoryDetails from "../component/main/CategoryDetails";
import Cart from "../component/main/Cart";
import Details from "./Details";
import '../views/style.css'
class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <NavBar></NavBar>
                        <div style={{ position: 'relative' }}>
                            <div>
                                <ImageHeader></ImageHeader>
                            </div>
                            <div style={{ position: 'absolute', top: '30px', left: '200px', right: '200px' }}>
                                <Nav_Details></Nav_Details>
                            </div >
                            <div style={{ position: 'absolute', top: '450px', left: '50px', right: '50px' }}>
                                <ItemThreeImage></ItemThreeImage>
                            </div>
                            <div style={{ position: 'absolute', top: '900px', left: '200px', right: '200px' }}>
                                <ListGame></ListGame>
                            </div>
                            <div style={{ position: 'absolute', top: '1750px', left: '200px', right: '200px' }}>
                                <ListCategory></ListCategory>
                            </div>
                        </div>
                    </Route>
                    <Route path='/details/:id'>
                    <NavBar></NavBar>
                        <div style={{ position: 'relative' }}>
                            <div>
                                <ImageHeader></ImageHeader>
                            </div>
                            <div style={{ position: 'absolute', top: '30px', left: '200px',right:'200px' }}>
                                <Nav_Details></Nav_Details>
                            </div >
                            <div style={{ position: 'absolute', top: '450px', left: '50px', right: '50px' }}>
                                <CategoryDetails></CategoryDetails>
                            </div>
                        </div>
                    </Route>
                    <Route path='/addtocart'>
                    <NavBar></NavBar>
                        <div style={{ position: 'relative' }}>
                            <div>
                                <ImageHeader></ImageHeader>
                            </div>
                            <div style={{ position: 'absolute', top: '30px', left: '200px',right:'200px' }}>
                                <Nav_Details></Nav_Details>
                            </div >
                            <div style={{ position: 'absolute', top: '450px', left: '50px', right: '50px' }}>
                                <Cart></Cart>
                            </div>
                        </div>
                    </Route>
                    <Route path='/carousel/:id'>
                    <NavBar></NavBar>
                        <div style={{ position: 'relative' }}>
                            <div>
                                <ImageHeader></ImageHeader>
                            </div>
                            <div style={{ position: 'absolute', top: '30px', left: '200px',right:'200px' }}>
                                <Nav_Details></Nav_Details>
                            </div >
                            <div style={{ position: 'absolute', top: '450px', left: '50px', right: '50px' }}>
                                <Details></Details>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Home;