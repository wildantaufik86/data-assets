import { Content } from "../../../data/content";
import user, { User } from "../../../data/book-data";

const BookComponent: React.FC<User> = ({ name, childs }) => {
  return (
    <section className="text-white">
      <div className="bg-slate-800 m-4 px-4 py-6 max-w-sm rounded-lg shadow-2xl">
      <h2 className="font-bold mb-4">{name}</h2>
      {
        childs.map((child, index) => (
          <div className="" key={index}>
            <p className="">Title: {child.title}</p>
            <p className="truncate">Description: {child.description}</p>
            <a href={child.url} className="text-blue-400 hover:underline"> Read More </a>
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default BookComponent;
