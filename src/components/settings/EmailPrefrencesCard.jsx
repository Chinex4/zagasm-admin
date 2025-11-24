import React from "react";
import { TextField, Switch } from "@mui/material";

function EmailPreferencesCard({
  senderName,
  onSenderNameChange,
  senderEmail,
  onSenderEmailChange,
  replyToAddress,
  onReplyToAddressChange,
  dailyDigestEnabled,
  onDailyDigestEnabledChange,
  criticalAlertsEnabled,
  onCriticalAlertsEnabledChange,
  emailCountdownEnabled,
  onEmailCountdownEnabledChange,
}) {
  return (
    <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-6 sm:py-7">
      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-6">
        Email Preferences
      </h3>

      <div className="space-y-6">
        {/* Sender name + email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-800">
              Sender Name
            </label>
            <TextField
              fullWidth
              size="medium"
              value={senderName}
              onChange={(e) => onSenderNameChange(e.target.value)}
              placeholder="Zagasm"
              InputProps={{
                sx: {
                  borderRadius: "16px",
                  fontSize: "0.95rem",
                  paddingY: "4px",
                },
              }}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-800">
              Sender Email Address
            </label>
            <TextField
              fullWidth
              size="medium"
              value={senderEmail}
              onChange={(e) => onSenderEmailChange(e.target.value)}
              placeholder="noreply@zagasm.com"
              InputProps={{
                sx: {
                  borderRadius: "16px",
                  fontSize: "0.95rem",
                  paddingY: "4px",
                },
              }}
            />
          </div>
        </div>

        {/* Reply-to address */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-800">
            Reply-to Address
          </label>
          <TextField
            fullWidth
            multiline
            minRows={3}
            value={replyToAddress}
            onChange={(e) => onReplyToAddressChange(e.target.value)}
            placeholder="Enter your message"
            InputProps={{
              sx: {
                borderRadius: "16px",
                fontSize: "0.95rem",
              },
            }}
          />
        </div>

        {/* Toggles */}
        <div className="space-y-4">
          {/* Daily Digest */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-neutral-800">
                Daily Digest Report
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                Enable/Disable Daily Admin Reports
              </p>
            </div>
            <Switch
              checked={dailyDigestEnabled}
              onChange={(e) => onDailyDigestEnabledChange(e.target.checked)}
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

          {/* Critical Alerts */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-neutral-800">
                Critical Alerts
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                Get email alerts for system errors or downtime
              </p>
            </div>
            <Switch
              checked={criticalAlertsEnabled}
              onChange={(e) => onCriticalAlertsEnabledChange(e.target.checked)}
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

          {/* Show Countdown Timer (email-related toggle as per design) */}
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-medium text-neutral-800">
              Show Countdown Timer
            </div>
            <Switch
              checked={emailCountdownEnabled}
              onChange={(e) => onEmailCountdownEnabledChange(e.target.checked)}
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
      </div>
    </section>
  );
}

export default EmailPreferencesCard;
