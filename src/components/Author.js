import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Author() {
  return (
    <div>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Authors</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Authors </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}
      {/* ====================top collection=================== */}
      <div className="top-collection bg-white cpy-6">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Top Seller</h2>
              <div className="slider-nav">
                <div className="prev">
                  <i className="icofont-arrow-left"></i>
                </div>
                <div className="next">
                  <i className="icofont-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="top-collection-arefa pt-5">
            <div className="top-collection-slider">
              <Swiper
                spaceBetween={20}
                slidesPerView={2.3}
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                breakpoints={{
                  450: {
                    slidesPerView: 3,
                  },
                  540: {
                    slidesPerView: 4,
                  },
                  740: {
                    slidesPerView: 5,
                  },
                  800: {
                    slidesPerView: 6,
                  },
                  1050: {
                    slidesPerView: 7,
                  },
                  1400: {
                    slidesPerView: 9,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/1.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/2.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/3.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/4.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/5.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/6.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/7.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/8.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/9.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/1.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/1.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="top-collection-item">
                    <div className="top-collection-image">
                      <a href="" className="top-collection-link">
                        <div className="top-product-img">
                          <img
                            src="assets/img/top/1.png"
                            alt=""
                            className="top-collection-img"
                          />
                          <div className="varified">
                            <i className="icofont-verification-check"></i>
                          </div>
                        </div>
                        <div className="top-collection-details">
                          <p className="top-collection-name">Crispin Berry</p>
                          <p className="top-collection-price">$9,15485</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* ====================top collection end =================== */}
      {/* ==============creator======================= */}
      <section class="authors cpy-6">
        <div class="container">
          <div class="title">
            <h1>Our Creator</h1>
          </div>
          <div class="creators">
            {/* <!-- Creatob Box  --> */}
            <div class="creator-box">
              <div class="box-top">
                <div class="top-left">
                  <div class="profile">
                    <div class="avatar">
                      <img src="assets/img/inner/1.png" alt="" />
                    </div>
                    <div class="checkmark">
                      <i class="fas fa-check-circle"></i>
                    </div>
                  </div>
                  <div class="name">
                    <h1>Ralph Garraway</h1>
                    <p>12 item products</p>
                  </div>
                </div>
                <div class="top-right">
                  <a href="" className="custom-btn-alt">
                    <span>following</span>
                  </a>
                </div>
              </div>
              <div class="box-bottom">
                <div class="bottom-left">
                  <img src="assets/img/inner/box-bottom-left.png" alt="" />
                </div>
                <div class="bottom-right">
                  <div class="top">
                    <div class="image">
                      <img src="assets/img/inner/1.png" alt="" />
                    </div>
                    <div class="image">
                      <img src="assets/img/inner/7.jpg" alt="" />
                    </div>
                  </div>
                  <div class="bottom">
                    <img src="assets/img/inner/3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Creatob Box  --> */}
            <div class="creator-box">
              <div class="box-top">
                <div class="top-left">
                  <div class="profile">
                    <div class="avatar">
                      <img src="assets/img/inner/avater.png" alt="" />
                    </div>
                    <div class="checkmark">
                      <i class="fas fa-check-circle"></i>
                    </div>
                  </div>
                  <div class="name">
                    <h1>Ralph Garraway</h1>
                    <p>12 item products</p>
                  </div>
                </div>
                <div class="top-right">
                  <a href="" className="custom-btn-alt">
                    <span>following</span>
                  </a>
                </div>
              </div>
              <div class="box-bottom">
                <div class="bottom-left">
                  <img src="assets/img/inner/box-bottom-left.png" alt="" />
                </div>
                <div class="bottom-right">
                  <div class="top">
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                  </div>
                  <div class="bottom">
                    <img
                      src="assets/img/inner/box-bottom-right-bottom-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Creatob Box  --> */}
            <div class="creator-box">
              <div class="box-top">
                <div class="top-left">
                  <div class="profile">
                    <div class="avatar">
                      <img src="assets/img/inner/avater.png" alt="" />
                    </div>
                    <div class="checkmark">
                      <i class="fas fa-check-circle"></i>
                    </div>
                  </div>
                  <div class="name">
                    <h1>Ralph Garraway</h1>
                    <p>12 item products</p>
                  </div>
                </div>
                <div class="top-right">
                  <a href="" className="custom-btn-alt">
                    <span>following</span>
                  </a>
                </div>
              </div>
              <div class="box-bottom">
                <div class="bottom-left">
                  <img src="assets/img/inner/box-bottom-left.png" alt="" />
                </div>
                <div class="bottom-right">
                  <div class="top">
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                  </div>
                  <div class="bottom">
                    <img
                      src="assets/img/inner/box-bottom-right-bottom-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Creatob Box  --> */}
            <div class="creator-box">
              <div class="box-top">
                <div class="top-left">
                  <div class="profile">
                    <div class="avatar">
                      <img src="assets/img/inner/avater.png" alt="" />
                    </div>
                    <div class="checkmark">
                      <i class="fas fa-check-circle"></i>
                    </div>
                  </div>
                  <div class="name">
                    <h1>Ralph Garraway</h1>
                    <p>12 item products</p>
                  </div>
                </div>
                <div class="top-right">
                  <a href="" className="custom-btn-alt">
                    <span>following</span>
                  </a>
                </div>
              </div>
              <div class="box-bottom">
                <div class="bottom-left">
                  <img src="assets/img/inner/box-bottom-left.png" alt="" />
                </div>
                <div class="bottom-right">
                  <div class="top">
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                  </div>
                  <div class="bottom">
                    <img
                      src="assets/img/inner/box-bottom-right-bottom-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Creatob Box  --> */}
            <div class="creator-box">
              <div class="box-top">
                <div class="top-left">
                  <div class="profile">
                    <div class="avatar">
                      <img src="assets/img/inner/avater.png" alt="" />
                    </div>
                    <div class="checkmark">
                      <i class="fas fa-check-circle"></i>
                    </div>
                  </div>
                  <div class="name">
                    <h1>Ralph Garraway</h1>
                    <p>12 item products</p>
                  </div>
                </div>
                <div class="top-right">
                  <a href="" className="custom-btn-alt">
                    <span>following</span>
                  </a>
                </div>
              </div>
              <div class="box-bottom">
                <div class="bottom-left">
                  <img src="assets/img/inner/box-bottom-left.png" alt="" />
                </div>
                <div class="bottom-right">
                  <div class="top">
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                  </div>
                  <div class="bottom">
                    <img
                      src="assets/img/inner/box-bottom-right-bottom-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Creatob Box  --> */}
            <div class="creator-box">
              <div class="box-top">
                <div class="top-left">
                  <div class="profile">
                    <div class="avatar">
                      <img src="assets/img/inner/avater.png" alt="" />
                    </div>
                    <div class="checkmark">
                      <i class="fas fa-check-circle"></i>
                    </div>
                  </div>
                  <div class="name">
                    <h1>Ralph Garraway</h1>
                    <p>12 item products</p>
                  </div>
                </div>
                <div class="top-right">
                  <a href="" className="custom-btn-alt">
                    <span>following</span>
                  </a>
                </div>
              </div>
              <div class="box-bottom">
                <div class="bottom-left">
                  <img src="assets/img/inner/box-bottom-left.png" alt="" />
                </div>
                <div class="bottom-right">
                  <div class="top">
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                    <div class="image">
                      <img src="assets/img/inner/9.jpg" alt="" />
                    </div>
                  </div>
                  <div class="bottom">
                    <img
                      src="assets/img/inner/box-bottom-right-bottom-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="load-more-area mt-4">
            <a href="" class="custom-btn">
              <span>Load More</span>
            </a>
          </div>
        </div>
      </section>

      {/* =============================creator end========================= */}
    </div>
  );
}

export default Author;
