// loading all the button into js initially 
document.addEventListener("DOMContentLoaded",()=>{
    const result=document.getElementById("result")
    const contEle=document.querySelector('.container')

    // Through Event Delagation hadling events effecintely
    // 1.This functionality is used for handling the Mouse Clicks
    contEle.addEventListener("click",(e)=>{
          const target=e.target
    
        if(target.tagName === "INPUT" && target.type === "button"){
            //   function to handle mouseclick  inputs
            handleInputs(target.value)
        }  
    })
    
    // 2.functionality to handle the keypress in the keyboard 
    contEle.addEventListener("keydown",(e)=>{
        const key = e.key
        if((key >= "0" && key <= "9") || ["+","-","*","%","/",".","Enter","Backspace","Delete"].includes(key)){
            // function to handle the keypress inputs
            handleInputs(key) //passing the values by pressing the keys
            e.preventDefault()
        }
    })


    // Function for Handling Both MOUSE AND KEYBOARD inputs 
    function handleInputs(input){
        // conditions based the inputs
        if(input === "C" || input === "Delete"){
            result.value=""
        }else if(input === "Del" || input === "Backspace"){
              result.value=result.value.slice(0,-1)
        }else if(input === "=" || input === "Enter"){
            // function to caliculate the value
            Caliculate(result.value)
        }else if(input === "*"){
             liveScreen("*")
        }else{
            liveScreen(input)
        }
    }
    
    // function to display the Result
    function liveScreen(val){
        if(result.value === "error"){
            result.val = ""
        }else{
            result.value += val
        }

    }


    // function to caliculate the values
    function Caliculate(expression){
        try {
            result.value = eval(expression)
        } catch (error) {
            console.log(error.message)
            console.log(error.name)
            result.value = "error"
        }
    }

})


