import axios from 'axios'
import React from 'react'

function ResetButton(){
    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:josimar/clear').then(response => {
            console.log(response)
        })
    }
    return(
    <div>
        <button onClick={onClickReset}>Resetar</button>

    </div>    
    )
}

export default ResetButton