import { Header } from "./components/Header/Header";
import { SeachUser } from "./components/SearchUser/SearchUser";
import { UserProfile } from "./components/UserProfile/UserProfile";

export default function Home() {
  return (
    <>
      <Header />
      <SeachUser />
      <UserProfile />
    </>
  );
}
