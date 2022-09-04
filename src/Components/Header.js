import React from "react";
import logo from "../commonResource/images/icons/logo.png"
import search from "../commonResource/images/icons/search-icon.png"
import cart from "../commonResource/images/icons/cart.png"


function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top header-wrapper">
        <div className="container">
          <a className="logo-link navbar-brand js-scroll-trigger" href="#">
            <img src={logo} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav nav-fill w-100">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/mac/">
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  iphone
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  ipad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  watch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  tv
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="search-link nav-link js-scroll-trigger" href="#">
                    <img src={search} />
                    </a>
                </li>
                <li>
                    <a
                    className="cart-link nav-link js-scroll-trigger"
                    href="/cart/"
                    >
                    <img src={cart} />
                    </a>
                </li>
                </ul>
            </div>
            </div>

            <section class="searchbox">
            <form>
                <input type="text" name="searchbox" />
                <button id="submitButton" class="btn btn-primary" type="submit">
                Search
                </button>
            </form>
            </section>
        </nav>
    );
};
export default Header;
