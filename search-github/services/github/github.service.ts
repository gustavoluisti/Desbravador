import { githubFetch } from "./client";
import { GitHubRepoDetails, GitHubUserDetails } from "@/types/github";

export function searchUsers(query: string) {
  return githubFetch<{ items: GitHubUserDetails[] }>(
    `/search/users?q=${encodeURIComponent(query)}`
  );
}

export function getUser(login: string) {
  return githubFetch<GitHubUserDetails>(`/users/${login}`);
}

export function getUserRepos(login: string) {
  return githubFetch<GitHubRepoDetails[]>(
    `/users/${login}/repos?sort=stars&direction=desc&per_page=10`
  );
}

export function getRepoDetails(owner: string, repo: string) {
  return githubFetch<GitHubRepoDetails>(`/repos/${owner}/${repo}`);
}