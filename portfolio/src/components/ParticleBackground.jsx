import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)", // gradient background
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // stays inside section
          background: { color: "transparent" },
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#ffffff", "#8ec5fc", "#e0c3fc"], // soft white + pastel glow
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.6,
              random: { enable: true, minimumValue: 0.3 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false,
              },
            },
            size: {
              value: { min: 0.5, max: 2 },
              random: true,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: false, // no connecting lines
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
    </div>);
};

export default ParticleBackground;