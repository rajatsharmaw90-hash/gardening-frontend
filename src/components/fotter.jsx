import React from "react"
import logo from "../assets/images/logo.svg"

export default function Footer(){
    return(
        <div>
            <div className="container-fluid" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                           <div className="logo" style={{ color:"white", padding:"40px 0 30px 0"}}>
                            <h1 className="fw-bolder display-5 mb-4">InOrbit<br /> Gardening & Landscaping</h1>
                            <p>Creating Beautiful Outdoor Spaces Across the Lower Mainland.</p>
                           </div>
                         
                          
                        </div>
                        <div className="col-lg-3">
  <div className="address" style={{ color:"white",padding:"40px 0 30px 0"}}>
                            <p style={{paddingLeft:"24px"}}>997 Seymour St. Unit 250 <br /> Vancouver, BC</p>
                             
                           </div>
                        </div>
                        <div className="col-lg-3">
                           <div className="contact" style={{ color:"white", padding:"40px 0 30px 0"}}>
                            <p style={{paddingLeft:"24px"}}>778-710-0061 <br /> inorbitgroupltd@gmail.com</p>
                           </div>
                        </div>
                    </div>
                    <hr />
                    <section class="footer-logo">
  <h1>Inorbit</h1>
</section>

<div className="copy">
 <p style={{color:"white", padding:"20px 0 20px 0", margin:"0"}}>© 2025 Inorbit. All Rights Reserved.</p>
</div>
                </div>
            </div>
        </div>
    )
}