import axios from "axios";

const NAVERDATA = () => {
    axios.get("http://localhost:4000/").then((response) => {
        console.log(response.data);
    });
    return <div>cors그만</div>;
};

export default NAVERDATA;
