import React, { useState } from "react";

const Wrapper = ({ children }) => {
    const style = {
        overflow: "hidden",
        minWidth: "1100px",
    };
    return (
        <div className="Wrapper" style={style}>
            {children}
        </div>
    );
};
export default Wrapper;
