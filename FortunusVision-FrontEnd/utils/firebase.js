import axios from "axios";
const BACKEND_URL = "https://fortunusvision-default-rtdb.firebaseio.com/";
export function storeVoice(infos, expert_id) {
  axios.post(BACKEND_URL + `${expert_id}.json`, infos);
}
