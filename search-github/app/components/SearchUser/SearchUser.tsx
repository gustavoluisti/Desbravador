import { Button, Form, InputGroup } from "react-bootstrap";

export function SeachUser() {
    return (
        <div>
            <Form>
                <InputGroup>
                <Form.Control placeholder="Busque usuários do github..." />
                <Button>Buscar</Button>
            </InputGroup>
            </Form>
        </div>
    )
}