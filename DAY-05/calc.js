var screen= document.querySelector("input");
var buttons=document.querySelectorAll("button");
var result="";

buttons.forEach(button =>{

button.addEventListener('click',e=>{
    if(button.innerText=='AC')
    {
        result="";
        screen.value="";
    }
    else if(button.innerText=='=')
    {
        screen.value=eval(result);
        result=screen.value;
    }

    else if(button.innerText=='X')
    {
        result=result.slice(0,result.length-1);
        screen.value=result;            
    }
    else{
        result+=button.innerText;
        screen.value=result;
    }
    
})

})