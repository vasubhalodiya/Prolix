// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isSubscribed = localStorage.getItem('isSubscribed');
//   return isSubscribed === 'true' ? children : <Navigate to="/subscribe" />;
// };

// export default ProtectedRoute;
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, redirectTo = "/subscribe" }) => {
//   const isSubscribed = localStorage.getItem('isSubscribed');
//   return isSubscribed === 'true' ? children : <Navigate to={redirectTo} />;
// };

// export default ProtectedRoute;
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isSubscribed = localStorage.getItem('isSubscribed');
  return isSubscribed === 'true' ? children : <Navigate to="/subscribe" />;
};

export default ProtectedRoute;
