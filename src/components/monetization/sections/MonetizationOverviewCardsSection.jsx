import React from "react";
import {
  TicketPercent,
  BarChart3,
  BadgePercent,
  Megaphone,
  ActivitySquare,
} from "lucide-react";
import ContentOverviewCard from "../../contentManagement/ContentOverviewCard";

const monetizationOverviewCards = [
  {
    id: "totalAdRevenue",
    title: "Total Ad Revenue",
    value: "₦1,873,902",
    Icon: TicketPercent,
    badgeBgClass: "bg-[#e6f9ed]",
    titleColorClass: "text-emerald-600",
    iconColorClass: "text-emerald-500",
    todayText: "5.5% last 30 days",
    todayColorClass: "text-emerald-500",
    weekText: null,
    weekColorClass: "",
    trendDirection: "up",
  },
  {
    id: "activeImpressions",
    title: "Active Impressions",
    value: "32k",
    Icon: BarChart3,
    badgeBgClass: "bg-[#e3ecff]",
    titleColorClass: "text-sky-600",
    iconColorClass: "text-sky-500",
    todayText: "5.5% last 30 days",
    todayColorClass: "text-red-500",
    weekText: null,
    weekColorClass: "",
    trendDirection: "down", // let the card show a red/down arrow if supported
  },
  {
    id: "ecpm",
    title: "eCPM",
    value: "₦594,930",
    Icon: BadgePercent,
    badgeBgClass: "bg-[#f4e6fd]",
    titleColorClass: "text-primary",
    iconColorClass: "text-primary",
    todayText: "5.5% last 30 days",
    todayColorClass: "text-emerald-500",
    weekText: null,
    weekColorClass: "",
    trendDirection: "up",
  },
  {
    id: "activeCampaigns",
    title: "Active Campaigns",
    value: "₦1,873,902",
    Icon: Megaphone,
    badgeBgClass: "bg-[#fff3df]",
    titleColorClass: "text-orange-500",
    iconColorClass: "text-orange-400",
    todayText: "5.5% last 30 days",
    todayColorClass: "text-emerald-500",
    weekText: null,
    weekColorClass: "",
    trendDirection: "up",
  },
  {
    id: "activeAdServed",
    title: "Active as Served",
    value: "53k",
    Icon: ActivitySquare,
    badgeBgClass: "bg-[#e3ecff]",
    titleColorClass: "text-indigo-600",
    iconColorClass: "text-indigo-500",
    todayText: "5.5% last 30 days",
    todayColorClass: "text-emerald-500",
    weekText: null,
    weekColorClass: "",
    trendDirection: "up",
  },
];

function MonetizationOverviewCardsSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 gap-4 xl:gap-6">
      {monetizationOverviewCards.map((card) => (
        <ContentOverviewCard key={card.id} {...card} />
      ))}
    </section>
  );
}

export default MonetizationOverviewCardsSection;
