import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: {},
  userData: {},
  isAuth: false,
  message: null,
  error: null,
  loading: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async function (user, { rejectWithValue, dispatch }) {
    try {
      await axios
        .post(
          `https://pexels-clone-mern.herokuapp.com/api/auth/registration`,
          { ...user },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          dispatch(addUser(response.data));
        });
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async function (user, { rejectWithValue, dispatch }) {
    try {
      await axios
        .post(
          `https://pexels-clone-mern.herokuapp.com/api/auth/login`,
          { ...user },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          dispatch(setUser(response.data));
        });
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async function (userId, { rejectWithValue, dispatch }) {
    try {
      await axios
        .get(`https://pexels-clone-mern.herokuapp.com/api/auth/getUserById/${userId}`)
        .then((response) => dispatch(setUserData(response.data)));
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.message = action.payload.message;
    },
    setUser: (state, action) => {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: action.payload.userId,
          token: action.payload.token,
          role: action.payload.role,
        })
        );
        state.isAuth = true;
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setIsLogin: (state) => {
      state.isAuth = false;
      state.user = {};
      localStorage.removeItem("userData");
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [loginUser.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message;
    },
    // [getUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.response.data.message;
    // },
  },
});

export const { addUser, setUser, setUserData, setIsLogin } = userSlice.actions;
export default userSlice.reducer;
