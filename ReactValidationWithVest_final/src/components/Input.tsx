import { SxProps, TextField, Theme } from "@mui/material";
import { ChangeEvent, HTMLInputTypeAttribute, useMemo } from "react";

const styles = {
  success: {
    "& input + fieldset": {
      borderColor: "#2e7d32",
    },
    "&.MuiFormHelperText-root": {
      color: "#2e7d32",
    },
  },
  warning: {
    "& input + fieldset": {
      borderColor: "#ed6c02",
    },
    "&.MuiFormHelperText-root": {
      color: "#ed6c02",
    },
  },
  error: {
    "& input + fieldset": {
      borderColor: "#d32f2f",
    },
    "&.MuiFormHelperText-root": {
      color: "#d32f2f",
    },
  },
} satisfies SxProps<Theme>;

type Props = {
  label: string;
  name: string;
  value?: string;
  message?: string;
  state?: "default" | "success" | "warning" | "error";
  onChange?: (value: string, name: string) => void;
  type?: HTMLInputTypeAttribute;
};

const Input = (props: Props) => {
  const { label, name, value = "", message, state = "default", onChange, type } = props;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, name);
  };

  const sx = useMemo(() => {
    if (state === "error") return styles.error;
    else if (state === "warning") return styles.warning;
    else if (state === "success") return styles.success;
  }, [state]);

  return (
    <TextField
      color={state === "default" ? "primary" : state}
      label={label}
      value={value}
      helperText={message ?? " "}
      onChange={changeHandler}
      sx={sx}
      slotProps={{ formHelperText: { sx } }}
      type={type}
      autoComplete="off"
      fullWidth
    />
  );
};

export default Input;
