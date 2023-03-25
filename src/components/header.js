import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  console.log(activeIndex);

  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo">
            <a href="" className="logo-link">
              <img src="assets/img/logo/logo-2.png" alt="" />
            </a>
          </div>
          <div class="search-box">
            <form method="post" class="search-form">
              <input
                type="text"
                class="form-control search-input"
                placeholder="Search..."
              />
              <button class="search-btn" type="submit">
                <i class="icofont-search-1"></i>
              </button>
            </form>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <i className="icofont-close"></i>
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list">
                <Link to="/">
                  <a href="" className="nav-link">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="/activity">
                  <a href="" className="nav-link">
                    Activity
                  </a>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="/wallet">
                  <a href="" className="nav-link">
                    Wallet
                  </a>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="/explore">
                  <a href="" className="nav-link">
                    Expoler
                  </a>
                </Link>
              </li>
              <li className="nav-list">
                <Link to="/blog">
                  <a href="" className="nav-link">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
            <a href="" className="custom-btn l-none mt-3">
              <span>Connect Wallet</span>
            </a>
          </div>
          <div className="wallet-btn m-none">
            <a href="" className="custom-btn ">
              <span>
                <i class="icofont-wallet"></i> Connect Wallet
              </span>
            </a>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <i className="icofont-navigation-menu"></i>
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
