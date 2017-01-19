import * as React from 'react';

class About extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h3>Two widgets made were: Comment and Mailer. The main skills used as follows: </h3>
        <ul>
          <li>JaveScript: ES6</li>
          <li>JaveScript library:  React</li>
          <li>Responsive design: BootStrap Grid System </li>
          <li>Module bundler: Webpack</li>
          <li>Routing: react-router</li>
          <li>Flux architecture framework</li>
        </ul>

        <h3>Core skills used with Comment widget:</h3>
        <ul>
          <li>responsive design</li>
          <li>Date from an external JSON file </li>
        </ul>
        <h3>Core skills used with Mailer widget:</h3>
        <ul>
          <li>Responsive design</li>
          <li>Routing</li>
          <li>Flux implementation</li>
          <li>showing/hiding element</li>
          <li>Enable/disable element</li>
          <li>Monitoring state changing</li>
        </ul>
        <h3>Setup invironment as below:</h3>
        <ol>
          <li>Clone from GitHub: https://github.com/paxibay/paxi-exercise-react-mailer.git</li>
          <li>npm install</li>
          <li>npm start</li>
          <li>http://localhost:3000/</li>
        </ol>
      </div>
    );
  }
}

export default About;
