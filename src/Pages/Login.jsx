// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../app/authSlice.js';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const role = useSelector((state) => state.auth.role); 

//   const handleRoleChange = (event) => {
//     const selectedRole = event.target.value;
//     dispatch(login({ role: selectedRole }));  
//   };

//   const handleMoreClick = () => {
//     if (role === 'user') {
//       navigate('/user');
//     } else if (role === 'admin') {
//       navigate('/admin');
//     } else {
//       console.log('No role defined');  
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-300">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//         <form action="">
//           <h1 className="text-3xl mb-14">Identify your Role First</h1>
//           <label htmlFor="role" className="block text-lg font-medium text-gray-700 mb-2">
//             Choose a Role:
//           </label>
//           <select
//             name="role"
//             id="role"
//             onChange={handleRoleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 bg-white"
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>

//           <button
//             type="button"
//             onClick={handleMoreClick}
//             className="mt-14 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
//           >
//             More
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/authSlice.js';
import LineGraph from '../Graph/LineGraph.jsx';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role); // Get role from Redux store

  // Handle role change (update role in Redux)
  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    dispatch(login({ role: selectedRole }));
  };

  // Handle the role submission and navigation
  const handleSubmit = () => {
    if (role === 'user') {
      navigate('/user');
    } else if (role === 'admin') {
      navigate('/admin');
    } else {
      console.log('No role defined');
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <form action="">
          <h1 className="text-3xl mb-14">Identify your Role First</h1>
          <label htmlFor="role" className="block text-lg font-medium text-gray-700 mb-2">
            Choose a Role:
          </label>
          <select
            name="role"
            id="role"
            onChange={handleRoleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 bg-white"
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Submit Button to trigger role navigation */}
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-14 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <LineGraph />
    </>
  );
};

export default Login;

