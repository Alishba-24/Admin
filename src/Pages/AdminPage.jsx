import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../app/authSlice.js';
import { FaEdit, FaTrash, FaHome, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import graph from '../assets/graph.png'
import graph from '../assets/line_chart.png'

const AdminPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.users);
  const [selectedUser, setSelectedUser] = useState(null); // For editing user
  const [modalOpen, setModalOpen] = useState(false);

  // Handle edit action
  const handleEdit = (user) => {
    setModalOpen(true);
    setSelectedUser({ ...user }); // Open modal with selected user data
  };

  // Handle delete action with confirmation
  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(userId)); // Dispatch action to delete user
    }
  };

  // Handle form submission to update user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(updateUser({ id: selectedUser.id, updatedData: selectedUser }));
      setModalOpen(false); // Close modal after saving
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Admin Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <h2 className="text-white text-2xl font-semibold mb-8"> Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/" className="text-white flex items-center py-2 px-4 hover:bg-gray-700">
              <FaHome className="mr-3" /> Home
            </Link>
          </li>
          <li>
            <Link to="/admin" className="text-white flex items-center py-2 px-4 hover:bg-gray-700">
              <FaUserCircle className="mr-3" /> User Data
            </Link>
          </li>
          <li>
            <Link to="/logout" className="text-white flex items-center py-2 px-4 hover:bg-gray-700">
              <FaSignOutAlt className="mr-3" /> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white">
      <div className="flex justify-between items-center mb-6 bg-gray-800 text-white p-6">
       <div className="text-white text-xl font-semibold"></div>
       <div className="flex items-center space-x-4 pr-10">
         <FaUserCircle className="text-2xl" />
         <span className="text-white">Admin</span>
       </div>
     </div>
        <h1 className="text-4xl font-semibold mb-4 mt-10 ml-8">All Users</h1>

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
            {users.length === 0 ? (
              <tr><td colSpan="3" className="py-3 px-4">No users found.</td></tr>
            ) : (
              users.map((user) => (
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
              ))
            )}
          </tbody>
        </table>

        {/* Modal for Editing */}
        {modalOpen && selectedUser && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h3 className="text-xl font-semibold">Edit User</h3>
              <form onSubmit={handleSubmit}>
                {/* Form fields for editing user details */}
                <input
                  type="text"
                  value={selectedUser.firstName}
                  onChange={(e) => setSelectedUser({ ...selectedUser, firstName: e.target.value })}
                  className="mb-4 p-2 border rounded w-full"
                />
                <input
                  type="text"
                  value={selectedUser.lastName}
                  onChange={(e) => setSelectedUser({ ...selectedUser, lastName: e.target.value })}
                  className="mb-4 p-2 border rounded w-full"
                />
                <div className="flex justify-between">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
         <img src={graph} alt="" className='max-w-screen-xlg' />
      </div>
    </div>
  );
};

export default AdminPage;
// 