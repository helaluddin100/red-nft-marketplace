import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
          <div className="search-box header-search-box">
            <form method="post" className="search-form">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search..."
              />
              <button className="search-btn" type="submit">
                <i className="icofont-search-1"></i>
              </button>
            </form>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <i className="icofont-close"></i>
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list">
                <HashLink to="/">
                  <a href="" className="nav-link">
                    Home
                  </a>
                </HashLink>
              </li>
              <li className="nav-list">
                <div className="select nav-select-item">
                  <div className="select-menu">
                    <div className="select-menu-inner">
                      <p>Explore</p>
                      <i className="icofont-simple-down"></i>
                    </div>
                    <ul className="dp-menu">
                      <li>
                        <HashLink
                          to="/item"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Item Details
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/explore"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Explore
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/action"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Auctions
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-list">
                <HashLink to="/activity" onClick={_toggleSidebar}>
                  <a href="" className="nav-link">
                    Activity
                  </a>
                </HashLink>
              </li>

              <li className="nav-list">
                <div className="select nav-select-item">
                  <div className="select-menu">
                    <div className="select-menu-inner">
                      <p>Community</p>
                      <i className="icofont-simple-down"></i>
                    </div>
                    <ul className="dp-menu">
                      <li>
                        <HashLink
                          to="/help"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Help Center
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/explore"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Explore
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/action"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Auctions
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-list">
                <div className="select nav-select-item">
                  <div className="select-menu">
                    <div className="select-menu-inner">
                      <p>Pages</p>
                      <i className="icofont-simple-down"></i>
                    </div>
                    <ul className="dp-menu">
                      <li>
                        <HashLink
                          to="/author"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Authors
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/ranking"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Ranking
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/edit-profile"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          User Profile
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/create"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Create Items
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/wallet"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Wallet Connect
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-list">
                <HashLink to="/contact" onClick={_toggleSidebar}>
                  <a href="" className="nav-link">
                    Contacts
                  </a>
                </HashLink>
              </li>
            </ul>
            <a href="" className="custom-btn l-none mt-3">
              <span>Connect Wallet</span>
            </a>
          </div>

          <div className="wallet-btn m-none">
            <a href="" className="custom-btn-alt">
              <span>
                <i className="icofont-wallet"></i> Connect Wallet
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
