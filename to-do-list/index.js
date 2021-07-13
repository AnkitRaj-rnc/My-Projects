function add(){
    let inputAdded = document.getElementById("toDo").value;
    let time = document.getElementById("time").value;
    let addHere = document.getElementById("addHere");

    if(inputAdded == ""){
        alert("Add Work")
    }else if(time == ""){
        alert("Select a time")
    }
    else{

        
        let addThis = inputAdded + " " + "at" + " " + time;
        let element = document.createElement("p");
        element.textContent = addThis;
        element.style.height ="70px"
        element.style.padding ="15px"
        element.style.margin= "10px";
        element.style.backgroundColor = "rgb(149, 248, 149)";
        element.style.color= "white";
        element.style.fontSize= "20px";
        addHere.appendChild(element)

    
        let clear =document.getElementById("toDo").value = '';
        let clear1 =document.getElementById("time").value = '';
    
        let createButton= document.createElement("button");
        createButton.style.float = "right"
        createButton.textContent= "Delete";
        createButton.style.fontSize = "15px";
        createButton.style.background = "red";
        createButton.style.border= "2px solid red"
        element.appendChild(createButton);
    
        createButton.addEventListener("click", function deleteList(){
            element.remove()
            createButton.remove()
        })

    }
    
   
   
    
}


