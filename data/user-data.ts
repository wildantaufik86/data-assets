import dummyContent, { Content } from "./content";

export interface User {
  name: string;
  childs: Content[];
}

const user: User[] = [
  {
    name: 'MY BOOK',
    childs: [
      dummyContent.penerimaan
    ]
  },
  {
    name: 'MY WORLD',
    childs: [
      dummyContent.pengeluran
    ]
  },
]

export default user;
