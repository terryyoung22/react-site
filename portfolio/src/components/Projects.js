import React from 'react';
 
const Projects = () => {
    return (
      <div className="App">
      <header className="App-body">
          <h1>Projects</h1>
          <p>Here is a list of top projects I have created, most are in my Github/ Docker containers pushed from Github to Docker hub using Github actions!: </p><br></br>
              <p>⭐️ Desktop Python Tkinter program that does daily and work functions for me (git pull/pushes, docker commands and scripts and more!) </p><br></br>
              <p>⭐️ NodeJS container hosted on kubernetes cluster that consolidates all my credit card accounts, because who wants to login and pay each!? </p><br></br>
              <p>⭐️ Wordpress custom fantasy football site for my league! Containerized and hosted in ECS </p><br></br>
              <p>⭐️ Github action created flask/node/nginx containers for front end, one is a password manager for me (thats not public, dont bother looking!) </p><br></br>
              <p>⭐️ WHAT IS COMING?:<li></li>
                    Nodejs site that uses lambdas to create resources for me (because I use TF and CF for work so why not challenge myself!?)<br></br>
                    Flask site that builds static web pages for you on containers( big project that will take me forever but trying to make that my open source project)<br></br>
                    again and more just dont wanna bore you too much </p><br></br>
              <p><a href="./" onclick="window.history.go(-1); return false;"> ⬅️ Home </a></p>
       </header>
       </div>
    );
}
 
export default Projects;