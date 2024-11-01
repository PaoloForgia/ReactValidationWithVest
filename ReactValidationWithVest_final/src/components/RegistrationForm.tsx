import { Card, CardActions, CardContent, SxProps, Theme } from "@mui/material";
import useRegistrationForm from "../hooks/useRegistrationForm";
import { suite } from "../validation/registerFormSuite";
import Button from "./Button";
import Input from "./Input";

const styles = {
  card: {
    minWidth: "300px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
} satisfies SxProps<Theme>;

const RegistrationForm = () => {
  const { form, onChange } = useRegistrationForm();

  const getState = (fieldName: string) => {
    if (suite.hasErrors(fieldName)) return "error";
    else if (suite.hasWarnings(fieldName)) return "warning";
    else if (suite.isValid(fieldName)) return "success";
  };

  return (
    <Card sx={styles.card} elevation={24}>
      <CardContent sx={styles.content}>
        <Input
          label="Username"
          name="username"
          value={form.username}
          message={suite.getMessage("username")}
          state={getState("username")}
          onChange={onChange}
        />
        <Input
          label="Email"
          name="email"
          value={form.email}
          message={suite.getMessage("email")}
          state={getState("email")}
          onChange={onChange}
        />
        <Input
          label="Password"
          name="password"
          value={form.password}
          message={suite.getMessage("password")}
          state={getState("password")}
          onChange={onChange}
        />
        <Input
          label="Confirm password"
          name="passwordConfirmation"
          value={form.passwordConfirmation}
          message={suite.getMessage("passwordConfirmation")}
          state={getState("passwordConfirmation")}
          onChange={onChange}
        />
      </CardContent>
      <CardActions>
        <Button label="Register" disabled={!suite.isValid()} />
      </CardActions>
    </Card>
  );
};

export default RegistrationForm;
