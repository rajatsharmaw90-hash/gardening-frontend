import React from "react";
import images from "../data/images";

export default function NewHero(){
    return(
        <div>
              <div
      style={{
        backgroundImage: `url(${images.homeLawn})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
       
        }}
      />

      {/* content */}
      <div style={{color:"white",position: "relative", zIndex: 1}}>
       <p> Professional Gardening & Landscaping Services</p>
      </div>
      <h1 className="display-1 text-center" style={{ position: "relative", zIndex: 1 }}>
       Transform Your Outdoor Space Into Something Extraordinary
      </h1>
     <div className="text-center" style={{padding:"30px",color:"white",position: "relative", zIndex: 1}}>
         <p style={{padding:"30px 0 20px 0"}}>
            Whether you need regular garden maintenance, lawn care, hedge
            trimming, or a complete landscape makeover, InOrbit Gardening &
            Landscaping delivers reliable, affordable, and professional services
            that keep your property looking beautiful all year round.
          </p>
      </div>
    </div>
     
        </div>
    )
}