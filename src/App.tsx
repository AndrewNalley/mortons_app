import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

//polyfills
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// layout
import RootLayout from './layouts/RootLayout';

// components

// pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Social from './pages/Social';

// styles
import './App.css';
import '@picocss/pico'

// instantiate router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<RootLayout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/social' element={<Social />} />
      <Route path='*' element={<NotFound />} />
    </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
