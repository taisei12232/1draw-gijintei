const dt = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));

var days = [];
var day = "";
while(1){
    day = dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" +  dt.getDate();
    days.push(day);
}

export {days};
