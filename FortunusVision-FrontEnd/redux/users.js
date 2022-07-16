import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    name: "",
    coins: 0,
    chats: [],
    callsHistory: [],
    appointments: [],
  },
  reducers: {
    addCoins: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export const addCoins = usersSlice.actions.addCoins;
export default usersSlice.reducer;
