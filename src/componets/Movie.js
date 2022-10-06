import styled from "styled-components"

export default function Movie({ movie }) {
    console.log(movie)
    return (
        <MovieStyled>
            <img src={movie.posterURL} alt='poster filem' />
        </MovieStyled>
    )
}
const MovieStyled = styled.li`
    background: #FFFFFF;
    margin: 10px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img{
        width: 129px;
        height: 193px;
    }
`