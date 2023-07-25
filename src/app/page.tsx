import { NextPage } from "next";
import Mapping from "./components/mapping";
import user from "../../data/book-data";
import Navbar from "./components/Navbar";

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="HomePage min-h-screen fixed px-16 py-24 w-full">
        <Mapping users={user} />
      </main>
    </>
  );
}

export default HomePage;
