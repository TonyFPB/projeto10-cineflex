import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { ButtonStyled } from "./Buttons"
import Caption from "./Caption"
import FotterShowtimes from "./FotterShowtimes"
import Seat from "./Seat"
import UserInfo from "./UserInfo"

export default function Session({ setBooked }) {
    const [sessionMovie, setSessionMovie] = useState()
    const [selected, setSelected] = useState([])
    const [numbersSeats, setNumbersSeats] = useState([])
    const navigate = useNavigate()
    const { idSessao } = useParams()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        const promisse = axios.get(URL)

        promisse.then((res) => {
            setSessionMovie(res.data)
        })
        promisse.catch((err) => {
            alert(err.response.data)
        })
    }, [])

    function choseSeat(idSeat, number) {

        if (!selected.includes(idSeat)) {
            const newSeatArr = [...selected]
            newSeatArr.push(idSeat)

            const newNumbersArr = [...numbersSeats]
            newNumbersArr.push(number)
            setSelected(newSeatArr)
            setNumbersSeats(newNumbersArr)
        }
        if (selected.includes(idSeat)) {
            const newSeatArr = [...selected]
            const index = newSeatArr.indexOf(idSeat)
            newSeatArr.splice(index, 1)

            const newNumbersArr = [...numbersSeats]
            const idx = newNumbersArr.indexOf(number)
            newNumbersArr.splice(idx, 1)

            setSelected(newSeatArr)
            setNumbersSeats(newNumbersArr)
        }
    }

    if (sessionMovie === undefined) {
        return (
            <SessionStyled>
                <h1>Carregando as melhores cadeiras do brasil...</h1>
            </SessionStyled>)
    }

    return (
        <SessionStyled>
            <h1>Selecione o(s) assento(s)</h1>
            <Seats>
                {sessionMovie.seats.map((s) =>
                    <Seat
                        key={s.id}
                        seat={s}
                        choseSeat={() => choseSeat(s.id, s.name)}
                        selected={selected}
                    />)}
            </Seats>
            <Caption />
            <UserInfo
                selected={selected}
                numbersSeats={numbersSeats}
                setBooked={setBooked}
                sessionMovie={sessionMovie}
            />
            <ButtonStyled onClick={() => navigate(`/filme/${sessionMovie.movie.id}`)}>Voltar para os Horarios!</ButtonStyled>
            <FotterShowtimes posterURL={sessionMovie.movie.posterURL}>
                {sessionMovie.movie.title}
                <br />{sessionMovie.day.weekday}-{sessionMovie.name}
            </FotterShowtimes>
        </SessionStyled>
    )
}


const SessionStyled = styled.div`
    margin-top: 67px;
    margin-bottom: 122px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 24px;
    }
`
const Seats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`