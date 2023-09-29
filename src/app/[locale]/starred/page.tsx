import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function StarredPage() {
  // const [s, setA] = React.useState(1)
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1" gutterBottom>
          starred
        </Typography>
        {/* <button onClick={()=>setA(s=>s+1)}>test</button> */}
      </Box>
    </Container>
  );
}
