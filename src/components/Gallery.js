import React from "react";
import second from "../images/2.png";
import third from "../images/3.png";
import fouth from "../images/4.png";
import fifthe from "../images/5.png";

function Gallery() {
  return (
    <div className="gallery mt-5 pt-5 ">
      <div className="container">
        <div className="row  flex-column-reverse flex-md-row ">
          <div className="col-md-6">
            <div className="row">
              <div className="col-12">
                <img className="w-100 " src={second} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-3">
                <img className=" w-100 " src={third} alt="" />
              </div>
              <div className="col-6 mt-3">
                <img className="w-100" src={fouth} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 mb-sm-3  ">
            <img className=" w-100 " src={fifthe} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
