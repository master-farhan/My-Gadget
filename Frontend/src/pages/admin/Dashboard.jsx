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
    <div className="p-4 md:p-6 lg:p-10 space-y-10 w-full min-h-screen bg-gray-50">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#78B04F] text-center md:text-left">
        Admin Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl shadow-md text-center sm:text-left">
          <h2 className="text-lg font-medium">Total Products</h2>
          <p className="text-2xl font-bold text-[#78B04F] mt-1">120</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-md text-center sm:text-left">
          <h2 className="text-lg font-medium">Active Users</h2>
          <p className="text-2xl font-bold text-[#78B04F] mt-1">45</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-md text-center sm:text-left">
          <h2 className="text-lg font-medium">Sales This Month</h2>
          <p className="text-2xl font-bold text-[#78B04F] mt-1">$4,500</p>
        </div>
      </div>

      {/* Chart Panel */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#78B04F] text-center md:text-left">
          Sales Overview
        </h2>
        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
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
    </div>
  );
};

export default Dashboard;
