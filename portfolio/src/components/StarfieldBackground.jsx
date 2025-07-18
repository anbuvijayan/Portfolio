import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarfieldBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#00000000" },
        particles: {
          number: {
            value: 150,
            density: { enable: true, area: 800 }
          },
          color: { value: "#ffffff" },
          opacity: { value: 0.6, random: true },
          size: { value: { min: 0.5, max: 1.5 }, random: true },
          move: {
            enable: true,
            speed: 0.1,
            direction: "none",
            straight: false
          }
        }
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default StarfieldBackground;
