"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, InputGroup } from "react-bootstrap";

export function SearchUser() {
  const [user, setUser] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user.trim()) return;

    router.push(`/github/${user.trim()}`);
  }

  return (
    <Form className="mb-4" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          placeholder="Busque usuários do github..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </InputGroup>
    </Form>
  );
}