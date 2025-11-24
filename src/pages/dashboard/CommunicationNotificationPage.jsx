import React from "react";
import CommunicationOverviewCardsSection from "../../components/communication/sections/CommunicationOverviewCardsSection";
import CommunicationChartsSection from "../../components/communication/sections/CommunicationChartsSection";
import CampaignsSection from "../../components/communication/sections/CampaignsSection";

function CommunicationNotificationPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900">
        Communication and Notification
      </h2>

      <CommunicationOverviewCardsSection />
      <CommunicationChartsSection />
      <CampaignsSection />
    </div>
  );
}

export default CommunicationNotificationPage;
