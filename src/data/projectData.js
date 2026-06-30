// 더미데이터: 프로젝트 카드 + 팝업 상세 내용
const projectData = [
  {
    id: "proj-01",
    thumbnailColor: "#fbf6ee",
    badge: "shem 프로젝트",
    title: "당신의 마음에 주님께서 함께하십니다",
    subtitle: "지금 잠깐의 여유가 있으신가요?",
    category: "기획 · 디자인 · 코딩 2026",
    name: "shem 프로젝트",
    tools: ["Figma", "Notion", "Github", "Code"],
    detail: {
      summary:
        "신앙 콘텐츠를 짧은 카드 형태로 큐레이션하는 모바일 웹 서비스입니다. 사용자가 하루 중 짧은 틈에도 부담 없이 말씀과 묵상을 접할 수 있도록, 카드 한 장을 넘기는 행위에 집중한 인터랙션을 설계했습니다.",
      role: "기획, UI/UX 디자인, 퍼블리싱",
      period: "2026.01 - 2026.02",
      stack: ["Figma", "HTML/CSS", "JavaScript"],
      points: [
        "하루 1장의 말씀 카드 UX 플로우 설계",
        "감정 상태 선택 후 맞춤 콘텐츠 추천 로직 기획",
        "카드 스와이프 인터랙션 프로토타입 제작",
      ],
    },
  },
  {
    id: "proj-02",
    thumbnailColor: "#e7ede4",
    badge: null,
    title: "프로젝트 02",
    subtitle: null,
    category: "기획 · 디자인 · 코딩 2026",
    name: "shem 프로젝트",
    tools: ["Figma", "Notion", "Github", "Code"],
    detail: {
      summary:
        "사용자 리서치를 바탕으로 한 정보구조 재설계 프로젝트입니다. 기존 서비스의 이탈 지점을 분석하고, 핵심 플로우를 단순화하여 전환율을 개선하는 데 집중했습니다.",
      role: "UX 리서치, 와이어프레임, 디자인 시스템",
      period: "2026.02 - 2026.03",
      stack: ["Figma", "Notion"],
      points: [
        "사용자 인터뷰 8건 진행 및 페인포인트 도출",
        "정보구조(IA) 재설계 및 핵심 플로우 단순화",
        "재사용 가능한 컴포넌트 기반 디자인 시스템 구축",
      ],
    },
  },
  {
    id: "proj-03",
    thumbnailColor: "#e7ede4",
    badge: null,
    title: "프로젝트 03",
    subtitle: null,
    category: "기획 · 디자인 · 코딩 2026",
    name: "shem 프로젝트",
    tools: ["Figma", "Notion", "Github", "Code"],
    detail: {
      summary:
        "산업 현장 경험을 살린 설비 점검 기록 도구 기획 프로젝트입니다. 현장 작업자가 빠르게 입력하고, 관리자는 한눈에 현황을 파악할 수 있도록 화면을 설계했습니다.",
      role: "기획, 프로토타이핑",
      period: "2026.03 - 2026.04",
      stack: ["Figma", "Github"],
      points: [
        "현장 작업자 입력 플로우 단순화 (3탭 이내 완료)",
        "관리자용 대시보드 와이어프레임 설계",
        "체크리스트 기반 점검 항목 데이터 모델링",
      ],
    },
  },
];

export default projectData;
