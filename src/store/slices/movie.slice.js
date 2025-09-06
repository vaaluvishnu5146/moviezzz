import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    fastandfurious: [],
    ironman: [],
  },
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    saveMovie: (state, action) => {
      state.data[action.payload.key] = action.payload.value;
    },
    clearMovieDetails: (state) => {
      state.data["movieDetails"] = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveMovie, clearMovieDetails } = MovieSlice.actions;

export default MovieSlice.reducer;
