import styled from "styled-components"

export default function FotterShowtimes({ posterURL, title }) {

    return (
        <FotterShowStyled>
            <div><img src={posterURL} /></div>
            <p>{title}</p>
        </FotterShowStyled>
    )
}
const FotterShowStyled = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 117px;
    width: 100%;
    background-color: #9EADBA;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    div{
        margin:0 10px;
        padding: 8px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        img{
            width: 48px;
            height: 72px;  
        }
    }
`