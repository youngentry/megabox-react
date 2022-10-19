import React from "react";

const Wrapper = ({ children }) => {
    const style = {
        overflow: "hidden",
    };

    return (
        <div className="Wrapper" style={style}>
            {children}
        </div>
    );
};
export default Wrapper;
