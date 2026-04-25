export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Welcome Admin 👋
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded shadow">
          Total Users: 120
        </div>

        <div className="bg-white p-5 rounded shadow">
          Orders: 56
        </div>

        <div className="bg-white p-5 rounded shadow">
          Revenue: ₹45,000
        </div>
      </div>
    </div>
  );
}
