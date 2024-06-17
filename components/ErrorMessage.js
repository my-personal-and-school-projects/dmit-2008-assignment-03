const { Box } = require("@mui/material");
import Alert from "@mui/material/Alert";

export default function ErrorMessage({ show, errorMessages }) {
  return (
    <Box sx={{ display: show ? "block" : "none" }}>
      <Alert severity="error">
        <ul>
          {errorMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </Alert>
    </Box>
  );
}
