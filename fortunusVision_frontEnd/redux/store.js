import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 1000 },
    }),
});
export default store;
