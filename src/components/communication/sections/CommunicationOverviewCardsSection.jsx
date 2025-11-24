import React from "react";
import { Send, Flag, MailOpen, Megaphone } from "lucide-react";
import ContentOverviewCard from "../../contentManagement/ContentOverviewCard";

const communicationOverviewCards = [
  {
    id: "totalMessages",
    title: "Total Message Sent",
    value: "12,903",
    Icon: Send,
    badgeBgClass: "bg-[#f0f8e8]",
    titleColorClass: "text-lime-600",
    iconColorClass: "text-lime-500",
    todayText: "324 Today",
    todayColorClass: "text-emerald-500",
    weekText: "1009 This week",
    weekColorClass: "text-emerald-500",
  },
  {
    id: "deliveryRate",
    title: "Delivery Rate",
    value: "15%",
    Icon: Flag,
    badgeBgClass: "bg-[#fff3df]",
    titleColorClass: "text-orange-500",
    iconColorClass: "text-orange-400",
    todayText: null,
    weekText: null,
  },
  {
    id: "openRate",
    title: "Open Rate (Emails/Push)",
    value: "78%",
    Icon: MailOpen,
    badgeBgClass: "bg-[#e3ecff]",
    titleColorClass: "text-blue-600",
    iconColorClass: "text-blue-500",
    todayText: null,
    weekText: null,
  },
  {
    id: "activeCampaigns",
    title: "Active Campaigns",
    value: "7",
    Icon: Megaphone,
    badgeBgClass: "bg-[#f4e6fd]",
    titleColorClass: "text-primary",
    iconColorClass: "text-primary",
    todayText: null,
    weekText: null,
  },
];

function CommunicationOverviewCardsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
      {communicationOverviewCards.map((card) => (
        <ContentOverviewCard key={card.id} {...card} />
      ))}
    </section>
  );
}

export default CommunicationOverviewCardsSection;
