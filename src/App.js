import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Moviedetails from './Moviedetails';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Fourk from './Fourk';
import Trending from './Trending';

function App() {
  return (
    <div>
                <Router>
                <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                  <Link to="/" style={{ textDecoration: "none", color: "white" }}><img src="https://yts.mx/assets/images/website/logo-YTS.svg"/></Link>
                  </Navbar.Brand>
                <span style={{color: "grey"}}>HD movies at the smallest file size.</span>
                <Nav className="me-auto" id="pankaj">
                    <input type="search" placeholder="Quick Search" className="search"></input>
                <Nav.Link href="#home">
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="#features" style={{color:"green"}}>
                <Link
                    to="/4k"
                    style={{ textDecoration: "none", color: "green" }}
                  >
                    4k
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                <Link
                    to="/trending"
                    style={{ textDecoration: "none", color: "White" }}
                  >
                    Trending
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                <Link
                    to="/browse"
                    style={{ textDecoration: "none", color: "White" }}
                  >
                    Browse Movies
                  </Link>
                </Nav.Link>
                </Nav>
                </Container>
                 </Navbar>
                 <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/4k">
                    <Fourk/>
                  </Route>
                  <Route exact path="/trending">
                    <Trending/>
                  </Route>
                  <Route path="/detail/:id"
                  render={(props) => <Moviedetails {...props} />}></Route>
                 </Router>
                </div>
  );
}

export default App;
