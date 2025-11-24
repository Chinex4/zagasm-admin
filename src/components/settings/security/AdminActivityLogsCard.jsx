import React, { useMemo, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MOCK_LOGS = [
  {
    id: 1,
    name: "Emma Wilson",
    ip: "192.168.10827",
    location: "Lagos State",
    device: "Windows",
    lastLogin: "25 Aug, 2025",
  },
  {
    id: 2,
    name: "Emma Wilson",
    ip: "192.168.10827",
    location: "Lagos State",
    device: "Windows",
    lastLogin: "25 Aug, 2025",
  },
  {
    id: 3,
    name: "Emma Wilson",
    ip: "192.168.10827",
    location: "Lagos State",
    device: "Windows",
    lastLogin: "25 Aug, 2025",
  },
  {
    id: 4,
    name: "Emma Wilson",
    ip: "192.168.10827",
    location: "Lagos State",
    device: "Windows",
    lastLogin: "25 Aug, 2025",
  },
];

function AdminActivityLogsCard() {
  const [search, setSearch] = useState("");

  const filteredLogs = useMemo(() => {
    const term = search.toLowerCase();
    if (!term) return MOCK_LOGS;
    return MOCK_LOGS.filter(
      (log) =>
        log.name.toLowerCase().includes(term) ||
        log.ip.toLowerCase().includes(term) ||
        log.device.toLowerCase().includes(term) ||
        log.location.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-6 sm:py-7 h-full flex flex-col">
      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-5">
        Admin Login &amp; Activity Logs
      </h3>

      {/* Search + export */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
        <TextField
          fullWidth
          size="small"
          placeholder="Search by Name, Device..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 20, color: "#9ca3af" }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "9999px",
              backgroundColor: "#f9fafb",
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "#e5e7eb" },
            },
          }}
        />

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-50 self-start sm:self-auto"
        >
          Export data
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="min-w-full text-left text-sm text-neutral-800">
          <thead>
            <tr className="border-b border-neutral-100 text-xs font-semibold text-neutral-500">
              <th className="py-3 px-2 sm:px-3">ADMIN NAME</th>
              <th className="py-3 px-2 sm:px-3">IP ADDRESS</th>
              <th className="py-3 px-2 sm:px-3">LOCATION</th>
              <th className="py-3 px-2 sm:px-3">DEVICE</th>
              <th className="py-3 px-2 sm:px-3">LAST LOGIN</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-neutral-50 last:border-b-0"
              >
                <td className="py-3.5 px-2 sm:px-3 whitespace-nowrap">
                  {log.name}
                </td>
                <td className="py-3.5 px-2 sm:px-3 whitespace-nowrap">
                  {log.ip}
                </td>
                <td className="py-3.5 px-2 sm:px-3 whitespace-nowrap">
                  {log.location}
                </td>
                <td className="py-3.5 px-2 sm:px-3 whitespace-nowrap">
                  {log.device}
                </td>
                <td className="py-3.5 px-2 sm:px-3 whitespace-nowrap">
                  {log.lastLogin}
                </td>
              </tr>
            ))}

            {filteredLogs.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-sm text-neutral-400"
                >
                  No activity logs found for this search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Big bottom padding area like the design */}
      <div className="flex-1" />
    </section>
  );
}

export default AdminActivityLogsCard;
