/** "22020930" 형태로 오늘의 날짜를 반환합니다. */
const getToday = () => {
    const [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
    ];
    const monthArr = [
        jan,
        feb,
        mar,
        apr,
        may,
        jun,
        jul,
        aug,
        sep,
        oct,
        nov,
        dec,
    ];

    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜

    // 날짜가 1일이라면 date를 전달의 마지막 날로 바꿉니다.
    if (date === 1 && month !== 12) {
        date = monthArr[month];
        // 1월이라면 12월의 일수인 31일로 바꿉니다.
    } else {
        date = 31;
    }

    return date === monthArr[month]
        ? `${year}${("00" + (month - 1)).slice(-2)}${("00" + date).slice(-2)}`
        : `${year}${("00" + month).slice(-2)}${("00" + date).slice(-2)}`;
};

export default getToday;
