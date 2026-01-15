const clock= document.getElementById("Box")

setInterval(function(){
    let date = new Date();
// console.log(DataTransfer.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);