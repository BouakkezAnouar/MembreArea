 
         function valid(e , message){
      
              var span = e.target.parentElement.nextElementSibling;
               var input = e.target ;
                          
             
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                    span.classList.remove("invalid-feedback");
                    span.classList.add("valid-feedback");
                    span.innerHTML =message;
                    span.style.transition ="opacity 1s linear" ;

         }
         
         function invalide(e , message){
              var span = e.target.parentElement.nextElementSibling;
               var input = e.target ;
                    input.classList.add("is-invalid");
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
            var span = e.target.parentElement.nextElementSibling;
            var id =e.target.id ;
        
                 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
                var emailResult = re.test(inputValue);
               if (emailResult === true && inputValue.length<40)
                   valid(e, "email est valide");
              else 
                    invalide(e , "email not valid")  ;    
        }
 
  
        
    
     var email = document.querySelector('input');

        email.addEventListener('keyup', function(e) {
            
     verification(e);
                
        }) ;
  