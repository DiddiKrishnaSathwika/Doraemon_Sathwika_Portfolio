import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import door from "../assets/gadgets/anywhere-door.png";
import copter from "../assets/gadgets/take-copter.png";
import machine from "../assets/gadgets/time-machine.png";
import lab from "../assets/gadgets/innovation-lab.png";
import bread from "../assets/gadgets/memory-bread.png";
import tv from "../assets/gadgets/time-television.png";
import phone from "../assets/gadgets/time-telephone.png";
import cloth from "../assets/gadgets/time-cloth.png";

import "../styles/Pocket.css";

function Pocket() {
  const navigate = useNavigate();
  const location = useLocation();

  const gadgets = [
    {
      title: "About Me",
      image: door,
      path: "/about",
    },
    {
      title: "Education",
      image: machine,
      path: "/education",
    },
    {
      title: "Skills",
      image: copter,
      path: "/skills",
    },
    {
      title: "Projects",
      image: lab,
      path: "/projects",
    },
    {
      title: "Experience",
      image: cloth,
      path: "/experience",
    },
    {
      title: "Certifications",
      image: bread,
      path: "/certifications",
    },
    {
      title: "Achievements",
      image: tv,
      path: "/achievements",
    },
    {
      title: "Contact",
      image: phone,
      path: "/contact",
    },
  ];

  return (
    <div className="pocket-page">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="/src/assets/doraemon.png"
          className="hero-doraemon"
          alt="Doraemon"
        />

        <h2>Welcome to My Doraemon Portfolio</h2>
        <p>Explore my journey using futuristic gadgets 🚀</p>
      </div>

      {/* TITLE */}
      <h1>Doraemon's Pocket</h1>

      <p className="subtitle">
        Choose a gadget to explore my journey
      </p>

      {/* GADGET GRID */}
      <div className="gadget-container">
        {gadgets.map((gadget, index) => {
          const isActive = location.pathname === gadget.path;

          return (
            <div
              key={index}
              className={`gadget-item ${isActive ? "active" : ""}`}
              onClick={() => navigate(gadget.path)}
            >
              <img
                src={gadget.image}
                alt={gadget.title}
                className="gadget-icon"
              />

              <span className="gadget-label">
                {gadget.title}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Pocket;