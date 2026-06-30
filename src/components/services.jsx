import React from "react";

import services from "../data/services";

export default function Services(){
    return(
      <div className="container-fluid" style={{padding:"0"}}>
        <div style={{backgroundColor:"#2E7D32"}}>
            <div className="services-header" style={{padding:"25px"}}>
            <strong style={{color:"#FFC107"}}>Our Services</strong>
           <div>
             <h1 style={{color:"white"}} className="display-1">Gardening & landscaping</h1>
             <h1 style={{color:"  #66BB6A"}} className="display-1">Services</h1>
           </div>
            <div className="row g-4">
  {services.map((service) => (
    <div className="col-lg-4 col-md-6" key={service.id}>
      <div className="services-card" >

            <img src={service.img} alt="" className="img-fluid service-image" loading="lazy"/>
     

      <div className="service-description" >
          <h4>{service.title}</h4>

        <p>{service.description}</p>

        <button className="btn btn-success">
          Learn More
        </button>
      </div>
      </div>
    </div>
  ))}
</div>
          
        </div>
        </div>
      </div>
    )
}