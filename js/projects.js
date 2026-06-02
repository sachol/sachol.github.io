/* =====================================================================
   신화 포트폴리오 · projects.js  (콘텐츠 단일 소스)
   ---------------------------------------------------------------------
   ⭐ 이 파일만 수정하면 사이트 내용이 바뀝니다. 코드 지식 없어도 OK.
   - 아래 SITE: 이름 / GitHub username / 연락처
   - 아래 PROJECTS: 프로젝트 카드 목록
   - 링크(github, demo, href)를 빈 문자열("")로 두면 "준비 중"으로 표시됩니다.
   ===================================================================== */

/* ---------- 사이트 기본 정보 ---------- */
const SITE = {
  name: "신화",

  // GitHub username → 아래 contacts의 GitHub 링크가 자동 연결됩니다.
  githubUser: "sachol",

  // 연락처 카드 (필요 없는 항목은 통째로 지우셔도 됩니다)
  contacts: [
    {
      icon: "✉️",
      label: "이메일",
      value: "sachol.cap@gmail.com",
      href: "mailto:sachol.cap@gmail.com",
    },
    {
      icon: "📷",
      label: "Instagram",
      value: "@sachol09",
      href: "https://instagram.com/sachol09",
    },
    {
      icon: "💬",
      label: "카카오톡 오픈채팅",
      value: "오픈채팅 링크 준비 중", // 👈 링크 생기면 value/href 수정
      href: "",
    },
    {
      icon: "🎓",
      label: "gpters",
      value: "gpters 22기 AI 강사",
      href: "", // 👈 gpters 프로필/소개 링크가 있으면 입력
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "GitHub 프로필",
      href: "", // 비워 두면 위 githubUser로 자동 생성됩니다
    },
  ],
};

/* ---------- 프로젝트 목록 ----------
   각 항목 필드:
   - emoji   : 카드 상단 아이콘
   - title   : 프로젝트 이름
   - period  : 기간/버전 (자유 텍스트)
   - desc    : 한 문단 설명
   - tags    : 기술 태그 배열
   - github  : 소스 저장소 URL (없으면 "")
   - demo    : 실행/데모 URL (없으면 "")
   👉 GitHub repo가 준비되면 github/demo에 전체 주소(https://...)를 넣으세요.
*/
const PROJECTS = [
  {
    emoji: "📰",
    title: "부동산 아침 브리핑 크롤러",
    period: "Python · Streamlit · 자동화",
    desc: "Windows 작업 스케줄러로 매일 오전 8시 자동 실행되어, 부동산 뉴스·실거래가·기준금리·인기뉴스를 수집하고 아침 브리핑을 만들어 텔레그램·메일로 자동 발송합니다. 수집→필터→저장→보고서→알림을 계층형 아키텍처(Repository 패턴·추상 인터페이스·불변 dataclass)로 설계했습니다.",
    tags: ["Python", "Streamlit", "작업 스케줄러", "공공데이터 API", "Telegram"],
    github: "https://github.com/sachol/budongsan-crawler",
    demo: "", // 로컬에서 도는 자동화 스크립트라 웹 데모 없음 (Streamlit Cloud 배포 시 입력)
  },
  {
    emoji: "⚡",
    title: "공인중개사 5분 입문 — Claude Cowork 가이드",
    period: "HTML · Tailwind · gpters 22기",
    desc: "공인중개사가 5분 안에 AI(Claude Cowork)를 따라 할 수 있는 1페이지 인터랙티브 가이드. 매물 분석·광고·카톡 응대·보고서 4가지 진입점과 폰↔데스크탑 Dispatch 시연, 라이트/다크 모드를 담았습니다.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "반응형", "라이트/다크"],
    github: "https://github.com/sachol/cityuncle-cowork-intro-dashboard",
    demo: "https://sachol.github.io/cityuncle-cowork-intro-dashboard/",
  },
  {
    emoji: "🧮",
    title: "RSA 부동산 중개보수 요율 계산기",
    period: "Next.js · React · TS · v4.0",
    desc: "전국 17개 시·도 요율을 자동 적용해 주택 매매·임대차·오피스텔·상가 4종의 중개보수를 즉시 계산하는 웹앱. 한국은행 기준금리 연동 전월세 전환(양방향)과 법정 상한 자동 검증(주임법 제7조의2)을 지원하며, 회원가입·설치 없이 모바일에서 바로 사용할 수 있습니다.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "모바일 최적화"],
    github: "", // 공개 저장소 준비되면 입력
    demo: "https://rsa-fee-calculator.vercel.app",
  },
  {
    emoji: "📣",
    title: "부동산 광고 자동 생성 (4채널)",
    period: "HTML · Python · 진행 중",
    desc: "매물 정보를 입력하면 블로그·당근·인스타 등 여러 채널용 광고 카피를 자동으로 만들어 주는 AI 마케팅 도구. 한 번 입력으로 채널별 톤에 맞춘 문구를 한 번에 생성합니다. (신화AI부동산)",
    tags: ["HTML", "Python", "AI 마케팅", "광고 자동화"],
    github: "https://github.com/sachol/realty-ad-automation",
    demo: "https://realty-ad-automation.vercel.app",
  },
  {
    emoji: "📊",
    title: "부동산 자동화 대시보드 (콜라)",
    period: "JavaScript · OpenClaw × n8n · 진행 중",
    desc: "OpenClaw와 n8n 워크플로를 연동해 부동산 반복 업무를 자동화하는 대시보드. 수집·정리·알림 흐름을 한 화면에서 관리합니다.",
    tags: ["JavaScript", "n8n", "OpenClaw", "업무 자동화"],
    github: "https://github.com/sachol/cola-dashboard",
    demo: "https://cola-dashboard-three.vercel.app",
  },
  {
    emoji: "🎤",
    title: "공인중개사 AI 활용 특강 (180분)",
    period: "HTML · 강의 자료 · 진행 중",
    desc: "공인중개사를 위한 180분 AI 활용 특강 자료를 한 페이지 웹으로 정리. 실무에 바로 적용하는 AI 도구 활용법을 단계별로 안내합니다.",
    tags: ["HTML", "CSS", "강의 자료"],
    github: "https://github.com/sachol/shinhwa-ai-lecture",
    demo: "https://shinhwa-ai-lecture.vercel.app",
  },
  {
    emoji: "🧩",
    title: "공인중개사를 위한 n8n 가이드",
    period: "HTML · 가이드 · 진행 중",
    desc: "업무 자동화 도구 n8n을 공인중개사가 직접 설치하고 활용하는 방법을 단계별로 정리한 가이드 페이지.",
    tags: ["HTML", "n8n", "자동화 가이드"],
    github: "https://github.com/sachol/dosiajae-n8n-guide",
    demo: "https://sachol.github.io/dosiajae-n8n-guide/",
  },
];
