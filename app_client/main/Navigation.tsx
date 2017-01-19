import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Navigation extends React.Component<{}, {}> {
  render() {

    const navStyle = "navbar navbar-default navbar-fixed-top";

    return (
      <div className={navStyle}>
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">evaluator</a>
            <button type="button" data-toggle="collapse" data-target="#navbar-main" className="navbar-toggle">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar-main" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/mailer" activeClassName="active" >Mailer</Link></li>
              <li><Link to="/about" activeClassName="active" >About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;

