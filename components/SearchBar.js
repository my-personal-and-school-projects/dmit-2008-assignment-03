import { Box, TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <>
      <Box sx={{ paddingBottom: 2 }}>
        <TextField label="Search" fullWidth sx={{ width: "50%" }} />
      </Box>
    </>
  );
}
