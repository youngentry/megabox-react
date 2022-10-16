import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

const index = () => {
    axios.get("http://localhost:3001/").then((response) => {
        console.log(response);
    });

    return <div>asd</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default index;
