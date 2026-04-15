export interface PieSlice {
  label: string;
  pct: number;
  fill: string;
}

interface PieChartProps {
  data: PieSlice[];
  title?: string;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function slicePath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const p1 = polarToCartesian(cx, cy, r, startAngle);
  const p2 = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 ${large} 1 ${p2.x} ${p2.y} Z`;
}

const PieChart = ({ data, title }: PieChartProps) => {
  const cx = 180;
  const cy = 180;
  const r = 130;
  const lineR = r + 8;
  const labelR = r + 24;

  let cumAngle = 0;
  const slices = data.map((d) => {
    const start = cumAngle;
    const span = (d.pct / 100) * 360;
    cumAngle += span;
    return { ...d, start, end: cumAngle, mid: start + span / 2 };
  });

  return (
    <div className="w-[500px] shrink-0">
      {title && (
        <p className="mt-0 mb-[8px] text-[20px] text-black" style={{ fontFamily: 'Pretendard', fontWeight: 600 }}>
          {title}
        </p>
      )}
      <svg width="500" height="360" viewBox="0 0 500 360">
        {slices.map((s) => (
          <path key={s.label} d={slicePath(cx, cy, r, s.start, s.end)} fill={s.fill} />
        ))}
        {slices.map((s) => {
          const lineStart = polarToCartesian(cx, cy, lineR, s.mid);
          const lineEnd = polarToCartesian(cx, cy, labelR, s.mid);
          const isRight = lineEnd.x >= cx;
          const strokeColor = s.fill === '#ccc' ? '#aaa' : s.fill;
          return (
            <g key={`lbl-${s.label}`}>
              <line
                x1={lineStart.x}
                y1={lineStart.y}
                x2={lineEnd.x}
                y2={lineEnd.y}
                stroke={strokeColor}
                strokeWidth={1.5}
              />
              <text
                x={isRight ? lineEnd.x + 6 : lineEnd.x - 6}
                y={lineEnd.y + 4}
                textAnchor={isRight ? 'start' : 'end'}
                fontSize="12"
                fill={strokeColor}
                fontFamily="Pretendard, sans-serif">
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PieChart;
