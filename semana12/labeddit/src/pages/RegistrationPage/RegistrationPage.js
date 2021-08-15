import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../../constants/Contants'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'




const RegistrationPage = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("token") !== null){
          history.push("/feed")
        }
    }, [])
    
    
    const userNameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername)
    }

    const emailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail)
    }
    
    const passwordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)
    }

    const handleSignup = async (event) => {
        event.preventDefault();
    
        const body = {
          email: email,
          password: password,
          username: username
        }
    
        try{
          const response = await axios.post(`${baseUrl}/signup`, body);
    
          localStorage.setItem("token", response.data.token);
    
          history.push("/feed")
    
        } catch (error) {
          alert("Cadastro falhou, tente novamente");
          console.error(error);
        }
    }

    const handleGoToLogin = () => {
        history.push("/login")
    }

    return(
        <Container component="main" maxWidth="xs">
        <div>
        <Typography component="h1" variant="h5">
          Cadastrar!
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nome de Usuário"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={userNameChange}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={emailChange}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={passwordChange}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" onClick={handleGoToLogin} variant="body2">
                {"Já possui conta? Logue-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Container>
    )
}

export default RegistrationPage