import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingProgress() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        width: "100%",
        justifyItems: "center",
        zIndex: "1",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
