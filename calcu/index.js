var display = [];

function one(){
    let one = display.push("1")
    document.getElementById("disp").innerHTML = display.join("")
}
function two(){
    let two = display.push("2")
    document.getElementById("disp").innerHTML = display.join("")
}
function three(){
    let three = display.push("3")
    document.getElementById("disp").innerHTML = display.join("")
    console.log(display)
}
function four(){
    let four = display.push("4")
    document.getElementById("disp").innerHTML = display.join("")
}
function five(){
    let five = display.push("5")
    document.getElementById("disp").innerHTML = display.join("")
}
function six(){
    let six = display.push("6")
    document.getElementById("disp").innerHTML = display.join("")
}
function seven(){
    let seven = display.push("7")
    document.getElementById("disp").innerHTML = display.join("")
}
function eight(){
    let eight = display.push("8")
    document.getElementById("disp").innerHTML = display.join("")
}
function nine(){
    let nine = display.push("9")
    document.getElementById("disp").innerHTML = display.join("")
}
function zero(){
    let zero = display.push("0")
    document.getElementById("disp").innerHTML = display.join("")
}
function dot(){
    let dot = display.push(".")
    document.getElementById("disp").innerHTML = display.join("")
}
function add(){
    let add = display.push("+")
    document.getElementById("disp").innerHTML = display.join("")
}
function sub(){
    let sub = display.push("-")
    document.getElementById("disp").innerHTML = display.join("")
}
function multi(){
    let multi = display.push("*")
    document.getElementById("disp").innerHTML = display.join("")
}
function divide(){
    let divide = display.push("/")
    document.getElementById("disp").innerHTML = display.join("")
}
function clr(){
    document.getElementById("disp").innerHTML = ""
}
function clrOne(){
    let clearOne = display.pop();
    document.getElementById("disp").innerHTML = display.join("")
}
function result(){
    let a = eval(document.getElementById("disp").innerHTML)
    display = []
    display.push(a)
    document.getElementById("disp").innerHTML = display.join("")
}