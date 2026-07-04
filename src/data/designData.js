// 더미데이터: 디자인 카드 + 팝업 상세 내용
const designData = [
  {
    id: "design-01",
    img: "/images/Design_img/minari.png",
    thumbnailColor: "#fff",
    badge: "초록마을",
    title: "무농약이상 미나리. (300g)",
    category: "리서치, 기획, 디자인",
    name: "초록마을 미나리 상세페이지.",
    tools: ["Notion", "Figma", "Photoshop"],
    detail: {
      summary:
        "초록마을 판매 사이트 내, 판매율이 가장높은 미나리를 소개하는 페이지입니다. 기존의 페이지에서 신뢰성을 추가한 내용 구성을 추가하였습니다.",
      role: "전체 상세페이지 디자인.",
      period: "7~10일 소요",
      stack: ["Notion", "Figma", "Photoshop"],
      points: [
        "초록마을 브랜드의 인지도를 소개한 Section을 구성하였습니다.",
        "홈페이지에 기재된 각종 검사 중 채소에 해당하는 농약 검사 항목 집중적으로 소개하였습니다.",
        "국내외 인증 통과 마크를 소개한 Section을 구성하였습니다.",
      ],
    },
  },

  {
    id: "design-02",
    img: "/images/Design_img/mint.png",
    thumbnailColor: "#fff",
    badge: null,
    title: "페퍼민트 사탕 랜딩페이지.",
    category: "리서치, 기획, 디자인",
    name: "페퍼민트 사탕 랜딩페이지.",
    tools: ["Notion", "Figma", "Photoshop"],
    detail: {
      summary:
        "페퍼민트 성분의 사탕을 섭취가 필요한 사람들에게 정보전달을 하고 구매를 돕기 위한 페이지디자인.",
      role: "전체 랜딩페이지 디자인",
      period: "7~10일 소요",
      stack: ["Notion", "Figma", "Photoshop"],
      points: [
        "Refresh라는 키워드를 정하여 감정전달을 위한 스타일 시스템을 구성했습니다.",
        "페퍼민트가 필요한 상황을 제시한 Section을 구성하였습니다.",
      ],
    },
  },
  {
    id: "design-03",
    img: "/images/Design_img/cafe24.png",
    thumbnailColor: "#fff",
    badge: null,
    title: "카페24 러닝 쇼핑몰.",
    category: "리서치, 기획, 디자인",
    name: "카페24 러닝 쇼핑몰.",
    tools: ["Notion", "Figma", "ChatGPT", "Gemini"],
    detail: {
      summary:
        "가민 브랜드의 카테고리 중 최근 과학적으로 건강 스포츠로 입증된 러닝 한가지의 용품을 판매하는 쇼핑몰",
      role: "전체 쇼핑몰 페이지 디자인.",
      period: "7일 소요",
      stack: ["Notion", "Figma", "ChatGPT", "Gemini"],
      points: [
        "러닝 하고싶은 욕구를 자극하는 이미지와 구성을 각각의 섹션에 적용하였습니다.",
        "러닝의 기록을 분석할 수 있는 제품을 소개한 후 하단에 관련 배너를 배치하였습니다.",
      ],
    },
  },

  {
    id: "design-04",
    img: "/images/Design_img/bookpid.png",
    thumbnailColor: "#fff",
    badge: null,
    title: "도서 홍보물 디자인.",
    category: "리서치, 기획, 디자인.",
    name: "도서 홍보물 디자인.",
    tools: ["Notion", "Figma", "Photoshop", "Illustrator"],
    detail: {
      summary:
        "기독교 서적 '마침내 이음'을 읽고 따뜻함과 캄보디아 선교의 응원의 메세지를 담은 디자인제작.",
      role: "전체 작품 디자인.",
      period: "7일~10일 소요.",
      stack: ["Notion", "Figma", "Photoshop", "Illustrator"],
      points: [
        "따뜻함을 전달하는 스타일 시스템을 구성하였습니다.",
        "캄보디아의 문화제와 노을 진 하늘을 연결하는 중간 텍스트와 마스킹을 하였습니다.",
      ],
    },
  },
  {
    id: "design-05",
    img: "/images/Design_img/wellage.png",
    thumbnailColor: "#fff",
    badge: null,
    title: "화장품 SNS 피드.",
    category: "리서치, 디자인",
    name: "화장품 SNS 피드.",
    tools: ["Notion", "Figma", "Photoshop"],
    detail: {
      summary:
        "Wellage의 인기 제품 중 수분 부족 피부를 위한 수분보충 에센스 제품을 홍보한 피드를 제작하였습니다.",
      role: "전체 작품 디자인.",
      period: "1일 소요",
      stack: ["Notion", "Figma", "Photoshop"],
      points: [
        "시원함의 감정을 전달하기 위한 레퍼런스를 참고하였습니다.",
        "실제 제품의 이미지를 입체감 있게 디자인하였습니다.",
      ],
    },
  },
  {
    id: "design-05",
    img: "/images/Design_img/Shopping.png",
    thumbnailColor: "#fff",
    badge: null,
    title: "쇼핑 앱디자인.",
    category: "리서치, 디자인",
    name: "쇼핑 앱디자인.",
    tools: ["Notion", "Figma", "ChatGPT"],
    detail: {
      summary:
        "기존 실습한 내용에서 추가로 3번의 클릭 이내에 결제를 마치는 앱 화면의 디자인을 하였습니다. ",
      role: "전체 작품 디자인.",
      period: "7일 소요.",
      stack: ["Notion", "Figma", "ChatGPT"],
      points: [
        "최종 결제창에 배송비와 쿠폰 적용 값이 미리 통합된 값을 볼 수 있어 사용자의 불편함을 배려했습니다.",
        "기다리는 사용자를 위해 현 배송 단계를 직관적으로 확인할 수 있는 디자인하였습니다. ",
      ],
    },
  },
  {
    id: "design-07",
    img: "/images/Design_img/samchuly.png",
    thumbnailColor: "#fff",
    badge: null,
    title: "브랜딩 로고 디자인",
    category: "리서치, 기획, 디자인",
    name: "브랜딩 로고 디자인",
    tools: ["Notion", "Figma", "Photoshop", "Illustrator, ChatGPT"],
    detail: {
      summary:
        "국내 삼천리 자전거 브랜드에 전기 모빌리티 기술을 접목한 브랜드 리디자인.",
      role: "전체 작품 디자인.",
      period: "2주 소요",
      stack: ["Notion", "Figma", "Photoshop", "Illustrator", "ChatGPT"],
      points: [
        "전문성과 현대적인 감성 전달을 목적으로 스타일 시스템을 구성하였습니다.",
        "세부적인 내용을 담은 브랜드 프로세스를 제작하였습니다. ",
      ],
    },
  },
];

export default designData;
