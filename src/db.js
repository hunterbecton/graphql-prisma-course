const users = [
  {
    id: '1',
    name: 'Hunter',
    email: 'email',
    age: 28,
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'email',
  },
  {
    id: '3',
    name: 'Mike',
    email: 'email',
  },
];

const posts = [
  {
    id: '453524',
    title: 'My Title',
    body: 'dfadfasdfsadf',
    published: true,
    author: '3',
  },
  {
    id: '432522',
    title: 'My Next Title',
    body: 'dfadfasdfsadf',
    published: true,
    author: '2',
  },
  {
    id: '786574',
    title: 'My Last Title',
    body: 'dfadfasdfsadf',
    published: false,
    author: '1',
  },
];

const comments = [
  {
    id: '458751',
    text: 'Wow, awesome!',
    author: '1',
    post: '453524',
  },
  {
    id: '9984751',
    text: 'Nice!',
    author: '3',
    post: '432522',
  },
  {
    id: '2215487',
    text: 'Cool beans, bro!',
    author: '2',
    post: '453524',
  },
  {
    id: '3365821',
    text: 'Slap ma momma good!',
    author: '1',
    post: '786574',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
