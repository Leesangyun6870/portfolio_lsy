import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <svg
        className="hero__tree"
        viewBox="0 0 300 280"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 줄기 */}
        <path d="M150 150 L150 90" />
        {/* 가지 */}
        <path d="M150 130 C 120 110, 100 90, 90 60" />
        <path d="M150 120 C 175 100, 190 85, 200 55" />
        <path d="M150 105 C 135 80, 130 60, 120 35" />
        <path d="M150 100 C 165 75, 170 55, 180 30" />
        <path d="M150 90 L150 40" />
        {/* 반짝임 */}
        <path d="M70 70 l4 4 M225 90 l4 4 M200 40 l3 3 M100 30 l3 3 M150 20 l3 3" />
        {/* 뿌리 */}
        <path d="M150 150 C 120 165, 100 175, 70 190" />
        <path d="M150 150 C 130 170, 110 190, 90 220" />
        <path d="M150 150 C 145 180, 140 210, 130 240" />
        <path d="M150 150 C 160 180, 165 210, 160 240" />
        <path d="M150 150 C 175 170, 195 190, 215 215" />
        <path d="M150 150 C 180 165, 205 175, 235 188" />
        {/* 파도 */}
        <path d="M40 230 C 80 210, 120 250, 160 230 C 200 210, 240 250, 280 230" />
        <path d="M30 250 C 70 230, 110 270, 150 250 C 190 230, 230 270, 270 250" />
      </svg>
      <h1 className="hero__title">Shine Together</h1>
    </section>
  );
}

export default Hero;
