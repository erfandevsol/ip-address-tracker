import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

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
      sx={{ display: "flex", gap: 2, alignItems: "center", marginBottom: 4 }}
    >
      <TextField
        {...register("query", { required: true })}
        label="Enter IP or Domain"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
}
