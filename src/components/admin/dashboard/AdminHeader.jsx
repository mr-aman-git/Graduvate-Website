"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminHeader({ setOpen }) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const pageTitle =
    segments[segments.length - 1]?.replace("-", " ").toUpperCase() ||
    "DASHBOARD";

  return (
    <header className="bg-white px-4 md:px-6 py-4 shadow-sm flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-gray-700"
        >
          <Menu />
        </button>

        <div>
          <p className="text-xs text-gray-400">
            Admin / {pageTitle}
          </p>
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium text-gray-700">Admin</p>
          <p className="text-xs text-gray-400">Super Admin</p>
        </div>

        <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}
