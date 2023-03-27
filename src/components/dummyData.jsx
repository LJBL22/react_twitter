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
  {
    id: 4,
    name: 'Cindy C Wang',
    account: 'cindy123',
    password: 'cindy123',
    email: 'cindy123@gmail.com',
    introduction: 'Cindy is coming!',
    avatar:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    role: 'user',
    coverUrl: '../assets/images/defaultCover.jpg',
  },
  {
    id: 5,
    name: 'Apple Company',
    account: 'cindy123',
    password: 'cindy123',
    email: 'cindy123@gmail.com',
    introduction: 'Cindy is coming!',
    avatar:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    role: 'user',
    coverUrl: '../assets/images/defaultCover.jpg',
  },
  {
    id: 6,
    name: 'Bank of America',
    account: 'cindy123',
    password: 'cindy123',
    email: 'cindy123@gmail.com',
    introduction: 'Cindy is coming!',
    avatar:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    role: 'user',
    coverUrl: '../assets/images/defaultCover.jpg',
  },
  {
    id: 7,
    name: 'Cindy C Wang',
    account: 'cefe123',
    password: 'cindy123',
    email: 'cindy123@gmail.com',
    introduction: 'Cindy is coming!',
    avatar:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    role: 'user',
    coverUrl: '../assets/images/defaultCover.jpg',
  },
  {
    id: 8,
    name: 'Apple Company',
    account: 'dfdsf4563',
    password: 'cindy123',
    email: 'cindy123@gmail.com',
    introduction: 'Cindy is coming!',
    avatar:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    role: 'user',
    coverUrl: '../assets/images/defaultCover.jpg',
  },
  {
    id: 9,
    name: '地方小編戰鬥群組',
    account: 'dfdfsdf',
    password: 'cindy123',
    email: 'cindy123@gmail.com',
    introduction: 'Cindy is coming!',
    avatar:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    role: 'user',
    coverUrl: '../assets/images/defaultCover.jpg',
  },
  {
    id: 10,
    name: '地方小編戰鬥群組',
    account: 'localacccc',
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

export const replies = [
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
