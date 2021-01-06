import React, { useEffect } from 'react';

const ScrollEventListener: React.FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const videoToBeScrolled: HTMLMediaElement = document.querySelector(
        'video',
      );

      const videoLength = videoToBeScrolled.duration;
      const scrollPosition = videoToBeScrolled.scrollTop;

      videoToBeScrolled.currentTime =
        (scrollPosition /
          document.documentElement.getBoundingClientRect().height -
          window.innerHeight) *
        videoLength;
    });
  });
  return (
    <>
      <h1>Video</h1>
      <video muted id="scroll-video">
        <source
          type="video/mp4"
          src={
            'https://media.gettyimages.com/videos/wild-animals-running-animation-video-id1179515319'
          }
        />
      </video>

      <style jsx>
        {`
          video {
            position: fixed;
            left: 50%;
            top: 0;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -100;
            background-size: cover;
            transform: translateX(-50%);
          }
          h1 {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 100%;
            transform: translate(-50%, -50%);
            z-index: 99;
            font-family: HelveticaNeue, Helvetica, sans-serif;
            font-size: 8vmin;
            text-align: center;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default ScrollEventListener;
