import { useState } from "react";
import {
  searchUsers,
  getUser,
  getUserRepos,
} from "@/services/github/github.service";
import { GitHubRepoDetails, GitHubUserDetails } from "@/types/github";

export function useGitHubSearch() {
  const [users, setUsers] = useState<GitHubUserDetails[]>([]);
  const [repos, setRepos] = useState<GitHubRepoDetails[]>([]);
  const [selectedUser, setSelectedUser] = useState<GitHubUserDetails | null>(null);
  const [loading, setLoading] = useState(false);

  async function searchAll(query: string) {
    if (!query) return;

    try {
      setLoading(true);

      const { items } = await searchUsers(query);
      setUsers(items);

      const firstLogin = items[0]?.login;
      if (!firstLogin) return;

      const [user, repos] = await Promise.all([
        getUser(firstLogin),
        getUserRepos(firstLogin),
      ]);

      setSelectedUser(user);
      setRepos(repos);
    } catch (err) {
      console.error(err);
      setUsers([]);
      setRepos([]);
      setSelectedUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function selectUser(login: string) {
    try {
      setLoading(true);

      const [user, repos] = await Promise.all([
        getUser(login),
        getUserRepos(login),
      ]);

      setSelectedUser(user);
      setRepos(repos);
    } finally {
      setLoading(false);
    }
  }

  return {
    users,
    repos,
    selectedUser,
    loading,
    searchAll,
    selectUser,
  };
}