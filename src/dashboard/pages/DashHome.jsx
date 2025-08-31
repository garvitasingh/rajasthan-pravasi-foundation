import React, { useMemo, useEffect, useState, useContext } from "react";
import StatCard from "../components/StatCard";
import SearchBar from "../components/SearchBar";
import Badge from "../components/Badge";
import { BsChatText } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";

export default function DashHome() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);

  const { backendUrl } = useContext(AppContext);

  const cols = useMemo(
    () => [
      "Unique ID",
      "Name",
      "Blood Group",
      "Occupation",
      "Addresses",
      "Chat",
    ],
    []
  );

  // API call
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(backendUrl + "/api/dashboard/stats");
        const result = await res.json();
        if (result.success) {
          setData(result.data);
        } else {
          setError(result.message || "Failed to load data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [backendUrl]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  const filteredList = data.pravasiList.filter((p) => {
    const query = search.toLowerCase();
    return (
      p.publicId?.toLowerCase().includes(query) ||
      p.name?.toLowerCase().includes(query) ||
      p.occupation?.toLowerCase().includes(query) ||
      p.currentCity?.toLowerCase().includes(query) ||
      p.permanentCity?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Pravasi"
          value={data.statistics.totalPravasi}
          tone="blue"
        />
        <StatCard
          title="Verified Pravasi"
          value={data.statistics.verifiedPravasi}
          tone="green"
        />
        <StatCard
          title="Unverified Pravasi"
          value={data.statistics.unverifiedPravasi}
          tone="orange"
        />
      </div>

      {/* Search */}
      <SearchBar
        placeholder="Search by Unique ID, Name, Occupation, City"
        value={search}
        onChange={(val) => setSearch(val)}
        filterValue={filter}
        onFilterChange={(val) => setFilter(val)}
      />

      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="border-b px-6 py-4 font-semibold text-lg text-gray-800 bg-slate-50">
          List Of Pravasi
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto hidden sm:block">
          <div className="max-h-96 overflow-y-auto">
            {" "}
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-slate-100 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wide text-xs">
                    Unique ID
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wide text-xs">
                    Name
                  </th>
                  {/* Hide Blood Group on small screens */}
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wide text-xs hidden md:table-cell">
                    Blood Group
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wide text-xs">
                    Occupation
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wide text-xs">
                    Addresses
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wide text-xs">
                    Chat
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredList.length > 0 ? (
                  filteredList.map((p, idx) => (
                    <tr
                      key={p.id}
                      className={`transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                      } hover:bg-blue-50`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {p.publicId || "N/A"}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {p.name || "N/A"}
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                          {p.bloodGroup || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {p.occupation || "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1 text-xs">
                          <div>
                            <span className="font-medium text-gray-600">
                              Current:
                            </span>{" "}
                            <Badge>{p.currentCity || "N/A"}</Badge>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Permanent:
                            </span>{" "}
                            <Badge>{p.permanentCity || "N/A"}</Badge>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="rounded-lg border px-3 py-1 hover:bg-blue-100 transition-colors flex items-center gap-1 text-blue-600 text-sm font-medium">
                          <BsChatText size={16} /> Chat
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={cols.length}
                      className="px-6 py-8 text-center text-gray-500 text-sm"
                    >
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden flex flex-col divide-y divide-slate-200">
          {filteredList.length > 0 ? (
            filteredList.map((p) => (
              <div
                key={p.id}
                className="p-4 flex flex-col gap-3 bg-white hover:bg-slate-50 transition rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">
                    {p.name || "N/A"}
                  </span>
                  <button className="rounded-lg border px-3 py-1 hover:bg-blue-100 transition-colors flex items-center gap-1 text-blue-600 text-sm font-medium">
                    <BsChatText size={16} /> Chat
                  </button>
                </div>
                <div className="text-sm text-gray-600 grid grid-cols-2 gap-y-2">
                  <div>
                    <span className="font-medium">ID:</span>{" "}
                    {p.publicId || "N/A"}
                  </div>
                  {/* Blood Group hidden on mobile */}
                  <div className="hidden">
                    <span className="font-medium">Blood:</span>{" "}
                    <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                      {p.bloodGroup || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Occupation:</span>{" "}
                    {p.occupation || "N/A"}
                  </div>
                  <div>
                    <span className="font-medium">Current:</span>{" "}
                    {p.currentCity || "N/A"}
                  </div>
                  <div>
                    <span className="font-medium">Permanent:</span>{" "}
                    {p.permanentCity || "N/A"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              No records found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
