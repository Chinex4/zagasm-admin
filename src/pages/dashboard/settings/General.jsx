import React, { useState } from "react";
import PlatformConfigurationCard from "../../../components/settings/PlatformConfigurationCard";
import MaintenanceModeCard from "../../../components/settings/MaintenanceModeCard";
import EmailPreferencesCard from "../../../components/settings/EmailPrefrencesCard";


function GeneralSettings() {
  // Platform configuration state
  const [siteName, setSiteName] = useState("Zagasm");
  const [logoFileName, setLogoFileName] = useState("Zagasm logo.png");
  const [language, setLanguage] = useState("en");
  const [timeZone, setTimeZone] = useState("utc-5");

  // Maintenance state
  const [maintenanceOn, setMaintenanceOn] = useState(true);
  const [maintenanceMessage, setMaintenanceMessage] = useState(
    'E.g., “We’re performing scheduled maintenance. Please check back later.”'
  );
  const [estimatedDowntime, setEstimatedDowntime] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);

  // Email preferences state
  const [senderName, setSenderName] = useState("Zagasm");
  const [senderEmail, setSenderEmail] = useState("noreply@zagasm.com");
  const [replyToAddress, setReplyToAddress] = useState("");
  const [dailyDigestEnabled, setDailyDigestEnabled] = useState(true);
  const [criticalAlertsEnabled, setCriticalAlertsEnabled] = useState(true);
  const [emailCountdownEnabled, setEmailCountdownEnabled] = useState(true);

  const handleSave = () => {
    console.log("Saving general settings:", {
      platform: {
        siteName,
        logoFileName,
        language,
        timeZone,
      },
      maintenance: {
        maintenanceOn,
        maintenanceMessage,
        estimatedDowntime,
        showCountdown,
      },
      emailPreferences: {
        senderName,
        senderEmail,
        replyToAddress,
        dailyDigestEnabled,
        criticalAlertsEnabled,
        emailCountdownEnabled,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900">
          General Settings
        </h2>
        <button
          onClick={handleSave}
          className="px-6 sm:px-8 py-3 sm:py-3.5 bg-linear-to-r from-primary to-primarySecond rounded-full text-white text-sm sm:text-base font-semibold shadow-md hover:opacity-95 transition"
        >
          Save Changes
        </button>
      </div>

      {/* Platform + Maintenance cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <PlatformConfigurationCard
          siteName={siteName}
          onSiteNameChange={setSiteName}
          logoFileName={logoFileName}
          onLogoFileNameChange={setLogoFileName}
          language={language}
          onLanguageChange={setLanguage}
          timeZone={timeZone}
          onTimeZoneChange={setTimeZone}
        />

        <MaintenanceModeCard
          maintenanceOn={maintenanceOn}
          onMaintenanceOnChange={setMaintenanceOn}
          maintenanceMessage={maintenanceMessage}
          onMaintenanceMessageChange={setMaintenanceMessage}
          estimatedDowntime={estimatedDowntime}
          onEstimatedDowntimeChange={setEstimatedDowntime}
          showCountdown={showCountdown}
          onShowCountdownChange={setShowCountdown}
        />
      </div>

      {/* Email preferences card */}
      <EmailPreferencesCard
        senderName={senderName}
        onSenderNameChange={setSenderName}
        senderEmail={senderEmail}
        onSenderEmailChange={setSenderEmail}
        replyToAddress={replyToAddress}
        onReplyToAddressChange={setReplyToAddress}
        dailyDigestEnabled={dailyDigestEnabled}
        onDailyDigestEnabledChange={setDailyDigestEnabled}
        criticalAlertsEnabled={criticalAlertsEnabled}
        onCriticalAlertsEnabledChange={setCriticalAlertsEnabled}
        emailCountdownEnabled={emailCountdownEnabled}
        onEmailCountdownEnabledChange={setEmailCountdownEnabled}
      />
    </div>
  );
}

export default GeneralSettings;
