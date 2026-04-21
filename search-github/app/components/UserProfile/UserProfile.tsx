'use client';

import { Card, Row, Col, Badge } from 'react-bootstrap';

export function UserProfile() {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
            <Card.Img
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </Col>
          <Col xs={12} md={9}>
            <h2 className="mb-1">Name user</h2>
            <p className="text-muted mb-2">
              <a href="" target="_blank" rel="noopener noreferrer">
                @login
              </a>
            </p>
            <p className="mb-2"></p>
              <p className="mb-2">
                <strong>Email:</strong> teste@gmail.com
              </p>
            <Row className="mt-3">
              <Col xs={6} sm={3} className="mb-2">
                <Badge bg="primary" className="w-100 py-2">
                  <span className="d-block small">Seguidores</span>
                  <span className="d-block fs-5">100</span>
                </Badge>
              </Col>
              <Col xs={6} sm={3} className="mb-2">
                <Badge bg="secondary" className="w-100 py-2">
                  <span className="d-block small">Seguindo</span>
                  <span className="d-block fs-5">500</span>
                </Badge>
              </Col>
              <Col xs={6} sm={3} className="mb-2">
                <Badge bg="dark" className="w-100 py-2">
                  <span className="d-block small">Repos</span>
                  <span className="d-block fs-5">600</span>
                </Badge>
              </Col>
                <Col xs={6} sm={3} className="mb-2">
                  <Badge bg="success" className="w-100 py-2">
                    <span className="d-block small">Local</span>
                    <span className="d-block fs-6">São Paulo</span>
                  </Badge>
                </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}