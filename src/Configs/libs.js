export const baseURL = import.meta.env.VITE_BASE_URL;
export const accessToken = `bearer ${localStorage.getItem("accessToken")}`;
