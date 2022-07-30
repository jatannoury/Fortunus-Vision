function checkCoins(method, coins, price) {
  console.log(method, coins, price);
  if (method === "Call" && coins < price) {
    navigation.navigate("Recharge");
  } else if (method === "Call" && coins >= price) {
    alert("Allowed");
  }
  if (method === "Voice") {
    switchScreen("Chat", [expertName, expert_id, price]);
  }
}
