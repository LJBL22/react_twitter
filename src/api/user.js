import axios from 'axios';
const authURL = 'https://dry-lowlands-42863.herokuapp.com/api';
// 看特定使用者資料
// 看某使用者的推文
//看某使用者回覆的推文
// 看特定使用者的likes
// 看特定使用者的追隨者
// 看特定使用者的追蹤
// 使用者編輯自己的資料

// 推薦跟隨的排名 get followship 初步撰寫 & 後端尚未完成
export const followRank = async ({ createdTime,
  followersNum,
  followingsNum, }) => {
  try {
    const { data } = await axios.post(`${authURL}/followships/top`, {
      createdTime,
      followersNum,
      followingsNum,
    });
    const { token } = data;
    if (token) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Get followships failed]:', error);
  }
};