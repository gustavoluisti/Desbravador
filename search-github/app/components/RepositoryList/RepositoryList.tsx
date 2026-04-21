"use client";

import Link from "next/link";
import { Button, Card, Col, Row } from "react-bootstrap";

export function RepositoryList() {
  return (
    <div>
      <h2>Repositórios</h2>
      <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
        <span className="text-muted me-2">Ordenar por:</span>
        <Button variant="dark" size="sm">
          Estrelas
        </Button>
        <Button variant="outline-primary" size="sm">
          Nome
        </Button>
        <span className="ms-auto text-muted small"> repositórios</span>
      </div>

      <Row xs={1} lg={2} className="g-3">
            <Col>
              <Card className="h-100 shadow-sm repo-card">
                <Card.Body>
                  <Card.Title className="h5 mb-2">
                    <Link href="" className="text-decoration-none">
                      Nome
                    </Link>
                  </Card.Title>
                    <Card.Text className="text-muted small mb-2">
                      Descrição
                    </Card.Text>
                  <div className="d-flex flex-wrap gap-3 small">
                   
                      <span className="text-info">
                        <span className="me-1">●</span>
                        teste
                      </span>
                    <span className="text-warning">
                      ★ stars
                    </span>
                    <span className="text-secondary">
                      ♺ conta
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
      </Row>
    </div>
  );
}
