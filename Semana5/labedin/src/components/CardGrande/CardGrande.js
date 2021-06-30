import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="Bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;