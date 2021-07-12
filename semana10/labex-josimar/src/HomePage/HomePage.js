import React from "react";
import { useHistory } from "react-router-dom";


export const HomePage = () => {

    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToListTripPage = () => {
        history.push("/trips/list")
    }   
    
    return (
        <div>
            <p> Sou o home page </p>
            <button onClick={goToListTripPage} >Ver viagens</button>
            <button onClick={goToLoginPage}>Área de Administração</button>
        </div>
    );
};
