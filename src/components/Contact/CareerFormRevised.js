import React from 'react'

const CareerFormRevised = () => {
    return (
        <div class="row justify-content-center  align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7 ">
          <div class="card shadow-2-strong card-registration m-2 bd card-color">
            <div class="card-body p-4 p-md-5">
            <form>

                <div class="form-outline mb-2">
                  <input type="text" id="1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="1cg">Your Name</label>
                </div>

                <div class="form-outline mb-2">
                  <input type="email" id="3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="3cg">Your Email</label>
                </div>

                <div class="form-outline mb-2">
                  <input type="text" id="2cg" class="form-control form-control-lg" />
                  <label class="form-label" for="2cg">Your phone Number</label>
                </div>


                <div class="form-outline mb-2">
                  <input type="password" id="4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="4cg">Password</label>
                </div>

                <div class="form-outline mb-2">
                  <input type="password" id="4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="4cdg">Repeat your password</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
export default CareerFormRevised