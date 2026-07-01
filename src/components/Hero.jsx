// Hero.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null); // 이미지 + 타이틀 묶음
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    // useEffect 내부, introTl 만들기 전에 추가
    const text = titleRef.current.textContent;
    titleRef.current.innerHTML = "";
    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = char === " " ? "\u00A0" : char; // 공백 처리
      titleRef.current.appendChild(span);
      return span;
    });

    gsap.set(chars, { opacity: 0, y: 40, rotateX: -90 });
    const ctx = gsap.context(() => {
      const blobs = decorRef.current.querySelectorAll(".hero-blob");
      const floats = decorRef.current.querySelectorAll(".hero-float");

      /* ---------- 첫 화면 진입 애니메이션 (스크롤과 무관, 그냥 로드시 보여짐) ---------- */
      gsap.set(blobs, { opacity: 1, scale: 1 });
      gsap.set(floats, { opacity: 1, y: 20 });
      gsap.set(imgRef.current, { opacity: 1, scale: 0.85 });
      gsap.set(titleRef.current, { opacity: 1, y: 30 });

      const introTl = gsap.timeline();
      introTl
        .to(blobs, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
        })
        .to(
          floats,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.8",
        )
        .to(
          imgRef.current,
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
          "-=0.7",
        )
        .to(
          titleRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        ) // introTl 안 titleRef 애니메이션 교체
        .to(
          chars,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.03,
          },
          "-=0.6",
        );

      // 블롭 은은한 부유 애니메이션 (반복)
      blobs.forEach((el, i) => {
        gsap.to(el, {
          x: () => gsap.utils.random(-30, 30),
          y: () => gsap.utils.random(-20, 20),
          duration: 6 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
      floats.forEach((el, i) => {
        gsap.to(el, {
          rotate: 360,
          duration: 20 + i * 4,
          repeat: -1,
          ease: "none",
        });
      });

      /* ---------- 스크롤 시: 전체가 커지면서 사라짐 ---------- */
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(
          contentRef.current,
          {
            scale: 1.6,
            opacity: 0,
            duration: 1,
            ease: "power1.in",
          },
          0,
        )
        .to(
          decorRef.current,
          {
            scale: 1.8,
            opacity: 0,
            duration: 1,
            ease: "power1.in",
          },
          0,
        );

      /* ---------- About 등장: 점점 커지며 나타남 ---------- */
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        gsap.set(aboutSection, { opacity: 0, scale: 0.7 });
        gsap.to(aboutSection, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-decor" ref={decorRef}>
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
        <div className="hero-blob hero-blob--3"></div>

        <svg className="hero-float hero-float--1" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg className="hero-float hero-float--2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="6" />
        </svg>
        <svg className="hero-float hero-float--3" viewBox="0 0 24 24">
          <polygon points="12,2 22,20 2,20" />
        </svg>
        <svg className="hero-float hero-float--4" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg className="hero-float hero-float--5" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="6" />
        </svg>
      </div>

      <div className="hero-content" ref={contentRef}>
        <img src="/images/hero.png" alt="" ref={imgRef} />
        <h1 ref={titleRef} style={{ fontFamily: "'Noto Serif', serif" }}>
          Shine Together
        </h1>
      </div>
    </section>
  );
}

export default Hero;
