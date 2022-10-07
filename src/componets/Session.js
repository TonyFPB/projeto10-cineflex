import styled from "styled-components"
import FotterShowtimes from "./FotterShowtimes"
import Seat from "./Seat"

export default function Session() {
    const arr = function () {
        const arr = []
        for (let i = 0; i < 50; i++) {
            arr.push(i + 1)
        }
        return arr
    }
    return (
        <SessionStyled>
            <h1>Selecione o(s) assento(s)</h1>
            <Seats>
                {arr().map((e) => <Seat seat={e} />)}
            </Seats>
            <Caption>
                <Example backcolor={"#1AAE9E"} bordercolor={"#0E7D71"}><div></div>Selecionado</Example>
                <Example backcolor={"#C3CFD9"} bordercolor={"#7B8B99"}><div></div>Disponível</Example>
                <Example backcolor={"#FBE192"} bordercolor={"#F7C52B"}><div></div>Indisponível</Example>
            </Caption>
            <InfosUser>
                    <div>
                        <label>Nome do Comprador:</label>
                        <input placeholder="Digite seu nome..." required />
                    </div>
                    <div>
                        <label>CPF do Comprador:</label>
                        <input type="number" placeholder="Digite seu CPF..." required />
                    </div>
                    <button type="submit">Reservar assento(s)</button>  
            </InfosUser>
            <FotterShowtimes/>
        </SessionStyled>
    )
}


const SessionStyled = styled.div`
    margin-top: 67px;
    margin-bottom: 122px;
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
const Caption = styled.ul`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Example = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    div{
        width: 25px;
        height: 25px;
        background: ${props => props.backcolor};
        border: 1px solid ${props => props.bordercolor};
        border-radius: 17px;
    }
`
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
    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border-style: none; 
        font-weight: 400;
        font-size: 18px;
        color: white;
    }
`