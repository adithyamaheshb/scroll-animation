import React from 'react';
import ScrollEventListener from './../components/ScrollEventListener';

const ScrollPage: React.FC = () => (
  <div className="container">
    <ScrollEventListener />
    <style jsx>
      {`
        html {
          height: 100%;
        }
        body {
          height: 4000px;
        }

        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
);

export default ScrollPage;
