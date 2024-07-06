import React from "react";
import myimage from '../images/myimage (2).jpg';
import register from '../images/register (2).png';
import login from '../images/login.png';
import create from '../images/create.png';
import '../styles/landingPage.css';

function LandingPage()
{
    return(
        <div className="landing_container">
        <div className="first_section">
        <div className="logo_div">
            <img src={myimage} className="logo"/>
        </div>
        <div className="text_one">
          <p className="text">A dynamic blog site allowing users to post, comment, and interact with content in real-time.</p>
        </div>

        </div>
        <h3 className="key_feature">Key Features</h3>
        <div className="second_section">
           <div class="feature">
                <img src={register} alt="Registration Page" className="img_register"/>
                <h5>Registration Page</h5>
                <p className="text">Sign up easily with our user-friendly registration page, ensuring a smooth onboarding experience for new users.</p>
            </div>
            <div class="feature">
                <img src={login} alt="Registration Page" className="img_register"/>
                <h5>Login Page</h5>
                <p className="text">Securely log in to your account with our intuitive and secure login page, designed to protect your personal information.</p>
            </div>
            <div class="feature">
                <img src={create} alt="Registration Page" className="img_register"/>
                <h5>Blog Creation Page</h5>
                <p className="text">Sign up easily with our user-friendly registration page, ensuring a smooth onboarding experience for new users.</p>
            </div>
        </div>
        <div className="third_section">
            <h3 className="about_sec">About</h3>
            <p className="text">
            The inspiration behind Blog2for came from my passion for writing and sharing ideas with others. I wanted to create a platform that allows people to express their thoughts and engage with a community. This project started as a personal endeavor to combine my love for technology and content creation.
        </p>
        <a href="https://www.linkedin.com/in/lemmy-osiki-b6934418b/" target="_blank">LinkedIn</a><br/>
        <a href="https://github.com/Lemmy731" target="_blank">GitHub</a>

        </div>
           
        </div>
    )
}
export default LandingPage;