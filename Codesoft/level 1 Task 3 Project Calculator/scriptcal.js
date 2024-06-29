let input=document.querySelector("input");
let buttons=document.getElementsByTagName('button');

let string = "";
let arr=Array.from(buttons);
arr.forEach(button=>{
   button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value =string;
             
        }

        else if(  e.target.innerHTML == '/'){

             if(string !== "" ){
            string+= e.target.innerHTML;
            input.value = string;}
        }
        

        else if(e.target.innerHTML == '*'){

            if(string !== "" ){
            string += e.target.innerHTML;
            input.value = string;}
        }

        else if(e.target.innerHTML == 'Ac'){
            string = "";
            input.value = string;
        
        }
         

        else{
             string+= e.target.innerHTML;
             input.value = string;   
        }

   })
 
})
