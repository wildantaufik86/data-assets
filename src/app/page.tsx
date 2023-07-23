import { NextPage } from "next";
import Mapping from "./components/mapping";
import user from "../../data/user-data";

const HomePage: NextPage = () => {
  return (
    <main>
      <Mapping users={user} />
    </main>
  );
}

export default HomePage;
