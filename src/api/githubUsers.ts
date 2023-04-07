import axios from 'axios';
import axiosInstance, {axiosConfig} from './axiosInstance';

export const getUser = async ({username}:{username: string}) => {
  const res = await axiosInstance.get(`/users/${username}`);
  return res.data;
};

export const getUserRepos = async ({repos_url}:{repos_url: string}) => {
  const res = await axios.get(repos_url, axiosConfig);
  return res.data;
};
