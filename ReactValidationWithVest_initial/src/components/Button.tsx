import { Button as MuiButton } from "@mui/material";

type Props = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { label, disabled, onClick } = props;

  return (
    <MuiButton variant="contained" color="primary" disabled={disabled} onClick={onClick} fullWidth>
      {label}
    </MuiButton>
  );
};

export default Button;
