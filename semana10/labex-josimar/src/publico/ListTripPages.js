import { useHistory } from 'react-router-dom';
//import axios from 'axios';
//import { useState } from 'react';



export const ListTripPage = () => {

    const history = useHistory()

    const goToHome = () => {
        history.goBack()
    }

    const goToAppFormPage = () => {
        history.push("/trips/application")
    }


    return (
        <div>
            <p> Sou o list trip page </p>
            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToAppFormPage}>Inscrever-se</button>
        </div>
    )
}

