
setInterval(()=>{

    const date = new Date();
    const hourTime = date.getHours();
    const minTime = date.getMinutes();
    const secondTime = date.getSeconds();

    const hrot = 30*hourTime + minTime/2;
    const mrot = 6*minTime;
    const srot = 6*secondTime;

    hour.style.transform = `rotate(${hrot}deg)`
    minute.style.transform = `rotate(${mrot}deg)`
    second.style.transform = `rotate(${srot}deg)`
},1000)