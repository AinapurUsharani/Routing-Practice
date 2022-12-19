import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <h1 className="main-heading">Wave</h1>
    </div>

    <ul className="link-container">
      <li className="list-style">
        <Link to="/" className="main-heading">
          Home
        </Link>
      </li>
      <li className="list-style">
        <Link to="/about" className="main-heading">
          About
        </Link>
      </li>
      <li className="list-style">
        <Link to="/contact" className="main-heading">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
