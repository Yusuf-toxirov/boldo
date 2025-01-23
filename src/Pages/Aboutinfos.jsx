import React from 'react'
import Person1 from "../assets/Person1.png"
import Person2 from "../assets/Person2.png"
import Logotrue from "../assets/Logotrue.png"
import Star from "../assets/star.png"
import Eye from "../assets/eye.png"
import Sun from "../assets/sun.png"

const Aboutinfos = () => {
    const containerStyle2 = {
        display : "flex",
        gap : "185px",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop : "185px" 
      };
      const AboutInfo1 ={
        marginTop : "66px"
      };
      const AboutInfo2 = {
        display : "flex",
        alignItems: 'center',
        gap : "27px",
        marginBottom : "24px"
      };
      const LogoCss = {
        width : "36px",
        height : "36px",
      };
      const LogoInfo = {
        fontSize : "20px"
      };
      const AboutButton = {
        width : "210px",
        height : "60px",
        borderRadius : "57px",
        backgroundColor: "#0a192f",
        color : "white",
        fontSize : "20px",
        fontWeight : "Open Sans"
      };
      const AboutInfo3 = {
        display : "flex",
        alignItems: 'center',
        width : "500px",
        height : "68px",
        backgroundColor: "#0a192f",
        color : "white",
        fontSize : "11px",
        fontWeight: "Open Sans",
        gap : "12px",
        borderRadius : "4px",
        padding : "0px 20px",
        marginBottom : "24px"
      };
      const AboutInfo4 = {
        display : "flex",
        alignItems: 'center',
        width : "500px",
        height : "68px",
        backgroundColor: "#00000014",
        color : "#0a192f",
        fontSize : "11px",
        fontWeight: "Open Sans",
        gap : "12px",
        borderRadius : "4px",
        padding : "0px 20px",
        marginBottom : "24px"
      };
      const AboutInfo5 = {
        display : "flex",
        alignItems: 'center',
        width : "500px",
        height : "68px",
        backgroundColor: "#00000014",
        color : "#0a192f",
        fontSize : "11px",
        fontWeight: "Open Sans",
        gap : "12px",
        borderRadius : "4px",
        padding : "0px 20px",
        marginBottom : "24px"
      };
  return (
    <>
     <div >
          <div style={containerStyle2}>
              <div>
              <img src={Person1} alt="" />
              </div>
              <div style={AboutInfo1}>
                <h1>We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h1>
                <div style={AboutInfo2}>
                <img style={LogoCss} src={Logotrue} alt="" />      <h1 style={LogoInfo}>We connect our customers with the best.</h1>
                </div>
                <div style={AboutInfo2}>
                <img style={LogoCss} src={Logotrue} alt="" />      <h1 style={LogoInfo}>We connect our customers with the best.</h1>
                </div>
                <div style={AboutInfo2}>
                <img style={LogoCss} src={Logotrue} alt="" />      <h1 style={LogoInfo}>We connect our customers with the best.</h1>
                </div>
                <button style={AboutButton}>Start now</button>
              </div>
          </div>
        </div>
        <div>
              <div style={containerStyle2}>
              <div style={AboutInfo1}>
                    <h1>We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h1>
                    <div style={AboutInfo3}>
                       <img src={Star} alt="" />
                       <h1>We connect our customers with the best.</h1>
                    </div>
                    <div style={AboutInfo4}>
                       <img src={Eye} alt="" />
                       <h1>Advisor success customer launch party.</h1>
                    </div>
                    <div style={AboutInfo5}>
                      <img src={Sun} alt="" />
                      <h1>Business-to-consumer long tail.</h1>
                    </div>           
                  </div>
                  <div>
                    <img src={Person2} alt="" />
                  </div>
              </div>
        </div>
    </>
  )
}

export default Aboutinfos