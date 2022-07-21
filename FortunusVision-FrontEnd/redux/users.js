import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    name: "",
    userId: "",
    coins: 0,
    chats: [],
    callsHistory: [],
    appointments: [],
    experts: [],
    curr_chats: [],
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
    addCurrChats: (state, action) => {
      state.curr_chats = action.payload;
    },
    storeVoice: (state, action) => {
      state.curr_chats.push(action.payload);
    },
    addUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const addCoins = usersSlice.actions.addCoins;
export const addName = usersSlice.actions.addName;
export const addExperts = usersSlice.actions.addExperts;
export const addChats = usersSlice.actions.addChats;
export const addCurrChats = usersSlice.actions.addCurrChats;
export const storeVoice = usersSlice.actions.storeVoice;
export const addUserId = usersSlice.actions.addUserId;
export default usersSlice.reducer;
