const { default: axios } = require("axios");
const { useEffect, useState } = require("react");
const { default: getToday } = require("../modules/getToday");

const BOXOFFICEDATA = () => {
    const [itm, setItm] = useState();

    useEffect(() => {
        const key = "b4f3293a5bbeeb23428ff7f42088c8f2";
        const today = getToday();
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${today}`;
        const getMovie = async () => {
            const res = await axios.get(url);
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList);
            const BOXOFFICE = res.data.boxOfficeResult.dailyBoxOfficeList.map(
                (it) => {
                    return {
                        rank: it.rank,
                        movieNm: it.movieNm,
                        openDt: it.openDt,
                    };
                }
            );
            setItm(BOXOFFICE);
        };
        getMovie();
    }, []);
    return itm;
};

export { BOXOFFICEDATA };
