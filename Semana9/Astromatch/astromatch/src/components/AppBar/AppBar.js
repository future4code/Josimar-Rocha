import React from 'react';
import styled from 'styled-components';

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1 px solid lightgray;
    align-items: center;

`

function AppBar(props){
    return(
    <AppBarContainer>
        <button onClick={props.goToChooseProfilePage}>Escolher</button>
        <p>astromatch</p>
        <button onClick={props.goToMatchListPage}>Lista</button>

    </AppBarContainer>    
    )
}

export default AppBar; 