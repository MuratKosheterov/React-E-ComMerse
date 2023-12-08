import React from "react";
import { Link } from "react-router-dom";

function Adress() {
  return (
    <div className="adress mt-5 pt-5">
      <div className="container">
        <div className="row d-flex  flex-column mb-sm-3  flex-md-row">
          <div className="col-sm-12  mb-sm-5  col-md-6 ">
            <h2>
              E<span className="text-warning fw-bold fs-1 ">Commerse</span>
            </h2>
            <p className="my-4 pb-4 fw-bolder ">
              We earned a reputation of being good at what we do. <br /> Let us
              take your online shop to new dimension in success!
            </p>
            <div className="location">
              <div className="location-icon d-flex">
                <i className="bi bi-crosshair me-2 "></i>
                <p className="fw-bolder ">No'kis, Samanbay MPJ, Tashkent #27</p>
              </div>
              <p className=" d-inline-block  border-bottom border-dark fw-bolder ">
                muratkosheterov@gmail.com
              </p>
              <p className="fw-bolder ">(94) 455-09-90</p>
              <div className="sotial-icons ">
                <Link to="/">
                  <i className="bi bi-facebook text-dark  m-1"></i>
                </Link>
                <i className="bi bi-instagram m-1"></i>
                <i className="bi bi-twitter m-1"></i>
                <i className="bi bi-linkedin m-1"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 ">
            <p className="text-uppercase fs-3 fw-bolder">
              recaive email updates
            </p>
            <input
              className=" w-100"
              placeholder="         Your Email Adress"
              type="email"
              name=""
              id=""
            />
            <table className="table my-3 ">
              <thead>
                <tr>
                  <th scope="col">Shop</th>
                  <th scope="col">Help</th>
                  <th scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shop</td>
                  <td>Collection</td>
                  <td>@Outlet</td>
                </tr>
                <tr>
                  <td>FAQ</td>
                  <td>Privecy Policy</td>
                  <td>Terms and conditions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adress;
