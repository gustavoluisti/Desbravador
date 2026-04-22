"use client";

import { createContext, useContext } from "react";
import { useGitHubSearch } from "@/hooks/useGitHubSearch";

type GitHubContextType = ReturnType<typeof useGitHubSearch>;

const GitHubContext = createContext<GitHubContextType | null>(null);

export function GitHubProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const value = useGitHubSearch();

  return (
    <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
  );
}

export function useGitHub() {
  const context = useContext(GitHubContext);

  if (!context) {
    throw new Error("useGitHub must be used within GitHubProvider");
  }

  return context;
}