import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';
export const fetchItems= createAsyncThunk("/items/fetchItems", async () => {
 const {data} = await axios.get("/items");
 return data;
}
)
export const fetchRemoveItems = createAsyncThunk("/posts/fetchRemoveItems", async (id) => 
 axios.delete(`/items/${id}`)
)
export const initialState = {
   items:[],
   status:"loading"
}
export const itemsSlice = createSlice({
  name: "items",
  initialState: initialState ,
  reducers: {
  }, 
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.items = [];
      state.status = "loading";
  },
    [fetchItems.fulfilled]: (state,action) => {
      state.items = action.payload
      state.status = "loaded";
  },
    [fetchItems.rejected]: (state,action) => {
     state.items = [];
     state.status = "error";
  },
    [fetchRemoveItems.pending]: (state,action) => {
        state.items = state.items.filter(obj => obj._id != action.meta.arg);
    },
  } ,
})
export const {seItems, } = itemsSlice.actions

export default itemsSlice.reducer