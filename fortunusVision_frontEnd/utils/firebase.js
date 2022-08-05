import axios from "axios";
const BACKEND_URL = "https://fortunusvision-d4997-default-rtdb.firebaseio.com/";
export function storeVoice(infos, user_id, expert_id) {
  axios.post(BACKEND_URL + `${user_id}/${expert_id}.json`, infos);
}
export async function fetchInfo(user_id, expertId) {
  const res = await axios.get(BACKEND_URL + `${user_id}/${expertId}.json`);
  const info = [];
  for (const key in res.data) {
    const singleInfo = {
      duration: res.data[key].duration,
      date: res.data[key].date,
      sound: res.data[key].sound,
      usertype: res.data[key].usertype,
      time: res.data[key].time,
    };
    info.push(singleInfo);
  }
  return info;
}
