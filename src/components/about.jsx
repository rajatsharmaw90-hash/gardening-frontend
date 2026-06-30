import React from "react";
import images from "../data/images";


export default function AboutUs() {
     
  return (
   <div>
         <div className="container-fluid " style={{padding:"0"}}>
          
        
             <div  style={{
        backgroundImage: `url(${images.aboutBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}>
             <div style={{padding:"30px"}}>
                <strong style={{color:"#FFC107", marginBottom:"2rem"}}>About Us</strong>
              <h1 className="display-1 fw-bolder" style={{color:"#0a412f", margin:"25px 0"}}>Bringing Nature Closer to Your Home</h1>
              <p style={{ color:"#1B1B1B", marginBottom:"2rem"}}>At InOrbit Gardening & Landscaping, we believe every outdoor space has the potential to become beautiful, functional, and inviting. From routine lawn maintenance to complete landscape transformations, our experienced team works with precision, creativity, and attention to detail.</p>
              <strong style={{marginBottom:"2rem", color:" #0a412f"}}>Our Mission:</strong>
              <p  style={{ color:"#1B1B1B", marginBottom:"2rem"}}>To help homeowners and businesses enjoy healthy, beautiful outdoor spaces without the stress of maintaining them.</p>
              <p style={{ color:"#1B1B1B", marginBottom:"2rem"}}>Whether your garden needs seasonal care or a complete redesign, we deliver quality workmanship with dependable customer service.</p>
             </div>
             </div>
            
        
         </div>
       
   </div>
  );
}
