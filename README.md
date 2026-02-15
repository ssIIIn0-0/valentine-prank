# Valentine Prank

> "거절은 없다" - 발렌타인 데이트 초대장 웹앱

상대방에게 발렌타인 데이트를 신청하는 인터랙티브 초대장 웹 애플리케이션입니다.
"싫어요" 버튼이 도망가는 장난스러운 UX로, 결국 "좋아요"를 누를 수밖에 없게 만듭니다.

**[Live Demo](https://valentine-prank-nine.vercel.app/)**

---

## Preview

### 1. 비밀 초대장 도착
편지 봉투 애니메이션과 함께 "누군가로부터 비밀 초대장이 도착했습니다"라는 메시지가 표시됩니다.

### 2. 장난스러운 선택지
"네 너무 좋아요"와 "절대 싫어요" 두 가지 버튼이 나타나지만, **"싫어요" 버튼은 마우스를 올리면 랜덤한 위치로 도망갑니다.**

### 3. 초대장 공개
수락 시 떠다니는 하트 이모지와 함께 발렌타인 데이트 초대 메시지가 나타납니다.

---

## Features

- **도망가는 거절 버튼** - hover/touch 시 뷰포트 내 랜덤 위치로 이동
- **3단계 페이지 플로우** - 기대감 → 장난 → 감동의 흐름 설계
- **다양한 CSS 애니메이션** - 바운스, 페이드인, 펄스, 플로팅 이모지
- **반응형 디자인** - 모바일 터치 이벤트 지원 (`onTouchStart`)
- **24개 플로팅 이모지** - 랜덤 크기/속도/위치로 떠오르는 하트 애니메이션

---

## Tech Stack

| 구분 | 기술 |
|------|------|
| Frontend | React 19 |
| Styling | CSS (Custom Animations) |
| Build Tool | Create React App |
| Deploy | Vercel |

---

## Getting Started

```bash
# 레포지토리 클론
git clone https://github.com/your-username/valentine-prank.git

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

`http://localhost:3000`에서 확인할 수 있습니다.

---

## Project Structure

```
src/
├── App.js        # 메인 컴포넌트 (3페이지 플로우 & 인터랙션 로직)
├── App.css       # 스타일링 & 애니메이션 정의
├── index.js      # 엔트리 포인트
└── index.css     # 글로벌 스타일
```

---

## Key Implementation

### 도망가는 버튼

```jsx
const runAway = useCallback(() => {
  const newTop = Math.random() * 80 + 5;
  const newLeft = Math.random() * 80 + 5;
  setNoButtonPosition({ top: newTop, left: newLeft });
}, []);
```

`useCallback`으로 최적화된 핸들러가 hover/touch 이벤트마다 버튼의 `position`을 랜덤하게 변경합니다.

### 플로팅 이모지

24개의 이모지가 각각 랜덤한 위치, 크기(1.2~3rem), 속도(3~7초), 딜레이(0~3초)로 화면 아래에서 위로 떠오르며 360도 회전합니다.

---

## Deploy

Vercel을 통해 자동 배포됩니다.

```bash
npm run build
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
