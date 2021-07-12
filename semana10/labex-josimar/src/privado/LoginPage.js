import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";




export const LoginPage = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/josimarmartinsmolina/login', body)
            .then((response) => {
                console.log('Deu certo: ', response.data)
            }).catch((error)=> {
                console.log('Deu errado: ', error.response)
            })
    };

    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/")
    }


    return (
        <div>
            <input
            placeholder="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />

            <input
            placeholder="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            />


            
            <button onClick={onSubmitLogin}>Entrar</button> 
            
            <button onClick={goToLoginPage}> Voltar </button>
            <p> Sou o Login Page </p>
        </div>
    )
}

