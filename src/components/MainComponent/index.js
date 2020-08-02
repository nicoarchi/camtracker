import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { Link } from "react-router-dom";

const MainComponent = (props) => {
  const [records, setRecords] = useState([]);
  const videoElement = useRef(null);
  const startButtonElement = useRef(null);
  const stopButtonElement = useRef(null);
  const [show, toggleShow] = React.useState(false);
  const shouldRecordRef = useRef(false);
  const modelRef = useRef(null);
  const recordingRef = useRef(false);
  const lastDetectionsRef = useRef([]);
  const recorderRef = useRef(null);

  useEffect(() => {
    async function prepare() {
      startButtonElement.current.setAttribute("disabled", true);
      stopButtonElement.current.setAttribute("disabled", true);

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
          });
          window.stream = stream;
          videoElement.current.srcObject = stream;
          const model = await cocoSsd.load();

          modelRef.current = model;
          startButtonElement.current.removeAttribute("disabled");
        } catch (error) {
          console.log(error);
        }
      }
    }
    prepare();
  }, []);

  // WebCam settings to activate and desactivate based on detections
  async function detectFrame() {
    if (!shouldRecordRef.current) {
      stopRecording();
      return;
    }

    const predictions = await modelRef.current.detect(videoElement.current);

    let foundPerson = false;
    for (let i = 0; i < predictions.length; i++) {
      if (predictions[i].class === "person") {
        foundPerson = true;
      }
    }

    if (foundPerson) {
      startRecording();
      lastDetectionsRef.current.push(true);
    } else if (lastDetectionsRef.current.filter(Boolean).length) {
      startRecording();
      lastDetectionsRef.current.push(false);
    } else {
      stopRecording();
    }

    lastDetectionsRef.current = lastDetectionsRef.current.slice(
      Math.max(lastDetectionsRef.current.length - 10, 0)
    );

    requestAnimationFrame(() => {
      detectFrame();
    });
  }

  // Start recording function
  function startRecording() {
    if (recordingRef.current) {
      return;
    }

    recordingRef.current = true;
    console.log("Start recording");

    recorderRef.current = new MediaRecorder(window.stream);

    recorderRef.current.ondataavailable = function (e) {
      const title = new Date() + "";
      const href = URL.createObjectURL(e.data);
      setRecords((previousRecords) => {
        return [...previousRecords, { href, title }];
      });
    };
    recorderRef.current.start();
  }

  // Stop recording function
  function stopRecording() {
    if (!recordingRef.current) {
      return;
    }
    recordingRef.current = false;
    recorderRef.current.stop();
    console.log("Stopped recording");
    lastDetectionsRef.current = [];
  }

  return (
    <div className="container">
      <div>
        <video
          className="video"
          autoPlay
          muted
          playsInline
          ref={videoElement}
        />
      </div>
      <div className="textMain">
        Don't minimize the web app. Leave the app running in a maximized window
        (may be in the background)
      </div>
      <div className="botonesMain">
        <button
          className="btnStart"
          onClick={() => {
            shouldRecordRef.current = true;
            stopButtonElement.current.removeAttribute("disabled");
            startButtonElement.current.setAttribute("disabled", true);
            detectFrame();
            console.log("Start");
          }}
          ref={startButtonElement}
        >
          Start
        </button>
        <button
          className="btnStop"
          onClick={() => {
            shouldRecordRef.current = false;
            startButtonElement.current.removeAttribute("disabled");
            stopButtonElement.current.setAttribute("disabled", true);
            stopRecording();
            console.log("Stop");
          }}
          ref={stopButtonElement}
        >
          Stop
        </button>
        <button className="btnRecords" onClick={() => toggleShow(!show)}>
          {show ? "Hide" : "Show"} Records
        </button>
        <Link to="/about" className="btnAbout">
          About
        </Link>
      </div>
      {show && (
        <div className="seccionRecords">
          <div className="textMain">
            Download your records, these will disappear once the window is
            closed.
          </div>
          <div className="tituloRecords">Records:</div>

          {!records.length
            ? null
            : records.map((record) => {
                return (
                  <div className="card mt-3 w-100" key={record.title}>
                    <div className="card-body">
                      <h5 className="card-title">{record.title}</h5>
                      <video controls src={record.href}></video>
                    </div>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default MainComponent;
