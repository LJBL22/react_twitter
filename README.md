# 💬 [ALPHitter] with React.js 👥

A Twitter-like project which bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> **Noted: This is a Scrum project scheduled from Mar. 20 to Apr. 3, 2023.**

![Design](/public/UserInfo.png)

## 🎮 DEMO page [LINK](https://ljbl22.github.io/react_twitter/)

DEMO info:
  | Type | Account | Password |
  |--------|---------|--------------|
  | Sign In | user1 | 12345678 |
  | Admin Panel | root | 12345678 |

## 🧑🏻‍💻 Contributors

| Type     | Account      | Password    | Link                                                    |
| -------- | ------------ | ----------- | ------------------------------------------------------- |
| Frontend | @LJBL22      | @cherylruei |
| Backend  | @freeway26tw | @Ian920511  | [REPO](https://github.com/freeway26tw/twitter-api-2020) |

![Pic](/public/twitter.png)
## 👀 Add Feature:

- Registration/Login/Logout

  - users must log in to use the website.
  - During registration, users can set their account, name, email, and password.
  - Users can edit their account, name, email, and password.
  - Users can edit their name, self-introduction, profile picture, and cover photo.

![.](/public/SignIn.png)

- Post and Comments

  - Users can browse all the tweets on the home page.
  - All tweets are sorted by create date, with the newest at the top.
  - When clicking on a tweet, users can view the tweet and its comment thread.
  - Users can reply to other users' tweets.
  - When clicking on a user's avatar in a tweet, users can browse that user's profile and tweets.
  - Users can create a new tweet.
  - The tweet content is limited to 140 characters.
  - The tweet content cannot be blank.
    ![.](/public/HomePage.png)
    ![.](/public/ReplyModal.png)

- User Interactions

  - Users can follow/un-follow other users
  - Users can like/unlike other users' tweets

- Data Summary

  - Any logged-in user can browse the following information of a specific user:
    - Tweets: sorted by date, newest first.
    - Tweets and replies: content that the user has replied to, sorted by date, newest first.
    - Following: the list of users that the user is following, sorted by the time of the follow record, with the newest at the front.
    - Followers: the list of users who are following the user, sorted by the time of the follow record, with the newest at the front.
    - Likes: the list of tweets that the user has liked, sorted by the time of the like record, with the newest at the front.
  - Users can see a recommended top 10 list of followers, sorted by the number of followers, on the sidebar of the homepage.
    ![.](/public/FollowList.png)

- Admin Panel
  - Administrators can access the website backend through a dedicated login page.
  - Administrator accounts cannot access the frontend.
  - Administrators can view the entire list of Tweets on the website.
  - Administrators can delete any user's Tweet directly from the list.
  - Administrators can view the list of all users on the website, including: - User social activity data, including - Number of Tweets (the total number of Tweets accumulated by the user) - Number of following - Number of followers - Number of Tweets liked (the total number of Tweets liked by the user) - The user list is sorted by the number of Tweets by default, from most to least.
    ![.](/public/AdminPanel.png)

## 🛠️ Develop Tools and Packages Used

- Node.js @16.18.1
- Axios @1.3.4
- clsx @1.2.1
- react-router-dom @6.9.0"
- styled-components @5.3.9"
- sweetalert2 @11.7.3"
- All other packages and webpack settings provided by using create-react-app

## 🧑🏻‍💻 Installation

Check Node.js installation and version by running the command in the terminal

```
node -v
```

Clone the project to local

```
git clone https://github.com/LJBL22/react_twitter.git
```

Go to the directory

```
cd react_twitter
```

Install npm

```
npm install
```

Start the project

```
npm start
```

## Bonus
![.](/public/bonus.png)

# 💬 THANK YOU 👥
