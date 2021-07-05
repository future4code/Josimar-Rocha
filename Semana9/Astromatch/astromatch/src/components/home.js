import React, { useState, useEffect } from "react";
import axios from "axios"
import styled from 'styled-components';

/*
const Home = (props) => {

    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        setLoading(true)
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/person`)
        .then((res) => {
            setProfile(res.data.profile)
            setLoading(false)
        })
        .catch(() => alert("Acabaram os perfis :c"))
    };

    const postChoosePerson = (choice) => {
        setLoading(true)
        const header = {
            headers: {"Content-Type": "application/json"
            }
        }
    const body = {
        "id": profile.id,
        "choice": choice
    }
    const url =
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/choose-person`

    axios
        .post(url, body, header)
        .then(() => {
            getProfileToChoose()
            setLoading(false)
        })

        .catch(() => { alert("Acabaram os perfis :c") })

    }

    const clearMatches = () => {
    const header = {
        headers: {
         "Content-Type": "application/json"
        }
    }
    const url =
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/clear"

    axios
        .put(url, header)
        .then(() => {
        alert("Matches foram resetados!")
        getProfileToChoose()
        })
        .catch((err) => { console.log(err) })
    }
}

export default Home;

*/