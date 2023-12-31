import axios from "axios";

export const login = async (email: string, password: string) => {
  const response = await axios.post(`api/auth/login`, { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  return null;
};
