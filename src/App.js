import React, { useState } from 'react';
import { CssBaseline, Container, Typography, AppBar, Toolbar, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GoBananas App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ItemList searchTerm={searchTerm} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
