import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const salesData = [
    { month: "Jan", sales: 2000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 2500 },
    { month: "Apr", sales: 4000 },
    { month: "May", sales: 3800 },
    { month: "Jun", sales: 4500 },
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-semibold text-[#78B04F]">Admin Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-2xl text-[#78B04F]">120</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-2xl text-[#78B04F]">45</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Sales This Month</h2>
          <p className="text-2xl text-[#78B04F]">$4,500</p>
        </div>
      </div>

      {/* Chart Panel */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[#78B04F]">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#78B04F"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
