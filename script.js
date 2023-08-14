const rollbtn = document.getElementById("btn");
const change = document.getElementById("change")
const result = document.getElementById("result")
let arraymap = document.getElementById("arraymap")
const index = document.getElementById("index")
var Iconcontainercontainer = document.getElementById("iconContainer");
const array = []
const handlediceroll = () => {
    change.className = "fa-solid fa-dice-one fa-spin-pulse fa-2xl"
    setTimeout(()=> {
        const randomNumber =  Math.floor(Math.random() * 6) + 1;
   
    if(randomNumber=="1"){
        change.className = "fa-solid fa-dice-one fa-2xl"
       array.push({icon:"fa-solid fa-dice-one fa-2xl", num:randomNumber})
    }else if(randomNumber=="2"){
        change.className = "fa-solid fa-dice-two fa-2xl" 
        array.push({icon:"fa-solid fa-dice-two fa-2xl", num:randomNumber})
    }else if(randomNumber=="3"){
        change.className = "fa-solid fa-dice-three fa-2xl" 
        array.push({icon:"fa-solid fa-dice-three fa-2xl", num:randomNumber})
    }else if(randomNumber=="4"){
        change.className = "fa-solid fa-dice-four fa-2xl" 
        array.push({icon:"fa-solid fa-dice-four fa-2xl", num:randomNumber})
    }else if(randomNumber=="5"){
        change.className = "fa-solid fa-dice-five fa-2xl" 
        array.push({icon:"fa-solid fa-dice-five fa-2xl", num:randomNumber})
    }else{
        change.className = "fa-solid fa-dice-six fa-2xl" 
        array.push({icon:"fa-solid fa-dice-six fa-2xl", num:randomNumber})
    }

  

    var uiElements = array.map(function(item, i) {
        // Create a wrapper div with the 'item-wrapper' class
        Iconcontainercontainer.innerHTML = null
        var wrapper = document.createElement("div");
        wrapper.className = "item-wrapper";

        var iconElement = document.createElement("i");
        iconElement.className = item.icon;
        iconElement.classList.add("item-icon"); // Add additional icon-specific classes if needed

        var textElement = document.createElement("span");
        textElement.textContent = `Roll ${i + 1} : ${item.num}`;
        textElement.classList.add("item-text"); // Add additional text-specific classes if needed

        wrapper.appendChild(textElement);
        wrapper.appendChild(iconElement);

        return wrapper;
    });

    // Append the array of UI elements to the container
    Iconcontainercontainer.append(...uiElements);


   
    
},1000)






}


rollbtn.addEventListener("click", handlediceroll)