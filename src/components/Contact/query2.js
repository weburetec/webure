import React from 'react'
import '../../assets/css/contactForm.css'


const Query22 = () =>{
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
						            <label > Share 3 Time-Slots, we will email you for confirmation</label>             
                  </div>

                  <div class="col-12 mb-2 pb-1">                    
                      <input type="text" placeholder="Slot1" />              
                  </div>

                  <div class="col-12 mb-2 pb-1">                    
                      <input type="text" placeholder="Slot2" />              
                  </div>
                  <div class="col-12 mb-2 pb-1">                    
                      <input type="text" placeholder="Slot3" />              
                  </div>

                </div>  
                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-warning">Send</button>
                </div>
  
              </form>
)
}

export default Query22