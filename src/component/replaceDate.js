export const replaceDate = (date => {
    if(date.indexOf("-") === -1) return date;
    let splitedDate = date.split("-");
    return splitedDate[0] + "年" + splitedDate[1] + "月" + splitedDate[2] + "日";
});