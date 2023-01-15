import React from "react";
import { Box, Container, Grid, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { QueryClient, QueryClientProvider } from "react-query";

import { NewsBanner } from "./components/NewsBanner";
import { TodosList } from "./components/TodosList";
import { SettingsPopup } from "./components/SettingsPopup";

import { NewsContextProvider } from './contexts/Context';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function App() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const handleOpen = () => setOpenPopup(true);
  const handleClose = () => setOpenPopup(false);

  return (
    <QueryClientProvider client={queryClient}>
    <NewsContextProvider>
      <Container style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: 'none',
        boxSizing: 'border-box',
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '30px',
            bgcolor: '#222',
            width: 390,
            my: 5,
            py: '13px',
            px: '20px',
          }}
        >
          <Grid container justifyContent='space-between'>
            <h1>To Do</h1>
            <IconButton onClick={handleOpen}>
              <SettingsIcon style={{ color: '#F4F4F4' }} />
            </IconButton>
          </Grid>
          <TodosList />
          <NewsBanner />
        </Box>
        <SettingsPopup open={openPopup} handleClose={handleClose} />
      </Container>
    </NewsContextProvider>
    </QueryClientProvider>
  );
}

export default App;
