import { notFound } from "next/navigation";
import { Header } from "@/app/components/Header/Header";
import { RepositoryList } from "@/app/components/RepositoryList/RepositoryList";
import { UserProfile } from "@/app/components/UserProfile/UserProfile";
import { getUser, getUserRepos } from "@/services/github/github.service";
import { GitHubRepoDetails, GitHubUserDetails } from "@/types/github";

interface PageProps {
  params: Promise<{
    login: string;
  }>;
}

export default async function GitHubUserPage({ params }: PageProps) {
  const { login } = await params;

  let user: GitHubUserDetails;
  let repos: GitHubRepoDetails[] = [];

  try {
    user = await getUser(login);
  } catch {
    notFound();
  }

  try {
    repos = await getUserRepos(login);
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    repos = [];
  }

  return (
    <div>
      <Header />
      <UserProfile user={user} />
      <RepositoryList repos={repos} />
    </div>
  );
}