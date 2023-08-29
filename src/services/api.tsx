import axios from 'axios';

export const API_BASE_URL = 'https://retoolapi.dev/cyvi5e/user';

export const fetchUserData = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const updateUserData = async (id: number, value: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}?${value}`);
  return response.data;
};

export const deleteUserData = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/${id}?{delete}`);
  return response.data;
};
