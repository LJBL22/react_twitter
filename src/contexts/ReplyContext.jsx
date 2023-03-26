import { createContext } from 'react';

const replies = [
  {
    id: 1,
    comment:
      'Culpa sint natus. Error et eius consequatur expedita. Fuga vel recusandae reprehenderit perferendis cupiditate vel quae et.',
    UserId: 1,
    TweetId: 7,
    createdAt: '2022-10-05T09:24:04.000Z',
    updatedAt: '2023-03-24T23:19:04.000Z',
    User: {
      account: 'Kennedy20',
      name: 'Mozelle.Cassin',
      avatar:
        'https://raw.githubusercontent.com/LJBL22/react_twitter/3d808b59166970aa7c34cbb78dba58d70b11fc63/src/logo.svg',
    },
  },
  {
    id: 2,
    comment:
      'Culpa sint natus. Error et eius consequatur expedita. Fuga vel recusandae reprehenderit perferendis cupiditate vel quae et.',
    UserId: 2,
    TweetId: 7,
    createdAt: '2022-10-05T09:24:04.000Z',
    updatedAt: '2023-03-24T23:19:04.000Z',
    User: {
      account: 'Kennedy20',
      name: 'Mozelle.Cassin',
      avatar:
        'https://raw.githubusercontent.com/LJBL22/react_twitter/3d808b59166970aa7c34cbb78dba58d70b11fc63/src/logo.svg',
    },
  },
  {
    id: 3,
    comment:
      'Culpa sint natus. Error et eius consequatur expedita. Fuga vel recusandae reprehenderit perferendis cupiditate vel quae et.',
    UserId: 3,
    TweetId: 7,
    createdAt: '2022-10-05T09:24:04.000Z',
    updatedAt: '2023-03-24T23:19:04.000Z',
    User: {
      account: 'Kennedy20',
      name: 'Mozelle.Cassin',
      avatar:
        'https://raw.githubusercontent.com/LJBL22/react_twitter/3d808b59166970aa7c34cbb78dba58d70b11fc63/src/logo.svg',
    },
  },
  {
    id: 4,
    comment:
      'Culpa sint natus. Error et eius consequatur expedita. Fuga vel recusandae reprehenderit perferendis cupiditate vel quae et.',
    UserId: 4,
    TweetId: 7,
    createdAt: '2022-10-05T09:24:04.000Z',
    updatedAt: '2023-03-24T23:19:04.000Z',
    User: {
      account: 'Kennedy20',
      name: 'Mozelle.Cassin',
      avatar:
        'https://raw.githubusercontent.com/LJBL22/react_twitter/3d808b59166970aa7c34cbb78dba58d70b11fc63/src/logo.svg',
    },
  },
];

export const replyData = createContext(replies);
