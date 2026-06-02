# 신화 포트폴리오 · 부동산 × AI

> 부동산 업무를 AI로 혁신하는 공인중개사 · AI 강사 **신화**의 개인 포트폴리오.
> 순수 HTML·CSS·JS로 제작 · 모바일 우선 · 라이트/다크 모드 · GitHub Pages 배포.

## ✨ 특징

- **빌드 없음**: 프레임워크·번들러·의존성 0. 파일을 그대로 열면 동작합니다.
- **모바일 우선 반응형**: 320px(작은 폰)부터 데스크탑까지 자연스럽게 대응.
- **라이트/다크 모드**: OS 설정 자동 감지 + 토글(선택값 저장).
- **콘텐츠 분리**: 내용 수정은 [`js/projects.js`](js/projects.js) 한 파일에서.

## 📁 파일 구조

```
0531_pf/
├── index.html          # 페이지 본문 (구조)
├── css/styles.css       # 디자인(색·여백·반응형·다크모드)
├── js/
│   ├── projects.js      # ⭐ 내용 수정은 여기 (이름·연락처·프로젝트)
│   └── main.js          # 동작 로직 (수정 불필요)
├── assets/              # 파비콘·OG 이미지
├── .nojekyll            # GitHub Pages 정적 처리
└── README.md
```

## 🛠 내용 수정하는 법 (코딩 몰라도 OK)

[`js/projects.js`](js/projects.js) 파일만 열어 수정하세요.

1. **GitHub username**: `SITE.githubUser`에 본인 username 입력 → 연락처 GitHub 링크 자동 연결
2. **연락처**: `SITE.contacts`에서 `value`(보이는 텍스트)·`href`(링크) 수정
3. **프로젝트**: `PROJECTS` 배열에서 각 프로젝트의 `github`·`demo`에 전체 주소(`https://...`) 입력
   - 링크를 빈 문자열(`""`)로 두면 자동으로 **"준비 중"**으로 표시됩니다.

## ▶️ 로컬에서 미리보기

### 가장 빠름 — 더블클릭
`index.html`을 더블클릭하면 브라우저에서 바로 열립니다.

### 권장 — 로컬 서버 (폰트 CDN 안정적)
PowerShell에서:

```powershell
cd c:\Users\pc\conuna\0531_pf
python -m http.server 8000
```

브라우저에서 <http://localhost:8000> 접속.

### 모바일 확인
Chrome에서 F12 → 좌측 상단 디바이스 아이콘 → iPhone SE / Galaxy 등 선택.

## 🚀 GitHub Pages 배포

```bash
git init
git add .
git commit -m "feat: 포트폴리오 초기 버전"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

그 다음 GitHub 저장소에서:
**Settings → Pages → Source: `main` 브랜치 `/ (root)` → Save**

1~2분 후 `https://<USERNAME>.github.io/<REPO>` 주소로 공개됩니다.

## 📝 할 일

- [x] `githubUser`(sachol)·연락처(이메일·Instagram·gpters·GitHub) 채우기
- [x] `assets/og-image.png` 생성 (1200×630, SNS 미리보기용)
- [x] cityuncle 프로젝트 GitHub·데모(Pages) 링크 연결
- [x] RSA 계산기 데모 링크 연결 (rsa-fee-calculator.vercel.app)
- [ ] **부동산 크롤러** GitHub에 push 후 `js/projects.js`의 `github`/`demo` 입력 (현재 "준비 중")
- [ ] RSA 계산기 공개 저장소 있으면 `github` 링크 추가
- [ ] `assets/`에 프로필 사진 추가 (선택)
- [ ] GitHub Pages 배포 후 실제 핸드폰에서 확인

> OG 이미지를 다시 만들려면 `assets/og-image.svg`(편집용 원본) 또는 같은 디자인의 HTML을 1200×630으로 캡처하세요.

---

© 신화 · 부동산 × AI
