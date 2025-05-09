import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <>
      <Sidebar />
      <div className="app-layout">
        <main className="main-cnt">
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

export default App;
