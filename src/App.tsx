import { useGetUser, useGetUserRepos } from "queries/useGetUser";

function App() {
  const { isLoading, data, error } = useGetUser({ username: "gianlucasudano" });
  const {
    isLoading: isLoadingRepos,
    data: dataRepos,
    error: errorRepos,
  } = useGetUserRepos({ repos_url: data?.repos_url });

  console.log(isLoading, data, error);
  console.log(isLoadingRepos, dataRepos, errorRepos);

  return <h1>Workfully</h1>;
}

export default App;
