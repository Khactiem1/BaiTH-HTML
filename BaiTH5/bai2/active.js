document.addEventListener("DOMContentLoaded",function(){
    const time = document.querySelector('.time span');
    var today = new Date();
    console.log(today.getDate());
    var day = today.getDay();
    var days = day + 1;
    var date = 'Thứ ' + days + ', ' + today.getDate() + '/'+ today.getMonth() + '/'+ today.getFullYear() + ' ' + today.getHours() + ':'+ today.getMinutes() + ':'+ today.getSeconds();
    time.innerText = date;
},false)