import { useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import LinearProgress from '@mui/material/LinearProgress';

import { useGetUser, useGetUserRepos, type UserData } from "queries/useGetUser";

import { useTheme } from "@mui/material/styles";
import BoxAlert, { type BoxAlertProps } from "./elements/BoxAlert";
import SearchForm, { type UserName } from "./elements/SearchForm";
import UserCard from "./elements/UserCard";
import Repos from "./elements/Repos";

function GitHubUserSearch() {
  const [username, setUsername] = useState<UserName>("");
  const { data, isError, isInitialLoading } = useGetUser({
    username: username,
  });
  const { data: dataRepos } = useGetUserRepos({ repos_url: data?.repos_url });

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
        {dataRepos && <Repos dataRepos={dataRepos} />}
        {isError && <BoxAlert {...errorsProps} />}
        {isInitialLoading && <Box><LinearProgress /></Box>}
      </Stack>
    </Paper>
  );
}

export default GitHubUserSearch;
