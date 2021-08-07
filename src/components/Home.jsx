import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();

  if (!authState) {
    return <div>Loading...</div>;
  }

  const button = authState.isAuthenticated ?
    <button onClick={() => {oktaAuth.signOut()}}>Logout</button> :
    <button onClick={() => {history.push('/login')}}>Login</button>;

  return (
    <div>      
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Link to='/'>Home</Link>
          </Col>
          <Col xs lg="2">
            <Link to='/protected'>Protected</Link>
          </Col>
          <Col xs lg="2">
            {button}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
