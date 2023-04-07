import Alert, { AlertColor } from "@mui/material/Alert";
import Box from "@mui/material/Box";

export type BoxAlertProps = {
    severity: AlertColor;
    message: string;
  }

function BoxAlert({
  severity,
  message,
}: BoxAlertProps) {
  return (
    <Box p={2}>
      <Alert severity={severity}>{message}</Alert>
    </Box>
  );
}

export default BoxAlert;
