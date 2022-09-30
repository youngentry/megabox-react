/** "22020930" 형태로 오늘의 날짜를 반환합니다. */
const getToday = () => {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    return `${year}${("00" + month).slice(-2)}${date}`;
};

export default getToday;
