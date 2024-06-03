import React, {useState} from 'react';
import {Button, Box, TextField, Container, Typography } from '@mui/material';

const Login = () => {
    const [email,setEmail] = useState('');
    const [senha, setSenha] =useState('');
    const submitLogin = (event) => {
      event.preventDefault();
      console.log('Email',email);
      console.log('Senha', senha);
    };
    return (
      <Container component="main" maxWidth="xs">
        <Box
           sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={submitLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="senha"
            label="Senha"
            type="senha"
            id="senha"
            autoComplete="current-senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
    )
    }

export default Login;