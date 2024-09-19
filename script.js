let index=0;
       document.getElementById("hint").addEventListener("click",()=>{
                   var hint=document.getElementById("displayhint");
                   display(array);
                   hint.innerHTML=`
                     ${array[index].hint}
                   `;
       })
       function display(Items){
       var questions=document.getElementById("questions");
            questions.innerHTML="";
            questions.innerHTML=`
            <p id="p">${Items[index].id} ${Items[index].question}</p>
            `;
            if (Items[index].message) {
        questions.innerHTML += `
            <span id="span">${Items[index].message}</span><br>
        `;
       }
    }
       document.getElementById("next").addEventListener("click",()=>{
              index = index+1;
              if(index>=array.length){
                index=0;
              }
              display(array);
              document.getElementById("displayhint").innerHTML = "";
              document.getElementById("verify").innerHTML = "";
       })
        document.getElementById("submit").addEventListener("click",()=>{
            var answer=document.getElementById("answer").value;
             answer=answer.split(' ').map(words=>words.charAt(0).toUpperCase()+words.slice(1).toLowerCase()).join(' ');
            display(array);
            var verify=document.getElementById("verify");
            if(answer.toUpperCase()===array[index].answer.toUpperCase()){  
                 verify.innerHTML=`
                 <p id="three"><i>${answer}</i></p>
                 <div><span id="one">Correct<span>
                  <i class="fas fa-circle-check" id="i1"></i></div>
                 `;
            }else if(answer===""){
                  verify.innerHTML=`
                  <p id="five">Please enter an answer...</p>
                  `;
            }
            else {
               verify.innerHTML=`
               <div><span id="two">Incorrect<span>
               <i class="fas fa-circle-xmark" id="i2"></i></div>
               <p id="four">Please try again !!!!</p>
               `;
            } 
            document.getElementById("answer").value="";
        });  
        document.getElementById("answer").addEventListener("focus",function(){
            var a=document.getElementById("answer");
            a.placeholder="";
        })
        document.getElementById("answer").addEventListener("blur",function(){
            var a=document.getElementById("answer");
            a.placeholder="Enter your answer here";
        })
       display(array);