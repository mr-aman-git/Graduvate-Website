import axios from "axios";

// 1. Admin ke liye alag instance
const adminAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000, // Thoda extra time kyunki image upload mein time lagta hai
  // headers: { "Content-Type": "application/json" },
});

// 🔐 Admin Token Attachment
adminAxios.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // Yahan hum admin ka token uthayenge
      const token = localStorage.getItem("graduvateAdminToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ❌ Admin Auto Logout on 401
adminAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      // Sirf Admin ka data remove karein
      localStorage.removeItem("graduvateAdminToken");
      localStorage.removeItem("adminUser");

      // Admin login page par bhejein, na ki student login par
      window.location.href = "/auth/graduvate-admin-login";
    }
    return Promise.reject(error);
  },
);

export default adminAxios;
