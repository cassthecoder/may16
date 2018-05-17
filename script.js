function countLowerA(){
    var text = document.getElementById("userText").value;//text the user inputted
    var totalA = 0;//represents total number of lower case a's
    var length = text.length; //total length of string

    for(var i=0;i<length;i++){
        if(text[i] === "a"){
            totalA++;
        }
    }


    document.getElementById("result").innerHTML = "Total lowercase a's counted: " + totalA;

}