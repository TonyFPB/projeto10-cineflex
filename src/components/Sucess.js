import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import {ButtonStyled} from './Buttons.js'
export default function Sucess({ booked }) {
    const { cpfBuyer, movieDay, movieName, movieTime, nameBuyer, seats } = booked
    const navigate = useNavigate()

    if (seats === undefined) {
        return (
            <SucessStyled>
                <h1>Calma la Cinéfilo você primeiro precisa escolher um filme para essa pagina!</h1>
                <ButtonStyled data-identifier="back-to-home-btn" onClick={()=>navigate("/")}>Voltar pra Home</ButtonStyled>
            </SucessStyled>)
    }
    const seatAscending = seats.map((s)=>Number(s)).sort((a,b)=>a-b)
    return (
        <SucessStyled>
            <h1>Pedido feito com sucesso!</h1>
            <div>
                <h2>Filme e sessão</h2>
                <p data-identifier="movie-session-infos-reserve-finished">{movieName}</p>
                <p data-identifier="movie-session-infos-reserve-finished">{movieDay} {movieTime}</p>
            </div>
            <div>
                <h2>Ingressos</h2>
                {seatAscending.map((s, idx) => <p data-identifier="seat-infos-reserve-finished" key={idx}>Assento {s}</p>)}
            </div>
            <div>
                <h2>Comprador</h2>
                <p data-identifier="buyer-infos-reserve-finished">Nome: {nameBuyer}</p>
                <p data-identifier="buyer-infos-reserve-finished">CPF: {cpfBuyer}</p>
            </div>
            <ButtonStyled data-identifier="back-to-home-btn" onClick={()=>navigate("/")}>Voltar pra Home</ButtonStyled>
        </SucessStyled>
    )
}
const SucessStyled = styled.div`
    margin: 67px 0 0 0;
    color: #293845;
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
        color: #247A6B;
    }
    h2{
        font-weight: 700;
        font-size: 24px; 
    }
    p{
        margin: 10px 0;
        font-weight: 400;
        font-size: 22px;
    }
    div{
        margin: 0 0 35px 0;
        width: 85%;
    }
`