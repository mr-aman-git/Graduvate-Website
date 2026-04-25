import axiosInstance from "./axiosInstance";

const apiCall = async (method, url, data = null) => {
  try {
    const response = await axiosInstance({ method, url, data });
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const userLogin = (credentials) => apiCall("post", "/users/login", credentials);

export const userRegister =(credentials)=> apiCall("post", "/users/register", credentials );

export const userOtpVerify=(credentials)=> apiCall("post", "/users/verify-otp", credentials);

export const forgotOtpPassword =(credentials)=> apiCall("post", "/users/forgot-password", credentials)
export const otpVerifyAndChangePassword =(credentials)=> apiCall("post", "/users/reset-password", credentials)
