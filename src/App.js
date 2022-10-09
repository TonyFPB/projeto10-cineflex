import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Session from "./components/Session";
import Showing from "./components/Showing";
import Showtimes from "./components/Showtimes";
import GlobalStyle from "./GlobalStyle";
import Sucess from "./components/Sucess";
import { useState } from "react";


export default function App() {
    const [booked, setBooked] =useState({})
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Showing />} />
                <Route path="/filme/:idFilme" element={<Showtimes />} />
                <Route path="/sessao/:idSessao" element={<Session setBooked = {setBooked}/>}/>
                <Route path="/sucesso" element={<Sucess booked = {booked}/>} />
            </Routes>
        </BrowserRouter>
    )
}