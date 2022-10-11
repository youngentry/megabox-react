import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET } from "../../Store/module/megapick";

const Events = ({ EVENTDATA }) => {
    const data = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    // const data = useSelector(state => state.movie)
    return (
        <div onClick={() => dispatch(GET({}))}>
            {data.slice(0, 4).map((it) => {
                return <div>{it.id}</div>;
            })}
        </div>
    );
};

export default Events;
