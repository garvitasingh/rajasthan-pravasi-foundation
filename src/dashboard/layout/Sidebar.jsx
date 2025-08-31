import React, { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { AppContext } from "../../context/AppContext";
import {
  HiOutlineSquares2X2,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBell,
  HiOutlineCurrencyRupee,
  HiOutlineCog6Tooth,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";

const ICON_SIZE = 22;

function Item({ to, icon: Icon, label, collapsed, onClick }) {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
          isActive
            ? "bg-gradient-to-r from-[#96469C] to-blue-700 text-white shadow-md"
            : "text-gray-600 hover:bg-gray-100 hover:text-[#96469C]",
        ].join(" ")
      }
      title={collapsed ? label : undefined}
      aria-label={label}
    >
      <Icon size={ICON_SIZE} className="shrink-0" />
      {!collapsed && <span className="truncate">{label}</span>}
    </NavLink>
  );
}

/* ---------- Desktop sidebar ---------- */
function DesktopSidebar({ collapsed, onToggleCollapse }) {
  const { logout } = useContext(AppContext);
  const nav = useNavigate();

  return (
    <aside
      className={[
        "sticky top-3 h-[calc(100vh-1rem)] rounded-2xl border bg-white/90 backdrop-blur-md shadow-lg p-4 flex flex-col",
        collapsed ? "w-20" : "w-72",
        "transition-[width] duration-300 ease-in-out",
      ].join(" ")}
      aria-label="sidebar"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        {!collapsed ? (
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        ) : (
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain mx-auto"
          />
        )}
        {!collapsed && (
          <button
            aria-label="Collapse sidebar"
            onClick={onToggleCollapse}
            className="ml-2 hidden lg:inline-flex items-center justify-center rounded-md border p-2 hover:bg-gray-100 transition"
            title="Collapse"
          >
            <HiOutlineChevronDoubleLeft size={18} />
          </button>
        )}
      </div>

      {collapsed && (
        <button
          onClick={onToggleCollapse}
          className="mb-4 w-full grid place-items-center rounded-md border py-2 hover:bg-gray-100 transition"
          aria-label="Expand sidebar"
          title="Expand"
        >
          <HiOutlineChevronDoubleRight size={18} />
        </button>
      )}

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        <Item
          to="/dashboard"
          icon={HiOutlineSquares2X2}
          label="Dashboard"
          collapsed={collapsed}
        />
        <Item
          to="/dashboard/chat"
          icon={HiOutlineChatBubbleLeftRight}
          label="Chat"
          collapsed={collapsed}
        />
        <Item
          to="/dashboard/notifications"
          icon={HiOutlineBell}
          label="Notification"
          collapsed={collapsed}
        />
        <Item
          to="/dashboard/membership"
          icon={HiOutlineCurrencyRupee}
          label="Membership"
          collapsed={collapsed}
        />
        <Item
          to="/dashboard/settings"
          icon={HiOutlineCog6Tooth}
          label="Settings"
          collapsed={collapsed}
        />
      </nav>

      {/* Footer */}
      <div className="pt-4">
        {collapsed ? (
          <button
            onClick={() => nav("/login")}
            className="w-full grid place-items-center rounded-lg bg-gradient-to-r from-orange-600 to-red-600 py-3 text-white shadow-md hover:opacity-90 transition"
            title="Logout"
            aria-label="Logout"
          >
            <HiOutlineArrowLeftOnRectangle size={ICON_SIZE} />
          </button>
        ) : (
          <button
            onClick={() => {
              logout();
              nav("/login");
            }}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 py-3 text-white shadow-md hover:opacity-90 transition"
          >
            <HiOutlineArrowLeftOnRectangle size={ICON_SIZE} />
            <span>Logout</span>
          </button>
        )}
      </div>
    </aside>
  );
}

/* ---------- Mobile drawer ---------- */
function MobileDrawer({ open, onClose }) {
  const { logout } = useContext(AppContext);
  const nav = useNavigate();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  if (!open) return null;

  const drawer = (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      {/* Panel */}
      <div className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col animate-slide-in">
        <div className="p-4 flex items-center justify-between border-b">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          <button
            onClick={onClose}
            className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100"
          >
            Close
          </button>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          <DrawerLink
            to="/dashboard"
            label="Dashboard"
            icon={HiOutlineSquares2X2}
            onClose={onClose}
          />
          <DrawerLink
            to="/dashboard/chat"
            label="Chat"
            icon={HiOutlineChatBubbleLeftRight}
            onClose={onClose}
          />
          <DrawerLink
            to="/dashboard/notifications"
            label="Notification"
            icon={HiOutlineBell}
            onClose={onClose}
          />
          <DrawerLink
            to="/dashboard/membership"
            label="Membership"
            icon={HiOutlineCurrencyRupee}
            onClose={onClose}
          />
          <DrawerLink
            to="/dashboard/settings"
            label="Settings"
            icon={HiOutlineCog6Tooth}
            onClose={onClose}
          />
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={() => {
              logout();
              onClose();
              nav("/login");
            }}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 py-3 text-white shadow-md hover:opacity-90 transition"
          >
            <HiOutlineArrowLeftOnRectangle size={ICON_SIZE} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(drawer, document.body);
}

function DrawerLink({ to, icon: Icon, label, onClose }) {
  return (
    <NavLink
      to={to}
      end
      onClick={onClose}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
          isActive
            ? "bg-gradient-to-r from-[#96469C] to-blue-700 text-white shadow"
            : "text-gray-600 hover:bg-gray-100 hover:text-[#96469C]",
        ].join(" ")
      }
    >
      <Icon size={ICON_SIZE} />
      <span>{label}</span>
    </NavLink>
  );
}

export default function Sidebar(props) {
  if (props.variant === "mobile") {
    return <MobileDrawer open={props.open} onClose={props.onClose} />;
  }
  return (
    <DesktopSidebar
      collapsed={props.collapsed}
      onToggleCollapse={props.onToggleCollapse}
    />
  );
}
