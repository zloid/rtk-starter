import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'

const Layout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Badge pill variant="warning">
              0_0_
            </Badge>
          </Col>
          <Col>
            <Badge pill variant="warning">
              0_1_
            </Badge>
          </Col>
          <Col>
            <Badge pill variant="warning">
              0_2_
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Badge pill variant="warning">
              1_0_
            </Badge>
          </Col>
          <Col>
            <Badge pill variant="warning">
              1_1_
            </Badge>
          </Col>
          <Col>
            <Badge pill variant="warning">
              1_2_
            </Badge>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Layout
