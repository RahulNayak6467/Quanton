import { TrendingUp, Bell, Bookmark, BarChart2, Zap } from "lucide-react";
export const features = [
  {
    id: 1,
    icon: (
      <TrendingUp
        size={32}
        className="text-accent bg-accent/10 p-2 rounded-lg w-fit "
      />
    ),
    title: "Real-Time Tracking",
    description:
      "Monitor live prices across thousands of stocks the moment they move. Never miss a market shift.",
    stat: "10,000+ stocks tracked",
  },
  {
    id: 2,
    icon: (
      <Bell
        size={32}
        className="text-accent bg-accent/10 p-2 rounded-lg w-fit "
      />
    ),
    title: "Smart Alerts",
    description:
      "Set custom price alerts for any stock. Get notified instantly when your conditions are met.",
    stat: "Instant notifications",
  },
  {
    id: 3,
    icon: (
      <Bookmark
        size={32}
        className="text-accent bg-accent/10 p-2 rounded-lg w-fit "
      />
    ),
    title: "Watchlist",
    description:
      "Build and manage a personal watchlist of stocks you care about. All in one clean dashboard.",
    stat: "Unlimited stocks",
  },
  {
    id: 4,
    icon: (
      <BarChart2
        size={32}
        className="text-accent bg-accent/10 p-2 rounded-lg w-fit "
      />
    ),
    title: "Market Insights",
    description:
      "Access analyst recommendations, key fundamentals, and the latest news for any stock.",
    stat: "Deep market data",
  },
  {
    id: 5,
    icon: (
      <Zap
        size={32}
        className="text-accent bg-accent/10 p-2 rounded-lg w-fit "
      />
    ),
    title: "Top Movers",
    description:
      "Discover the biggest gainers and losers every day.Spot opportunities before the crowd does.",
    stat: "Updated every minute",
  },
];
