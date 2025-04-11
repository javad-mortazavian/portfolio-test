import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "black", // Optional: Add a background color
      }}
    >
      <video
        src={require("../../assets/vid1.mp4")} // Path to your video
        autoPlay
        loop
        muted
        style={{
          width: isMobile ? "300px" : "600px", // Adjust size for mobile and desktop
          height: "auto",
          borderRadius: "10px", // Optional: Add rounded corners
        }}
      />
    </div>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "black", // Optional: Add a background color
      }}
    >
      <ComputerModel isMobile={isMobile} />
    </div>
  );
};

export default ComputersCanvas;

