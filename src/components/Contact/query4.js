import React from 'react'
import '../../assets/css/contactForm.css'


const Query44 = () =>{
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
          <input type="text" placeholder="Position for applying"  />
      </div>

      <div class="col-12 mb-1 pb-1">
          <input type="text" placeholder="Objective - To make money. To kill time. To get popular. Sorry, not interested. Next!  To learn and learn more. To take up a challenging role. To grow with growing organization. Great!" />          
      </div> 

      <div class="col-12 mb-1 pb-1">
          <input type="text" placeholder="Experience - Experienced and all set to march a different beat? Yes please! - No or little experience, but game for trying out new things and ready for an adventurous trip? HOP IN!" />          
      </div> 

      <div class="col-12 mb-1 pb-1">
          <input type="text" placeholder="Education - Anything above higher secondary is a plus. We focus more on the skill set and potential of an individual than degrees and certificates." />          
      </div> 

      <div class="col-12 mb-1 pb-1">
          <input type="text" placeholder="Where did you heard about us?" />          
      </div>    

    </div> 

    <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0">Upload CV</h6>
              </div>
              <div class="col-md-9 pe-5">
              <div class="file-upload-wrapper">
                    <input type="file" id="input-file-now" class="file-upload" />
            </div>
             </div>
        </div> 
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-warning">Send</button>
    </div>

  </form>
)
}

export default Query44