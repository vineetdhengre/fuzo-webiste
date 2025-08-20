import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form_style.css'

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Get stored users or empty array if none
  const getStoredUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Save all users array
  const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Handle Sign Up
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (password !== confirmPass) {
      setError('Passwords do not match.');
      return;
    }
    const users = getStoredUsers();
    // Check for duplicates
    const isDuplicate = users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (isDuplicate) {
      setError('Email already exists. Please use another.');
      return;
    }
    // Store new user
    const newUser = { email, password };
    users.push(newUser);
    saveUsers(users);
    setError('');
    navigate('/');
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const users = getStoredUsers();
    const user = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );
    if (user) {
      setError('');
      navigate('/');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="main-form-container">
      <div className="form-container">
        <div className="form-toggle">
          <button type="button" className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button type="button" className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Sign Up</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLogin ? (
          <form className="form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email address</label>
              <input type="email" id="loginEmail" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input type="password" id="loginPassword" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        ) : (
          <form className="form" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="signupEmail">Email address</label>
              <input type="email" id="signupEmail" value={email} onChange={e => setEmail(e.target.value)} required />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="signupPassword">Password</label>
              <input type="password" id="signupPassword" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
}


// import React, { useState } from 'react'
// import './form_style.css'

// export default function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   return (
//     <>
//       <div className=''>
//         <div className='main-form-container'>
//           <div className='form-container'>
//             <div className='form-toggle'>
//               <button type="button" class={`${isLogin ? 'active' : ' '} `} onClick={() => { setIsLogin(true) }} > Login</button>
//               <button type="button" class={`${!isLogin ? 'active' : ' '}`} onClick={() => { setIsLogin(false) }}> Sign Up</button>
//             </div>
//             {isLogin ? <>

//               <div>
//                 <div className="form">
//                   <div class="form-group">
//                     <label htmlFor="exampleInputEmail1">Email address</label>
//                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                   </div>
//                   <div class="form-group">
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//                   </div>
//                   <a href="">Forgot password?</a>
//                   <button type="submit" class="btn btn-primary">Submit</button>
//                   <p> Not a member? <a href="#" onClick={() => setIsLogin(false)} >Sign Up</a></p>
//                 </div>
//               </div>
//             </>
//               : <>

//                 <div>
//                   <div className="form">
//                     <div class="form-group">
//                       <label htmlFor="exampleInputEmail1">Email address</label>
//                       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <div class="form-group">
//                       <label htmlFor="exampleInputPassword1">Password</label>
//                       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//                     </div>
//                      <div class="form-group">
//                       <label htmlFor="exampleInputPassword1"> Confirm Password</label>
//                       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//                     </div>
//                     <button type="submit" class="btn btn-primary">Submit</button>
//                   </div>
//                 </div>
//               </>}
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

