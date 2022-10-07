import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Session from "./componets/Session";
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
                <Route path = "/filme/:idFilme" element = {<Showtimes/>}/>
                <Route path="/sessao/:idSessao" element={<Session/>}/>
            </Routes>
        </BrowserRouter>
    )
}