import React from 'react';
import styled from 'styled-components';


const ListItemContainer = styled.div `
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;


    :hover{
        background-color: rgba (1,1,1,3);
    }
`
const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 8px;
`



function MatchItemPage() {
    return(
    <ListItemContainer>
        <Avatar src={''}/>
        <p>Nome </p>
    </ListItemContainer>
    )
}

export default MatchItemPage