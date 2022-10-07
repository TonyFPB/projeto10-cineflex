import styled from "styled-components"

export default function Seat({e}){
    return (
        <SeatStyled>
            {e}
        </SeatStyled>
    )
}
const SeatStyled = styled.li`
    width: 26px;
    height: 26px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #000000;
`