import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Session from "./ Session"

export default function Showtimes() {
    const [movieSessions, setMovieSessios] = useState('ainda nao carregou')
    const [movieDays,setMovieDays] = useState([])
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${1}/showtimes`

        const promisse = axios.get(URL)

        promisse.then((res) => {
            console.log(res.data)
            console.log(res.data.days)
            setMovieSessios(res.data)
            setMovieDays(res.data.days)
        })

        promisse.catch((err) => console.log(err))
    }, [])
    if(movieSessions === 'ainda nao carregou'){
        return(<p>{movieSessions}</p>)
    }
    return (
        <ShowtimesStyled>
            <div>Selecione o filme</div>
            <Sessions>
                {movieDays.map((d) => <Session/>)}
            </Sessions>
        </ShowtimesStyled>
    )
}
const ShowtimesStyled = styled.div`
    background-color: #E5E5E5;;
    margin-top: 67px;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    div{
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 24px;
    }
`
const Sessions = styled.ul`

`