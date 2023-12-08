import React from "react";
import Gallery from "../components/Gallery";
import Shop from "./Shop";
import Banner from "../components/Banner";
import Adress from "./Adress";

function Home() {
  return (
    <>
      <div className="Home mt-5">
        <div className="container-fluid h-100 position-relative my-5">
          <div className="row  mt-5 position-absolute w-100  top-50 bottom-50">
            <div className="col-sm-1 col-md-3 col-lg-4  col-xl-5 col-xxl-6"></div>
            <div className="col-sm-11 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
              <p className="ms-5 home-text fw-bolder text-uppercase fs-5 ">
                New Trend
              </p>
              <h1 className="ms-5 display-1 fw-bolder text-uppercase  ">
                Collusion
              </h1>
              <p className="ms-5 home-text fw-bolder fs-5">
                An exclusive selection of this season's trends.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Shop />
      <Banner />
      <Adress />
    </>
  );
}

export default Home;
