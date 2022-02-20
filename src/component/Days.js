const dt = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));

var days = [];
for(var i = 0;i < 30;i++){
    days.push(dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" +  dt.getDate());
    dt.setDate(dt.getDate() - 1);
}

export {days};