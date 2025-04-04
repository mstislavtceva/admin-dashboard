import { motion } from "framer-motion";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
} from "recharts";

const MONTH_REVENUE_DATA = [
  { XAxis: "Jan", revenue: 4000, target: 3800 },
  { XAxis: "Feb", revenue: 3000, target: 3200 },
  { XAxis: "Mar", revenue: 5000, target: 4500 },
  { XAxis: "Apr", revenue: 4500, target: 4200 },
  { XAxis: "May", revenue: 6000, target: 5500 },
  { XAxis: "Jun", revenue: 5500, target: 5800 },
  { XAxis: "Jul", revenue: 7000, target: 6500 },
];

const WEEK_REVENUE_DATA = [
  { XAxis: "Mon", revenue: 1500, target: 3800 },
  { XAxis: "Tue", revenue: 1000, target: 3200 },
  { XAxis: "Wed", revenue: 3000, target: 4500 },
  { XAxis: "Thu", revenue: 2500, target: 4200 },
  { XAxis: "Fri", revenue: 1200, target: 5500 },
  { XAxis: "Sat", revenue: 800, target: 5800 },
  { XAxis: "Sun", revenue: 2000, target: 6500 },
];

const QUARTER_REVENUE_DATA = [
  { XAxis: "I", revenue: 7000, target: 6500 },
  { XAxis: "II", revenue: 5500, target: 5800 },
  { XAxis: "III", revenue: 6000, target: 5500 },
  { XAxis: "IV", revenue: 4500, target: 4200 },
];

const YEAR_REVENUE_DATA = [
  { XAxis: "2021", revenue: 3800, target: 1500 },
  { XAxis: "2022", revenue: 3200, target: 1000 },
  { XAxis: "2023", revenue: 4500, target: 3000 },
  { XAxis: "2024", revenue: 4200, target: 2500 },
  { XAxis: "2025", revenue: 5500, target: 1200 },
];

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  const [revenueData, setRevenueData] = useState(MONTH_REVENUE_DATA);

  const handleSelectedTimePeriod = (period) => {
    setSelectedTimeRange(period);

    if (period === "This Week") {
      setRevenueData(WEEK_REVENUE_DATA);
    } else if (period === "This Month") {
      setRevenueData(MONTH_REVENUE_DATA);
    } else if (period === "This Quarter") {
      setRevenueData(QUARTER_REVENUE_DATA);
    } else if (period === "This Year") {
      setRevenueData(YEAR_REVENUE_DATA);
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Revenue vs Target
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => handleSelectedTimePeriod(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="XAxis" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
