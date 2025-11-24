import React from "react";
import MonetizationOverviewCardsSection from "../../components/monetization/sections/MonetizationOverviewCardsSection";
import RevenueAndCategoriesSection from "../../components/monetization/sections/RevenueAndCategorySection";
import MonetizationBottomSection from "../../components/monetization/sections/MonetizationBottomSection";

function MonetizationPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900">
        Monetization & Revenue
      </h2>
      <MonetizationOverviewCardsSection />
      <RevenueAndCategoriesSection />
      <MonetizationBottomSection />
    </div>
  );
}

export default MonetizationPage;
