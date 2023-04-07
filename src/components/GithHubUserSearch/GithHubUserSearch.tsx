import { useState } from "react";
import { useForm, Control, SubmitHandler } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { useGetUser } from "queries/useGetUser";

import BoxAlert, { type BoxAlertProps } from "./elements/BoxAlert";
import SearchForm, { type UserName } from "./elements/SearchForm";

function GithHubUserSearch() {
  const [username, setUsername] = useState<UserName>("");
  const { isLoading, data, isError } = useGetUser({ username: username });

  const errorsProps: BoxAlertProps = {
    severity: "error",
    message: `The user ${username} does not exist.`,
  };

  return (
    <Paper elevation={1}>
      <Stack gap={1} mt={2} mb={2}>
        <SearchForm setUsername={setUsername} />
        {isError && <BoxAlert {...errorsProps} />}
      </Stack>
    </Paper>
  );
}

export default GithHubUserSearch;
