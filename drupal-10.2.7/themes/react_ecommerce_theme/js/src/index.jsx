//From the component Creating a component DrupalProjectStats
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// /* Import Components */
// import DrupalProjectStats from './components/DrupalProjectStats';

// const Main = () => (
//   <DrupalProjectStats projectName="drupal" />
// );

// // Get the container for your app.
// const container = document.getElementById('react-app');

// // Check if the container exists to avoid null errors.
// if (container) {
//   // Create a root.
//   const root = ReactDOM.createRoot(container);

//   // Render the Main component.
//   root.render(<Main />);
// } else {
//   console.error('Failed to find the root element');
// }
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Import Components */
//import NodeListOnly from "./components/NodeListOnly";
import NodeReadWrite from "./components/NodeReadWrite";

const Main = () => (
  <NodeReadWrite />
);

// Get the container for your app.
const container = document.getElementById('react-app');

// Check if the container exists to avoid null errors.
if (container) {
  // Create a root.
  const root = ReactDOM.createRoot(container);

  // Render the Main component.
  root.render(<Main />);
} else {
  console.error('Failed to find the root element');
}