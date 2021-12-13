import React, { Component } from 'react';
import { Button, Container, Card, Row, Col, Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Fourk extends Component {
    state={user:null};
    componentDidMount(){
        fetch("https://yts.mx/api/v2/list_movies.json?quality=3D").then((response)=>{
            response.json().then((response)=>{
                console.warn(response.data.movies)
                this.setState({user:response.data.movies})
            })
        })
    }
    render() {
        return (
            <div>
                <center><div style={{backgroundColor:"black"}}>
                    <h1 style={{color:"grey"}}>Get Great Quality Movies Here.</h1>
                    <h2 style={{color:"green"}}>4k Quality Movies</h2>
                </div></center>
            <div style={{backgroundColor:"#1d2327"}}>
                {
                this.state.user?
            <Container>
            <Row>
                {
                    this.state.user.map((item)=>(
                <Col xs lg="3">
                <Card style={{ width: '18rem' }}>
                <Link to={"/detail/"+item.id}><Card.Img key={item.id} variant="top" src={item.medium_cover_image} /></Link>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.year}
                    </Card.Text>
                </Card.Body>
                </Card><br/>
                </Col>))
                }
                </Row>
                </Container>:null
                }
            </div>
            </div>
        )
    }
}
