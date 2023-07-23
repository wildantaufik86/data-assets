import { Content } from "../../../data/content";
import user, { User } from "../../../data/user-data";

const UserComponent: React.FC<User> = ({ name, childs }) => {
  return (
    <section className=" gap-6">
      <div>
      <h2>{name}</h2>
      {
        childs.map((child, index) => (
          <div key={index}>
            <p>{child.description}</p>
            <p>{child.title}</p>
            <a href={child.url}>
            <p>TES</p>
            </a>
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default UserComponent;
