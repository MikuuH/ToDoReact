import { AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 inset-x-0">
      <AppBar position="static">
        <Toolbar className="flex items-center justify-center"></Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
