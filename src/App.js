import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Theater from "./pages/Theater";
import Event from "./pages/Event";
import Ticketing from "./pages/Ticketing";
import Footer from "./pages/Footer";
import Movies from "./pages/Movies";

import "./css/basic.scss";
import Store from "./pages/Store";
import Benefit from "./pages/Benefit";

function App() {
    return (
        <Wrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/theater" element={<Theater />} />
                <Route path="/event/*" element={<Event />} />
                <Route path="/store/*" element={<Store />} />
                <Route path="/benefit/*" element={<Benefit />} />
                <Route path="/movies/*" element={<Movies />} />
                <Route path="/ticketing" element={<Ticketing />} />
            </Routes>
            <Footer />
        </Wrapper>
    );
}

export default App;
