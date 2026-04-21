import { Button, Form, InputGroup } from "react-bootstrap";

export function SeachUser() {
  return (
    <Form className="mb-4">
      <InputGroup>
        <Form.Control placeholder="Busque usuários do github..." />
        <Button>Buscar</Button>
      </InputGroup>
    </Form>
  );
}
