import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";

const ORDERS_STATS_DATA = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={ORDERS_STATS_DATA.totalOrders}
            color="#6366f1"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={ORDERS_STATS_DATA.pendingOrders}
            color="#f59e0b"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={ORDERS_STATS_DATA.completedOrders}
            color="#10b981"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={ORDERS_STATS_DATA.totalRevenue}
            color="#ef4444"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default OrdersPage;
