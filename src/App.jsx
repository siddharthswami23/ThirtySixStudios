import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const App = () => {
  const hoverDivRef = useRef(null);
  const growingSpan = useRef(null);

  const handleMouseMove = (e) => {
    gsap.to(hoverDivRef.current, {
      scale: 1,
      opacity: 1,
      x: e.clientX - 200,
      y: e.clientY - 550,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(hoverDivRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const [ShowCanvas, setShowCanvas] = useState(false);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <div className="w-full bg-black">
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <nav className="w-full text-2xl py-8 px-10 fixed top-0 left-0 z-10 text-white flex items-center justify-between">
        <h1>ThirtySixStudios</h1>
        <ul className="flex gap-10">
          <li>
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="w-full h-screen relative">
        <div className="w-full absolute min-h-screen">
          {ShowCanvas &&
            data[0].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setShowCanvas((val) => !val);
            }}
            className="text-white cursor-none relative text-[10vw] font-bold uppercase tracking-tighter whitespace-nowrap text-center "
          >
            ThirtySixStudios
          </h1>
          <div
            ref={hoverDivRef}
            id="hover-div"
            className="w-20 scale-0 aspect-square opacity-0 bg-red-500 rounded-full"
          ></div>
          <p className="text-white text-[1vw] capitalize font-bold text-center ">
            click here to see something new
          </p>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="w-full absolute min-h-screen">
          {ShowCanvas &&
            data[1].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white text-[10vw] tracking-tighter whitespace-nowrap font-bold text-center">
            Our Projects
          </h2>
          <p className="text-white text-lg text-center mt-4">
            Here are some of the projects we have worked on.
          </p>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="w-full absolute min-h-screen">
          {ShowCanvas &&
            data[1].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white text-[10vw] tracking-tighter whitespace-nowrap font-bold text-center">
            Our Team
          </h2>
          <p className="text-white text-lg text-center mt-4">
            Meet the talented individuals behind ThirtySixStudios.
          </p>
        </div>
      </div>
      <div className="w-full h-screen relative">
        <div className="w-full absolute min-h-screen">
          {ShowCanvas &&
            data[2].map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-white text-[10vw] tracking-tighter whitespace-nowrap font-bold text-center">
            Contact Us
          </h2>
          <p className="text-white text-lg text-center mt-4">
            Get in touch with us for your next project.
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;
