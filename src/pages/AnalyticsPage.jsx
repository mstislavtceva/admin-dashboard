import Header from "../components/common/Header";
import AnalyticOverviewCards from "../components/analytics/AnalyticOverviewCards";
import RevenueChart from "../components/analytics/RevenueChart";
import ChannelPerfomance from "../components/analytics/ChannelPerfomance";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";
import ProductPerfomance from "../components/analytics/ProductPerfomance";
import UserRetention from "../components/analytics/UserRetention";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics Dashboard"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <AnalyticOverviewCards />
        <RevenueChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
          <ChannelPerfomance />
          <ProductPerfomance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
