import React, { useRef } from 'react';
import Webcam from "react-webcam";


// responsible for sizing the video

const videoConstraints = {
    width: 750,
    height: 400,
    facingMode: "user"
  };

  
  function WebcamCapture() {
        const webcamRef = useRef(null);  
      return (
          <div className="webcamCapture">
              <Webcam
              audio={false}
              height={videoConstraints.height}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={videoConstraints.width}
              videoConstraints={videoConstraints}

              />
          </div>
      )
  }
  
  export default WebcamCapture
  