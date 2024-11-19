// UserPage.js (User Data Display Page)

import React from 'react';
import { useLocation } from 'react-router-dom';

const UserPage = () => {
  const location = useLocation();
  const { state } = location; // Get the state passed from the previous page (User)

  if (!state) {
    return <div>No data available</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl mb-6 text-center">User Information</h1>
        <div className="mb-4">
          <strong>First Name: </strong>{state.firstName}
        </div>
        <div className="mb-4">
          <strong>Last Name: </strong>{state.lastName}
        </div>
        <div className="mb-4">
          <strong>CNIC: </strong>{state.cnic}
        </div>
        <div className="mb-4">
          <strong>Phone Number: </strong>{state.phone}
        </div>
        <div className="mb-4">
          <strong>Address: </strong>{state.address}
        </div>
        <div className="mb-4">
          <strong>Parent Name: </strong>{state.parentName}
        </div>
        <div className="mb-4">
          <strong>Occupation: </strong>{state.occupation}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
