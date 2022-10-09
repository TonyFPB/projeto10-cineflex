import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Movie from "./Movie"

export default function Showing() {
    const [movies, setMovies] = useState()
    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
        const promisse = axios.get(URL)

        promisse.then((res) => { 
            setMovies(res.data) 
        })

        promisse.catch((err) => alert(err.response.data))
    },[])
    if(movies === undefined){
        return(
            <ShowingStyled>
                <div>Carregando os melhores filmes...</div>
            </ShowingStyled>
        )
    }
    return (
        <ShowingStyled>
            <div>Selecione o filme</div>
            <Movies>
                {movies.map((m) => <Movie key={m.id} movie={m} />)}
            </Movies>
        </ShowingStyled>
    )
}

const ShowingStyled = styled.div`
    background-color: #E5E5E5;;
    margin-top: 67px;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    div{
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 24px;
    }
`
const Movies = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`