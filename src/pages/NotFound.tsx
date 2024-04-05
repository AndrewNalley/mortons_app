import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <section className='page'>
      <h1 className="page-header page-header-text">Page not found :( </h1>

      <p>Go to the <NavLink to='/'>Homepage</NavLink>.</p>
    </section>
  )
}