// src/components/communication/charts/MessageVolumeTrendCard.jsx
import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { CalendarDays } from "lucide-react";

const baseData = [
  { date: "Nov 30", value: 155 },
  { date: "Dec 2", value: 45 },
  { date: "Dec 4", value: 75 },
  { date: "Dec 8", value: 60 },
  { date: "Dec 12", value: 95 },
  { date: "Dec 16", value: 130 },
  { date: "Dec 18", value: 40 },
  { date: "Dec 20", value: 115 },
  { date: "Dec 24", value: 120 },
  { date: "Dec 28", value: 200 },
  { date: "Dec 30", value: 100 },
];

function MessageVolumeTrendCard() {
  const [range, setRange] = useState("week"); // week | month | year

  const data = useMemo(() => {
    if (range === "week") return baseData.slice(-7);
    if (range === "month") return baseData;
    // fake “year” extension
    return [
      ...baseData,
      { date: "Jan 3", value: 180 },
      { date: "Jan 7", value: 140 },
    ];
  }, [range]);

  return (
    <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-4 md:px-6 pt-4 pb-5 flex flex-col gap-4">
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="relative inline-flex">
            <p className="text-sm md:text-base font-semibold text-neutral-900">
              Message Volume Trend
            </p>
            <span className="absolute -bottom-1 left-0 h-1 w-24 rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1 rounded-xl border border-neutral-200 px-3 py-1.5 text-xs md:text-sm text-neutral-700 bg-white hover:bg-neutral-50">
            <CalendarDays className="h-4 w-4 text-neutral-500" />
          </button>

          <div className="inline-flex rounded-xl bg-neutral-50 border border-neutral-100 p-1">
            {[
              { id: "week", label: "Week" },
              { id: "month", label: "Month" },
              { id: "year", label: "Year" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setRange(opt.id)}
                className={`px-3 md:px-4 py-1.5 text-xs md:text-sm rounded-lg font-medium transition ${
                  range === opt.id
                    ? "bg-white shadow-sm text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="messageVolumeGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#8f07e7" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#8f07e7" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickCount={6}
              domain={[0, 400]}
            />
            <Tooltip
              cursor={{ stroke: "#c4b5fd", strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 20px rgba(15, 23, 42, 0.08)",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8f07e7"
              strokeWidth={3}
              fill="url(#messageVolumeGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MessageVolumeTrendCard;
