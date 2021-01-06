import React from 'react';
import { Video } from './../components/video';

const Home: React.FC = () => (
  <div className="container">
    <Video />
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
);

export default Home;
