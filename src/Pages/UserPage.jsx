import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHome, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Import icons

const UserPage = () => {
  const location = useLocation();
  const { state } = location; // Get user data passed from previous page

  if (!state) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">No data available</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100"> {/* Change the overall background color to light */}
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <h2 className="text-white text-2xl font-semibold mb-8"> User Dashboard</h2>
        <ul>
          <li>
            <Link to="/" className="text-white flex items-center py-2 px-4 hover:bg-gray-700 rounded">
              <FaHome className="mr-3" /> Home
            </Link>
          </li>
          <li>
            <Link to="/user" className="text-white flex items-center py-2 px-4 hover:bg-gray-700 rounded">
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
      <div className="flex-1 bg-white text-black "> {/* Change the main content to white with black text */}
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 bg-gray-800 text-white p-6"> {/* Set dark background for top bar */}
          <div className="text-white text-xl font-semibold"></div>
          <div className="flex items-center space-x-4 pr-10">
            <FaUserCircle className="text-2xl" />
            <span className="text-white">{state.firstName} {state.lastName}</span>
          </div>
        </div>

        {/* User Data Table */}
        <div className="overflow-x-auto bg-gray-100 p-6 rounded-lg shadow-md mt-10 m-6">
          <h1 className="text-3xl font-semibold mb-4">User Information</h1>
          <table className="min-w-full bg-gray-100 text-black">
            <thead>
              <tr className=" border-gray-700">
                <th className="py-3 px-4 text-2xl">Field</th>
                <th className="py-3 px-4 text-2xl">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">First Name</td>
                <td className="py-3 px-4">{state.firstName}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Last Name</td>
                <td className="py-3 px-4">{state.lastName}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">CNIC</td>
                <td className="py-3 px-4">{state.cnic}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Phone</td>
                <td className="py-3 px-4">{state.phone}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Address</td>
                <td className="py-3 px-4">{state.address}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Parent Name</td>
                <td className="py-3 px-4">{state.parentName}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Occupation</td>
                <td className="py-3 px-4">{state.occupation}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;




