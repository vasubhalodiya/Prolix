import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const NProgressbar = ({ loading }) => {
  useEffect(() => {
    NProgress.configure({ 
      showSpinner: true,
    });

    const styleElement = document.createElement('style');
    styleElement.textContent = `
      #nprogress .bar {
        background: #ff5733 !important;
      }
      
      #nprogress .peg {
        box-shadow: 0 0 10px #ff5733, 0 0 5px #ff5733 !important;
      }
      
      #nprogress .spinner-icon {
        border-top-color: #ff5733 !important;
        border-left-color: #ff5733 !important;
      }`;
    document.head.appendChild(styleElement);

    if (loading) {
      NProgress.start();
    } else {
      NProgress.done();
    }

    return () => {
      document.head.removeChild(styleElement);
      NProgress.done();
    };
  }, [loading]);

  return null;
};

export default NProgressbar;