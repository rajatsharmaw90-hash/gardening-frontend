 import React from "react";

export default function Faq(){
    return(
        <div className="container">
            <div className="dot-blue d-flex  align-items-center">
                <div className="dot-pink" style={{color:"red", border:"1px solid #66BB6A", height:"10px", width:"10px", backgroundColor:"#66BB6A", borderRadius:"50%"}}></div>
                <p style={{marginBottom:"0", marginLeft:"0.5rem"}}>FAQ</p>
            </div>
            <div className="faq-header d-flex" style={{}}>
              <h1 className="display-1 fw-bold" style={{marginBottom:"3rem"}}>Key</h1>
              <h1 className="display-1 fw-bold inorbit" style={{marginBottom:"3rem", marginLeft:"1rem"}}>Questions</h1>
            </div>
            <div class="accordion" id="accordionExample" style={{ marginBottom:"3rem"}}>
  <div class="accordion" style={{borderBottom:"1px solid black",}}>
    <h2 class="accordion-header ">
      <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Do you provide free estimates?
      </button>
      
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Yes! We offer completely free, no-obligation estimates.
      </div>
    </div>
  </div>
  <div class="accordion" style={{borderBottom:"1px solid black"}}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Do you maintain commercial properties?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Absolutely. We provide maintenance services for residential, commercial, and strata properties.
      </div>
    </div>
  </div>
  <div class="accordion"  style={{borderBottom:"1px solid black"}}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How often should my lawn be maintained?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Most properties benefit from weekly or bi-weekly maintenance depending on the season.
      </div>
    </div>
  </div>



  
</div>
        </div>
    )
}