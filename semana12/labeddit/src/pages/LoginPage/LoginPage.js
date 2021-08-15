import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { baseUrl} from '../../constants/Contants'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { LockOutlinedIcon } from '@material-ui/icons/LockOutlined'
import Container from '@material-ui/core/Container'



const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("token") !== null){
            history.push("/feed")
        }
    }, [])

    const onSubmitForm = async (event) => {
        event.preventDefault();
        const body = {
            email: email,
            password: password,
        }
        try {
            const response = await axios.post(`${baseUrl}/login`, body);
      
            localStorage.setItem("token", response.data.token);
      
            history.push("/feed")
        } catch (error){
            alert("Login falhou :(, cheque os dados e tente novamente");
            console.error(error);
        }
    }

    const goToSignup = () => {
        history.push("/signup")
    }

    const updateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
      }

    const updatePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }


    return(
        <Container component="main" maxWidth="xs">
            <div>
                <Avatar>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Entrar!
                </Typography>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name="email"
                        id="email"
                        label="E-mail"
                        autoComplete="email"
                        autoFocus
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        onChange={updateEmail}
                        value={email}
                    />

                    <TextField 
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="current-password"
                    onChange={updatePassword}
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
                            <Link href="#" onClick={goToSignup} variant="body2">
                            {"Cadastre-se"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default LoginPage