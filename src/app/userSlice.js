// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Will hold the array of users
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;  // Set the list of all users
    },
    addUser: (state, action) => {
      state.users.push(action.payload);  // Add a new user
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);  // Delete a user by ID
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;  // Update user data
      }
    },
  },
});

export const { setUsers, addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
