import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Trending extends Component {
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
                <center><div>
                    <h3 style={{color:"green"}}>24h YIFY Trending Movies</h3>
                </div></center>
                <div>
                <Container>
                <Row className="justify-content-md-center">
                    {
                    this.state.user?
                    this.state.user.map((item)=>(
                    <Col xs lg="2">
                    <Card style={{ width: '18rem' }}>
                    <Link to={"/detail/"+item.id}>
                        <Card.Img variant="top" src={item.medium_cover_image} />
                        </Link>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        {item.year}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>)):null
                    }
                    </Row>
                    </Container>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
