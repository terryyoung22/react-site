import React from 'react';
 
const Contact = () => {
    return (
       <div className="App-body">
          <h1>Contact Me!</h1>
          <p><b><u>Contact me via: </u></b></p>
          <p>Email: terryyoung1192@gmail.com</p>
          <p>linkedin: https://www.linkedin.com/in/terry-young/</p>

          <p><a href="./" onclick="window.history.go(-1); return false;"> ⬅️ Home </a></p>

       </div>
    );
}
 
export default Contact;