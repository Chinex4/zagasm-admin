// src/components/communication/sections/CommunicationChartsSection.jsx
import React from "react";
import MessageVolumeTrendCard from "../charts/MessageVolumeTrendCard";
import EngagementByChannelCard from "../charts/EngagementByChannelCard";

function CommunicationChartsSection() {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <MessageVolumeTrendCard />
      </div>
      <EngagementByChannelCard />
    </section>
  );
}

export default CommunicationChartsSection;
