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

import React, { useEffect } from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const hideSidebarRoutes = ["/subscribe", "/paymentsuccessfull"];
  const isResetLayout = hideSidebarRoutes.includes(location.pathname);

  useEffect(() => {
    if (isResetLayout) {
      document.body.classList.add("reset-css");
    } else {
      document.body.classList.remove("reset-css");
    }

    return () => document.body.classList.remove("reset-css");
  }, [location.pathname, isResetLayout]);

  return (
    <>
      {!isResetLayout && <Sidebar />}
      <div className="app-layout">
        <main className="main-cnt">
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

export default App;
