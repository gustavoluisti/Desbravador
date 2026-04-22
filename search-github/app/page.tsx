import { Header } from "@/app/components/Header/Header";
import { Container } from "react-bootstrap";
import { SearchUser } from "./components/SearchUser/SearchUser";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <SearchUser />
      </Container>
    </>
  );
}