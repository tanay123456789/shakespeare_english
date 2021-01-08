var btnTransalate=document.querySelector("#btn-transalate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="	https://api.funtranslations.com/translate/shakespeare.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server!try again after some time")
}

function clickHandler(){
    var inputText=txtInput.value;
    
    //calling server
    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json=>{
        var translatedtext=json.contents.translated;
        outputDiv.innerText=translatedtext;

    })
        
    .catch(errorHandler)

};


btnTransalate.addEventListener("click",clickHandler)