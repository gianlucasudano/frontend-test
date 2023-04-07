import { useQuery } from "@tanstack/react-query";
import { AxiosError } from 'axios';
import { getUser, getUserRepos } from "api/githubUsers";

export type UserData = {
  avatar_url: string;
  bio: string | null;
  html_url: string;
  login: string;
  name: string | null;
  repos_url: string;
}

type UserResponse = {
  isLoading: boolean;
  data: UserData;
  isError: boolean;
  error: AxiosError;
}

function useGetUser({ username }: { username: string }) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [username],
    queryFn: () => getUser({ username }),
    enabled: !!username,
    retry: false,
  });

  return { isLoading, data, isError, error }  as UserResponse; 
}

function useGetUserRepos({ repos_url }: { repos_url: string }) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [repos_url],
    queryFn: () => getUserRepos({ repos_url }),
    enabled: !!repos_url,
  });

  return { isLoading, data, isError, error };
}

export { useGetUser, useGetUserRepos };
