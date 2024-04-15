import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  movies:[]
}

const dataSlice = createSlice({
    name: "movieApp",
    initialState,
    reducers: {
    addMovieToFavorites: (state, action) => {
      console.log(action.payload)
      state.movies.push(action.payload);
    },
  //   removeMovieFromFavorites:(state,action)=>{
  //     const {id} = action.payload;
  //     const idFind = state.find(user=>user.id == id);
  //     if(idFind){
  //         return state.filter(f=>f.id !== id)
  //     }
  // },
  removeMovieFromFavorites: (state, action) => {
    state.movies = state.movies.filter(item => item.imdbID !== action.payload);
  },
}
})
export const { addMovieToFavorites, removeMovieFromFavorites } = dataSlice.actions;
export default dataSlice.reducer;