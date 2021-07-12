import React from "react";
import { useHistory } from "react-router-dom";

export const ApplicationFormPage = () => {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }


    return (
        <div>
            <button onClick={goBack}> Voltar </button>
            <p> Teste </p>
        </div>
    )
}

