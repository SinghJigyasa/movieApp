import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    movie:[]
}

const dataSlice = createSlice({
    name: "movieApp",
    initialState,
    reducers: {
    addMovieToFavorites: (state, action) => {
      state.movies.push(action.payload);
    },
}
})
export const { addMovieToFavorites } = dataSlice.actions;
export default dataSlice.reducer;