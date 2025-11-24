// src/pages/settings/AuditLogs.jsx
import React, { useMemo, useState } from "react";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MOCK_AUDIT_LOGS = [
  {
    id: 1,
    timestamp: "Today, 12:35 PM",
    adminName: "Wilson David",
    adminEmail: "wilsondavid@gmail.com",
    action: "Changed Site Settings",
    resource: "Setting ID: 42",
    ipAddress: "192.168:10827",
  },
  {
    id: 2,
    timestamp: "Today, 12:35 PM",
    adminName: "Wilson David",
    adminEmail: "wilsondavid@gmail.com",
    action: "Changed Site Settings",
    resource: "Setting ID: 42",
    ipAddress: "192.168:10827",
  },
  {
    id: 3,
    timestamp: "Today, 12:35 PM",
    adminName: "Wilson David",
    adminEmail: "wilsondavid@gmail.com",
    action: "Changed Site Settings",
    resource: "Setting ID: 42",
    ipAddress: "192.168:10827",
  },
  {
    id: 4,
    timestamp: "Today, 12:35 PM",
    adminName: "Wilson David",
    adminEmail: "wilsondavid@gmail.com",
    action: "Changed Site Settings",
    resource: "Setting ID: 42",
    ipAddress: "192.168:10827",
  },
];

function AuditLogs() {
  const [search, setSearch] = useState("");
  const [actionFilter, setActionFilter] = useState("all");

  const filteredLogs = useMemo(() => {
    return MOCK_AUDIT_LOGS.filter((log) => {
      const matchesAction =
        actionFilter === "all" || log.action === actionFilter;

      const q = search.toLowerCase().trim();
      if (!q) return matchesAction;

      const haystack = [
        log.timestamp,
        log.adminName,
        log.adminEmail,
        log.action,
        log.resource,
        log.ipAddress,
      ]
        .join(" ")
        .toLowerCase();

      return matchesAction && haystack.includes(q);
    });
  }, [search, actionFilter]);

  return (
    <div className="space-y-6">
      {/* Page title */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900">
        Audit Log
      </h2>

      {/* Card */}
      <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-6 sm:py-7">
        {/* Search + filter row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <TextField
            fullWidth
            placeholder="Search by date range, IP address..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="medium"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 22 }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 9999,
                backgroundColor: "#F9FAFB",
                "& fieldset": { border: "none" },
                fontSize: "0.95rem",
                paddingY: "2px",
              },
            }}
          />

          <FormControl
            size="small"
            sx={{
              minWidth: 160,
              alignSelf: "flex-end",
            }}
          >
            <Select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
              displayEmpty
              sx={{
                borderRadius: 9999,
                fontSize: "0.95rem",
                "& .MuiSelect-select": {
                  paddingY: "10px",
                  paddingX: "18px",
                },
              }}
            >
              <MenuItem value="all">Action Type</MenuItem>
              <MenuItem value="Changed Site Settings">
                Changed Site Settings
              </MenuItem>
              <MenuItem value="Updated Role">Updated Role</MenuItem>
              <MenuItem value="Login">Login</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-xs font-semibold text-neutral-500 uppercase tracking-wide border-b border-neutral-100">
                <th className="py-3 pr-6">Timestamp</th>
                <th className="py-3 pr-6">Admin/User</th>
                <th className="py-3 pr-6">Action Performed</th>
                <th className="py-3 pr-6">Affected Resource</th>
                <th className="py-3 pr-6">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log, index) => (
                <tr
                  key={log.id}
                  className={
                    index !== filteredLogs.length - 1
                      ? "border-b border-neutral-100"
                      : ""
                  }
                >
                  {/* Timestamp */}
                  <td className="py-4 pr-6 text-neutral-800 whitespace-nowrap">
                    {log.timestamp}
                  </td>

                  {/* Admin/User */}
                  <td className="py-4 pr-6">
                    <div className="flex flex-col">
                      <span className="text-neutral-900 font-medium">
                        {log.adminName}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {log.adminEmail}
                      </span>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="py-4 pr-6 text-neutral-800">{log.action}</td>

                  {/* Resource */}
                  <td className="py-4 pr-6 text-neutral-800 whitespace-nowrap">
                    {log.resource}
                  </td>

                  {/* IP */}
                  <td className="py-4 pr-6 text-neutral-800 whitespace-nowrap">
                    {log.ipAddress}
                  </td>
                </tr>
              ))}

              {filteredLogs.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-sm text-neutral-500"
                  >
                    No audit events match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AuditLogs;
