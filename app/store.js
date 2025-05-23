import { configureStore } from "@reduxjs/toolkit";
import { eventApi } from "./api/Event";

const store = configureStore({
  reducer: {
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      eventApi.middleware,
    ),
});

export default store;
