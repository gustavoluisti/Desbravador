import { notFound } from "next/navigation";
import { getRepoDetails } from "@/services/github/github.service";
import { Header } from "@/app/components/Header/Header";
import { Container } from "react-bootstrap";

interface PageProps {
  params: Promise<{
    owner: string;
    repo: string;
  }>;
}

export default async function RepoPage({ params }: PageProps) {
  const { owner, repo } = await params;

  let repository;

  try {
    repository = await getRepoDetails(owner, repo);
  } catch {
    notFound();
  }

  return (
    <div>
      <Header />
      <Container>
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Container>
    </div>
  );
}
