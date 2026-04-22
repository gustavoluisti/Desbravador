import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/Header/Header";
import { getRepoDetails } from "@/services/github/github.service";

interface PageProps {
  params: Promise<{
    owner: string;
    repo: string;
  }>;
}

export default async function RepoPage({ params }: PageProps) {
  const { owner, repo } = await params;

  let selectedRepo;

  try {
    selectedRepo = await getRepoDetails(owner, repo);
  } catch {
    notFound();
  }

  return (
    <>
      <Header />

      <div className="container-fluid px-3 px-lg-4 py-4">
        <Link href="/" className="btn btn-outline-secondary btn-sm mb-3">
          ← Voltar
        </Link>

        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="h2 mb-3">{selectedRepo.full_name}</h2>

            {selectedRepo.description && (
              <p className="lead">{selectedRepo.description}</p>
            )}

            <div className="row g-3 mb-4">
              <div className="col-6 col-sm-4 col-md-3">
                <div className="badge text-dark bg-warning w-100 py-2">
                  <span className="d-block small">Estrelas</span>
                  <span className="d-block fs-4">
                    {selectedRepo.stargazers_count}
                  </span>
                </div>
              </div>

              <div className="col-6 col-sm-4 col-md-3">
                <div className="badge bg-secondary w-100 py-2">
                  <span className="d-block small">Forks</span>
                  <span className="d-block fs-4">
                    {selectedRepo.forks_count}
                  </span>
                </div>
              </div>

              <div className="col-6 col-sm-4 col-md-3">
                <div className="badge bg-info w-100 py-2">
                  <span className="d-block small">Watchers</span>
                  <span className="d-block fs-4">
                    {selectedRepo.watchers_count}
                  </span>
                </div>
              </div>

              <div className="col-6 col-sm-4 col-md-3">
                <div className="badge bg-danger w-100 py-2">
                  <span className="d-block small">Issues</span>
                  <span className="d-block fs-4">
                    {selectedRepo.open_issues_count}
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3 align-items-center">
              {selectedRepo.language && (
                <span className="text-info">
                  <span className="me-1">●</span>
                  <strong>{selectedRepo.language}</strong>
                </span>
              )}

              {selectedRepo.license && (
                <span className="text-muted">
                  Licença: {selectedRepo.license.name}
                </span>
              )}

              <a
                href={selectedRepo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary ms-auto"
              >
                Abrir no GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}