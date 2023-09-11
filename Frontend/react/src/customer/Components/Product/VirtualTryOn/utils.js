import * as faceapi from 'face-api.js';
import glassesImage from './glasses.png';

export const loadModels = async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
};

export const detectFace = async (video) => {
  const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
  return detections.length > 0 ? detections[0] : null;
};

export const applyGlasses = (canvas, face) => {
  const ctx = canvas.getContext('2d');
  const glasses = new Image();
  glasses.src = glassesImage;

  glasses.onload = () => {
    const scaleFactor = face.detection.box.width / glasses.width;
    const glassesWidth = glasses.width * scaleFactor;
    const glassesHeight = glasses.height * scaleFactor;
    
    ctx.drawImage(glasses, face.landmarks.getLeftEye()[0].x, face.landmarks.getLeftEye()[0].y - glassesHeight / 2, glassesWidth, glassesHeight);
  };
};
