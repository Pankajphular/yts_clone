import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Row, Col, Card, Button} from 'react-bootstrap';
import {Link } from "react-router-dom";

import './App.css';
import Moviedetails from './Moviedetails';
 
export default class Home extends Component {
    state={user:null}
    componentDidMount(){
        fetch("https://yts.mx/api/v2/list_movies.json").then((response)=>{
            response.json().then((response)=>{
                console.warn(response.data.movies)
                this.setState({user:response.data.movies})
            })
        })
    }
    render() {
        return (
            <div>
                <div className='glassview'>
                    <div>
                    <center><h1 style={{color:"whitesmoke", width:"80%"}}>Download YTS YIFY movies: HD smallest size</h1><br/>
                    <div style={{maxWidth:"60%", marginBottom:"30px"}}><h3 style={{color:"white", fontSize:"18px" }}>Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
</h3></div></center>
                    </div>
                    <div>
                        {
                        this.state.user?
                        <Container>
                        <Row className="justify-content-md-center">
                            {
                        this.state.user.map((item)=>(
                            <Col xs lg="3">
                                <Card style={{ width: '20rem' }}>
                            <Link to={"/detail/"+item.id}>
                                <Card.Img variant="top" src={item.medium_cover_image} />
                                </Link>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                {item.year}
                                </Card.Text>
                            </Card.Body>
                            </Card><br/>
                            </Col>))}
                        </Row>
                        </Container>:
                        null
                       }
                    </div>
                </div>
            </div>
        )
    }
}
