import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Theater from "./pages/Theater";
import Event from "./pages/Event";
import Sub07 from "./pages/Sub07";
import Sub08 from "./pages/Sub08";
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
                <Route path="/sub07" element={<Sub07 />} />
                <Route path="/sub08" element={<Sub08 />} />
            </Routes>
            <Footer />
        </Wrapper>
    );
}

export default App;
