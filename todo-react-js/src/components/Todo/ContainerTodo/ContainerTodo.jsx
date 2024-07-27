import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

export default function Container({ tasks }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="flex justify-center items-start h-screen pt-[160px]">
        <Box
          className="rounded-xl bg-black p-4 w-[80vw] overflow-auto"
          style={{ maxHeight: '82vh', minHeight: '82vh' }}
        >
          <div className="flex flex-wrap gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="bg-white p-4 rounded-xl w-[200px] h-[200px] text-black">
                {task}
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
}
