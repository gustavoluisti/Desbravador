"use client";

import { GitHubRepoDetails } from "@/types/github";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

interface RepositoryListProps {
  repos?: GitHubRepoDetails[];
}

export function RepositoryList({
  repos = [],
}: Readonly<RepositoryListProps>) {
  if (!repos.length) {
    return <Container>Nenhum repositório encontrado.</Container>;
  }

  return (
    <Container>
      <h2>Repositórios</h2>

      <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
        <span className="text-muted me-2">Ordenar por:</span>
        <Button variant="dark" size="sm">
          Estrelas
        </Button>
        <Button variant="outline-primary" size="sm">
          Nome
        </Button>
        <span className="ms-auto text-muted small">
          {repos.length} repositórios
        </span>
      </div>

      <Row xs={1} lg={2} className="g-3">
        {repos.map((repo) => (
          <Col key={repo.id}>
            <Card className="h-100 shadow-sm repo-card">
              <Card.Body>
                <Card.Title className="h5 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    {repo.name}
                  </a>
                </Card.Title>

                {repo.description && (
                  <Card.Text className="text-muted small mb-2">
                    {repo.description}
                  </Card.Text>
                )}

                <div className="d-flex flex-wrap gap-3 small">
                  {repo.language && (
                    <span className="text-info">
                      <span className="me-1">●</span>
                      {repo.language}
                    </span>
                  )}

                  <span className="text-warning">
                    ★ {repo.stargazers_count}
                  </span>

                  <span className="text-secondary">
                    ♺ {repo.forks_count}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}