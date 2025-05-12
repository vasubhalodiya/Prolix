// import React from "react";
// import './App.css';
// import Sidebar from "./components/Sidebar/Sidebar";
// import AppRoutes from "./routes/AppRoutes";


// const App = () => {
//   return (
//     <>
//       <Sidebar />
//       <div className="app-layout">
//         <main className="main-cnt">
//           <AppRoutes />
//         </main>
//       </div>
//     </>
//   );
// };

// export default App;
import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";  // Import useLocation from react-router-dom

const App = () => {
  const location = useLocation(); // Hook to get current route

  // Check if the current route is Subscribe page
  const hideSidebar = location.pathname === "/subscribe"; 

  return (
    <>
      {/* Conditional rendering of Sidebar */}
      {!hideSidebar && <Sidebar />}
      <div className="app-layout">
        <main className="main-cnt">
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

export default App;
