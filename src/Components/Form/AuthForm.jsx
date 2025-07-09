import React, { useState } from 'react'
import './form_style.css'

export default function authForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className=''>
        <div className='main-form-container'>
          <div className='form-container'>
            <div className='form-toggle'>
              <button type="button" class={`${isLogin ? 'active' : ' '} `} onClick={() => { setIsLogin(true) }} > Login</button>
              <button type="button" class={`${!isLogin ? 'active' : ' '}`} onClick={() => { setIsLogin(false) }}> Sign Up</button>
            </div>
            {isLogin ? <>

              <div>
                <div className="form">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <a href="">Forgot password?</a>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <p> Not a member? <a href="#" onClick={() => setIsLogin(false)} >Sign Up</a></p>
                </div>
              </div>
            </>
              : <>

                <div>
                  <div className="form">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                     <div class="form-group">
                      <label for="exampleInputPassword1"> Confirm Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </>}
          </div>

        </div>
      </div>
    </>
  )
}

