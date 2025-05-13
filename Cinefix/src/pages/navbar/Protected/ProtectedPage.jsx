
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isSubscribed = localStorage.getItem('isSubscribed');
    if (!isSubscribed) {
      navigate('/subscribe');
    }
  }, [navigate]);

  return (
    <div>
      {/* Premium Content */}
      <h1>Welcome to Premium Content</h1>
    </div>
  );
};

export default ProtectedPage;
