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
});

export default usersSlice.reducer;
