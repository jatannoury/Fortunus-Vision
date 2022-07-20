import axios from "axios";
const BACKEND_URL = "https://fortunusvision-a560b-default-rtdb.firebaseio.com/";
export function storeVoice(infos, expert_id) {
  axios.post(BACKEND_URL + `${expert_id}.json`, infos);
}
export async function fetchInfo(expertId) {
  const res = await axios.get(BACKEND_URL + `${expertId}.json`);
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
