import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { ButtonStyled } from "./Buttons";

export default function UserInfo({ selected, setBooked, sessionMovie, numbersSeats }) {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const navigate = useNavigate()

    function bookSeats(e) {
        e.preventDefault();

        if (selected.length !== 0) {

            const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'

            const body = {
                ids: selected,
                name,
                cpf
            }

            const bookSucess = {
                movieName: sessionMovie.movie.title,
                movieDay: sessionMovie.day.date,
                movieTime: sessionMovie.name,
                seats: numbersSeats,
                nameBuyer: name,
                cpfBuyer: cpf
            }

            const request = axios.post(URL, body)

            request.then((res) => {
                setBooked(bookSucess)
                navigate('/sucesso')
            }
            )
            request.catch((err) => {
                alert(err.response.data)
            })
        }

    }
    return (
        <InfosUser onSubmit={bookSeats}>
            <div>
                <label htmlFor="name">Nome do Comprador:</label>
                <input
                    data-identifier="buyer-name-input"
                    name="name"
                    placeholder="Digite seu nome..."
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
            </div>
            <div>
                <label htmlFor="cpf">CPF do Comprador:</label>
                <input
                    data-identifier="buyer-cpf-input"
                    name="cpf"
                    type="text"
                    pattern="[0-9]{11}"
                    maxLength="11"
                    minLength="11"
                    placeholder="Digite seu CPF..."
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                    required
                />
            </div>
            <ButtonStyled data-identifier="reservation-btn" type="submit">Reservar assento(s)</ButtonStyled>
        </InfosUser>
    )
}

const InfosUser = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    input{
        margin: 10px 0;
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 18px;
    }
    input::placeholder{
        color: #AFAFAF;
        font-style: italic;
    }
`