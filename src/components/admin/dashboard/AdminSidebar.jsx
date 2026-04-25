"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  ClipboardList,
  X,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  // {
  //   name: "All Users",
  //   path: "/admin/users",
  //   icon: <Users size={20} />,
  // },
  // {
  //   name: "University",
  //   path: "/admin/create-university",
  //   icon: <Users size={20} />,
  // },
  {
    name: "Country",
    path: "/admin/create-country",
    icon: <Users size={20} />,
  },
];

export default function AdminSidebar({ open, setOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("graduvateAdminToken");
    router.push("/");
  };
  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    bg-white text-white w-64 min-h-screen
    fixed md:static top-0 left-0 z-50
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        {/* Logo */}
        <div className="px-6 py-3.5 border-b border-slate-700 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">Graduvate</h2>
            <p className="text-xs text-slate-400">Admin Panel</p>
          </div>

          {/* Close icon mobile */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-slate-300"
          >
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-3 py-6 space-y-1">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center font-semibold gap-3 px-4 py-3 rounded-lg transition
                ${
                  isActive
                    ? "bg-blue-900 text-white border-l-4 border-blue-500"
                    : " hover:bg-blue-300 hover:text-white text-black"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-5 w-full px-3 ">
          <div>
            <button
              onClick={handleLogout}
              className="text-lg bg-red-700 w-full py-2 rounded-lg font-semibold cursor-pointer"
            >
              Logout
            </button>
          </div>
          {/* <div className="text-sm text-slate-400 px-6 py-4 border-t border-slate-700">
           © 2026 StudyMBBS
         </div> */}
        </div>
      </aside>
    </>
  );
}
