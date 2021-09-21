var visi = document.getElementById("dis1");
var visi1 = document.getElementById("dis2");
var visi2 = document.getElementById("dis3");
var rstBtn = document.getElementById("restartBtn");
var playerResult= document.getElementById("score");
var first;
var second;

function start(){

    if(document.getElementById("first").value== ""){
        alert("Enter Player 1 Name")
    }else if(document.getElementById("second").value ==""){
        alert("Enter Player 2 Name")
    }else{
        visi.classList.remove("disp");
        visi1.classList.remove("disp");  
        visi2.classList.remove("disp");
        rstBtn.classList.remove("disp");

        var start = document.getElementById("start");
        start.classList.add("startDisplay");
        
        first = document.getElementById("first").value
        second = document.getElementById("second").value

    }
   
    
   
}
var count = 0
var playerCount= ["", "", "", "", "", "", "", "", ""]
function change1(){
    count ++;
    if(count % 2 == 0){
        document.getElementById("b1").style.backgroundColor = "#10ac84"
        playerCount.splice(0,1)
        playerCount.splice(0,0, "O")
    }else{
        document.getElementById("b1").style.backgroundColor = "#55efc4"
        playerCount.splice(0,1)
        playerCount.splice(0,0, "X")
    }
    console.log(playerCount)
}
function change2 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b2").style.backgroundColor = "#10ac84"
        playerCount.splice(1,1)
        playerCount.splice(1,0, "O")
    }else{
        document.getElementById("b2").style.backgroundColor = "#55efc4"
        playerCount.splice(1,1)
        playerCount.splice(1,0, "X")
    }
    console.log(playerCount)

}
function change3 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b3").style.backgroundColor = "#10ac84"
        playerCount.splice(2,1)
        playerCount.splice(2,0, "O")
    }else{
        document.getElementById("b3").style.backgroundColor = "#55efc4"
        playerCount.splice(2,1)
        playerCount.splice(2,0, "X")
    }
    console.log(playerCount)

   
}
function change4 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b4").style.backgroundColor = "#10ac84"
        playerCount.splice(3,1)
        playerCount.splice(3,0, "O")
    }else{
        document.getElementById("b4").style.backgroundColor = "#55efc4"
        playerCount.splice(3,1)
        playerCount.splice(3,0, "X")
    }
    
}
function change5 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b5").style.backgroundColor = "#10ac84"
        playerCount.splice(4,1)
        playerCount.splice(4,0, "O")
    }else{
        document.getElementById("b5").style.backgroundColor = "#55efc4"
        playerCount.splice(4,1)
        playerCount.splice(4,0, "X")
    }
    console.log(playerCount)
    
}
function change6 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b6").style.backgroundColor = "#10ac84"
        playerCount.splice(5,1)
        playerCount.splice(5,0, "O")
    }else{
        document.getElementById("b6").style.backgroundColor = "#55efc4"
        playerCount.splice(5,1)
        playerCount.splice(5,0, "X")
    }
    console.log(playerCount)
    
}
function change7 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b7").style.backgroundColor = "#10ac84"
        playerCount.splice(6,1)
        playerCount.splice(6,0, "O")
    }else{
        document.getElementById("b7").style.backgroundColor = "#55efc4"
        playerCount.splice(6,1)
        playerCount.splice(6,0, "X")
    }
    console.log(playerCount)
    
}
function change8 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b8").style.backgroundColor = "#10ac84"
        playerCount.splice(7,1)
        playerCount.splice(7,0, "O")
    }else{
        document.getElementById("b8").style.backgroundColor = "#55efc4"
        playerCount.splice(7,1)
        playerCount.splice(7,0, "X")
    }
    console.log(playerCount)
  
}
function change9 (){
    count ++
    if(count % 2 == 0){
        document.getElementById("b9").style.backgroundColor = "#10ac84"
        playerCount.splice(8,1)
        playerCount.splice(8,0, "O")
    }else{
        document.getElementById("b9").style.backgroundColor = "#55efc4"
        playerCount.splice(8,1)
        playerCount.splice(8,0, "X")
    }
    console.log(playerCount)
    
}
function result (){
  if((playerCount[0] == "X") && (playerCount[1] == "X") && (playerCount[2] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML =` Hurray! ${first} has Won`
  }else if((playerCount[0] == "O") && (playerCount[1] == "O") && (playerCount[2] == "O")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${second} has Won`

}else if((playerCount[3] == "X") && (playerCount[4] == "X") && (playerCount[5] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${first} has Won`
}else if((playerCount[3] == "O") && (playerCount[4] == "O") && (playerCount[5] == "O")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${second} has Won`
}else if((playerCount[6] == "X") && (playerCount[7] == "X") && (playerCount[8] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${first} has Won`
}else if((playerCount[6] == "O") && (playerCount[7] == "O") && (playerCount[8] == "O")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${second} has Won`
}else if((playerCount[0] == "X") && (playerCount[3] == "X") && (playerCount[6] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${first} has Won`
}else if((playerCount[0] == "O") && (playerCount[3] == "O") && (playerCount[6] == "O")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${second} has Won`
}else if((playerCount[1] == "X") && (playerCount[4] == "X") && (playerCount[7] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${first} has Won`
}else if((playerCount[1] == "O") && (playerCount[4] == "O") && (playerCount[7] == "O")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${second} has Won`
}else if((playerCount[2] == "X") && (playerCount[5] == "X") && (playerCount[8] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML =`Hurray! ${first} has Won`
}else if((playerCount[2] == "O") && (playerCount[5] == "O") && (playerCount[8] == "O")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${second} has Won`
}else if((playerCount[0] == "X") && (playerCount[4] == "X") && (playerCount[8] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML = `Hurray! ${first} has Won`
}else if((playerCount[0] == "O") && (playerCount[4] == "O") && (playerCount[8] == "O")){
  visi.classList.add("disp");
  visi1.classList.add("disp");  
  visi2.classList.add("disp");
  playerResult.classList.remove("hideScore");
  playerResult.classList.add("showScore")
  playerResult.innerHTML = `Hurray! ${second} has Won`
}else if((playerCount[2] == "X") && (playerCount[4] == "X") && (playerCount[6] == "X")){
    visi.classList.add("disp");
    visi1.classList.add("disp");  
    visi2.classList.add("disp");
    playerResult.classList.remove("hideScore");
    playerResult.classList.add("showScore")
    playerResult.innerHTML =`Hurray! ${first} has Won`
}else if((playerCount[2] == "O") && (playerCount[4] == "O") && (playerCount[6] == "O")){
  visi.classList.add("disp");
  visi1.classList.add("disp");  
  visi2.classList.add("disp");
  playerResult.classList.remove("hideScore");
  playerResult.classList.add("showScore")
  playerResult.innerHTML = `Hurray! ${second} has Won`
}

}

function restart(){
    count=0
    playerCount.splice(0,1)
    playerCount.splice(0,0, "")
    playerCount.splice(1,1)
    playerCount.splice(1,0, "")
    playerCount.splice(2,1)
    playerCount.splice(2,0, "")
    playerCount.splice(3,1)
    playerCount.splice(3,0, "")
    playerCount.splice(4,1)
    playerCount.splice(4,0, "")
    playerCount.splice(5,1)
    playerCount.splice(5,0, "")
    playerCount.splice(6,1)
    playerCount.splice(6,0, "")
    playerCount.splice(7,1)
    playerCount.splice(7,0, "")
    playerCount.splice(8,1)
    playerCount.splice(8,0, "")

    visi.classList.remove("disp");
    visi1.classList.remove("disp");
    visi2.classList.remove("disp");
    playerResult.classList.add("hideScore")

    document.getElementById('b1').style.removeProperty("background-color");
    document.getElementById('b2').style.removeProperty("background-color");
    document.getElementById('b3').style.removeProperty("background-color");
    document.getElementById('b4').style.removeProperty("background-color");
    document.getElementById('b5').style.removeProperty("background-color");
    document.getElementById('b6').style.removeProperty("background-color");
    document.getElementById('b7').style.removeProperty("background-color");
    document.getElementById('b8').style.removeProperty("background-color");
    document.getElementById('b9').style.removeProperty("background-color");

  

}
