import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'

import AboutAuth from './AboutAuth'

const Auth = () => {
// if issignup is false it means we are in login page 
// otherwise we are in signup page 
    const [isSignup, setIsSignup] = useState(false);

    const handleSwitch = () =>{
        // it(EventListener) helps to toggle bw signup and login page 
        setIsSignup(!isSignup)
    }

  return (
    <section className='auth-section'>
        { isSignup && <AboutAuth />}
        <div className="auth-container-2">
            {/* if login page is open then show this below icon */}
            {!isSignup && <img src={icon} alt="stack overflow" className='login-logo' /> }
            <form >
                {
                    // display name only in sigup page 
                    isSignup && (
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input type="text" id='name' name='name' />
                        </label>
                    )
                }  
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' />
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex", justifyContent:"space-between" }}>
                        <h4>Password</h4>
                        {/* only shown in login page */}
                        {!isSignup && <p style={{display:"flex", justifyContent:"space-between"}}>forgot password?</p> }
                    </div>
                    <input type="password" name='password' id='password' />
                    {/* only available in signup page */}
                    { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p> }
                </label> 
                {/* checkbox only in signup page */}
                {
                    isSignup && (
                        <label htmlFor='check'>
                            <input type="checkbox" id='check'/>
                            <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                        </label>
                    ) 
                }
                <button type="submit" className='auth-btn'>{ isSignup ? 'Sign up' : 'Log in'}</button>
            {/* only in signup page  */}
                {
                    isSignup && (
                        <p style={{ color: "#666767", fontSize:"13px"}}>
                            By clicking “Sign up”, you agree to our 
                            <span style={{ color: "#007ac6"}}> terms of<br /> service</span>,
                            <span style={{ color: "#007ac6"}}> privacy policy</span> and 
                            <span style={{ color: "#007ac6"}}> cookie policy</span>
                        </p>
                    ) 
                } 
            </form>
            <p>
                {isSignup ? 'Already have an account ?' : "Don't have an account ?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth




