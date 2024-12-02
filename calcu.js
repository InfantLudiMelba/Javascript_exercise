function appendTovalue(value){
    document.getElementById('display').value+=value;
}
function clearfull(){
    document.getElementById('display').value='';
}
function clearlast(){
    const display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
        const display=document.getElementById('display');
        display.value=eval(display.value);
    }
    catch(error){
        alert("Invalid Expression");
    }
}