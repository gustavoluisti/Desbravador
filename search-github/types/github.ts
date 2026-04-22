export interface GitHubUserDetails {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubRepoDetails {
    id: number;
    full_name: string;
    html_url: string;
    private: boolean;
    description: string;
    stargazers_count: number;
    forks_count: number;
    name: string;
    language: string;
}