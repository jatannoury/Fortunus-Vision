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
    userType: "",
    incomingCall: {},
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
    addUserType: (state, action) => {
      state.userType = action.payload;
    },
    addAppointment: (state, action) => {
      state.appointments = action.payload;
    },
    addToAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    triggerPhoneCall: (state, action) => {
      state.incomingCall = action.payload;
    },
    addCallHistory: (state, action) => {
      state.callsHistory = [...state.callsHistory, ...action.payload];
    },
    logout: (state, action) => {
      (state.userType = ""),
        (state.name = ""),
        (state.userId = ""),
        (state.coins = 0),
        (state.chats = []),
        (state.callsHistory = []),
        (state.appointments = []),
        (state.experts = []),
        (state.curr_chats = []);
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
export const addUserType = usersSlice.actions.addUserType;
export const logout = usersSlice.actions.logout;
export const addAppointment = usersSlice.actions.addAppointment;
export const addToAppointment = usersSlice.actions.addToAppointment;
export const triggerPhoneCall = usersSlice.actions.triggerPhoneCall;
export const addCallHistory = usersSlice.actions.addCallHistory;
export default usersSlice.reducer;
