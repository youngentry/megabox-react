import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const index = () => {
    axios.get("http://localhost:3001/").then((response) => {
        console.log(response);
    });

    return <div>asd</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

export default index;
