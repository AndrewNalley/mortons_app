import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <section className='page'>
      <h2 className="page-header">Page not found :( </h2>

      <p>Go to the <NavLink to="mortons_app">Homepage</NavLink>.</p>
    </section>
  )
}