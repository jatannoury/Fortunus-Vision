import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    name: "",
    coins: 0,
    chats: [],
    callsHistory: [],
    appointments: [],
    experts: [],
  },
  reducers: {
    addCoins: (state, action) => {
      state.coins = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    addExperts: (state, action) => {
      state.experts = action.payload;
    },
    addChats: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const addCoins = usersSlice.actions.addCoins;
export const addName = usersSlice.actions.addName;
export const addExperts = usersSlice.actions.addExperts;
export const addChats = usersSlice.actions.addChats;
export default usersSlice.reducer;
