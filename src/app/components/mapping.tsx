import { Content } from "../../../data/content";
import user, { User } from "../../../data/user-data";
import UserComponent from "./userComponent";

interface MappingProps {
  users: User[],
}

const Mapping: React.FC<MappingProps> = ({ users }) => {
  return (
    <section className="bg-slate-800 gap-10">
      {
        users.map((usr, index) => (
          <UserComponent key={index} name={usr.name} childs={usr.childs} />
        ))
      }
    </section>
  );
}

export default Mapping;
