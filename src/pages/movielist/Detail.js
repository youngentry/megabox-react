import { FaMedium, FaRegHeart, FaShareAlt, FaTicketAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "../../css/movielist/Movielist.scss";

const Movielist = ({ TRENDINGDATA, UPCOMINGDATA }) => {
    const { id } = useParams();
    const findData = TRENDINGDATA.find((el) => {
        return String(el.id) === id;
    });
    const findUpcomingData = UPCOMINGDATA.find((el) => {
        return String(el.id) === id;
    });
    return (
        <div className="Movielist">
            {/* trendingData가 로드되면 출력합니다. */}
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
                                    <span>관람 평점</span>
                                    <strong>
                                        <i>
                                            <FaMedium />
                                        </i>
                                        {String(findData.vote_average).slice(0, 3)}
                                    </strong>
                                </div>
                                <div className="rate">
                                    <span>예매율</span>
                                    <strong>
                                        <i>
                                            <FaTicketAlt />
                                        </i>
                                        10.0%
                                    </strong>
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
                        {/* <div>오버뷰{findData.overview}</div>
                        <div>개봉일{findData.release_date}</div> */}
                    </div>
                </div>
            ) : // upcomingData가 로드되면 출력합니다.
            findUpcomingData ? (
                <div className="mainVisual">
                    <div className="container" style={{ background: `url(${"https://image.tmdb.org/t/p/w500/" + findUpcomingData.backdrop_path})no-repeat center center/cover` }}>
                        <div className="left">
                            <div className="title">
                                <h2>{findUpcomingData.title}</h2>
                                <span>{findUpcomingData.original_title}</span>
                            </div>
                            <div className="buttons">
                                <button className="heart">
                                    <i>
                                        <FaRegHeart />
                                    </i>
                                    <span> {findUpcomingData.vote_count}</span>
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
                                    <span>관람 평점</span>
                                    <strong>
                                        <i>
                                            <FaMedium />
                                        </i>
                                        {String(findUpcomingData.vote_average).slice(0, 3)}
                                    </strong>
                                </div>
                                <div className="rate">
                                    <span>예매율</span>
                                    <strong>
                                        <i>
                                            <FaTicketAlt />
                                        </i>
                                        10.0%
                                    </strong>
                                </div>
                            </div>
                            {/* <figure className="backdrop">
                                    백드롭
                                    <img src={"https://image.tmdb.org/t/p/w500/" + findUpcomingData.backdrop_path} alt="" />
                                </figure> */}
                        </div>
                        <div className="right">
                            <div className="poster">
                                <figure>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + findUpcomingData.poster_path} alt="" />
                                </figure>
                                <button>예매하기</button>
                            </div>
                        </div>
                        {/* <div>오버뷰{findUpcomingData.overview}</div>
                            <div>개봉일{findUpcomingData.release_date}</div> */}
                    </div>
                </div>
            ) : (
                // 아무 데이터도 로드되지 않으면 출력합니다.
                "Detail information not exist..."
            )}
        </div>
    );
};

export default Movielist;
