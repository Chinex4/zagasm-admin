import React from "react";

const recentCampaigns = [
  {
    id: 1,
    campaignName: "Holiday Flash Sale",
    advertiser: "Fashion Trends",
    purchaseItem: "Discount",
    amount: "₦910k",
  },
  {
    id: 2,
    campaignName: "Holiday Flash Sale",
    advertiser: "Fashion Trends",
    purchaseItem: "Discount",
    amount: "₦910k",
  },
  {
    id: 3,
    campaignName: "Holiday Flash Sale",
    advertiser: "Fashion Trends",
    purchaseItem: "Discount",
    amount: "₦910k",
  },
  {
    id: 4,
    campaignName: "Holiday Flash Sale",
    advertiser: "Fashion Trends",
    purchaseItem: "Discount",
    amount: "₦910k",
  },
  {
    id: 5,
    campaignName: "Holiday Flash Sale",
    advertiser: "Fashion Trends",
    purchaseItem: "Discount",
    amount: "₦910k",
  },
];

const recentUserCampaigns = [
  { id: 1, userId: "Cooking Made Easy", status: "Active" },
  { id: 2, userId: "Cooking Made Easy", status: "Active" },
  { id: 3, userId: "Cooking Made Easy", status: "Active" },
  { id: 4, userId: "Cooking Made Easy", status: "Active" },
  { id: 5, userId: "Cooking Made Easy", status: "Active" },
];

const topAdvertisers = [
  {
    id: 1,
    campaignName: "Cooking Made Easy",
    totalSpend: "₦18.2k",
    ecpm: "₦2.09k",
  },
  {
    id: 2,
    campaignName: "Cooking Made Easy",
    totalSpend: "₦18.2k",
    ecpm: "₦2.09k",
  },
  {
    id: 3,
    campaignName: "Cooking Made Easy",
    totalSpend: "₦18.2k",
    ecpm: "₦2.09k",
  },
  {
    id: 4,
    campaignName: "Cooking Made Easy",
    totalSpend: "₦18.2k",
    ecpm: "₦2.09k",
  },
  {
    id: 5,
    campaignName: "Cooking Made Easy",
    totalSpend: "₦18.2k",
    ecpm: "₦2.09k",
  },
];

function MonetizationBottomSection() {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[2.2fr,1.6fr,2fr] gap-6">
      {/* Recent Campaigns - detailed */}
      <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-4 md:px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Recent Campaigns
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs text-neutral-500 border-b border-neutral-100">
                <th className="py-3 pr-4 font-medium whitespace-nowrap">
                  CAMPAIGN NAME
                </th>
                <th className="py-3 px-4 font-medium whitespace-nowrap">
                  ADVERTISER
                </th>
                <th className="py-3 px-4 font-medium whitespace-nowrap">
                  PURCHASE ITEM
                </th>
                <th className="py-3 pl-4 font-medium whitespace-nowrap">
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody>
              {recentCampaigns.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-neutral-100 last:border-b-0"
                >
                  <td className="py-3 pr-4 text-neutral-800">
                    {row.campaignName}
                  </td>
                  <td className="py-3 px-4 text-neutral-900 font-medium">
                    {row.advertiser}
                  </td>
                  <td className="py-3 px-4 text-neutral-800">
                    {row.purchaseItem}
                  </td>
                  <td className="py-3 pl-4 text-neutral-900">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Campaigns - user / status */}
      <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-4 md:px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Recent Campaigns
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs text-neutral-500 border-b border-neutral-100">
                <th className="py-3 pr-4 font-medium whitespace-nowrap">
                  USER ID
                </th>
                <th className="py-3 pl-4 font-medium whitespace-nowrap">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              {recentUserCampaigns.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-neutral-100 last:border-b-0"
                >
                  <td className="py-3 pr-4 text-neutral-800">{row.userId}</td>
                  <td className="py-3 pl-4">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium bg-lightPurple text-primary">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Advertisers */}
      <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm px-4 md:px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Top Advertisers
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs text-neutral-500 border-b border-neutral-100">
                <th className="py-3 pr-4 font-medium whitespace-nowrap">
                  CAMPAIGN NAME
                </th>
                <th className="py-3 px-4 font-medium whitespace-nowrap">
                  TOTAL SPEND
                </th>
                <th className="py-3 pl-4 font-medium whitespace-nowrap">
                  eCPM
                </th>
              </tr>
            </thead>
            <tbody>
              {topAdvertisers.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-neutral-100 last:border-b-0"
                >
                  <td className="py-3 pr-4 text-neutral-800">
                    {row.campaignName}
                  </td>
                  <td className="py-3 px-4 text-neutral-900">
                    {row.totalSpend}
                  </td>
                  <td className="py-3 pl-4 text-neutral-900">{row.ecpm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default MonetizationBottomSection;
