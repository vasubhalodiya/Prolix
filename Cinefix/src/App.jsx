import React from "react";
import './app.css';
import Discovery from './pages/menu/Discovery';
import Sidebar from "./components/Sidebar/Sidebar";
// import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <>
      <Sidebar />
      <div className="app-layout">
        <main className="main-cnt">
          <Discovery />
        </main>
      </div>
    </>
  );
};

export default App;
