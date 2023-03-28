import React from "react";

function Ranking() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Ranking</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Ranking </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}
      {/* <!-- ==============Ranking========== --> */}
      <div className="ranking">
        <div className="container">
          <div class="my-5">
            <div class="row">
              <div class="col-12">
                <div class="tranding-bar">
                  <ul class="tranding-cat">
                    <li>
                      <a href="" class="tranding-cat-lin active">
                        All Categories
                      </a>
                    </li>
                    <li>
                      <a href="" class="tranding-cat-lin">
                        All chains
                      </a>
                    </li>
                  </ul>
                  <div class="added-btn">
                    <div class="dp-menu-item">
                      <div class="dp-fiexd">
                        <p>Recently Added</p>
                        <span>
                          <i class="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div class="dp-menu">
                        <ul class="dp-ul">
                          <li class="dp-li">
                            <a href="" class="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                          <li class="dp-li">
                            <a href="" class="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                          <li class="dp-li">
                            <a href="" class="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                          <li class="dp-li">
                            <a href="" class="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ==============Ranking end========== --> */}
    </>
  );
}

export default Ranking;
