import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();

  if (!authState) {
    return <div>Loading...</div>;
  }

  const button = authState.isAuthenticated ?
    <Button onClick={() => {oktaAuth.signOut()}}>Logout</Button> :
    <Button onClick={() => {history.push('/login')}}>Login</Button>;

  return (
    <div>      
      <Container>
        <div >
        <Row>
          <Col md={10}>
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand>Ockta React App</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/' >Home</Nav.Link>
                  <Nav.Link as={Link} to='/protected'>Protected</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
          <Col md={2}>
            {button}
          </Col>        
        </Row>
        <Row>
          <Col md={10}>
            <p>hello</p>
            <img src={require('./../common/img/secure.jpg')} />
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
};
export default Home;
