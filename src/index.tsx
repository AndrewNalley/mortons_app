import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <App />
)

// Previously code was as shown below,
// however, to fix a small react modal bug that occurs only 
// in development, the above code is implemented.
// Strict mode will be reinstated after the Gallery is 
// suitably developed.

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// (see https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar/60619061#60619061)