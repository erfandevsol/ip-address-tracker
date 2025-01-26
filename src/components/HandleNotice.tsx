import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { SyntheticEvent, useEffect, useState } from "react";

type NoticeProps = {
  open: boolean;
  message: string;
};

export default function HandleNotice({ open, message }: NoticeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    handleClick();
  }, [open]);

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
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
