"use client";

import { useState } from "react";
import AdminSidebar from "../../src/components/admin/dashboard/AdminSidebar";
import AdminHeader from "../../src/components/admin/dashboard/AdminHeader";
import AdminAuthGuard from "../../src/routes/AdminAuthGuard";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <AdminAuthGuard>
      {/* 1. Added h-screen and overflow-hidden here */}
      <div className="h-screen bg-gray-100 flex overflow-hidden">
        {/* SIDEBAR */}
        {/* Make sure your Sidebar has h-full or h-screen inside it */}
        <AdminSidebar open={open} setOpen={setOpen} />

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
          <AdminHeader setOpen={setOpen} />

          {/* 2. Added flex-1 and overflow-y-auto here */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
            <div className="max-w-400 mx-auto">{children}</div>
          </main>
        </div>
      </div> 
    </AdminAuthGuard>
  );
}
