import React from "react";

function Popup() {
  return (
    <>
      <div className="custom-model cpy-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="modal-bg">
                <div className="modal-content-custom">
                  <div className="cs-modal-header">
                    <h4 className="modal-title">Modal title</h4>
                    <p>You must bid at least 4.89 ETH</p>
                  </div>

                  <div className="value">
                    <p>00.00ETH</p>
                  </div>
                  <p>Enter quantity 5 available</p>
                  <div className="value">
                    <p>1</p>
                  </div>

                  <div className="total-price">
                    <p>You must bid atleast:</p>
                    <p className="mp-price">4.89 ETH</p>
                  </div>

                  <div className="total-price">
                    <p>Services free :</p>
                    <p className="mp-price">0.89 ETH</p>
                  </div>
                  <div className="total-price">
                    <p>Total bid amount :</p>
                    <p className="mp-price">4 ETH</p>
                  </div>

                  <div className="modal-footer">
                    <div class="form-group">
                      <button class="social-login-btn" type="submit">
                        <span>Place Bid</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
