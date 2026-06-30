import React from "react";
import images from "../data/images";

export default function WhyChooseUs() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ padding: "0", marginTop: "3rem", marginBottom:"10rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={images.aboutSquirell} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              
              <h5 className="display-1" style={{color:"#0a412f", marginBottom:"3rem"}}>Why HomeOwners Choose InOrbit</h5>

           <div className="d-flex" style={{gap:"5rem"}}>
             <div>
                  <div className="d-flex" style={{marginBottom:"2rem"}}>
                <img src={images.cheak} alt="" style={{ height: "30px" }} />
                <div>
                  <h5>Experienced Team</h5>
                </div>
              </div>

               <div className="d-flex" style={{marginBottom:"2rem"}}>
                <img src={images.cheak} alt="" style={{ height: "30px" }} />
                <div>
                  <h5>Reliable Service</h5>
                </div>
              </div>

               <div className="d-flex" style={{marginBottom:"2rem"}}>
                <img src={images.cheak} alt="" style={{ height: "30px" }} />
                <div>
                  <h5>Affordable Pricing</h5>
                </div>
              </div>
            </div>

                  <div>
                  <div className="d-flex" style={{marginBottom:"2rem"}}>
                <img src={images.cheak} alt="" style={{ height: "30px" }} />
                <div>
                  <h5>Customized Solutions</h5>
                </div>
              </div>

               <div className="d-flex" style={{marginBottom:"2rem"}}>
                <img src={images.cheak} alt="" style={{ height: "30px" }} />
                <div>
                  <h5>Quality Workmanship</h5>
                </div>
              </div>

               <div className="d-flex" style={{marginBottom:"2rem"}}>
                <img src={images.cheak} alt="" style={{ height: "30px" }} />
                <div>
                  <h5>Customer Satisfaction</h5>
                </div>
              </div>
            </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
