import React from "react";
import Canvas from "./Canvas";
import data from "./data";

const App = () => {
  return (
    <>
      <div className="w-full relative  bg-black text-white">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
    </>
  );
};

export default App;
