import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet /> {/* Nested pages render here */}
      </main>
    </div>
  );
};

export default Layout;
