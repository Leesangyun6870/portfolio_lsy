import React from "react";
import "./AboutMe.css";

const INFO_ROWS = [
  {
    label: "학력",
    value: [
      "경북기계공고 · 공업전자과",
      "영진전문대학교 · 솔라반도체 전공 (GPA 4.34 / 4.5)",
    ],
  },
  {
    label: "경력",
    value: ["카페발레오 · 연구보조", "SK실트론 · 장비유지보수"],
  },
  {
    label: "교육",
    value: [
      "AI 도구 활용 사용자 중심 UI/UX 디자인 및 프로토타이핑",
      "중대형 배터리 성능/안전성 시험 · 평가실습",
      "반도체 공정 심화교육 실습 NECST",
    ],
  },
  {
    label: "자격",
    value: [
      "산업안전산업기사",
      "Mos master2016",
      "설비보전기능사",
      "전기기능사",
    ],
  },
];

const TOOLS = [
  { name: "Figma", icon: "/images/Icon/01.png" },
  { name: "Notion", icon: "/images/Icon/02.png" },
  { name: "Git", icon: "/images/Icon/03.png" },
  { name: "HTML5", icon: "/images/Icon/04.png" },
  { name: "CSS3", icon: "/images/Icon/05.png" },
  { name: "Photoshop", icon: "/images/Icon/06.png" },
  { name: "Illustrator", icon: "/images/Icon/07.png" },
  { name: "After Effects", icon: "/images/Icon/08.png" },
  { name: "Office", icon: "/images/Icon/09.png" },
  { name: "JavaScript", icon: "/images/Icon/10.png" },
  { name: "Jemini", icon: "/images/Icon/11.png" },
  { name: "Claud", icon: "/images/Icon/12.png" },
  { name: "Chatgpt", icon: "/images/Icon/13.png" },
];

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <h2 className="about__heading">About Me</h2>

        <div className="about__left">
          <p className="about__intro">
            사용자의 필요성을 발견하고
            <br />
            개선하는 이상윤입니다.
          </p>
          <p className="about__text">
            산업 현장을 경험하며 문제를 발견하고 개선해 온 전자공학도입니다.
          </p>
          <p className="about__text">
            그 경험을 바탕으로 이제는 사용자 관점에서 더 나은 경험을 설계하는
            UI/UX 기획자로 성장하고 있습니다.
          </p>
          <p className="about__text">
            기술을 이해하고 사람을 이해하며, 더 원활한 경험으로 연결하는 것이
            저의 Design 설계 목적입니다.
          </p>

          <div className="about__venn">
            <div className="venn-circle venn-circle--top">
              살면서 배운 지식과 경험, 그리고 UI/UX 도구와 AI의 사용.
            </div>
            <div className="venn-circle venn-circle--left">
              사용자의 필요와 불편을 개선하고 싶은 마음.
            </div>
            <div className="venn-circle venn-circle--right">
              분석하고 정리하는 습관.
            </div>
          </div>
        </div>

        <div className="about__right">
          {INFO_ROWS.map((row) => (
            <div className="info-row" key={row.label}>
              <div className="info-row__label">{row.label}</div>
              <div className="info-row__value">
                {row.value.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          ))}

          <div className="info-row">
            <div className="info-row__label">사용도구</div>
            <div className="info-row__value">
              <div className="tool-icons">
                {TOOLS.map((t) => (
                  <span className="tool-icon" key={t.name} title={t.name}>
                    <img src={t.icon} alt={t.name} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
