import React from "react";
import { useState } from "react";

export default function Contact(){
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://gardening.inorbitservices.ca/gardening/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };
    return(
       <section id="contact">
         <div className="container" style={{backgroundColor:"#d6e9cc", padding:"24px", marginBottom:"5rem", borderRadius:"20px",marginTop:"5rem"}}>
            <div className="row">
              <div className="col-lg-6">
                <div className="email d-flex">
                  <p className="" style={{color:"#1B1B1B", }}>Email</p>
                <p style={{color:"#0a412f", marginLeft:"10px"}}>inorbitgroupltd@gmail.com</p>
              </div>
              </div>
              <div className="col-lg-6">
                <div className="email d-flex justify-content-end">
                  <p className="" style={{color:"#1B1B1B", }}>Phone</p>
                <p style={{color:"#0a412f", marginLeft:"10px"}}>+1 778-710-0061</p>
              </div>
              </div>
            </div>
            <div className="row" style={{marginTop:"2rem"}}>
                <div className="col-lg-6 ">
                <div className="left-content">
                    <div className="left-contact d-flex align-items-center justify-centent-center">
                    <div className="dot-pink" style={{color:"red", border:"1px solid #0a412f", height:"10px", width:"10px", backgroundColor:"#0a412f", borderRadius:"50%"}}></div>
                    <p style={{marginLeft:"0.5rem", color:"#1B1B1B", marginBottom:"0"}}>Contact Us</p>
                 </div>

                 <h1 style={{color:"#0a412f"}} className="display-1">LET'S WORK <br />TOGETHER</h1>
                </div>

                </div>
                <div className="col-lg-6">
                     <form onSubmit={handleSubmit}>
      <div className="" style={{color:"#0a412f"}}>
        <label htmlFor="" >Enter Your name</label>
        <input
        name="name"
        placeholder="What should we call you"
        value={formData.name}
        onChange={handleChange}
        style={{width:"100%", marginTop:"12px", marginBottom:"20px", height:"50px", paddingLeft:"24px", borderRadius:"10px", border:"none"}}
      />
      </div>

     <div style={{color:"#0a412f"}}>
      <label htmlFor="" >Email Address</label>
       <input
        name="email"
        type="email"
        placeholder="Enter your work email"
        value={formData.email}
        onChange={handleChange}
         style={{width:"100%", marginTop:"12px", marginBottom:"20px", height:"50px", paddingLeft:"24px", borderRadius:"10px", border:"none"}}
      />
     </div>


      <div style={{color:"#0a412f"}}>
        <label htmlFor="">Project Details</label>
        <textarea
        name="message"
        placeholder="Enter your Business requirement"
        value={formData.message}
        onChange={handleChange}
         style={{width:"100%", marginTop:"12px", marginBottom:"20px", height:"80px",paddingLeft:"24px", borderRadius:"10px", paddingTop:"24px", border:"none"}}
      />
      </div>

      <button type="submit" style={{width:"100%", padding:"12px", borderRadius:"10px", backgroundColor:"#0a412f", color:"white"}}>
        Send Message
      </button>
    </form>
                </div>
            </div>

            <div className="row" style={{marginTop:"3rem"}}>
              <div className="col-lg-6">
                <div className="email d-flex">
                  <p className="" style={{color:"#1B1B1B", }}>Visit</p>
                <p style={{color:"#0a412f", marginLeft:"10px"}}>inorbitservices.ca</p>
              </div>
              </div>
              <div className="col-lg-6">
                <div className="email d-flex justify-content-end">
                  <p className="" style={{color:"#1B1B1B", }}>Working Hours</p>
                <p style={{color:"#0a412f", marginLeft:"10px"}}>Mon-Fri, 9am to 5pm</p>
              </div>
              </div>
            </div>

        </div>
       </section>
    )
}