"use client";

// React imports
import { SyntheticEvent, useState } from "react";

// Mui materials
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Types declaration
type NoticeProps = {
  open: boolean;
  message: string;
};

export default function HandleNotice({ error }: { error: NoticeProps }) {
  const [isOpen, setIsOpen] = useState(error.open);

  // Function to close the snackbar
  const handleClose = (
    event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };

  return (
    <div>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
