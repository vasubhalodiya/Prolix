import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isSubscribed = localStorage.getItem('isSubscribed');
  return isSubscribed === 'true' ? children : <Navigate to="/subscribe" />;
};

export default ProtectedRoute;
