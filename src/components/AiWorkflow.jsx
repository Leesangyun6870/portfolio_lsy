import "./AiWorkflow.css";

const workflow = [
  {
    title: "AI Research",
    icon: "🧠",
    tool: "ChatGPT · Claude",
    image: "/images/ai/research.jpg",
    items: ["사용자 리서치", "경쟁사 분석", "UX 문제 정의", "페르소나 작성"],
  },
  {
    title: "AI Design",
    icon: "🎨",
    tool: "FigJam AI · Figma AI",
    image: "/images/ai/design.jpg",
    items: ["IA 구성", "User Flow", "Wireframe", "디자인 아이디어 확장"],
  },
  {
    title: "AI Image",
    icon: "🖼",
    tool: "Midjourney",
    image: "/images/ai/midjourney.jpg",
    items: ["컨셉 이미지 생성", "배경 제작", "스타일 탐색", "비주얼 레퍼런스"],
  },
  {
    title: "AI Coding",
    icon: "💻",
    tool: "ChatGPT · Claude",
    image: "/images/ai/code.jpg",
    items: ["React 컴포넌트", "CSS 작성", "반응형 구현", "디버깅"],
  },
];

function AiWorkflow() {
  return (
    <section className="ai-workflow" id="ai">
      <h2>AI Workflow</h2>
      <p className="sub">
        AI 도구를 활용하여 리서치부터 디자인, 개발까지 효율적인 UI/UX 제작
        프로세스를 구축했습니다.
      </p>

      <div className="workflow-grid">
        {workflow.map((item) => (
          <div className="workflow-card" key={item.title}>
            <img src={item.image} alt={item.title} />

            <div className="content">
              <span>{item.icon}</span>
              <h3>{item.title}</h3>

              <small>{item.tool}</small>

              <ul>
                {item.items.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AiWorkflow;
