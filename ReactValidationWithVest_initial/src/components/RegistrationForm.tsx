import { Card, CardActions, CardContent, SxProps, Theme } from "@mui/material";
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
  return (
    <Card sx={styles.card} elevation={24}>
      <CardContent sx={styles.content}>
        <Input label="Username" name="username" />
        <Input label="Email" name="email" />
        <Input label="Password" name="password" />
        <Input label="Confirm password" name="passwordConfirmation" />
      </CardContent>
      <CardActions>
        <Button label="Register" />
      </CardActions>
    </Card>
  );
};

export default RegistrationForm;
