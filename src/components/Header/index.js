import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="headerDiv">
    <div className="leftCon">
      <div className="imgCon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="imgWidth"
          alt="wave"
        />
      </div>
      <h1>Wave</h1>
    </div>
    <div className="rightCon">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
      <h1>
        <Link to="/contact">Contact</Link>
      </h1>
    </div>
  </div>
)

export default Header
