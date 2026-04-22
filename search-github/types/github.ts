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
  watchers_count: number;
  open_issues_count: number;
  default_branch: string;
  visibility: string;
  license: {
    key: string;
    name: string;
  } | null;
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface UserProfileProps {
  login: string;
  avatar_url: string;
  name?: string;
  email?: string;
  followers: number;
  following: number;
  public_repos: number;
  location?: string;
  bio?: string;
}
