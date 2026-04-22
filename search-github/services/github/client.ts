const BASE_URL = "https://api.github.com";

export async function githubFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    if (res.status === 403) {
      throw new Error("GitHub rate limit");
    }
    throw new Error("GitHub request failed");
  }

  return res.json();
}