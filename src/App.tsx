import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// layout
import RootLayout from './layouts/RootLayout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Package from './pages/Package'
import Social from './pages/Social'
import FullGallery from './pages/FullGallery'
import BundleForm from './components/BundleForm'

// styles
import './App.css'
import '@picocss/pico'
import './fonts.css'

// instantiate router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<RootLayout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/package' element={<Package />} />
      <Route path='/social' element={<Social />} />
      <Route path='gallery/full' element={<FullGallery />} />
      <Route path='package/form' element={<BundleForm />} />
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
