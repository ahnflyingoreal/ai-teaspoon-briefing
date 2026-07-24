// ─────────────────────────────────────────────────────────
// 새 브리핑을 올리는 방법 (구글 드라이브 사용)
// 1) 오늘 만든 PDF를 구글 드라이브의 지정 폴더에 업로드한다
// 2) 그 파일을 우클릭 → 공유 → "링크 있는 모든 사용자로 변경" → 링크 복사
// 3) 아래 POSTS 배열 맨 위에 항목을 추가하고, pdf 값에 복사한 링크를 그대로 붙여넣는다
//    (링크 형태 예: https://drive.google.com/file/d/여기에_긴_ID/view?usp=sharing)
// 4) 카드에 작은 표지 이미지를 보여주려면 assets/thumbs 폴더에 정사각형에 가까운
//    작은 이미지(가로 480px 정도, 용량 수십 KB)를 넣고 thumb 값에 그 경로를 적는다.
//    (이미지가 없으면 thumb를 null로 두면 되고, 카드는 텍스트만 표시된다)
// 5) GitHub에 커밋 & 푸시하면 자동으로 반영된다 (별도 빌드 불필요)
//
// ※ 아래 두 항목은 기존 예시로, pdfs·thumbs 폴더의 로컬 파일을 그대로 쓰고 있습니다.
//    로컬 경로와 구글 드라이브 링크는 섞어 써도 문제없습니다.
// ─────────────────────────────────────────────────────────

const POSTS = [
  {
    date: "2026-07-24",
    title: "AI 시대, 교사의 첫 판단이 중요한 이유",
    subtitle: "내가 먼저 생각하고, AI는 옆에서 돕는다",
    summary: "AI가 제시하는 결과나 점수에 휩쓸리지 않고, 교사가 먼저 아이의 행동과 기록을 관찰하고 판단하는 과정의 중요성을 다룹니다. 교사의 주체적인 시각과 비판적 사고가 유아 AI 교육에서 왜 필수적인지 안내합니다.",
    tags: ["유아AI교육","교사판단","리터러시"],
    pdf: "https://drive.google.com/file/d/1nJjVXqW_0aG3ORGs3JRxShV8lOe1K0wJ/view?usp=sharing",
    thumb: "assets/thumbs/2026-07-24.jpg",
  },
  {
    date: "2026-07-20",
    title: "아이에게 AI를 건네기 전, 교사의 기준",
    subtitle: null,
    summary: "유아교육 현장에서 AI를 도입할 때는 신기한 기능보다 개인정보 보호와 교사의 통제력, 주도권 유지가 우선되어야 합니다. 교사는 AI를 대체재가 아닌 보조 도구로 활용하며, 교육적 의도 안에서 안전하고 균형 있게 설계해야 합니다.",
    tags: ["유아교육AI","교사전문성","디지털기준"],
    pdf: "https://drive.google.com/file/d/1susGHZlREkdz1aElyttl9DpZkN6FHi7T/view?usp=sharing",
    thumb: "assets/thumbs/2026-07-20.jpg",
  },
  {
    date: "2026-07-22",
    title: "AI 시대, 유아교육이 지켜야 할 힘",
    subtitle: "기술의 속도가 곧 교육의 속도는 아닙니다",
    summary: "AI 시대의 유아교육은 새로운 기술을 빨리 도입하는 것보다 아이의 질문, 협력, 자기 조절, 스스로 배우는 힘을 기르는 데 집중해야 합니다. 교사는 AI와 디지털 도구를 사용할 때 목적과 입력 자료 보호, 검토 책임 기준을 분명히 세워야 합니다.",
    tags: ["일일 브리핑","AI 유아교육","미래역량"],
    pdf: "https://drive.google.com/file/d/1pvXWfA7BA-0Edy4QlifpC5BxDKPuvOLt/view?usp=sharing",
    thumb: "assets/thumbs/2026-07-22.jpg",
  },
  {
    date: "2026-07-23",
    title: "AI, 막상 써 보니 어렵지 않았다",
    subtitle: "“이 정도면 나도 쓰겠네”",
    summary: "교사가 AI를 계속 쓰게 만든 건 화려한 기능이 아니라 “내 일에 써보니 쓸 만하다”는 작은 성공 경험이었다. 현직 유아교사 270명, 434명 워크숍 사례를 통해 자기효능감과 좋은 피드백의 조건을 살펴본다.",
    tags: ["일일 브리핑","AI 자기효능감","좋은 피드백","연구회 실천"],
    pdf: "pdfs/2026-07-23.pdf",
    thumb: "assets/thumbs/2026-07-23.jpg",
  },
  {
    date: "2026-07-21",
    title: "AI 기업 ‘업무 플랫폼’ 전쟁 예고",
    subtitle: null,
    summary: "Anthropic과 OpenAI가 교사 전용 AI 생태계를 경쟁적으로 내놓기 시작했다. 한편 유아교육 연구는 AI의 효과보다 교사의 검토, 아이의 AI 이해, 사람과의 관계를 더 깊게 묻는다.",
    tags: ["일일 브리핑","AI 교육","유아교육","교사 연구회"],
    pdf: "pdfs/2026-07-21.pdf",
    thumb: "assets/thumbs/2026-07-21.jpg",
  },
];
