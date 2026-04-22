"use client";

import { Container, Image } from "react-bootstrap";
import { useGitHub } from "@/context/GitHubContext";

export function LoadUsers() {
  const { users, selectUser } = useGitHub();

  if (!users.length) return null;

  return (
    <Container className="mb-4">
      <ul className="list-unstyled d-flex flex-column gap-2">
        {users.map((user) => (
          <li key={user.login}>
            <button
              type="button"
              onClick={() => selectUser(user.login)}
              className="border-0 bg-transparent d-flex align-items-center gap-2"
            >
              <Image src={user.avatar_url} alt={user.login} width={40} roundedCircle />
              <span>{user.login}</span>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}