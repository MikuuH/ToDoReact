import { AppBar, Toolbar, Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
        <Toolbar className="flex justify-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className='h-[5vh] w-[5vw]'
          />
          <Typography variant="h6">
            TODO
          </Typography>
          <img
            src="/logo.svg"
            alt="Logo"
            className='h-[5vh] w-[5vw]'
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
