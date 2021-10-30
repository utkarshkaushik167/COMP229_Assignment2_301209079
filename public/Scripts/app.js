/**
  * app.css
  * Utkarsh Kaushik
  * 301209079
  * Oct 21, 2021
  */

// IIFE -- Immediately Invoked Function Expression
(function(){

  function Start()
  {
      console.log("App Started...");

      // prompts the user to confirm before deleting a database entry
      let deleteButtons = document.querySelectorAll('.delete-button');
      
      for(button of deleteButtons)
      {
          button.addEventListener('click', (event)=>{
              if(!confirm("Are you sure you want to delete this contact?")) 
              {
                  event.preventDefault();
                  window.location.assign('/business-contact-list');
              }
          });
      }
  }

  window.addEventListener("load", Start);

})();