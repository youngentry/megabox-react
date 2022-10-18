import React from "react";
import Movie from "../../components/Movie";

const Boxoffice = ({ showCount, TRENDINGDATA, pagination, setPagination }) => {
    return (
        <div>
            <Movie showCount={showCount} MOVIEDATA={TRENDINGDATA} pagination={pagination} setPagination={setPagination} />
        </div>
    );
};

export default Boxoffice;
