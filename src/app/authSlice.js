// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   role: null,  // 'user' or 'admin'
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload.user || null;
//       state.isAuthenticated = true;
//       state.role = action.payload.role;  // 'user' or 'admin'
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.role = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;




// authSlice.js


// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  role: null,  // 'user' or 'admin'
  users: [],  // Store all users here
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user || null;
      state.isAuthenticated = true;
      state.role = action.payload.role;  // 'user' or 'admin'
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
    },
    registerUser: (state, action) => {
      state.users.push(action.payload);  // Add new user to the users array
    },
    // updateUser: (state, action) => {
      // const { id, updatedData } = action.payload;
      // const index = state.users.findIndex(user => user.id === id);
      // if (index !== -1) {
        // state.users[index] = { ...state.users[index], ...updatedData }; // Update user data
      // }
    // },
    updateUser: (state, action) => {
  const { id, updatedData } = action.payload;
  const index = state.users.findIndex(user => user.id === id);
  if (index !== -1) {
    state.users[index] = { ...state.users[index], ...updatedData }; // Merge updates
  }
},

    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter(user => user.id !== id);  // Remove user by id
    }
  },
});

export const { login, logout, registerUser, updateUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
