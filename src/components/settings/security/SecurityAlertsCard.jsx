import React, { useState } from "react";
import { Switch } from "@mui/material";

function SecurityAlertsCard() {
  const [failedLoginAlerts, setFailedLoginAlerts] = useState(true);
  const [suspiciousActivityAlerts, setSuspiciousActivityAlerts] =
    useState(true);

  const switchStyles = {
    "& .MuiSwitch-switchBase.Mui-checked": { color: "#8f07e7" },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#f4e6fd",
    },
    "& .MuiSwitch-track": { borderRadius: 9999 },
  };

  return (
    <section className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-5 sm:px-7 py-5">
      <h3 className="text-lg font-semibold text-neutral-900 mb-4">
        Security Alerts
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-neutral-900">
            Email Alerts for Failed Login Attempt
          </p>
          <Switch
            checked={failedLoginAlerts}
            onChange={(e) => setFailedLoginAlerts(e.target.checked)}
            sx={switchStyles}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-neutral-900">
            Notify on Suspicious Activity
          </p>
          <Switch
            checked={suspiciousActivityAlerts}
            onChange={(e) => setSuspiciousActivityAlerts(e.target.checked)}
            sx={switchStyles}
          />
        </div>
      </div>
    </section>
  );
}

export default SecurityAlertsCard;
