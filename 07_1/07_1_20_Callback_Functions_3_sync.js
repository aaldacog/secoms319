
// Using Callback (implies Function as an Argument)

const button = document.getElementById("myBtn");

function callback(){
    console.log("Hello world");
}

button.addEventListener("click",callback)
