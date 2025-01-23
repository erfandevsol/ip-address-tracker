import { useForm } from "react-hook-form";
import { TextField, Button, Box, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        marginBottom: 4,
      }}
    >
      <TextField
        {...register("query", { required: true })}
        label="Search IP or Domain"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        Search
      </Button>
    </Box>
  );
}
