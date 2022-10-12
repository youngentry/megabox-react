import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
import Header from "./pages/main/Header";
import Main from "./pages/main/Main";
import Theater from "./pages/main/Theater";
import Event from "./pages/event/Event";
import Ticketing from "./pages/main/Ticketing";
import Footer from "./pages/main/Footer";
import Movies from "./pages/main/Movies";
import "./css/basic.scss";
import Store from "./pages/store/Store";
import Benefit from "./pages/benefit/Benefit";
import { useEffect, useRef, useState } from "react";
import { BOXOFFICEDATA } from "./data/BOXOFFICEDATA";
import { NAVERMOVIEDATA } from "./data/NAVERDATA";

const App = () => {
    const BOXDATA = BOXOFFICEDATA();
    const NAVERMOVIE = NAVERMOVIEDATA();

    return (
        <>
            {!BOXDATA ? (
                <div>loading...</div>
            ) : (
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main BOXDATA={BOXDATA} NAVERMOVIE={NAVERMOVIE} />} />
                        <Route path="/theater" element={<Theater />} />
                        <Route path="/event/*" element={<Event />} />
                        <Route path="/store/*" element={<Store />} />
                        <Route path="/benefit/*" element={<Benefit />} />
                        <Route path="/movies/*" element={<Movies BOXDATA={BOXDATA} />} />
                        <Route path="/ticketing" element={<Ticketing />} />
                    </Routes>
                    <Footer />
                </Wrapper>
            )}
        </>
    );
};

export default App;
