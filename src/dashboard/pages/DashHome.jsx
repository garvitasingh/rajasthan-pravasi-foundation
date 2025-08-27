import React, { useMemo } from "react";
import StatCard from "../components/StatCard";
import SearchBar from "../components/SearchBar";
import Badge from "../components/Badge";
import { BsChatText } from "react-icons/bs";

const rows = new Array(6).fill(null).map((_, i) => ({
  id: `PR0000${i + 1}`,
  name: "Rajveer Pratap",
  occ: "Sales Manager",
  blood: "B+",
  current: "Gurgaon",
  permanent: "Jaipur",
}));

export default function DashHome() {
  const cols = useMemo(
    () => ["Unique ID", "Name","Blood Group", "Occupation",  "Addresses", "Chat"],
    []
  );

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Total Pravasi" value="10500" tone="blue" />
        <StatCard title="Verified Pravasi" value="800" tone="green" />
        <StatCard title="Unverified Pravasi" value="250" tone="orange" />
      </div>

      {/* Search */}
      <SearchBar placeholder="Search by Unique ID, Name, Occupation, City" />

      {/* Table */}
      <div className="rounded-xl border bg-white overflow-hidden">
        <div className="border-b px-4 py-3 font-semibold">List Of Pravasi</div>
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {cols.map((c) => (
                  <th key={c} className="px-4 py-2 text-left font-semibold text-gray-600">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">{r.id}</td>
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3">{r.blood}</td> 
                                    <td className="px-4 py-3">{r.occ}</td>

                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <div>Current:   <Badge>{r.current}</Badge></div>
                      <div>Permanent: <Badge>{r.permanent}</Badge></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button className="rounded border px-3 py-1 hover:bg-slate-50">
                      <BsChatText size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
