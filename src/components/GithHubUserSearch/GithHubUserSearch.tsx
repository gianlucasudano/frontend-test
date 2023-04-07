import { useState } from "react";
import { useForm, Control, SubmitHandler } from "react-hook-form";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { useGetUser } from "queries/useGetUser";
import TextFieldControlled, {
  type TextFieldControlledProps,
} from "components/TextFieldControlled";

type UserName = string;

interface FormData {
  username: UserName;
}

const defaultValues = {
  username: "",
};

const userNameProps = {
  label: "username",
  name: "username",
  placeholder: "Search username...",
  required: true,
  size: "small",
} as TextFieldControlledProps;

function GithHubUserSearch() {
  const [username, setUsername] = useState<UserName>("");
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const { isLoading, data, error } = useGetUser({ username: username });
  console.log(isLoading, data, error);

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setUsername(formData.username);
    reset(defaultValues);
  };

  return (
    <Paper elevation={1}>
      <Stack gap={2} mt={2} mb={2}>
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <Stack
            padding={2}
            direction="row"
            sx={{ justifyContent: "space-between" }}
          >
            <TextFieldControlled
              sx={{ flexGrow: 2, mr: 1 }}
              {...userNameProps}
              useFormControl={control as unknown as Control}
            />
            <Button variant="outlined" color="inherit" type="submit">
              Search
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
}

export default GithHubUserSearch;
