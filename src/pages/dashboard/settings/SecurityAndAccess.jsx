import React from "react";
import AuthenticationSettingsCard from "../../../components/settings/security/AuthentticationSettingCard";
import SecurityAlertsCard from "../../../components/settings/security/SecurityAlertsCard";
import AdminAccessControlCard from "../../../components/settings/security/AdminAccessControlCard";
import AdminActivityLogsCard from "../../../components/settings/security/AdminActivityLogsCard";

function SecurityAndAccess() {
  const handleSave = () => {
    // Wire this up to your API later
    console.log("Save Security & Access settings");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900">
          Security &amp; Access
        </h2>
        <button
          onClick={handleSave}
          className="px-6 sm:px-8 py-3 sm:py-3.5 bg-linear-to-r from-primary to-primarySecond rounded-full text-white text-sm sm:text-base font-semibold shadow-md hover:opacity-95 transition"
        >
          Save Changes
        </button>
      </div>

      {/* Layout grid */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-6">
        {/* Left column: settings cards */}
        <div className="space-y-5">
          <AuthenticationSettingsCard />
          <SecurityAlertsCard />
          <AdminAccessControlCard />
        </div>

        {/* Right column: activity logs */}
        <AdminActivityLogsCard />
      </div>
    </div>
  );
}

export default SecurityAndAccess;
