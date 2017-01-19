import * as React from 'react';
import Navigation from './Navigation';
export default class App extends React.Component<{}, {}> {
  render() {    const topStyle = {
      topPadding: 'topPadding'
    };

    let contentTop = `container ${topStyle.topPadding}`;    return (      <div>        <Navigation />         <div className={contentTop}>          {this.props.children}        </div>      </div>    );  }}