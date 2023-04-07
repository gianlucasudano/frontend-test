import { useForm, Control, SubmitHandler } from "react-hook-form";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import TextFieldControlled, {
  type TextFieldControlledProps,
} from "components/TextFieldControlled";

export type UserName = string;

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

function SearchForm({
  setUsername,
}: {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setUsername(formData.username);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
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
  );
}

export default SearchForm;
