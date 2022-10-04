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
import { useEffect, useState } from "react";
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
                        <Route
                            path="/"
                            exact={true}
                            element={
                                <Main
                                    BOXDATA={BOXDATA}
                                    NAVERMOVIE={NAVERMOVIE}
                                />
                            }
                        />
                        <Route
                            path="/theater"
                            exact={true}
                            element={<Theater />}
                        />
                        <Route
                            path="/event/*"
                            exact={true}
                            element={<Event />}
                        />
                        <Route
                            path="/store/*"
                            exact={true}
                            element={<Store />}
                        />
                        <Route
                            path="/benefit/*"
                            exact={true}
                            element={<Benefit />}
                        />
                        <Route
                            path="/movies/*"
                            exact={true}
                            element={<Movies BOXDATA={BOXDATA} />}
                        />
                        <Route
                            path="/ticketing"
                            exact={true}
                            element={<Ticketing />}
                        />
                    </Routes>
                    <Footer />
                </Wrapper>
            )}
        </>
    );
};

export default App;
