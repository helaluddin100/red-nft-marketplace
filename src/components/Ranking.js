import React from "react";

<<<<<<< HEAD
function ranking() {
=======
function Ranking() {
>>>>>>> Dev-Helal
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
<<<<<<< HEAD
              <h2>Help Center</h2>
=======
              <h2>Ranking</h2>
>>>>>>> Dev-Helal
              <div className="page-route">
                <a href="">Home </a>
                <p> / Ranking </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* ============= Ranking =========== */}
      <div className="ranking cpy-6">
        <div className="container">
          <div className="ranking-wrapper">
            <div className="ranking-header-btn-item">
              <div className="ranking-btns-item-left">
                <a href="" className="custom-btn">
                  <span>All Categories</span>
                </a>
                <a href="" className="custom-btn">
                  <span>All Chains</span>
                </a>
              </div>
              <div className="ranking-btns-item-right">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Last 7 days</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Collection</th>
                    <th scope="col">Volume</th>
                    <th scope="col">24 %</th>
                    <th scope="col">7d %</th>
                    <th scope="col">Floor Price</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="recent-item-list">
                        <div className="list-rank-count">
                          <span>X1</span>
                        </div>
                        <div className="item-list-left">
                          <img src="./assets/img/action/3.png" alt="" />
                        </div>
                        <div className="item-list-right">
                          <h4>Sacral Metatron</h4>
                          <p>Hannah Zeo</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div class="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td> <div class="red-vat">
                        <span> -35.75%</span>
                      </div></td>
                    <td>    <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div></td>
                    <td>2K</td>
                    <td>10.5K</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="recent-item-list">
                        <div className="list-rank-count">
                          <span>X1</span>
                        </div>
                        <div className="item-list-left">
                          <img src="./assets/img/action/3.png" alt="" />
                        </div>
                        <div className="item-list-right">
                          <h4>Sacral Metatron</h4>
                          <p>Hannah Zeo</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div class="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td> <div class="red-vat">
                        <span> -35.75%</span>
                      </div></td>
                    <td>    <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div></td>
                    <td>2K</td>
                    <td>10.5K</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="recent-item-list">
                        <div className="list-rank-count">
                          <span>X1</span>
                        </div>
                        <div className="item-list-left">
                          <img src="./assets/img/action/3.png" alt="" />
                        </div>
                        <div className="item-list-right">
                          <h4>Sacral Metatron</h4>
                          <p>Hannah Zeo</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div class="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td> <div class="red-vat">
                        <span> -35.75%</span>
                      </div></td>
                    <td>    <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div></td>
                    <td>2K</td>
                    <td>10.5K</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="recent-item-list">
                        <div className="list-rank-count">
                          <span>X1</span>
                        </div>
                        <div className="item-list-left">
                          <img src="./assets/img/action/3.png" alt="" />
                        </div>
                        <div className="item-list-right">
                          <h4>Sacral Metatron</h4>
                          <p>Hannah Zeo</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div class="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td> <div class="red-vat">
                        <span> -35.75%</span>
                      </div></td>
                    <td>    <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div></td>
                    <td>2K</td>
                    <td>10.5K</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="recent-item-list">
                        <div className="list-rank-count">
                          <span>X1</span>
                        </div>
                        <div className="item-list-left">
                          <img src="./assets/img/action/3.png" alt="" />
                        </div>
                        <div className="item-list-right">
                          <h4>Sacral Metatron</h4>
                          <p>Hannah Zeo</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div class="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td> <div class="red-vat">
                        <span> -35.75%</span>
                      </div></td>
                    <td>    <div class="collection-price">
                        <div class="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div></td>
                    <td>2K</td>
                    <td>10.5K</td>
                  </tr>           
                </tbody>
              </table>
=======
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
>>>>>>> Dev-Helal
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* <!-- ==============Ranking end========== --> */}
>>>>>>> Dev-Helal
    </>
  );
}

<<<<<<< HEAD
export default ranking;
=======
export default Ranking;
>>>>>>> Dev-Helal
