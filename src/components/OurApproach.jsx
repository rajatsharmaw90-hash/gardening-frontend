import React from "react";
import images from "../data/images";

export default function OurApproach(){
    return(
        <div>
            <div className="container" style={{ backgroundColor:"#f3f0f0", borderRadius:"25px", marginTop:"3rem"}}>
                <h1 className="text-center display-1 fw-thin" style={{paddingTop:"2rem", paddingBottom:"2rem"}}>Our Appraoch</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="approach-image">
                            <img src={images.approach} alt="" className="img-fluid" style={{height:"100vh", border:"none", borderRadius:"30px"}} />
                        </div>
                    </div>
                    <div className="col-lg-6" >
                          <div className="d-flex flex-column align-items-center" style={{padding:"3rem"}} >
                            <div  style={{marginBottom:"25px"}} className="">
                           <img src={images.one} alt="" className="img-fluid" style={{height:"60px",  marginBottom:"20px"}}/>
                           <p style={{margin:"0 0 5px 0"}}>Free Consultation & Site Assessment</p>
                           <p>We start with a complimentary consultation to understand your goals, evaluate your property, and discuss your landscaping needs.</p>
                          </div>

                          <div  style={{marginBottom:"25px"}}>
                           <img src={images.two} alt="" className="img-fluid" style={{height:"60px", marginBottom:"20px"}}/>
                           <p style={{margin:"0 0 5px 0"}}>Design & Planning</p>
                           <p>We create customized landscape designs and detailed plans tailored to your vision and outdoor space.</p>
                          </div>

                          <div style={{marginBottom:"25px"}}>
                           <img src={images.three} alt="" className="img-fluid" style={{height:"60px", marginBottom:"20px"}}/>
                           <p style={{margin:"0 0 5px 0"}}>Installation & Maintenance</p>
                           <p>Our skilled team manages complete garden installation and ongoing maintenance, from site preparation to expert planting and care.</p>
                          </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}