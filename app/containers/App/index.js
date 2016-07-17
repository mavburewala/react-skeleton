/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import bootstrap from 'utils/grid.bootstrap.css';


//import styles from './styles.css';

function App(props) {
  return (
    <div className={bootstrap.container}>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
