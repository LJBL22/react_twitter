import coverUrl from '../assets/images/defaultCover.jpg';

export const userData = [
  {
    id: 1,
    name: 'James',
    account: 'james123',
    password: 'james111',
    email: 'james123@gmail.com',
    introduction: 'hello!',
    avatar:
      'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
    role: 'user',
    coverUrl: coverUrl,
  },
  {
    id: 2,
    name: 'Kate',
    account: 'kate888',
    password: 'kate999',
    email: 'kate888@gmail.com',
    introduction: 'hello!',
    avatar:
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
    role: 'user',

    coverUrl: coverUrl,
  },
  {
    id: 3,
    name: 'Cindy',
    account: 'cindy123',
    password: 'cindy123',
    email: 'cindy123@gmail.com',
    introduction: 'Cindy is coming!',
    avatar:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    role: 'user',
    coverUrl: '../assets/images/defaultCover.jpg',
  },
];

export const tweetData = [
  {
    id: 1,
    userId: userData[0].id,
    description:
      'Harum ipsum aut ipsum optio quo. Ducimus aut et rerum itaque corrupti ipsum praesentium. Et sapiente et. Saepe ipsa ut eius quo enim. Veniam in vero sint voluptas culpa nihil. Voluptatem eum eius natus incidunt nesciunt voluptate magni.',
    name: userData[0].name,
    account: userData[0].account,
    avatar: userData[0].avatar,
    createdTime: '2023-03-24T05:39:01.000Z',
    replyNum: '0',
    likeNum: '3',
  },
  {
    id: 2,
    userId: userData[0].id,
    description:
      'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    name: userData[0].name,
    account: userData[0].account,
    avatar: userData[0].avatar,
    createdTime: '2023-03-23T20:39:01.000Z',
    replyNum: '2',
    likeNum: '10',
  },
  {
    id: 3,
    userId: userData[1].id,
    description: 'Greeting from Kate :D',
    name: userData[1].name,
    account: userData[1].account,
    avatar: userData[1].avatar,
    createdTime: '2023-03-22T11:39:01.000Z',
    replyNum: '0',
    likeNum: '0',
  },

  {
    id: 4,
    userId: userData[2].id,
    description: 'I need more time!',
    name: userData[2].name,
    account: userData[2].account,
    avatar: userData[2].avatar,
    createdTime: '2023-03-20T11:39:01.000Z',
    replyNum: '4',
    likeNum: '50',
  },

  {
    id: 5,
    userId: userData[1].id,
    description: 'Taking rest and relax',
    name: userData[1].name,
    account: userData[1].account,
    avatar: userData[1].avatar,
    createdTime: '2023-03-19T11:39:01.000Z',
    replyNum: '100',
    likeNum: '200',
  },
];
