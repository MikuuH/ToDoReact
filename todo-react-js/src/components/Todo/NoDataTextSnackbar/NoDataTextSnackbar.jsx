import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

import Alert from '@mui/material/Alert';
export default function NoDataTextSnackbar({ opens, OnClose }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(opens)
  }, [opens])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    OnClose();
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert
    onClose={handleClose}
    severity="error"
    variant="filled"
    sx={{ width: '100%' }}
    >
    Нечего добавлять!
    </Alert>
    </Snackbar>
  );
}
