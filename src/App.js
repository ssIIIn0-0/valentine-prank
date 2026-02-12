import { useState, useCallback } from 'react';
import './App.css';

const EMOJIS = ['❤️', '💕', '💖', '💗', '🎈', '🩷', '💘', '🫶', '🌹', '💐', '🎀', '💝'];

function Page1({ onNext }) {
  return (
    <div className="page page1">
      <div className="envelope">💌</div>
      <h1 className="title fade-in">누군가로부터<br />비밀 초대장이 도착했습니다</h1>
      <p className="subtitle fade-in-delay">발신인: ???</p>
      <button className="btn btn-next" onClick={onNext}>
        확인하기
      </button>
    </div>
  );
}

function Page2({ onAccept }) {
  const [noPos, setNoPos] = useState({ top: '50%', left: '65%' });

  const runAway = useCallback(() => {
    const maxX = 80;
    const maxY = 80;
    const newLeft = Math.random() * maxX + 5;
    const newTop = Math.random() * maxY + 5;
    setNoPos({ top: `${newTop}%`, left: `${newLeft}%` });
  }, []);

  return (
    <div className="page page2">
      <h1 className="title fade-in">초대장을 열어보시겠습니까?</h1>
      <div className="button-area">
        <button className="btn btn-yes" onClick={onAccept}>
          네 너무 좋아요 💖
        </button>
        <button
          className="btn btn-no"
          style={{ position: 'absolute', top: noPos.top, left: noPos.left }}
          onMouseEnter={runAway}
          onTouchStart={runAway}
        >
          절대 싫어요 🙅
        </button>
      </div>
    </div>
  );
}

function FloatingEmoji({ emoji, style }) {
  return (
    <span className="floating-emoji" style={style}>
      {emoji}
    </span>
  );
}

function Page3() {
  const emojis = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    emoji: EMOJIS[i % EMOJIS.length],
    style: {
      left: `${Math.random() * 95}%`,
      animationDuration: `${3 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 3}s`,
      fontSize: `${1.2 + Math.random() * 1.8}rem`,
    },
  }));

  return (
    <div className="page page3">
      <div className="invitation-card fade-in">
        <div className="card-deco top-deco">~ ♥ ~</div>
        <h1 className="card-title">Happy Valentine's Day</h1>
        <div className="card-divider">❤️</div>
        <p className="card-message">
          당신을 발렌타인 데이트에<br />
          정중히 초대합니다.
        </p>
        <p className="card-detail">
          📅 2월 14일 저녁 7시<br />
          📍 우리만의 특별한 장소에서
        </p>
        <p className="card-footer">with all my love 💕</p>
        <div className="card-deco bottom-deco">~ ♥ ~</div>
      </div>
      {emojis.map(({ id, emoji, style }) => (
        <FloatingEmoji key={id} emoji={emoji} style={style} />
      ))}
    </div>
  );
}

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      {page === 1 && <Page1 onNext={() => setPage(2)} />}
      {page === 2 && <Page2 onAccept={() => setPage(3)} />}
      {page === 3 && <Page3 />}
    </div>
  );
}

export default App;
