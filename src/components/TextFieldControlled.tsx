import { Controller, Control } from 'react-hook-form';
import TextField, {type TextFieldProps} from '@mui/material/TextField';

export type TextFieldControlledProps = {
  useFormControl: Control;
  placeholder: string;
  label: string;
  required: boolean;
  name: string;
  size: "small" | "medium";
} & TextFieldProps;

// https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5?file=/src/index.js
function TextFieldControlled({
  useFormControl,
  placeholder,
  label,
  required,
  name,
  size,
  sx,
}: TextFieldControlledProps) {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          sx={sx}
          size={size}
          placeholder={placeholder}
          label={label}
          required={required}
          {...field}
        />
      )}
      name={name}
      control={useFormControl}
    />
  );
}

export default TextFieldControlled;
