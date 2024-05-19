import React from "react";
import "../styles/front.css";
import About from "../components/about";

export default function Front() {
  return (
    <div className="container">
      <div className="text-box">
        <h1 className="title">EMOTUNES</h1>
        <h3 className="subt">WHERE MUSIC MEETS YOUR MOOD</h3>
        <div className="row">
          <a href="http://localhost:3000/Login" className="log">
            Login/Signup <span className="arrow">&#8680;</span>
          </a>
        </div>
      </div>
      <About />
    </div>
  );
}
