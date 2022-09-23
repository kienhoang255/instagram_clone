import { createSlice } from '@reduxjs/toolkit';

const imgFileSlice = createSlice({
  name: 'imgFile',
  initialState: {
    imgFile: [],
  },
  reducers: {
    addImg: (state, action) => {
      // state.push(action.payload);
      state.imgFile = [...state.imgFile, action.payload];
      // state.imgFile = action.payload;
    },
    delImg: (state) => {
      state.value -= 1;
    },
    renderImg: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const { actions } = imgFileSlice;

export const { addImg, delImg, renderImg } = actions;

export default imgFileSlice.reducer;
