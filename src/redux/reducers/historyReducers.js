import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingHistory: [],
  bookingHistoryDetail: null,
  historySearchResults: [],
  historyKeyword: "",
  date: "",
  historyByDate: [],
};

const bookingHistorySlicer = createSlice({
  name: "bookingHistory",
  initialState,
  reducers: {
    setBookingHistory: (state, action) => {
      state.bookingHistory = action.payload;
    },
    setBookingHistoryDetail: (state, action) => {
      state.bookingHistoryDetail = action.payload;
    },
    setHistorySearchResults: (state, action) => {
      state.historySearchResults = action.payload;
    },
    setHistoryKeyword: (state, action) => {
      state.historyKeyword = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setHistoryByDate: (state, action) => {
      state.historyByDate = action.payload;
    },
  },
});

export const {
  setBookingHistory,
  setBookingHistoryDetail,
  setHistorySearchResults,
  setHistoryKeyword,
  setDate,
  setHistoryByDate,
} = bookingHistorySlicer.actions;

export default bookingHistorySlicer.reducer;
