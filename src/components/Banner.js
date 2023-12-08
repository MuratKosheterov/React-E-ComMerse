import React from "react";

function Banner() {
  return (
    <div className="banner mt-5">
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center  banner-image">
            <div className="row position-absolute w-100  bottom-50 top-50">
              <div className="col-6">
                <p className="text-uppercase fw-bold fs-5 ">own the day</p>
                <h1 className="text-uppercase display-1 fw-bolder ">tachen19</h1>
                <button className="btn btn-dark rounded-0 px-3">Shop collection</button>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;