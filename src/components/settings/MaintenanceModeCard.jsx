import React, { useRef } from "react";
import { TextField, Switch, InputAdornment, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function formatDisplayDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function MaintenanceModeCard({
  maintenanceOn,
  onMaintenanceOnChange,
  maintenanceMessage,
  onMaintenanceMessageChange,
  estimatedDowntime,
  onEstimatedDowntimeChange,
  showCountdown,
  onShowCountdownChange,
}) {
  const dateInputRef = useRef(null);

  const handleOpenDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.();
      dateInputRef.current.click();
    }
  };

  return (
    <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-6 sm:py-7">
      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">
        Maintenance Mode
      </h3>

      <div className="space-y-5">
        {/* Maintenance Status */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-medium text-neutral-800">
            Maintenance Status
          </div>
          <Switch
            checked={maintenanceOn}
            onChange={(e) => onMaintenanceOnChange(e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#8f07e7",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#f4e6fd",
              },
              "& .MuiSwitch-track": {
                borderRadius: 9999,
              },
            }}
          />
        </div>

        {/* Maintenance Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Maintenance Message
          </label>
          <TextField
            fullWidth
            multiline
            minRows={3}
            value={maintenanceMessage}
            onChange={(e) => onMaintenanceMessageChange(e.target.value)}
            placeholder="E.g., “We’re performing scheduled maintenance. Please check back later.”"
            InputProps={{
              sx: {
                borderRadius: "16px",
                fontSize: "0.95rem",
              },
            }}
          />
        </div>

        {/* Estimated downtime */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-sm font-medium text-neutral-800">
            Estimated downtime
          </span>
          <div className="w-full sm:w-1/2">
            <TextField
              fullWidth
              value={formatDisplayDate(estimatedDowntime) || "25 Oct, 2025"}
              InputProps={{
                readOnly: true,
                sx: {
                  borderRadius: "16px",
                  fontSize: "0.95rem",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={handleOpenDatePicker}>
                      <CalendarTodayIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <input
              ref={dateInputRef}
              type="date"
              className="hidden"
              onChange={(e) => onEstimatedDowntimeChange(e.target.value)}
            />
          </div>
        </div>

        {/* Show Countdown Timer */}
        <div className="flex items-center justify-between gap-4 mt-1">
          <span className="text-sm font-medium text-neutral-800">
            Show Countdown Timer
          </span>
          <Switch
            checked={showCountdown}
            onChange={(e) => onShowCountdownChange(e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#8f07e7",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#f4e6fd",
              },
              "& .MuiSwitch-track": {
                borderRadius: 9999,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default MaintenanceModeCard;
