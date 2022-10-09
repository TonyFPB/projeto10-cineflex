import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function Header(){
    const navigate = useNavigate()
    return (
        <HeaderStyled onClick={()=>navigate('/')}>CINEFLEX</HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#C3CFD9;
    color: #E8833A;
    font-weight: 700;
    font-size: 34px;
    height: 67px;
    width: 100%;
`