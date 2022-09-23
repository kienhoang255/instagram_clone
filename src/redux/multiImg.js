import { createSlice } from '@reduxjs/toolkit';

export const multiImgSlice = createSlice({
  name: 'add-img-file',
  initialState: {
    imgFile: [],
  },
  reducers: {
    addFileImg: (state, action) => {
      state.push(action.payload);
    },
    delFileImg: (state) => {
      state.value -= 1;
    },
    renderImg: (state, action) => {
      const currentImg = state.filter((items) => (items.id = action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, delFileImg, incrementByAmount } = multiImgSlice.actions;

export default multiImgSlice.reducer;
