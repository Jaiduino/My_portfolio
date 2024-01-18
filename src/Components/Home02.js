import React from "react";
import { Typography } from "@mui/material";
import avtar from "../Components/Images/avatar.svg";
import ParallaxTilt from "react-parallax-tilt";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
function Home02() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "80px",
        }}
      >
        <div>
          <div
            style={{
              marginLeft: "300px",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: "500",
                fontSize: "2rem",
                color: "#e1edf2",
              }}
            >
              LET ME <span style={{ color: "#4d6cdb" }}>INTRODUCE</span> MY SELF
            </Typography>
          </div>
          <div style={{ marginLeft: "100px" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: "400",
                fontSize: "1.5rem",
                color: "#e1edf2",
              }}
            >
              {" "}
              I fell in love with programming and I have at least learnt
              something, I think...&#129335;{" "}
            </Typography>

            <div style={{ marginTop: "30px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: "400",
                  fontSize: "1.5rem",
                  color: "#e1edf2",
                }}
              >
                I am fluent in classics like{" "}
                <span style={{ color: "#4d6cdb" }}>
                  C,C++, Java & JavaScript{" "}
                </span>
              </Typography>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: "400",
                  fontSize: "1.5rem",
                  color: "#e1edf2",
                }}
              >
                My field of Interest's are building new{" "}
                <span style={{ color: "#4d6cdb" }}>
                  Web Technologies and Products.{" "}
                </span>
                Additionally,
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: "400",
                  fontSize: "1.5rem",
                  color: "#e1edf2",
                }}
              >
                I have expertise in{" "}
                <span style={{ color: "#4d6cdb" }}>
                  Mobile Application Development .{" "}
                </span>
              </Typography>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: "400",
                  fontSize: "1.5rem",
                  color: "#e1edf2",
                }}
              >
                Whenever possible, I also apply my passion for developing
                products with <span style={{ color: "#4d6cdb" }}>Node.Js</span>{" "}
                and <br />
                <span style={{ color: "#4d6cdb" }}>
                  Modern JavaScript Library & Fraimworks{" "}
                </span>{" "}
                like
                <span style={{ color: "#4d6cdb" }}> React.js & Next.Js</span>
              </Typography>
            </div>
          </div>
        </div>
        <div style={{}}>
          <ParallaxTilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={500}
            scale={1.02}
            gyroscope
          >
            <img
              src={avtar}
              alt="home pic"
              className="img-fluid"
              style={{
                maxHeight: "450px",
                marginTop: "120px",
                marginRight: "200px",
              }}
            />
          </ParallaxTilt>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: "400",
              fontSize: "3.5rem",
              color: "#e1edf2",
              marginRight: "10px",
              paddingTop: "20px",
            }}
          >
            {" "}
            FIND ME ON{" "}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: "400",
              fontSize: "1.2rem",
              color: "#e1edf2",
              paddingTop: "5px",
            }}
          >
            Feel free to <span style={{ color: "#4d6cdb" }}>connect </span> with
            me
          </Typography>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar style={{ backgroundColor: "#0077B5", margin: "5px" }}>
          <LinkedInIcon style={{ color: "white" }} />
        </Avatar>
        <Avatar style={{ backgroundColor: "#0077B5", margin: "5px" }}>
          <InstagramIcon style={{ color: "white" }} />
        </Avatar>
        <Avatar style={{ backgroundColor: "#0077B5", margin: "5px" }}>
          <GitHubIcon style={{ color: "white" }} />
        </Avatar>
      </div>
    </div>
  );
}

export default Home02;
