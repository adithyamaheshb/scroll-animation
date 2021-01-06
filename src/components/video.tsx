import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

let accelamount = 0.1;
let delay = 0;
let scrollpos = 0;
let scene = null;

export const Video: React.FC = () => {
  return (
    <React.Fragment>
      <Controller>
        <Scene
          duration={13000}
          triggerElement=".intro"
          triggerHook={0}
          pin=".intro"
        >
          {(progress, event) => {
            scene = event.target;
            if (scene) {
              scene.on('update', (e) => {
                scrollpos = e.scrollPos / 1000;
              });
              setInterval(() => {
                delay += (scrollpos - delay) * accelamount;
                const video = document.querySelector('video');
                video.currentTime = delay;
              }, 33.3);
            }
            return (
              <>
                <div className="intro">
                  <h1>Video</h1>
                  <video muted id="myVideo">
                    <source
                      type="video/mp4"
                      src={
                        'https://media.gettyimages.com/videos/wild-animals-running-animation-video-id1179515319'
                      }
                    />
                  </video>
                </div>
                <section>
                  <h1>Second Section</h1>
                </section>
              </>
            );
          }}
        </Scene>
      </Controller>

      <style jsx>
        {`
          .intro {
            height: 100vh;
          }

          .intro video {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border: 1px solid red;
          }

          .intro h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 80px;
            color: white;
          }

          section {
            height: 100vh;
            color: black;
          }

          section h1 {
            padding-top: 300px;
            text-align: center;
          }
        `}
      </style>
    </React.Fragment>
  );
};
