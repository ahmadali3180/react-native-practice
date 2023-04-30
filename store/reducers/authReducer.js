import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  user: null,
  userLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUser: (state, newUser) => {
      state.user = newUser;
    },
    setUserLoading: (state, action) => {
      state.userLoading = action.payload;
    },
  },
});

export const {
  login,
  logout,
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setUser,
  setUserLoading,
} = authSlice.actions;

export default authSlice.reducer;
