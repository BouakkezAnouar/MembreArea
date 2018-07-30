   
         function valid(e , message){
      
              var span = e.target.nextElementSibling;
               var input = e.target ;
             
                    input.classList.remove("is-invalid")
                    input.classList.add("is-valid");
                    span.classList.remove("invalid-feedback");
                    span.classList.add("valid-feedback");
                    span.innerHTML =message;
                    span.style.transition ="opacity 1s linear" ;
         }
         
         function invalide(e , message){
              var span = e.target.nextElementSibling;
               var input = e.target ;
                    input.classList.add("is-invalid")
                    input.classList.remove("is-valid");
                    span.classList.add("invalid-feedback");
                    span.classList.remove("valid-feedback");
                    span.innerHTML =message ;
                    span.style.transition ="opacity 1s linear" ;
         }
        function verification (e){
            var inputValue =  e.target.value ;
            var input = e.target ;
            var inputType = e.target.type ;
            var span = e.target.nextElementSibling;
            var id =e.target.id ;
        
            
            if (id ==="firstName" || id=="lastName"){
                var nameRGEX = /^[A-Za-zÀ-ÿ]{6,20}$/;
                var nameResult = nameRGEX.test(inputValue);
              
                if (nameResult === true)
                        valid(e , id + " name valid");
                else
                    invalide(e , "length must be between 6 and 20");
            }
           
            else if (id ==="pseudo")
                   {
                         var nameRGEX = /^[a-z0-9]{6,20}$/;
                        var nameResult = nameRGEX.test(inputValue);
                        if (nameResult === true)
                    {
                        valid(e , "pseudo est valide")
                    }
                    else
                    invalide(e, "must be characters and numbers only betwenn 6 and 20");
                  }
 
             
            
            if (id==="email" ){
                  
                 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
                var emailResult = re.test(inputValue);
               if (emailResult === true && inputValue.length<40)
                   valid(e, "email est valide");
              else 
                    invalide(e , "email not valid")      
        }
            
              if (id === "password"){
                
                var passRGEX = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-zÀ-ÿ0-9]).{6,}$');
                var passResult = passRGEX.test(inputValue);
                  
                  if (passResult === false)
                        invalide(e,"password : min 6 , at least a uppercase,at least a lowercase , at least a number  , at least a sepecial character");
                else 
                    valid(e, "password est valid");
            }
            
            if (id ==="confirmedPassword"){
                var password = document.querySelector('#password').value ;
                if (password == inputValue)
                    valid(e, "password confirmed")
                else 
                    invalide(e , "passwords not matchs");
                
                }
            
        }
    
     var inputs = document.querySelectorAll('input');

   for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keyup', function(e) {
            
     verification(e);
                
        }
    )};
         
  