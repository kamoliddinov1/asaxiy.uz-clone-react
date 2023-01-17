import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
  },
  reducers: {
    setToken: (state, action) => {
     localStorage.setItem('token', action.payload)
     state.token = action.payload
    },
    
    removeToken: (state, action) => {
    const del =  localStorage.removeItem('token', action.payload)
      state.token = del;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {
  removeToken,
  setToken
} = authSlice.actions;