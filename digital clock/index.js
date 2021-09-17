var date= new Date()
console.log(date)

document.getElementById("hour").innerHTML = date.getHours() == 0 ? "12" : date.getHours()
document.getElementById("min").innerHTML = date.getMinutes()
document.getElementById("ap").innerHTML = date.getHours() > 12 ? "PM": "AM"
document.getElementById("year").innerHTML = (date.getYear() - 100)
document.getElementById("month").innerHTML = (date.getMonth() + 1)
document.getElementById("day").innerHTML = date.getDate()
var a = document.getElementById("sec").innerHTML = date.getSeconds()

setInterval(()=>{
    document.getElementById("sec").innerHTML = Number(document.getElementById("sec").innerHTML) + 1;

    if(document.getElementById("sec").innerHTML > 59){
        document.getElementById("sec").innerHTML= 0;
        document.getElementById("min").innerHTML = Number(document.getElementById("min").innerHTML) + 1
    }

    if(document.getElementById("min").innerHTML > 60){
        
        document.getElementById("hour").innerHTML = Number(document.getElementById("hour").innerHTML) + 1
    }

}, 1000)