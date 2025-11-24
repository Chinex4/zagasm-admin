import React, { useState } from "react";
import {
  Switch,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

function AuthenticationSettingsCard() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [timeZone, setTimeZone] = useState("utc-5");
  const [enforceStrongPasswords, setEnforceStrongPasswords] = useState(true);
  const [forcePasswordReset, setForcePasswordReset] = useState(true);
  const [resetIntervalDays, setResetIntervalDays] = useState(3);

  return (
    <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-6 sm:py-7">
      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-5">
        Authentication Settings
      </h3>

      {/* 2FA row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <p className="text-sm font-medium text-neutral-900">
            Two Factor Authentication (2FA)
          </p>
          <p className="text-xs text-neutral-500">
            Require 2FA for all Admin
          </p>
        </div>
        <Switch
          checked={twoFAEnabled}
          onChange={(e) => setTwoFAEnabled(e.target.checked)}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": { color: "#8f07e7" },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#f4e6fd",
            },
            "& .MuiSwitch-track": { borderRadius: 9999 },
          }}
        />
      </div>

      {/* Time zone */}
      <div className="mb-6">
        <p className="text-sm font-medium text-neutral-900 mb-2">Time Zone</p>
        <FormControl fullWidth size="small">
          <Select
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            sx={{
              borderRadius: "18px",
              fontSize: "0.95rem",
              "& .MuiSelect-select": { paddingY: "10px" },
            }}
          >
            <MenuItem value="utc-5">
              (UTC-05:00) Eastern Time (US &amp; Canada)
            </MenuItem>
            <MenuItem value="utc+1">
              (UTC+01:00) West Africa Time (Nigeria)
            </MenuItem>
            <MenuItem value="utc">
              (UTC+00:00) Coordinated Universal Time
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Password policy */}
      <div className="border-t border-neutral-100 pt-5">
        <h4 className="text-sm font-semibold text-neutral-900 mb-4">
          Password Policy
        </h4>

        {/* Enforce strong passwords */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-sm font-medium text-neutral-900">
              Enforce Strong Passwords
            </p>
            <p className="text-xs text-neutral-500">
              Minimum length, special characters, expiry policy
            </p>
          </div>
          <Switch
            checked={enforceStrongPasswords}
            onChange={(e) => setEnforceStrongPasswords(e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": { color: "#8f07e7" },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#f4e6fd",
              },
              "& .MuiSwitch-track": { borderRadius: 9999 },
            }}
          />
        </div>

        {/* Force password reset */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="text-sm font-medium text-neutral-900">
            Force Password Reset
          </p>
          <Switch
            checked={forcePasswordReset}
            onChange={(e) => setForcePasswordReset(e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": { color: "#8f07e7" },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#f4e6fd",
              },
              "& .MuiSwitch-track": { borderRadius: 9999 },
            }}
          />
        </div>

        {/* Reset interval */}
        <div className="flex items-center gap-2 text-sm text-neutral-800">
          <span>Force Password Reset Every</span>
          <TextField
            type="number"
            value={resetIntervalDays}
            onChange={(e) => setResetIntervalDays(e.target.value)}
            size="small"
            inputProps={{ min: 1, className: "text-center" }}
            sx={{
              width: 64,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                paddingX: 0,
              },
            }}
          />
          <span>days</span>
        </div>
      </div>
    </section>
  );
}

export default AuthenticationSettingsCard;
