var btnTranslate = document.querySelector("#btn-translate");
var text = document.querySelector("#txt-input");
var output = document.querySelector("#txt-output");



var mandoURL = "https://api.funtranslations.com/translate/mandalorian.json";

function getTranslate(data){
 return mandoURL+"?text="+ data;
}

function errorHandler(error)
{
    console.log("Error ocurred: "+ error);
    alert("Something went wrong with server, try again later!");
}

function buttonClicked(){
    console.log("clicked");
    var textValue = text.value;
    output.innerText = "In progress...";
    fetch(getTranslate(textValue)).then(response => response.json()).then(json => output.innerText = json.contents.translated)
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", buttonClicked);