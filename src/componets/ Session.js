import styled from "styled-components"

export default function Session() {
    return (
        <SessionStyled>
            <p>Segunda-feira - 24/08/2022</p>
            <div>
                <Time>9:55</Time>
                <Time>9:55</Time>
                <Time>9:55</Time>
                <Time>9:55</Time>
                <Time>9:55</Time>
                <Time>9:55</Time>
                <Time>9:55</Time>
                <Time>9:55</Time>
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
        margin-top: 15px;
        flex-wrap: wrap;
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