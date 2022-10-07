import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Showtime({ date, weekday, showtimes }) {
    console.log(showtimes[0].id)
    return (
        <ShowtimeStyled>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map((s) =>
                    <Link key={s.id}>
                        <Time>
                            {s.name}
                        </Time>
                    </Link>)}
            </div>
        </ShowtimeStyled>
    )
}

const ShowtimeStyled = styled.li`
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