import { Box } from '@mui/material';
import { useTheme } from "@mui/material";

const BoxSystemProps = ({ children }) => {
  const theme = useTheme();
  return (
    <Box sx={{backgroundColor: theme.palette.background.default, height: 'calc(100vh - 100px)'}}>
      {children}
    </Box>
  );
}

export default function Body({ children }) {
  return (
    <>
      <BoxSystemProps>{children}</BoxSystemProps>
    </>
  );
}
