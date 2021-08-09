import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ChooseButton from './ChooseButton';
import axios from 'axios';

function ChooseProfilePage () {
    const [profileToChoose, setProfileChoose] = useState(undefined)

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:josimar/person').then(response =>{
            console.log('PERFIL', response.data.profile)
            setProfileChoose(response.data.profile)
        })

    }

    const chooseProfile = (choice) => {
        const body = {
            choice: choice,
            id: profileToChoose.id
        }
        

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:josimar/choose-person', body).then(response =>{
            getProfileToChoose()
        })
    }


    useEffect(() => {
        getProfileToChoose()
    }, []);

    const onClickNo = () => { 
        chooseProfile(false)
    }

    const onClickYes = () => {
        chooseProfile(true)
    }




    return (
    <div>
        { profileToChoose ?
        ( <>
        <ProfileCard profile={profileToChoose}/>
        <ChooseButton onClickNo={onClickNo} onClickYes={onClickYes} />
        </>) : <p>Carregando...</p>
        }
    </div>    
    )
}

export default ChooseProfilePage;