import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { value: 120 },
  { value: 132 },
  { value: 125 },
  { value: 148 },
  { value: 139 },
  { value: 155 },
  { value: 162 },
  { value: 158 },
  { value: 172 },
  { value: 168 },
  { value: 180 },
  { value: 175 },
  { value: 190 },
  { value: 185 },
  { value: 200 },
];

function HeroChart() {
  return (
    <div className="relative w-full h-64">
      {/* Glow behind chart */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%",
          left: "10%",
          width: "100%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, #10B98125 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#10B981"
            strokeWidth={2}
            fill="url(#chartGradient)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HeroChart;
