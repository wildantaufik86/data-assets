import { Content } from "../../../data/content";
import user, { User } from "../../../data/book-data";
import BookComponent from "./bookComponent";

interface MappingProps {
  users: User[],
}

const Mapping: React.FC<MappingProps> = ({ users }) => {
  return (
    <section className="Mapping flex flex-wrap">
      {
        users.map((usr, index) => (
          <BookComponent key={index} name={usr.name} childs={usr.childs} />
        ))
      }
    </section>
  );
}

export default Mapping;
