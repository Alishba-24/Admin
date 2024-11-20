// AdminPage.js (Admin Dashboard)

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../app/authSlice.js';
import { FaEdit, FaTrash, FaHome, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AdminPage = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.users);

  // Handle edit action (for simplicity, just log the user for now)
  const handleEdit = (user) => {
    // You can implement the edit functionality here (e.g., open a modal or navigate to an edit page)
    console.log('Editing user:', user);
  };

  // Handle delete action
  const handleDelete = (userId) => {
    dispatch(deleteUser(userId)); // Dispatch action to delete user
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Admin Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <h2 className="text-white text-2xl font-semibold mb-8"> Admin Dashboard</h2>
        <ul>
   <li>
     <Link to="/" className="text-white flex items-center py-2 px-4 hover:bg-gray-700 rounded">
       <FaHome className="mr-3" /> Home
     </Link>
   </li>
   <li>
     <Link to="/admin" className="text-white flex items-center py-2 px-4 hover:bg-gray-700 rounded">
       <FaUserCircle className="mr-3" /> User Data
     </Link>
   </li>
   {/* Add other menu items here */}
   <li>
     <Link to="/logout" className="text-white flex items-center py-2 px-4 hover:bg-gray-700 rounded">
       <FaSignOutAlt className="mr-3" /> Logout
     </Link>
   </li>
 </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-6">
        <h1 className="text-3xl font-semibold mb-4">All Users</h1>

        {/* Users Table */}
        <table className="min-w-full bg-gray-100 text-black">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-2xl">First Name</th>
              <th className="py-3 px-4 text-2xl">Last Name</th>
              <th className="py-3 px-4 text-2xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="py-3 px-4">{user.firstName}</td>
                <td className="py-3 px-4">{user.lastName}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
