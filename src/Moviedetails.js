import React, { Component } from 'react';
import {Card, Button, Container, Row, Col, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Moviedetails extends Component {
    state={user:null, similar:null}
    componentDidMount(){
        this.getmoviedetail();
        this.getsimilarmovies();
    
    }
    getmoviedetail(){
        const movieid=this.props.match.params.id;
        fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+movieid).then((response)=>{
        response.json().then((response)=>{
            console.warn(response.data.movie)
            this.setState({user:response.data.movie})
            console.log(this.props.match.params.id)
        });
    });
    };
    getsimilarmovies(){
        const movieid=this.props.match.params.id;
        fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id="+movieid).then((result)=>{
        result.json().then((result)=>{
            console.log(result.data.movies)
            this.setState({similar:result.data.movies})
        });
    });
    };
    openWindow(movieid){
        console.log(movieid);
        window.open('http://localhost:3000/detail/'+movieid)
        
    }
    render() {
        return (
            <div>
                <div>
                    {
                    this.state.user?
                    <div style={{ 
                        backgroundImage: `url("https://miro.medium.com/max/960/1*IGKCnfK8dHAWo2z-z9A4pA.gif")`, color:"white",
                        padding:"50px"
                      }}>
                <Container>
                <Row xs={3}>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.user.medium_cover_image} />
                    <Card.Body style={{color:"black"}}>
                        <Card.Title>{this.state.user.title}</Card.Title>
                        <Card.Text>
                        {this.state.user.year}
                        </Card.Text>
                        <Button variant="dark" className='w-100'href={this.state.user.torrents[0].url}>Download</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={4}>
                        <h1>{this.state.user.title}</h1>
                        <h4>{this.state.user.year}</h4>{
                        this.state.user.genres.map((item)=>(
                        <h6>{item+"/"}</h6>))}
                        <span>Available in: </span>
                            {
                        this.state.user.torrents.map((item)=>(
                        <Button className='mx-1 my-1' href={item.url}>{item.quality} {item.type}</Button>))}
                        <Table style={{color:"whitesmoke"}}>
                         <tr>
                            <td>Download Count</td>
                            <td>{this.state.user.download_count}</td>
                            </tr>
                            <tr>
                            <td>like_count</td>
                            <td>{this.state.user.like_count}</td>
                            </tr>
                            <tr>
                            <td>rating</td>
                            <td>{this.state.user.rating}</td>
                            </tr>
                            <tr>
                            <td>runtime</td>
                            <td>{this.state.user.runtime+" minute"}</td>
                            </tr>
                        </Table>
                    </Col>
                    <Col xs={4}>
                    <Container>
                        <br></br>
                        
                        
                    <Row>
                    <h1 style={{color:"white" }}>Similar Movies:</h1>
                        {
                            this.state.similar?
                            this.state.similar.map((itemm)=> (
                        <Col xs={6}>
                            
                                <div className='text-center' onClick={()=>{this.openWindow(itemm.id)}}>
                            <img src={itemm.medium_cover_image} style={{height:"150px", objectFit:"contain", marginTop: "10px", backgroundColor:"grey", padding:"7px", borderRadius:"5px" }} alt="someimage"/>
                            </div>
                            
                        </Col>
                        
                            )):null
                        }
                        
                    </Row>
                    
                        </Container>
                    </Col>
                </Row>
                </Container>
                </div>
                :null}
                </div>
                <div>
                    <div style={{backgroundColor:"#101517", padding:"50px"}}>
                        <h1 style={{color:"#1ed14b"}}>Synopsis:</h1>
                    {
                      this.state.similar?
                      this.state.similar.map((itemm)=>(
                      <span style={{color:"#f2d675"}}>{itemm.synopsis}</span>)):
                      null 
                    }
                    </div>
                </div>
            </div>
        )
    }
}
