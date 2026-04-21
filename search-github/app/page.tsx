import { Container } from "react-bootstrap";
import { Header } from "./components/Header/Header";
import { SeachUser } from "./components/SearchUser/SearchUser";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { RepositoryList } from "./components/RepositoryList/RepositoryList";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <SeachUser />
        <UserProfile />
        <RepositoryList />
      </Container>
    </>
  );
}
