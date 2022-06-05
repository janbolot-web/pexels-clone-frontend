import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  images: [],
  myImages: [],
  message: null,
  error: null,
  loading: false,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async function (sort, rejectWithValue) {
    try {
      const response = await axios
        .get(`/api/images?sort=${sort}`)
        .then((data) => data.data.images);
      return response;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const fetchImagesById = createAsyncThunk(
  "images/fetchImagesById",
  async function (userId, rejectWithValue) {
    try {
      const response = await axios
        .get(`/api/images/${userId}`)
        .then((data) => data.data.images);
      return response;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const addNewImage = createAsyncThunk(
  "images/addImage",
  async function (image, { rejectWithValue, dispatch }) {
    try {
      await axios
        .post(
          `/api/images/add/${image.userId}`,
          { ...image },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => dispatch(addImage(response.data)));
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      console.log(action.payload);
      state.images.push(action.payload);
    },
  },
  extraReducers: {
    [fetchImages.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchImages.fulfilled]: (state, action) => {
      state.images = action.payload;
      state.loading = false;
    },
    [fetchImages.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchImagesById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchImagesById.fulfilled]: (state, action) => {
      state.myImages = action.payload;
      state.loading = false;
    },
    [fetchImagesById.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addImage } = imageSlice.actions;

export default imageSlice.reducer;
