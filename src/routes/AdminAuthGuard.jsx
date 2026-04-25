"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminAuthGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const adminToken = localStorage.getItem("graduvateAdminToken");

    if (!adminToken) {
      router.replace("/");
    }
  }, [router]);

  return children;
};

export default AdminAuthGuard;
