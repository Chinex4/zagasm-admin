import React from "react";
import RevenueOverTimeCard from "../charts/RevenueOverTimeCard";
import TopAdCategoriesCard from "../charts/TopAdCategoriesCard";

function RevenueAndCategoriesSection() {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[3fr,2fr] gap-6">
      <div className="xl:col-span-2">
        <RevenueOverTimeCard />
      </div>
      <TopAdCategoriesCard />
    </section>
  );
}

export default RevenueAndCategoriesSection;
