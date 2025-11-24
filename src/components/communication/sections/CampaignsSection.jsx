// src/components/communication/sections/CampaignsSection.jsx
import React, { useMemo, useState } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Search } from "lucide-react";

const CHANNEL_OPTIONS = ["All", "Email", "Push", "In-App"];
const STATUS_OPTIONS = ["All", "Sent", "Scheduled", "Draft"];

const campaignsData = [
  {
    id: 1,
    name: "New Features",
    channel: "Push",
    audience: "All Users",
    scheduled: "25 Aug, 2025",
    status: "Sent",
    delivery: "95%",
  },
  {
    id: 2,
    name: "Community Spotlight",
    channel: "In-App",
    audience: "Beta Testers",
    scheduled: "25 Aug, 2025",
    status: "Scheduled",
    delivery: "86%",
  },
  {
    id: 3,
    name: "Weekend Meme Challenge",
    channel: "Email",
    audience: "All Users",
    scheduled: "25 Aug, 2025",
    status: "Draft",
    delivery: "72%",
  },
  {
    id: 4,
    name: "Community Spotlight",
    channel: "In-App",
    audience: "Beta Testers",
    scheduled: "25 Aug, 2025",
    status: "Scheduled",
    delivery: "86%",
  },
  {
    id: 5,
    name: "Community Spotlight",
    channel: "In-App",
    audience: "Beta Testers",
    scheduled: "25 Aug, 2025",
    status: "Scheduled",
    delivery: "86%",
  },
];

function CampaignsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [channelFilter, setChannelFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCampaigns = useMemo(() => {
    return campaignsData
      .filter((c) =>
        searchTerm
          ? c.name.toLowerCase().includes(searchTerm.toLowerCase())
          : true
      )
      .filter((c) =>
        channelFilter === "All" ? true : c.channel === channelFilter
      )
      .filter((c) =>
        statusFilter === "All" ? true : c.status === statusFilter
      );
  }, [searchTerm, channelFilter, statusFilter]);

  const handleView = (campaign) => {
    console.log("View campaign", campaign);
  };

  const handleEdit = (campaign) => {
    console.log("Edit campaign", campaign);
  };

  return (
    <section className="mt-6 bg-white rounded-3xl border border-neutral-100 shadow-sm px-4 md:px-6 pt-5 pb-5 space-y-4">
      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold text-neutral-900">
        Campaigns
      </h3>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        {/* Search */}
        <div className="flex-1">
          <TextField
            fullWidth
            size="small"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search className="h-5 w-5 text-neutral-400" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "999px",
                backgroundColor: "#f9fafb",
              },
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "#e5e7eb" },
              "&.Mui-focused fieldset": { borderColor: "#d4d4d8" },
            }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 md:w-auto">
          <FormControl
            size="small"
            fullWidth
            sx={{
              minWidth: 140,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                backgroundColor: "#f9fafb",
              },
              "& fieldset": { borderColor: "transparent" },
            }}
          >
            <InputLabel>Channel</InputLabel>
            <Select
              label="Channel"
              value={channelFilter}
              onChange={(e) => setChannelFilter(e.target.value)}
            >
              {CHANNEL_OPTIONS.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt === "All" ? "All channels" : opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            size="small"
            fullWidth
            sx={{
              minWidth: 140,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                backgroundColor: "#f9fafb",
              },
              "& fieldset": { borderColor: "transparent" },
            }}
          >
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {STATUS_OPTIONS.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt === "All" ? "All status" : opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-xs text-neutral-500 border-b border-neutral-100">
              <th className="px-4 md:px-2 lg:px-4 py-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-300"
                />
              </th>
              <th className="px-2 lg:px-4 py-3 font-medium whitespace-nowrap">
                NAME/SUBJECT
              </th>
              <th className="px-2 lg:px-4 py-3 font-medium">CHANNEL</th>
              <th className="px-2 lg:px-4 py-3 font-medium">AUDIENCE</th>
              <th className="px-2 lg:px-4 py-3 font-medium">SCHEDULED</th>
              <th className="px-2 lg:px-4 py-3 font-medium">STATUS</th>
              <th className="px-2 lg:px-4 py-3 font-medium">DELIVERY</th>
              <th className="px-2 lg:px-4 py-3 font-medium text-right">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.map((campaign) => (
              <tr
                key={campaign.id}
                className="border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50/60 transition-colors"
              >
                <td className="px-4 md:px-2 lg:px-4 py-3 align-middle">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300"
                  />
                </td>

                <td className="px-2 lg:px-4 py-3 align-middle text-neutral-800">
                  {campaign.name}
                </td>

                <td className="px-2 lg:px-4 py-3 align-middle text-neutral-800">
                  {campaign.channel}
                </td>

                <td className="px-2 lg:px-4 py-3 align-middle text-neutral-800">
                  {campaign.audience}
                </td>

                <td className="px-2 lg:px-4 py-3 align-middle text-neutral-700 whitespace-nowrap">
                  {campaign.scheduled}
                </td>

                <td className="px-2 lg:px-4 py-3 align-middle text-neutral-800">
                  {campaign.status}
                </td>

                <td className="px-2 lg:px-4 py-3 align-middle text-neutral-800">
                  {campaign.delivery}
                </td>

                <td className="px-2 lg:px-4 py-3 align-middle text-right">
                  <div className="inline-flex items-center gap-2">
                    <button
                      onClick={() => handleView(campaign)}
                      className="rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary/5"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(campaign)}
                      className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredCampaigns.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-10 text-center text-sm text-neutral-500"
                >
                  No campaigns match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-4 border-top border-neutral-100 text-sm">
        <button className="inline-flex items-center justify-center gap-1 rounded-full border border-neutral-200 px-4 py-2 text-neutral-800 hover:bg-neutral-50 w-full md:w-auto">
          ← Previous
        </button>

        <div className="flex items-center justify-center gap-1">
          {[1, 2, 3, "…", 8, 9, 10].map((item, idx) =>
            item === "…" ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 text-neutral-400 text-sm"
              >
                …
              </span>
            ) : (
              <button
                key={item}
                className={`h-9 w-9 rounded-full text-xs font-medium ${
                  item === 1
                    ? "bg-primary/10 text-primary"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        <button className="inline-flex items-center justify-center gap-1 rounded-full border border-neutral-200 px-4 py-2 text-neutral-800 hover:bg-neutral-50 w-full md:w-auto">
          Next →
        </button>
      </div>
    </section>
  );
}

export default CampaignsSection;
