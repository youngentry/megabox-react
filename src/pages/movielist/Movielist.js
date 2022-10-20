import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "../../css/movielist/Movielist.scss";

const Movielist = ({ TRENDINGDATA }) => {
    const { id } = useParams();
    const findData = TRENDINGDATA.find((el) => {
        return String(el.id) === id;
    });

    return (
        <div className="Movielist">
            {findData ? (
                <div className="mainVisual">
                    <div className="container" style={{ background: `url(${"https://image.tmdb.org/t/p/w500/" + findData.backdrop_path})no-repeat center center/cover` }}>
                        <div className="left">
                            <div className="title">
                                <h2>{findData.title}</h2>
                                <span>{findData.original_title}</span>
                            </div>
                            <div className="buttons">
                                <button className="heart">
                                    <i>
                                        <FaRegHeart />
                                    </i>
                                    <span> {findData.vote_count}</span>
                                </button>
                                <button>
                                    <i>
                                        <FaShareAlt />
                                    </i>
                                    <span>공유하기</span>
                                </button>
                            </div>
                            <div className="visit">
                                <div>
                                    <span>예매율</span>
                                </div>
                                <div>
                                    <span>누적관객수</span>
                                </div>
                            </div>
                            {/* <figure className="backdrop">
                                백드롭
                                <img src={"https://image.tmdb.org/t/p/w500/" + findData.backdrop_path} alt="" />
                            </figure> */}
                        </div>
                        <div className="right">
                            <div className="poster">
                                <figure>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + findData.poster_path} alt="" />
                                </figure>
                                <button>예매하기</button>
                            </div>
                        </div>
                        {/* <div>평점{findData.vote_average}</div>
                        <div>오버뷰{findData.overview}</div>
                        <div>개봉일{findData.release_date}</div> */}
                    </div>
                </div>
            ) : (
                <div>"Loading Data"</div>
            )}
        </div>
    );
};

export default Movielist;
