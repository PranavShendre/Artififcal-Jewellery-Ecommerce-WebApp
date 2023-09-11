import React, { Fragment } from "react";
import "./virtualButton.scss";
import { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { loadModels, detectFace, applyGlasses } from "./utils";

function VirtualTryOn() {
  const [faceDetected, setFaceDetected] = useState(false);
  const webcamRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  useEffect(() => {
    loadModels();
  }, []);

  const capture = async () => {
    if (webcamRef.current && canvasRef.current) {
      const video = webcamRef.current.video;
      const { width, height } = video.getBoundingClientRect();
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      const face = await detectFace(video);

      if (face) {
        setFaceDetected(true);
        applyGlasses(canvasRef.current, face);
      } else {
        setFaceDetected(false);
      }
    }
  };

  const activeVirtualtry = () => {
    <Fragment>
      <Webcam ref={webcamRef} className="w-full" />
      <button
        onClick={capture}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Try Jewellery
      </button>
    </Fragment>;
  };

  return (
    <div id="virtualTryOnContainer">
      <Webcam ref={webcamRef} className="w-full" />
      <button
        onClick={capture}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Try Jewellery
      </button>
      <button onClick={activeVirtualtry} class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Virtual-Tryon</span>
      </button>
      {faceDetected && (
        <canvas ref={canvasRef} className="mt-2 w-full"></canvas>
      )}
    </div>
  );
}

export default VirtualTryOn;
