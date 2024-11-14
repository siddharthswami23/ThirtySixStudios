import React, { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className="w-full relative">
      <div className="w-full min-h-screen bg-red-500 text-white">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>

      <div className="w-full min-h-screen bg-blue-500 text-white">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>

      <div className="w-full min-h-screen bg-green-400 text-white">
        {data[2].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen bg-lime-400 text-white">
        {data[3].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
    </div>
  );
};

export default App;
