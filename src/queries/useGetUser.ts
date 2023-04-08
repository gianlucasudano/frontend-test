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
  isInitialLoading: boolean;
  data: UserData;
  isError: boolean;
  error: AxiosError;
}

export type DataRepo = {
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
};

type DataReposResponse = {
  isInitialLoading: boolean;
  data: DataRepo[];
  isError: boolean;
  error: AxiosError;
}

function useGetUser({ username }: { username: string }) {
  const { isInitialLoading, data, isError, error } = useQuery({
    queryKey: [username],
    queryFn: () => getUser({ username }),
    enabled: !!username,
    retry: false,
  });

  return { isInitialLoading, data, isError, error }  as UserResponse; 
}

function useGetUserRepos({ repos_url }: { repos_url: string }) {
  const { isInitialLoading, data, isError, error } = useQuery({
    queryKey: [repos_url],
    queryFn: () => getUserRepos({ repos_url }),
    enabled: !!repos_url,
  });

  return { isInitialLoading, data, isError, error } as DataReposResponse;
}

export { useGetUser, useGetUserRepos };
