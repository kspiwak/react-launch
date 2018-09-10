import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

// render out app to the dom!
ReactDOM.render(<App />, document.getElementById('root'));

// register the browser service worker
registerServiceWorker();
