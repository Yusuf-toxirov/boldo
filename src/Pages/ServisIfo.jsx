import React from 'react' 
import Ser1 from "../assets/Servis1.png" ;
import Ser2 from "../assets/Servis2.png" ;
import Ser3 from "../assets/Servis3.png" ;

const ServisIfo = () => {
    const ServisAbout = {
        textAlign: "center",
        fontWeight: "Our Blog",
        marginBottom: "12px",
      };
      const ServisInfo = {
        textAlign: "center",
        fontWeight: "Our Blog",
        fontSize: "22px",
        
      };
      const ServisImges = {
        display: "flex",
        justifyContent: "center",
        maxWidth: "1170px",
        gap: "100px",
        
      };
      const ServisImg1 = {
        margin: "0px 0px 0px 300px",
      };
      const ServisImg1Info = {
        margin: "0px 0px 0px 300px",
        marginTop: "20px"
      };
  return (
    <>
    <div style={ServisAbout}>
          <h1>Our Servis</h1>
        </div>
        <div style={ServisInfo}>
          <h1>Handshake infographic mass market <br /> crowdfunding iteration.</h1>
        </div>
        <div>
          <div style={ServisImges}>
            <div>
            <img style={ServisImg1} src={Ser1} alt="" />
            <h1 style={ServisImg1Info}>Cool feature title</h1>
            <p style={ServisImg1Info}>Learning curve network effects return on investment.</p>
            <h1 style={ServisImg1Info}>Explore page -- </h1>
            </div>
            <div>
            <img src={Ser2} alt="" />
            <h1>Cool feature title</h1>
            <p>Learning curve network effects return on investment.</p>
            <h1>Explore page -- </h1>
            </div>
            <div>
            <img src={Ser3} alt="" />
            <h1>Cool feature title</h1>
            <p>Learning curve network effects return on investment.</p>
            <h1>Explore page -- </h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default ServisIfo