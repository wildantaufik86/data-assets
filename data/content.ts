export interface Content {
  title: string;
  description: string;
  url: string;
}

const dummyContent: Record<string, Content> = {
  penerimaan: {
    title: 'My Book',
    description: 'Lorem',
    url: 'https://google.com',
  },
  pengeluran: {
    title: 'Your book',
    description: 'Lorem Lorem',
    url: 'https://google.com',
  },
}

export default dummyContent;
