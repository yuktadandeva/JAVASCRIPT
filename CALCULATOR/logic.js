function setExpression(val){
    console.log('hello',val);
    document.getElementById('result').value += val;
}

function compute(){
   var result = document.getElementById('result').value;
   document.getElementById('result').value = eval(result); //should not use eval because the resultant will go as a string it will run anything and any function at client side
}

function clearAll(){
    document.getElementById('result').value = "";
}
// to handle 3------ type of learn use reg exp