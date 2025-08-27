import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";

// Heroicons v2 (outline) from react-icons
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

const ICON_SIZE = 26; // consistent outlined size

function Item({ to, icon: Icon, label, collapsed, onClick }) {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex items-center gap-4 rounded-md px-3 py-2 text-[15px]",
          isActive ? "bg-[#96469C] text-white shadow" : "text-gray-700 hover:bg-[#96469C]/10",
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
  const nav = useNavigate();

  return (
    <aside
      className={[
        "sticky top-3 h-full rounded-xl border bg-white p-3 flex flex-col",
        collapsed ? "w-24" : "w-80", // wider rail + wider expanded
        "transition-[width] duration-200",
      ].join(" ")} 
      aria-label="sidebar"  
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        {/* bigger logo */}
        {!collapsed ? (
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        ) : (
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain mx-auto" />
        )}

        {/* icon-only collapse/expand button (no text) */}
          {!collapsed && (
            <button
              aria-label="Collapse sidebar"
              onClick={onToggleCollapse}
              className="ml-2 hidden lg:inline-flex items-center justify-center rounded border p-2 hover:bg-slate-50"
              title="Collapse"
            >
              <HiOutlineChevronDoubleLeft size={18} />
            </button>
          )} 
              </div>

              {/* Rail expand icon when collapsed (full width) */}
      {collapsed && (
        <button
          onClick={onToggleCollapse}
          className="mb-3 w-full grid place-items-center rounded-md border py-2 hover:bg-slate-50"
          aria-label="Expand sidebar"
          title="Expand"
        >
          <HiOutlineChevronDoubleRight size={18} />
        </button>
      )}

      {/* Nav */}
      <nav className="space-y-2">
        <Item to="/dashboard" icon={HiOutlineSquares2X2} label="Dashboard" collapsed={collapsed} />
        <Item to="/dashboard/chat" icon={HiOutlineChatBubbleLeftRight} label="Chat" collapsed={collapsed} />
        <Item to="/dashboard/notifications" icon={HiOutlineBell} label="Notification" collapsed={collapsed} />
        <Item to="/dashboard/membership" icon={HiOutlineCurrencyRupee} label="Membership" collapsed={collapsed} />
        <Item to="/dashboard/settings" icon={HiOutlineCog6Tooth} label="Settings" collapsed={collapsed} />
      </nav>

      {/* Footer – pinned bottom; icon-only when collapsed */}
      <div className="mt-auto pt-4">
        {collapsed ? (
          <button
            onClick={() => nav("/login")}
            className="w-full grid place-items-center rounded-md bg-orange-600 py-3 text-white"
            title="Logout"
            aria-label="Logout"
          >
            <HiOutlineArrowLeftOnRectangle size={ICON_SIZE} />
          </button>
        ) : (
          <button
            onClick={() => nav("/login")}
            className="w-full flex items-center justify-center gap-3 rounded-md bg-orange-600 py-3 text-white"
          >
            <HiOutlineArrowLeftOnRectangle size={ICON_SIZE} />
            <span>Logout</span>
          </button>
        )}
      </div>
       {/* <div className="sticky bottom-0 -mx-3 px-3">
        <div className="border-t bg-white/95 backdrop-blur px-0 pt-3 pb-3">
          {collapsed ? (
            <button 
              onClick={() => nav("/login")}
              className="w-full grid place-items-center rounded-md bg-orange-600 py-3 text-white"
              title="Logout"
              aria-label="Logout"
            >
              <HiOutlineArrowLeftOnRectangle size={ICON_SIZE} />
            </button>
          ) : (
            <button
              onClick={() => nav("/login")}
              className="w-full flex items-center justify-center gap-3 rounded-md bg-orange-600 py-3 text-white"
            >
              <HiOutlineArrowLeftOnRectangle size={ICON_SIZE} />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div> */}
    </aside>
  );
}

/* ---------- Mobile drawer ---------- */
function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  if (!open) return null;

  const drawer = (
    <div className="fixed inset-0 z-50">
      {/* Scrim */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      {/* Panel */}
      <div className="absolute left-0 top-0 h-full w-[85%] max-w-[360px] bg-white p-4 shadow-xl flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
          <button
            onClick={onClose}
            className="rounded-md border px-3 py-1 text-sm hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <nav className="space-y-2">
          <DrawerLink to="/dashboard" label="Dashboard" icon={HiOutlineSquares2X2} onClose={onClose} />
          <DrawerLink to="/dashboard/chat" label="Chat" icon={HiOutlineChatBubbleLeftRight} onClose={onClose} />
          <DrawerLink to="/dashboard/notifications" label="Notification" icon={HiOutlineBell} onClose={onClose} />
          <DrawerLink to="/dashboard/membership" label="Membership" icon={HiOutlineCurrencyRupee} onClose={onClose} />
          <DrawerLink to="/dashboard/settings" label="Settings" icon={HiOutlineCog6Tooth} onClose={onClose} />
        </nav>

        {/* logout pinned bottom */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => {
              onClose();
              window.location.href = "/login";
            }}
            className="w-full flex items-center justify-center gap-3 rounded-md bg-orange-600 py-3 text-white"
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
          "flex items-center gap-4 rounded-md px-3 py-2 text-[15px]",
          isActive ? "bg-[#96469C] text-white shadow" : "text-gray-700 hover:bg-[#96469C]/10",
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
  return <DesktopSidebar collapsed={props.collapsed} onToggleCollapse={props.onToggleCollapse} />;
}
