import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UsersTable from "../components/users/UsersTable";

const USERS_STATS = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={USERS_STATS.totalUsers.toLocaleString()}
            color="#6366f1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={USERS_STATS.newUsersToday}
            color="#10b981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={USERS_STATS.activeUsers.toLocaleString()}
            color="#f59e0b"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={USERS_STATS.churnRate}
            color="#ef4444"
          />
        </motion.div>
        <UsersTable />
      </main>
    </div>
  );
};

export default UsersPage;
