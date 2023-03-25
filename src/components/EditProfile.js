import React from "react";

function EditProfile() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Edit Profile</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Edit Profile </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}
      {/* <!-- ==============profile area========== --> */}
      <div class="profile-area cpy-6">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-4 mb-4">
              <div class="product-card">
                <div class="product-image">
                  <a href="" class="product-link">
                    <img
                      src="assets/img/product/2.png"
                      alt=""
                      class="product"
                    />
                  </a>
                </div>
                <div class="product-des">
                  <div class="form-group">
                    <input
                      type="file"
                      name="file-7[]"
                      id="file-8"
                      class="inputfile"
                    />
                    <label for="file-8">
                      <span class="file-up">Upload File</span>
                    </label>
                  </div>
                  <div class="form-group">
                    <input
                      type="file"
                      name="file-7[]"
                      id="file-8"
                      class="inputfile"
                    />
                    <label for="file-8">
                      <span class="file-up">Upload File</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-8 col-lg-9">
              <h4 class="sm-title mb-3">Choice your Cover image</h4>
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div class="profile-image-upload-card">
                    <div class="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-8"
                        class="inputfile"
                        multiple=""
                      />
                      <label for="file-8">
                        <span class="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div class="profile-image-upload-card">
                    <div class="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-9"
                        class="inputfile"
                        multiple=""
                      />
                      <label for="file-9">
                        <span class="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div class="profile-image-upload-card">
                    <div class="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-10"
                        class="inputfile"
                        multiple=""
                      />
                      <label for="file-10">
                        <span class="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-info mt-5">
                <div class="row revers">
                  <div class="col-md-6">
                    <h4 class="sm-title mb-3">Account Information</h4>
                    <div class="mb-3">
                      <label for="name" class="form-label">
                        Display Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Display Name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="url" class="form-label">
                        Custom URL
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="url"
                        placeholder="Custom URL"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="bio" class="form-label">
                        Bio
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        class="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <button class="custom-btn" type="submit">
                        <span>Submit Details</span>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h4 class="sm-title mb-3">Your Social media</h4>
                    <div class="mb-3">
                      <label for="facebook" class="form-label">
                        Facebook
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="facebook"
                        placeholder="Facebook"
                      />
                    </div>
                    <div className="mb-3">
                      <a href="" className="custom-btn">
                        <span>Connect to facebook</span>
                      </a>
                    </div>
                    <div class="mb-3">
                      <label for="Twitter" class="form-label">
                        Twitter
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Twitter"
                        placeholder="Twitter"
                      />
                    </div>
                    <div className="mb-3">
                      <a href="" className="custom-btn">
                        <span>Connect to Twitter</span>
                      </a>
                    </div>

                    <div class="mb-3">
                      <label for="Discord" class="form-label">
                        Connect to Discord
                      </label>
                      <input
                        type="Discord"
                        class="form-control"
                        id="Discord"
                        placeholder="Discord Username"
                      />
                    </div>
                    <div className="mb-3">
                      <a href="" className="custom-btn">
                        <span>Connect to Discord</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ==============profile area end========== --> */}
    </>
  );
}

export default EditProfile;
