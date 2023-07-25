import dummyContent, { Content } from "./content";

export interface User {
  name: string;
  childs: Content[];
}

const user: User[] = [
  {
    name: 'MY BOOK',
    childs: [
      dummyContent.book1
    ]
  },
  {
    name: 'MY BOOK',
    childs: [
      dummyContent.book2
    ]
  },
  {
    name: 'MY BOOK',
    childs: [
      dummyContent.book3
    ]
  },
  {
    name: 'MY BOOK',
    childs: [
      dummyContent.book4
    ]
  },
]

export default user;
