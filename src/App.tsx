import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// layout
import RootLayout from './layouts/RootLayout';
import ProfileLayout from './layouts/ProfileLayout';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import MyProfile from './pages/profile/MyProfile';
import ProfileError from './pages/profile/ProfileError';
import NotFound from './pages/NotFound';

// styles
import '@picocss/pico'
import './App.css';

// instantiate router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path="profile" element={<ProfileLayout />} errorElement={<ProfileError />}>
        <Route
          index
          element={<MyProfile />}
        />
      </Route>
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
