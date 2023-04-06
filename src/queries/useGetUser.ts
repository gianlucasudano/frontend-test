import { useQuery } from "@tanstack/react-query";
import { getUser, getUserRepos } from "api/githubUsers";

// TODO: define types based on github APIs schema

function useGetUser({ username }: { username: string }) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [username],
    queryFn: () => getUser({ username }),
  });

  return { isLoading, data, isError, error };
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
