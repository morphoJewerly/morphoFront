import { createSlice } from '@reduxjs/toolkit';
export const initialState ={
    catId:1,
    selected:1,
}
export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState ,
  reducers: {
    setSelected (state,action){
      state.selected = action.payload
    },
   getCatId (state,action) {
      state.catId = action.payload
    },
  },
})
export const {getCatId,setSelected} = filterSlice.actions

export default filterSlice.reducer