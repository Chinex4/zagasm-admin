import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Email", value: 45 },
  { name: "Push", value: 30 },
  { name: "In-App", value: 25 },
];

const COLORS = ["#f59e0b", "#06b6d4", "#a855f7"]; // Email, Push, In-App

function EngagementByChannelCard() {
  return (
    <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-4 md:px-6 pt-4 pb-5 flex flex-col">
      {/* header */}
      <div className="mb-4">
        <div className="relative inline-flex">
          <p className="text-sm md:text-base font-semibold text-neutral-900">
            Engagement by Channel
          </p>
          <span className="absolute -bottom-1 left-0 h-1 w-24 rounded-full bg-sky-400" />
        </div>
      </div>

      {/* chart + legend */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center gap-6">
        <div className="h-52 md:h-64 w-full md:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* legend */}
        <div className="flex flex-col justify-center gap-3 md:w-1/2">
          {data.map((entry, index) => (
            <div
              key={entry.name}
              className="inline-flex items-center gap-2 text-sm md:text-base text-neutral-800"
            >
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EngagementByChannelCard;
