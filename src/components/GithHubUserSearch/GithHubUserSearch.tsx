import { useState } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { useGetUser, useGetUserRepos, type UserData } from "queries/useGetUser";

import { useTheme } from "@mui/material/styles";
import BoxAlert, { type BoxAlertProps } from "./elements/BoxAlert";
import SearchForm, { type UserName } from "./elements/SearchForm";
import UserCard from "./elements/UserCard";

function GithHubUserSearch() {
  const [username, setUsername] = useState<UserName>("");
  const { data, isError } = useGetUser({ username: username });
  const {
    isLoading: isLoadingRepos,
    data: dataRepos,
    error: errorRepos,
  } = useGetUserRepos({ repos_url: data?.repos_url });

  // console.log(isLoadingRepos, dataRepos, errorRepos);

  const errorsProps: BoxAlertProps = {
    severity: "error",
    message: `The user ${username} does not exist.`,
  };

  const userProps: Omit<UserData, "repos_url"> = {
    avatar_url: data?.avatar_url,
    bio: data?.bio,
    html_url: data?.html_url,
    login: data?.login,
    name: data?.name,
  };

  const theme = useTheme();
  return (
    <Paper elevation={3}>
      <Stack gap={2} mt={2} mb={2} padding={4}>
        <SearchForm setUsername={setUsername} />
        {data && <UserCard {...userProps} />}
        {isError && <BoxAlert {...errorsProps} />}
      </Stack>
    </Paper>
  );
}

export default GithHubUserSearch;
