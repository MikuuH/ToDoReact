import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Containers({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        className="h-screen w-screen fixed left-0 top-0 overflow-hidden"
      >
        <Box className="h-full w-full relative"> {/* Добавляем relative позиционирование */}
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Containers;
