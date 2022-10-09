import styled from "styled-components"

export default function Seat({seat,choseSeat, selected}){
    const {id, name, isAvailable} = seat
    
    function coloredSeat(){
        if(selected.includes(id)){
            return ["#1AAE9E","#0E7D71"]
        }if(isAvailable){
            return ["#C3CFD9","#7B8B99"]
        }else{
            return["#FBE192","#F7C52B"]
        }
    }
    
    return (
        <SeatStyled backColor = {coloredSeat()[0]} borderColor={coloredSeat()[1]}>
            <button data-identifier="seat" onClick={choseSeat} disabled={!isAvailable}>{name}</button>
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
    border-radius: 12px;
    
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #000000;
    button{
        width: 26px;
        height: 26px;
        background: ${props=>props.backColor};
        border: 1px solid ${props=>props.borderColor};
        border-radius: 12px;
    }
`