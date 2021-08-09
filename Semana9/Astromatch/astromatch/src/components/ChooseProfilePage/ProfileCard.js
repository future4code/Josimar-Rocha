import React from 'react';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
    margin: 16px;
`

const ProfilePicture = styled.img`
    width: 100%;
    display: block;
    max-height: 350px;
    
`

const ProfileInfo = styled.div`
    border: 1px solid black;
    padding: 0 16px;
`

function ProfileCard(props) {
    const profile = props.profile
    return(
        <ProfileCardContainer>
            <ProfilePicture src={profile.photo}/>
            <ProfileInfo>
            <p>{props.profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            </ProfileInfo>
        </ProfileCardContainer>
    )
}

export default ProfileCard;