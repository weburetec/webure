import React from 'react'

import '../../assets/css/contactForm.css'


const Query33 = () =>{
 
return (
    <form>  
    <div class="row">
      <div class="col-12 mb-2 pb-1">         
          <input type="text" placeholder='Full Name'/>                  
      </div>
      <div class="col-12 mb-2 pb-1">                      
          <input type="email" placeholder='Email' />                 
      </div>
      <div class="col-12 mb-2 pb-1">                    
          <input type="tel" placeholder="Phone" />                      
      </div>

      <div class="col-12 mb-2 pb-1">         
          <input type="text" placeholder="service"/>            
      </div>

      <div class="col-12 mb-2 pb-1">          
          <input type="text" placeholder="Requirement"/> 
      </div>

    </div>  
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-warning">Send</button>
    </div>

  </form>


    )
}

export default Query33