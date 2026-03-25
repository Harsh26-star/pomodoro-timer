function Candle({ pct = 1 }) {
  // pct: 1.0 = full candle, 0.0 = burned out
  const MAX_H = 110;
  const MIN_H = 14;
  const candleHeight = MIN_H + (MAX_H - MIN_H) * pct;
  const burnedOut = pct <= 0;

  const drip1H = pct < 0.82 ? Math.round((0.82 - pct) * 72 + 8) : 0;
  const drip2H = pct < 0.60 ? Math.round((0.60 - pct) * 72 + 8) : 0;
  const drip3H = pct < 0.38 ? Math.round((0.38 - pct) * 72 + 8) : 0;

  return (
    <div className="flex flex-col items-center select-none">
      <style>{`
        @keyframes flicker {
          0%   { transform: translateX(-50%) scaleX(1)    scaleY(1);    opacity: 1; }
          50%  { transform: translateX(-50%) scaleX(0.88) scaleY(0.94); opacity: 0.92; }
          100% { transform: translateX(-50%) scaleX(0.96) scaleY(0.97); opacity: 1; }
        }
        @keyframes sway {
          0%   { transform: translateX(-50%) rotate(-5deg); }
          100% { transform: translateX(-50%) rotate(5deg); }
        }
        @keyframes glowPulse {
          0%   { opacity: 0.55; }
          100% { opacity: 0.9; }
        }
        @keyframes smokeRise {
          0%   { transform: translateX(-50%) scaleX(1);   opacity: 0.45; height: 8px; }
          100% { transform: translateX(-52%) scaleX(2.2); opacity: 0;    height: 48px; }
        }
        .candle-flame {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 22px;
          height: 40px;
          border-radius: 50% 50% 30% 30% / 60% 60% 30% 30%;
          background: radial-gradient(ellipse at 50% 80%, #fff 0%, #ffe85c 28%, #ff9c1a 58%, #d95200 100%);
          animation: flicker 0.14s ease-in-out infinite alternate, sway 2s ease-in-out infinite alternate;
          transform-origin: 50% 100%;
          filter: blur(0.4px);
        }
        .candle-flame::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 9px;
          height: 16px;
          border-radius: 50% 50% 30% 30% / 60% 60% 30% 30%;
          background: radial-gradient(ellipse at 50% 80%, #fff 0%, #ffe490 50%, transparent 100%);
          opacity: 0.65;
        }
        .candle-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 72px;
          height: 56px;
          background: radial-gradient(ellipse at 50% 100%, rgba(255,170,30,0.38) 0%, transparent 70%);
          animation: glowPulse 1.3s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .candle-smoke {
          position: absolute;
          bottom: 24px;
          left: 50%;
          width: 4px;
          background: linear-gradient(to top, rgba(160,150,140,0.5), transparent);
          border-radius: 2px;
          animation: smokeRise 1.6s ease-out infinite;
        }
      `}</style>

      {/* Flame / smoke area */}
      <div style={{ position: 'relative', width: 48, height: 58, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: -3 }}>
        {!burnedOut && <div className="candle-glow" />}
        {!burnedOut && <div className="candle-flame" />}
        {burnedOut && <div className="candle-smoke" />}
      </div>

      {/* Wick */}
      <div style={{
        width: 2,
        height: 9,
        background: burnedOut ? '#555' : '#1a0d00',
        borderRadius: 1,
        zIndex: 2,
        marginBottom: -1,
      }} />

      {/* Candle body */}
      <div style={{
        position: 'relative',
        width: 50,
        height: candleHeight,
        borderRadius: '4px 4px 3px 3px',
        background: 'linear-gradient(to right, #c8b89a 0%, #f0e0cb 28%, #fff6ed 50%, #eddcca 74%, #c2aa90 100%)',
        transition: 'height 0.9s linear',
        overflow: 'visible',
        zIndex: 1,
      }}>
        {/* Drips */}
        {drip1H > 0 && (
          <div style={{
            position: 'absolute', top: 0, left: 7,
            width: 8, height: drip1H,
            background: 'linear-gradient(to bottom, #f0e0cb, #deccb4)',
            borderRadius: '0 0 50% 50%',
            transition: 'height 1.8s ease-in',
          }} />
        )}
        {drip2H > 0 && (
          <div style={{
            position: 'absolute', top: 0, right: 9,
            width: 8, height: drip2H,
            background: 'linear-gradient(to bottom, #f0e0cb, #deccb4)',
            borderRadius: '0 0 50% 50%',
            transition: 'height 1.8s ease-in',
          }} />
        )}
        {drip3H > 0 && (
          <div style={{
            position: 'absolute', top: 0, left: 19,
            width: 7, height: drip3H,
            background: 'linear-gradient(to bottom, #f0e0cb, #e2d0b8)',
            borderRadius: '0 0 50% 50%',
            transition: 'height 1.8s ease-in',
          }} />
        )}
      </div>

      {/* Holder */}
      <div style={{
        width: 68,
        height: 13,
        marginTop: -1,
        background: 'linear-gradient(to right, #777 0%, #bbb 28%, #ddd 50%, #aaa 74%, #666 100%)',
        borderRadius: '2px 2px 0 0',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          position: 'absolute',
          bottom: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 78,
          height: 8,
          background: 'linear-gradient(to right, #555 0%, #999 28%, #bbb 50%, #888 74%, #444 100%)',
          borderRadius: '0 0 5px 5px',
        }} />
      </div>
    </div>
  );
}

export default Candle;
