import React from "react";

export default function Testimonial(){
    return(
        <div  style={{height:"50vh"}}>
            <div id="carouselExample" class="carousel slide" >
  <div class="carousel-inner">
    <div class="carousel-item active text-center"  >
       <h5>InOrbit completely transformed our backyard. Professional, punctual, and exceeded every expectation.</h5>
       <p>— Sarah M.</p>
    </div>
    <div class="carousel-item text-center" >
        <h5>Our lawn has never looked this healthy. Highly recommend their maintenance service</h5>
       <p>— David R.</p>
    </div>
    <div class="carousel-item text-center">
        <h5>Excellent communication, fair pricing, and amazing results.</h5>
       <p>— Amanda T.</p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"  >
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{color:"pink"}}></span>
    <span class="" style={{color:"black", height:"30px", backgroundColor:"green", borderRadius:"50%", width:"30px", paddingTop:"2px"}}>←</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"  >
    <span class="carousel-control-next-icon" aria-hidden="true"  style={{color:"pink"}}></span>
    <span class=""  style={{color:"black", height:"30px", backgroundColor:"green", borderRadius:"50%", width:"30px", paddingTop:"2px"}}>→</span>
  </button>
</div>
        </div>
    )
}