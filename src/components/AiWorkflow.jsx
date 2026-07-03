import "./AiWorkflow.css";

const workflow = [
  {
    title: "AI Research",
    icon: "🧠",
    tool: "Figma-make , FigJam",
    image: "/images/Ai_img/01.png",
    items: ["사용자 리서치", "UX 문제 정의", "페르소나 작성", "User Flow 정의"],
  },
  {
    title: "AI Design",
    icon: "🎨",
    tool: "ChatGPT, Claude",
    image: "/images/Ai_img/02.png",
    items: ["Wireframe 제작", "디자인 아이디어 확장"],
  },
  {
    title: "AI Image",
    icon: "🖼",
    tool: "ChatGPT, Gemini",
    image: "/images/Ai_img/03.png",
    items: ["컨셉 이미지 생성", "스타일 탐색", "브랜드 로고 레퍼런스"],
  },
  {
    title: "AI Coding",
    icon: "💻",
    tool: "Figma , Claude",
    image: "/images/Ai_img/04.png",
    items: ["React 컴포넌트 생성", "CSS 작성", "디버깅"],
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
