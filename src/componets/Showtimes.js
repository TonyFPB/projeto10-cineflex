import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Showtime from "./Showtime"
import FotterShowtimes from "./FotterShowtimes"


export default function Showtimes() {
    const [movieSessions, setMovieSessios] = useState('ainda nao carregou')
    const [movieDays, setMovieDays] = useState([])
    const { idFilme } = useParams()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`

        const promisse = axios.get(URL)

        promisse.then((res) => {
            console.log(res.data)
            console.log(res.data.days)
            setMovieSessios(res.data)
            setMovieDays(res.data.days)
        })

        promisse.catch((err) => console.log(err))
    }, [])

    return (
        <ShowtimesStyled>
            <h1>Selecione o filme</h1>
            <Sessions>
                {movieDays.map((d) =>
                    <Showtime
                        key={d.id}
                        date={d.date}
                        weekday={d.weekday}
                        showtimes={d.showtimes}
                    />
                )}
            </Sessions>
            <FotterShowtimes posterURL={movieSessions.posterURL} title={movieSessions.title} />
        </ShowtimesStyled>
    )
}
const ShowtimesStyled = styled.div`
    background-color: #E5E5E5;;
    margin-top: 67px;
    margin-bottom: 122px;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1{
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