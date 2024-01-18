import React from "react";
import { Typography, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
function footer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
          padding: "20px",
          backgroundColor: "#21262b",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "400",
            fontSize: "1rem",
            color: "#e1edf2",
          }}
        >
          Designed and Developed by Jayesh Baraskar
        </Typography>
        <div style={{ display: "flex", gap: "20px", paddingRight: "20px" }}>
          {/* Add your social media icons here */}

          <LinkedInIcon style={{ color: "white" }} />
          <GitHubIcon style={{ color: "white" }} />
          <InstagramIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
}

export default footer;
