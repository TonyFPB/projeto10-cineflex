import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Showing from "./componets/Showing";
import Showtimes from "./componets/Showtimes";
import GlobalStyle from "./GlobalStyle";



export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path = "/" element = {<Showing/>}/>
                <Route path = "/sessoes/:idFilme" element = {<Showtimes/>}/>
            </Routes>
        </BrowserRouter>
    )
}