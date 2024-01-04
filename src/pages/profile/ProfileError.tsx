
import { Link, useRouteError } from 'react-router-dom'
import ensureError from '../../utils/errors'

export default function ProfileError() {
  const error = ensureError(useRouteError())
  const displayError = String(error)
  
  return (
    <div className="profile-error">
      <h2>Error</h2>
      <p> { displayError }</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}