import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
type FormValues = {
  query: string;
};

export default function SearchForm({
  onSubmit,
}: {
  onSubmit: (query: string) => void;
}) {
  const { register, handleSubmit } = useForm<FormValues>();

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data.query);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        height: "100%",
        backgroundImage: "url('/pattern-bg-desktop.png')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box textAlign="center" sx={{ maxWidth: "600px", width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "400",
            marginBottom: "20px",
          }}
        >
          IP Address Tracker
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <TextField
            {...register("query", { required: true })}
            placeholder="Search for any IP address or domain"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: { borderRadius: "15px 0 0 15px", padding: "0px 10px" },
            }}
          />
          <IconButton
            type="submit"
            disableRipple
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "0 15px 15px 0",
              padding: "10px 10px",
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
