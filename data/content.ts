export interface Content {
  title: string;
  description: string;
  url: string;
}

const dummyContent: Record<string, Content> = {
  book1: {
    title: 'Your Book',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil esse iste suscipit provident quibusdam commodi dolore consequatur accusantium, voluptatum, blanditiis, necessitatibus voluptatem labore. Repudiandae minima eius corporis maiores voluptates?',
    url: 'https://google.com',
  },
  book2: {
    title: 'Your book',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil esse iste suscipit provident quibusdam commodi dolore consequatur accusantium, voluptatum, blanditiis, necessitatibus voluptatem labore. Repudiandae minima eius corporis maiores voluptates?',
    url: 'https://google.com',
  },
  book3: {
    title: 'Your book',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil esse iste suscipit provident quibusdam commodi dolore consequatur accusantium, voluptatum, blanditiis, necessitatibus voluptatem labore. Repudiandae minima eius corporis maiores voluptates?',
    url: 'https://google.com',
  },
  book4: {
    title: 'Your book',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nihil esse iste suscipit provident quibusdam commodi dolore consequatur accusantium, voluptatum, blanditiis, necessitatibus voluptatem labore. Repudiandae minima eius corporis maiores voluptates?',
    url: 'https://google.com',
  },
}

export default dummyContent;
