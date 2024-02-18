const React = require('react');
const ReactDOM = require('react-dom/client');
const { BrowserRouter } = require('react-router-dom');
const App = require('./components/App.tsx').default;

// react render
const {createElement} = React;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  createElement(React.StrictMode, null,
    createElement(App, null))
)