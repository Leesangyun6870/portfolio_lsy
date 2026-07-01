// 더미데이터: 디자인 카드 + 팝업 상세 내용
const designData = [
  {
    id: "design-01",
    img: "/images/minari.png",
    thumbnailColor: "#f4ede0",
    badge: "초록마을",
    title: "무농약이상 미나리 (300g)",
    category: "편집 · 패키지 디자인 2026",
    name: "초록마을 미나리",
    tools: ["Figma", "Pinterest"],
    detail: {
      summary:
        "친환경 농산물 브랜드의 패키지 라벨 디자인입니다. 신선함과 신뢰감을 동시에 전달하기 위해 손글씨 느낌의 로고와 채도 낮은 그린 톤을 사용했습니다.",
      role: "패키지 디자인, 로고 디자인",
      period: "2026.01",
      stack: ["Figma", "Illustrator"],
      points: [
        "친환경 인증 정보를 한눈에 보이도록 레이아웃 구성",
        "손글씨 로고타입으로 신뢰감 있는 브랜드 톤 구축",
        "인쇄용 라벨 사이즈 가이드에 맞춘 제작 데이터 정리",
      ],
    },
  },
  {
    id: "design-02",
    img: "/images/samchuly.png",
    thumbnailColor: "#76886f",
    badge: null,
    title: "삼천리 자전거 브랜딩",
    category: "편집 디자인 2026",
    name: "디자인 02",
    tools: ["Figma", "Pinterest"],
    detail: {
      summary:
        "브랜드 아이덴티티 무드보드 작업입니다. 컬러와 타이포그래피 조합을 다양하게 탐색하며 톤앤매너를 정립했습니다.",
      role: "무드보드, 컬러 시스템",
      period: "2026.02",
      stack: ["Figma"],
      points: [
        "레퍼런스 30건 수집 및 분류",
        "메인/서브 컬러 팔레트 3안 제작",
        "타이포그래피 조합 테스트",
      ],
    },
  },
  {
    id: "design-03",
    img: "/images/mint.PNG",
    thumbnailColor: "#76886f",
    badge: null,
    title: "페퍼민트 랜딩페이지",
    category: "편집 디자인 2026",
    name: "디자인 03",
    tools: ["Figma", "Pinterest"],
    detail: {
      summary:
        "포스터형 비주얼 작업입니다. 텍스트와 이미지의 여백을 활용해 차분한 인상을 주는 데 중점을 두었습니다.",
      role: "비주얼 디자인",
      period: "2026.03",
      stack: ["Figma", "Photoshop"],
      points: [
        "여백을 활용한 레이아웃 구성",
        "이미지 보정 및 색감 통일",
        "인쇄/디지털 두 버전 제작",
      ],
    },
  },
  {
    id: "design-04",
    img: "/images/bookpid.png",
    thumbnailColor: "#76886f",
    badge: null,
    title: "책 pid 디자인",
    category: "편집 디자인 2026",
    name: "디자인 04",
    tools: ["Figma", "Pinterest"],
    detail: {
      summary:
        "SNS 카드뉴스 시리즈 디자인입니다. 정보 전달력을 높이기 위해 일관된 그리드와 아이콘 세트를 활용했습니다.",
      role: "카드뉴스 디자인",
      period: "2026.04",
      stack: ["Figma"],
      points: [
        "공통 그리드 시스템 설계",
        "아이콘 세트 제작 및 적용",
        "총 6장 시리즈 콘텐츠 구성",
      ],
    },
  },
  {
    id: "design-05",
    img: "/images/wellage.png",
    thumbnailColor: "#76886f",
    badge: null,
    title: "화장품 sns 피드",
    category: "편집 디자인 2026",
    name: "디자인 05",
    tools: ["Figma", "Pinterest"],
    detail: {
      summary:
        "SNS 카드뉴스 시리즈 디자인입니다. 정보 전달력을 높이기 위해 일관된 그리드와 아이콘 세트를 활용했습니다.",
      role: "카드뉴스 디자인",
      period: "2026.05",
      stack: ["Figma"],
      points: [
        "공통 그리드 시스템 설계",
        "아이콘 세트 제작 및 적용",
        "총 6장 시리즈 콘텐츠 구성",
      ],
    },
  },
  {
    id: "design-05",
    img: "/images/Shopping.png",
    thumbnailColor: "#76886f",
    badge: null,
    title: "shopping 앱디자인",
    category: "편집 디자인 2026",
    name: "디자인 05",
    tools: ["Figma", "Pinterest"],
    detail: {
      summary:
        "SNS 카드뉴스 시리즈 디자인입니다. 정보 전달력을 높이기 위해 일관된 그리드와 아이콘 세트를 활용했습니다.",
      role: "카드뉴스 디자인",
      period: "2026.05",
      stack: ["Figma"],
      points: [
        "공통 그리드 시스템 설계",
        "아이콘 세트 제작 및 적용",
        "총 6장 시리즈 콘텐츠 구성",
      ],
    },
  },
{
    id: "design-08",
    img: "/images/cafe24.png",
    thumbnailColor: "#76886f",
    badge: null,
    title: "카페24 쇼핑몰",
    category: "편집 디자인 2026",
    name: "디자인 05",
    tools: ["Figma", "Pinterest"],
    detail: {
      summary:
        "SNS 카드뉴스 시리즈 디자인입니다. 정보 전달력을 높이기 위해 일관된 그리드와 아이콘 세트를 활용했습니다.",
      role: "카드뉴스 디자인",
      period: "2026.05",
      stack: ["Figma"],
      points: [
        "공통 그리드 시스템 설계",
        "아이콘 세트 제작 및 적용",
        "총 6장 시리즈 콘텐츠 구성",
      ],
    },
  },
];

export default designData;
