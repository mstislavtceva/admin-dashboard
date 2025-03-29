import { motion } from "framer-motion";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MONTH_SALES_DATA = [
  { xAxis: "Jan", sales: 4000 },
  { xAxis: "Feb", sales: 3000 },
  { xAxis: "Mar", sales: 5000 },
  { xAxis: "Apr", sales: 4500 },
  { xAxis: "May", sales: 6000 },
  { xAxis: "Jun", sales: 5500 },
  { xAxis: "Jul", sales: 7000 },
];

const WEEK_SALES_DATA = [
  { xAxis: "Mon", sales: 2000 },
  { xAxis: "Tue", sales: 1500 },
  { xAxis: "Wed", sales: 500 },
  { xAxis: "Thu", sales: 900 },
  { xAxis: "Fri", sales: 1200 },
  { xAxis: "Sat", sales: 2100 },
  { xAxis: "Sun", sales: 1500 },
];

const QUARTER_SALES_DATA = [
  { xAxis: "I", sales: 40000 },
  { xAxis: "II", sales: 45000 },
  { xAxis: "III", sales: 50000 },
  { xAxis: "IV", sales: 43500 },
];

const YEAR_SALES_DATA = [
  { xAxis: "2021", sales: 100000 },
  { xAxis: "2022", sales: 120000 },
  { xAxis: "2023", sales: 90000 },
  { xAxis: "2024", sales: 125000 },
  { xAxis: "2025", sales: 90500 },
];

const SalesOverviewChart = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("This Month");
  const [salesData, setSalesData] = useState(MONTH_SALES_DATA);

  const handleSelectedTimePeriod = (period) => {
    setSelectedTimePeriod(period);

    if (period === "This Week") {
      setSalesData(WEEK_SALES_DATA);
    } else if (period === "This Month") {
      setSalesData(MONTH_SALES_DATA);
    } else if (period === "This Quarter") {
      setSalesData(QUARTER_SALES_DATA);
    } else if (period === "This Year") {
      setSalesData(YEAR_SALES_DATA);
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2
         focus:ring-blue-500"
          value={selectedTimePeriod}
          onChange={(e) => handleSelectedTimePeriod(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="xAxis" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
