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

// ==========================TEXT EDITIOR =================================

export const tipTapImageUpload = (credentials) =>
  apiCall("post", "/aaa", credentials);

// ======================== COUNTRY ===============================================

export const createCountry = (credentials) =>
  apiCall("post", "/country/create", credentials);

export const getCountry = () => apiCall("get", "/country/all");
export const deleteCountry = (id) => apiCall("delete", `/country/delete/${id}`);
export const updateCountry = (id) => apiCall("put", `/country/update/${id}`);