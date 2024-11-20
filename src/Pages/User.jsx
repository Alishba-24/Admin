// User.js (User Registration Page)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cnic: '',
    phone: '',
    address: '',
    img: '',
    parentName: '',
    occupation: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here before navigating to the UserPage
    navigate('/userpage', { state: formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl mb-6 text-center">Register Yourself</h1>
        <form onSubmit={handleSubmit}>
<div className='flex gap-3'>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>
</div>
<div className='flex gap-3'>
          {/* CNIC */}
          <div className="mb-4">
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>
          </div>
<div className='flex gap-3'>
          {/* Parent Name */}
          <div className="mb-4">
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
              Parent Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>

          {/* Occupation */}
          <div className="mb-4">
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>
</div>
          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>
<div className="flex gap-3">
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md"
              required
            />
          </div>
</div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-lg py-2"
          >
            Register Yourself
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
