import React, { useEffect, useState } from "react";
import DrawerAppBar from "./Navbar";
import background_image from "../Components/Images/gradient_1.jpg";
import { Typography } from "@mui/material";
import "../wave.css";
import Typewriter from "typewriter-effect";
import Home_logo from "../Components/Images/home-main.svg";
import Home02 from "./Home02";
import Footer from "./footer";
function Home() {
  // const [backgroundImage, setBackgroundImage] = useState(desktopBackground);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Change background image for screens with a maximum width of 768px (mobile devices)
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(isMobile);
  return (
    <div
      style={{
        backgroundImage: `url(${
          isMobile ? background_image : background_image
        })`,
        backgroundSize: "cover", // Adjust as needed
        backgroundPosition: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            marginTop: isMobile ? "100px" : "250px",
            marginLeft: isMobile ? "20px" : "200px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: isMobile ? "300" : "600",
              fontSize: isMobile ? "1rem" : "3rem",
              color: "#e1edf2",
              marginRight: isMobile ? "0px" : "10px",
            }}
          >
            Hi, There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: isMobile ? "300" : "600",
              fontSize: isMobile ? "1rem" : "3rem",
              color: "#e1edf2",
              marginRight: isMobile ? "0px" : "10px",
              paddingTop: "20px",
            }}
          >
            <span style={{ color: "#e1edf2" }}>I'M</span> Jayesh Baraskar
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: isMobile ? "300" : "600",
              fontSize: isMobile ? "1rem" : "3rem",
              color: "#e1edf2",
              marginRight: isMobile ? "0px" : "10px",
              paddingTop: "50px",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Mobile Application Developer",
                  "Freelancer",
                  ,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </Typography>
        </div>
        <img
          src={Home_logo}
          alt="home pic"
          className="img-fluid"
          style={{
            display: isMobile ? "none" : "block",
            maxHeight: "450px",
            marginTop: "120px",
            marginRight: "200px",
          }}
        />
      </div>
      <div>
        <Home02 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
