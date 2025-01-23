import React from "react";
import Ser1 from "../assets/Servis1.png" ;
import Ser2 from "../assets/Servis2.png" ;
import Ser3 from "../assets/Servis3.png" ;
import graf from "../assets/graf.png";
import Person1 from "../assets/Person1.png"
import Person2 from "../assets/Person2.png"
import Logotrue from "../assets/Logotrue.png"
import Star from "../assets/star.png"
import Eye from "../assets/eye.png"
import Sun from "../assets/sun.png"
import ArrR from "../assets/ArrR.png"
import ArrL from "../assets/ArrL.png"
import Person3 from "../assets/Person3.png"
import Person4 from "../assets/Person4.png"
import Person5 from "../assets/Person5.png"
import Companiy from "../assets/Companiy.png"
import Down from "../assets/Down.png"

const HeroSection = () => {
  const sectionStyle = {
    backgroundColor: "#0a192f",
    color: "#fff",
    padding: "50px 20px",
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };
  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const subTextStyle = {
    fontSize: "16px",
    color: "#ccc",
    marginBottom: "40px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "50px",
  };

  const buttonStylePrimary = {
    padding: "10px 20px",
    backgroundColor: "#3CB371",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const buttonStyleSecondary = {
    padding: "10px 20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const logosContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    marginTop: "50px",
  };

  const logoStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#fff",
    opacity: "0.7",
  };
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
  const CardBack = {
    backgroundColor: "#0a192f",
    color: "#fff",
    padding: "50px 20px",
    textAlign: "start",
    display : "flex",
    justifyContent : "beetwen",
    alignItems : "center",
  };
  const CardInfo = {
    margin : "0px 150px",
    fontSize : "28px"
  };
  const CardButton = {
    width : "72px",
    height : "72px",
    borderRadius : "50%",
    border : "none",
    marginTop : "65px",
    margin : "0px 28px"
  };
  const CardsBlok = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };
  const CardInfo1 = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    gap : "20px"
  };
  const Card1 = {
    width : "350px",
    height : "322px",
    borderRadius : "30px",
    backgroundColor : "white",
    color : "black",
    textAlign : "start",
    margin : "40px 40px"
  };
  const card  = {
    backgroundColor : " #00000014",
    padding : "20px",
    borderRadius : "10px",
    maxWidth : "250px",
    margin : "20px auto",
    textAlign : "left",
  };
  const quote = {
    marginBottom : "20px"
  };
  const authorinfo =  {
    display : "flex",
    alignItems : "center",
  };
  const authorimage = {
    width: "50px",
    height: "50px",
    borderRadius : "50%",
    margin : "0px 15px",
  };
  const authordetailsh4 = {
    margin : "0px",
    fontSize : "16px"
  };
  const authordetailsp = {
    margin: "0",
    color: "#6c757d",
    fontSize : "14px"
  };
  const sectionStyle1 = {
    backgroundColor: "#0a192f",
    color: "#fff",
    padding: "50px 20px",
    display : "flex",
    gap : "40px",
    padding : "40px",
  };
  const Companiyimg = {
   margin : "124px 185px",
    marginTop : "124px",
   marginBottom :  "56px",    
  };
  const CompaniyInfo = {
    display : "flex",
    justifyContent : "beetwen",
    gap : "500px ",
    maxWidth : "1200px",
    
  }
  


  return (
    <>
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>
          Save time by building <br />fast with Boldo Template
        </h1>
        <p style={subTextStyle}>
          Funding handshake buyer business-to-business metrics iPad partnership. <br />
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div style={buttonContainerStyle}>
          <button style={buttonStylePrimary}>Buy template</button>
          <button style={buttonStyleSecondary}>Explore</button>
        </div>
        <div>
          <img
            src={graf}
            alt="Charts and graphs"
            style={{ width: "20%", borderRadius: "10px" }}
          />
        </div>
        <div style={logosContainerStyle}>
          <span style={logoStyle}>Boldo</span>
          <span style={logoStyle}>Presto</span>
          <span style={logoStyle}>Boldo</span>
          <span style={logoStyle}>Presto</span>
          <span style={logoStyle}>Boldo</span>
          <span style={logoStyle}>Presto</span>
        </div>
      </div>
      
    </section>
    <section style={sectionStyle}></section>
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
        <h1 style={ServisImg1Info}>Explore page --</h1>
        </div>
        <div>
        <img src={Ser2} alt="" />
        <h1>Cool feature title</h1>
        <p>Learning curve network effects return on investment.</p>
        <h1>Explore page --</h1>
        </div>
        <div>
        <img src={Ser3} alt="" />
        <h1>Cool feature title</h1>
        <p>Learning curve network effects return on investment.</p>
        <h1>Explore page --</h1>
        </div>
      </div>
    </div>
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
    <div style={CardBack}>
      <div style={CardInfo}>
        <h1>An enterprise template to ramp <br /> up your company website</h1>
      </div>
      <div>
        <button style={CardButton}><img src={ArrR} alt="" /></button>
        <button style={CardButton}><img src={ArrL} alt="" /></button>
      </div>
    </div>
    <div style={sectionStyle1}>
      <div className="card1">
        <div className="quote">“Buyer buzz partner network disruptive non-disclosure agreement business.”</div>
        <div className="author-info">
          <img className="author-image" src={Person3} alt="Albus Dumbledore" />
          <div className="author-details">
            <h4>Albus Dumbledore</h4>
            <p>Manager @ Howarts</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="quote">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</div>
        <div className="author-info">
          <img className="author-image" src={Person4} alt="Severus Snape" />
          <div className="author-details">
            <h4>Severus Snape</h4>
            <p>Manager @ Slytherin</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="quote">“Release facebook responsive web design business model canvas seed money monetization.”</div>
        <div className="author-info">
          <img className="author-image" src={Person5} alt="Harry Potter" />
          <div className="author-details">
            <h4>Harry Potter</h4>
            <p>Team Leader @ Gryffindor</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img style={Companiyimg} src={Companiy} alt="" />
    </div>
    <div style={CompaniyInfo}>
      <div className="m-4" >
      We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.  
      </div>
      <div>
      We connect our customers with the best? 
      </div>
    </div>
    </>
  );
};

export default HeroSection;

      