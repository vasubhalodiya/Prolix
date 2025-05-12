// import React from 'react'
// import './Subscribe.css';

// const Subscribe = () => {
//   return (
//     <>
//     <div className="subscribe">
//       <div className="subscribe-cnt">

//       </div>
//     </div>
//     </>
//   )
// }

// export default Subscribe

import React, { useEffect } from 'react';
import './Subscribe.css';

const Subscribe = () => {
  useEffect(() => {
    document.body.classList.add('reset-css');  // Add reset CSS class
    
    return () => {
      document.body.classList.remove('reset-css');
    };
  }, []);

  return (
    <div className="subscribe-page">
      <h1>Subscribe to our service</h1>
    </div>
  );
};

export default Subscribe;
