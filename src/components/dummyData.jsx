import coverUrl from "../assets/images/defaultCover.jpg";

export const userData = [
  {
    id: 1,
    name: "James",
    account: "james123",
    password: "james111",
    email: "james123@gmail.com",
    introduction: "hello!",
    avatar:
      "https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg",
    role: "user",
    coverUrl: coverUrl,
  },
  {
    id: 2,
    name: "Kate",
    account: "kate888",
    password: "kate999",
    email: "kate888@gmail.com",
    introduction: "hello!",
    avatar:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
    role: "user",

    coverUrl: coverUrl,
  },
  {
    id: 3,
    name: "Cindy",
    account: "cindy123",
    password: "cindy123",
    email: "cindy123@gmail.com",
    introduction: "Cindy is coming!",
    avatar:
      "https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg",
    role: "user",
    coverUrl: "../assets/images/defaultCover.jpg",
  },
];

export const tweetData = [
  {
    id: 1,
    userId: userData[0].id,
    description: "Hello! I am James. it's my first tweet.",
    name: userData[0].name,
    account: userData[0].account,
    avatar: userData[0].avatar,
    createdTime: "Tue Jul 12 2022 11:35:48 GMT+0800 (CST)",
  },
  {
    id: 2,
    userId: userData[0].id,
    description: "James here!!!!",
    name: userData[0].name,
    account: userData[0].account,
    avatar: userData[0].avatar,
    createdTime: "Wed Jul 13 2022 11:55:48 GMT+0800 (CST)",
  },
  {
    id: 3,
    userId: userData[1].id,
    description: "Greeting from Kate :D",
    name: userData[1].name,
    account: userData[1].account,
    avatar: userData[1].avatar,
    createdTime: "Wed Jul 13 2022 18:35:48 GMT+0800 (CST)",
  },

  {
    id: 4,
    userId: userData[2].id,
    description: "I need more time!",
    name: userData[2].name,
    account: userData[2].account,
    avatar: userData[2].avatar,
    createdTime: "Wed Jul 13 2022 23:55:48 GMT+0800 (CST)",
  },

  {
    id: 5,
    userId: userData[1].id,
    description: "Taking rest and relax",
    name: userData[1].name,
    account: userData[1].account,
    avatar: userData[1].avatar,
    createdTime: "Thu Jul 14 2022 08:30:20 GMT+0800 (CST)",
  },
];
