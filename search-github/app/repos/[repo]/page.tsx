import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, Container, Badge } from "react-bootstrap";
import { Header } from "@/app/components/Header/Header";
import { getRepoDetails } from "@/services/github/github.service";
import { GitHubRepoDetails } from "@/types/github";

interface PageProps {
  params: Promise<{
    login: string;
    repo: string;
  }>;
}

export default async function RepositoryDetailsPage({ params }: PageProps) {
  const { login, repo } = await params;

  let repository: GitHubRepoDetails;

  try {
    repository = await getRepoDetails(login, repo);
  } catch {
    notFound();
  }

  return (
    <div>
      <Header />

      <Container className="py-4">
        <div className="mb-3">
          <Link href={`/github/${login}`} className="text-decoration-none">
            ← Voltar para o perfil
          </Link>
        </div>

        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title className="mb-3">{repository.full_name}</Card.Title>

            {repository.description && (
              <Card.Text className="text-muted">
                {repository.description}
              </Card.Text>
            )}

            <div className="d-flex flex-wrap gap-2 mb-3">
              {repository.language && (
                <Badge bg="info">{repository.language}</Badge>
              )}
              <Badge bg="warning" text="dark">
                ★ {repository.stargazers_count}
              </Badge>
              <Badge bg="secondary">Forks: {repository.forks_count}</Badge>
              <Badge bg="dark">Watchers: {repository.watchers_count}</Badge>
              <Badge bg="primary">
                Issues: {repository.open_issues_count}
              </Badge>
              <Badge bg="success">Branch: {repository.default_branch}</Badge>
              <Badge bg="secondary">{repository.visibility}</Badge>
            </div>

            <a
              href={repository.html_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Ver no GitHub
            </a>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}