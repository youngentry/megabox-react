import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Theater from "./pages/Theater";
import Event from "./pages/Event";
import Sub04 from "./pages/Sub04";
import Sub05 from "./pages/Sub05";
import Sub06 from "./pages/Sub06";
import Sub07 from "./pages/Sub07";
import Sub08 from "./pages/Sub08";
import Footer from "./pages/Footer";

import "./css/basic.scss";

function App() {
    return (
        <Wrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/theater" element={<Theater />} />
                <Route path="/event" element={<Event />} />
                <Route path="/sub04" element={<Sub04 />} />
                <Route path="/sub05" element={<Sub05 />} />
                <Route path="/sub06" element={<Sub06 />} />
                <Route path="/sub07" element={<Sub07 />} />
                <Route path="/sub08" element={<Sub08 />} />
            </Routes>
            <Footer />
        </Wrapper>
    );
}

export default App;
