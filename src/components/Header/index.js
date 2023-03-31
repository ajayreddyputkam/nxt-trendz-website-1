// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-main-container">
    <div className="image-links-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-brand-logo"
      />
      <div className="link-nav-container-lg">
        <ul className="link-list-container-nav">
          <Link to="/" className="link-item-nav">
            <li className="home-nav">Home</li>
          </Link>
          <Link to="/products" className="link-item-nav">
            <li className="products-nav">Products</li>
          </Link>
          <Link to="cart" className="link-item-nav">
            <li className="cart-nav">Cart</li>
          </Link>
        </ul>
        <button type="button" className="logout-button-nav">
          Logout
        </button>
      </div>
      <button type="button" className="logout-nav-logo-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-logo-nav"
        />
      </button>
    </div>
    <div className="nav-links-logos-container">
      <Link to="/" className="link-item-nav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="home-nav-logo"
        />
      </Link>
      <Link to="/products" className="link-item-nav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="product-nav-logo"
        />
      </Link>
      <Link to="/cart" className="link-item-nav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="cart-nav-logo"
        />
      </Link>
    </div>
  </nav>
)

export default Header
