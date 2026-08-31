import axios from "axios";

// 1. Next.js environment variable standard
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Request Interceptor: Attach Token (Client-side Safe)
API.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 3. Response Interceptor: Handle Unauthorized (401) with Public Route Protection
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      const requestUrl = error.config?.url || "";
      const currentPath = window.location.pathname;

      // Agar request public API ki hai ya user already public/login page par hai toh force redirect na karein
      const isPublicEndpoint =
        requestUrl.includes("/public") || requestUrl.includes("/login");
      const isPublicPage =
        currentPath.startsWith("/blog") ||
        currentPath === "/" ||
        currentPath.includes("/login");

      if (!isPublicEndpoint && !isPublicPage) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default API;
