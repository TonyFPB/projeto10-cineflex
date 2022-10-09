import styled from "styled-components"

export default function Caption() {
    return (
        <CaptionStyled>
            <Example backcolor={"#1AAE9E"} bordercolor={"#0E7D71"}><div data-identifier="seat-selected-subtitle"></div>Selecionado</Example>
            <Example backcolor={"#C3CFD9"} bordercolor={"#7B8B99"}><div data-identifier="seat-available-subtitle"></div>Disponível</Example>
            <Example backcolor={"#FBE192"} bordercolor={"#F7C52B"}><div data-identifier="seat-unavailable-subtitle" ></div>Indisponível</Example>
        </CaptionStyled>
    )
}

const CaptionStyled = styled.ul`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
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