import { useQuery } from "@tanstack/react-query";
import { AxiosError } from 'axios';
import { getUser, getUserRepos } from "api/githubUsers";

type Data = {
  avatar_url: string;
  bio: string | null;
  html_url: string;
  login: string;
  name: string | null;
  repos_url: string;
}

type UserResponse = {
  isLoading: boolean;
  data: Data;
  isError: boolean;
  error: AxiosError;
}

function useGetUser({ username }: { username: string }) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [username],
    queryFn: () => getUser({ username }),
    enabled: !!username,
  });

  return { isLoading, data, isError, error };
}

function useGetUserRepos({ repos_url }: { repos_url: string }) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [repos_url],
    queryFn: () => getUserRepos({ repos_url }),
    enabled: !!repos_url,
  });

  return { isLoading, data, isError, error } as UserResponse;
}

export { useGetUser, useGetUserRepos };
