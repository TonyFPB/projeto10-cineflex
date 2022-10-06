import styled from "styled-components"

export default function Session({ date, weekday, showtimes }) {

    return (
        <SessionStyled>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map((s) => <Time key={s.id}>{s.name}</Time>)}
            </div>
        </SessionStyled>
    )
}

const SessionStyled = styled.li`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 20px;
    color: #293845;
    div{
        display: flex;
        justify-content: flex-start;
        margin-top: 15px;
    }
`

const Time = styled.button`
    margin-right: 5px;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    font-size: 18px;
    color: #FFFFFF;
    border-style: none;
`