import React from 'react';
import './App.css';
import AppNavigator from "./nav/AppNavigator";
import {Container, Row, Col } from "react-bootstrap";

function App() {


  return (
      <Container>
          <Row>
              <Col xs={12}>

                  <AppNavigator />
              </Col>
          </Row>
      </Container>
  );
}

export default App;
