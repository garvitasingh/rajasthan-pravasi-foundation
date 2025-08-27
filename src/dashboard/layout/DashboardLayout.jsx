import React, { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ProfileCard from "../components/ProfileCard";

export default function DashboardLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleCollapsed = useCallback(() => setCollapsed(v => !v), []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* wider container: was max-w-[1400px] */}
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 lg:grid-cols-[auto_1fr_24rem] gap-4 lg:gap-6 px-3 lg:px-6 py-3 lg:py-6">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar
            variant="desktop"
            collapsed={collapsed}
            onToggleCollapse={toggleCollapsed}
          />
        </div>

        {/* Mobile drawer */}
        <Sidebar variant="mobile" open={drawerOpen} onClose={closeDrawer} />

        {/* Main – topbar lives only over main column */}
        <div className="min-w-0">
          <Topbar onMenuClick={openDrawer} />
          {/* reduce side whitespace by not nesting extra container limits */}
          <div className="mt-4 lg:mt-6">
            <Outlet />
          </div>
        </div>

        {/* Right profile panel (still visible from xl) */}
        <aside className="hidden xl:block">
          <ProfileCard />
        </aside>
      </div>
    </div>
  );
}
