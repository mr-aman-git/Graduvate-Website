import adminAxios from "./adminAxios";

const apiCall = async (method, url, data = null) => {
  try {
    const response = await adminAxios({ method, url, data });
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const adminLogin = (credentials) =>
  apiCall("post", "/auth/admin-login", credentials);

export const getUsers = () => apiCall("get", "/users/all-users");

// ======================== COUNTRY ===============================================
