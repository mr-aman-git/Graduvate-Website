"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (!token) {
      router.replace("/auth/student-login");
    }
  }, [router]);

  return children;
};

export default AuthGuard;