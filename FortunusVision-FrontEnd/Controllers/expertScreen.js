export function checkCoins(method, coins, phonePrice, voicePrice = 0) {
  console.log(method, coins, phonePrice, voicePrice);
  if ((method === "call") & (coins >= phonePrice)) {
    return true;
  } else if ((method === "call") & (coins < phonePrice)) {
    return false;
  }
  if ((method === "voice") & (coins >= voicePrice)) {
    return true;
  } else if ((method === "voice") & (coins < voicePrice)) {
    return false;
  }
}
