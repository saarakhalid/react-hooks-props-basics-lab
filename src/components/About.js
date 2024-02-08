import React from 'react';
import Links from './Links';

function About(props) {
  const bio = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
     <div> {bio && <p> {bio} </p>} </div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <div>
        <Links github="https://github.com/liza"     linkedin ="https://www.linkedin.com/in/liza/"/>
      </div>
    </div>
  );
}

export default About;