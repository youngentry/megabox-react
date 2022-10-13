import axios from "axios";
import { useEffect, useState } from "react";

const NAVERMOVIEDATA = () => {
    const [itm, setItm] = useState();

    useEffect(() => {
        const url = "http://localhost:4000/";

        const getNaverMovie = async () => {
            const res = await axios.get(url);
            // console.log(res.data.items, "네이버영화 검색결과 데이터");

            const NAVERMOVIES = res.data.items.map((it) => {
                return {
                    title: it.title,
                    link: it.link,
                    image: it.image,
                };
            });
            setItm(NAVERMOVIES);
        };
        getNaverMovie();
    }, []);

    return itm;
};

export { NAVERMOVIEDATA };

// const BOXOFFICEDATA = () => {
//     const [itm, setItm] = useState();

//     useEffect(() => {
//         const key = "b4f3293a5bbeeb23428ff7f42088c8f2";
//         const today = getToday();
//         const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${today}`;
//         const getMovie = async () => {
//             const res = await axios.get(url);
//             const BOXOFFICE = res.data.boxOfficeResult.dailyBoxOfficeList.map(
//                 (it) => {
//                     return {
//                         rank: it.rank,
//                         movieNm: it.movieNm,
//                         openDt: it.openDt,
//                     };
//                 }
//             );
//             setItm(BOXOFFICE);
//         };
//         getMovie();
//     }, []);
//     return itm;
// };

// export { BOXOFFICEDATA };
