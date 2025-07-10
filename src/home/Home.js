import {
  Box,
  Grid,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import imgSrc from "../assests/sales-sales-service.jpg";
import { useStyles } from "./Home.style";
import { Link } from "react-router-dom";



const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.image}>
        <Box sx={{ display: "flex", alignItems: "center", height: "100%", marginLeft: "100px" }}>
          
      <img src={`${process.env.PUBLIC_URL}/assets/printer_new-removebg-preview (1).png`}/>
      {/* <img src="/assets/images 615c pro crop.jpg"/> */}

      <Box>
        <Typography variant="h1" className={classes.title}>
          Modern Tools for Modern Commerce
        </Typography>
        <Typography variant="h2" className={classes.subTitle}>
          Evolving to Empower
        </Typography>
      </Box>
        </Box>
        </Box>
      {/* <img src={imgSrc} alt="sales-service" className={classes.image} /> */}
      <Box className={classes.overlayContainer}>
        <Box
          className={classes.box}
          style={{
            // backgroundImage:
            //   "url('/assets/pngtree-old-white-paper-distressed-brown-grunge-texture-background-picture-image_1447034.jpg')",
            
          }
        }
        >
          <Typography className={classes.textWrapper} variant="h3">
            {/* <a href="/sales" className={classes.text}>
              sales
            </a> */}
            <Link to="/sales" className={classes.text}>
              sales
            </Link>
          </Typography>
        </Box>
        <Box
          className={classes.box}
          style={{
            backgroundImage:
              "url('https://www.tvs-e.in/wp-content/uploads/2019/10/services.png')",
          }}
        >
          <Typography variant="h3" className={classes.textWrapper}>
            <a href="/services" className={classes.text}>
              services
            </a>
          </Typography>
        </Box>
      </Box>
      {/* <Box className={classes.contentContainer}>
        <Typography variant="h3" className={classes.textSection}>
          we <br /> evolve to
          <br /> empower
        </Typography>
        <Box className={classes.paragraphContainer}>
          <Typography className={classes.paragraph}>
            The world as we see it is evolving, with new opportunities and fresh
            challenges branching off at every turn. We look forward to each day,
            with an eagerness to stay relevant and to deliver value. And, we have
            met each challenge with powerful ideas – from our early days to the
            present where we offer a vast number of solutions to the electronics
            industry.
          </Typography>
          <br />
          <Typography className={classes.paragraph}>
            This mindset has helped us anticipate and adapt to new developments. As our customers navigate the shape-shifting world of commerce, we stand by them, ever ready to transform and offer up-to-date support.
          </Typography>
          <br />
          <Typography className={classes.paragraph}>We call this Infinite Evolution.</Typography>
        </Box>
      </Box> */}
      <Box className={classes.contentContainer}>
        <Box sx={{ width: "40%", marginTop: "60px" }}>
          <Typography variant="h3" className={classes.textSection}>
            we <br /> evolve to
            <br /> enpower
          </Typography>
        </Box>
        <Box className={classes.paragraphContainer}>
          <Box className={classes.paragraphContainerBox}>
            <Typography variant="p" className={classes.paragraph}>
              The world as we see it is evolving, with new opportunities and
              fresh <br />
              challenges branching off at every turn. We look forward to each
              day,
              <br /> with an eagerness to stay relevant and to deliver value.
              And, we have
              <br /> met each challenge with powerful ideas – from our early
              days to the
              <br /> present where we offer a vast number of solutions to the
              electronics
              <br /> industry.{" "}
            </Typography>
          </Box>
          <Box className={classes.lastPara}>
            <Typography variant="p" className={classes.paragraph}>
              This mindset has helped us anticipate and adapt to new
              <br /> developments. As our customers navigate the shape-shifting
              world of
              <br /> commerce, we stand by them, ever ready to transform and
              offer up-
              <br />
              to-date support.
            </Typography>
          </Box>
          <Box className={classes.lastPara}>
            <Typography variant="p" className={classes.paragraph}>
              We call this Infinite Evolution.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.expertiseSection}>
        <Box className={classes.expertiseContent}>
          <Box sx={{ width: "41%" }}>
            <Typography variant="h3" className={classes.expertiseTitle}>
              expertise <br /> Across
              <br /> Segments
            </Typography>
          </Box>
          <Box sx={{ width: "50%", padding: "10px" }}>
            <Typography className={classes.expertiseText}>
              In addition to our legacy products, where we continue to be market
              leaders, we have also added a range of services covering the
              entire spectrum of after-sales service and e-waste management.
              <br />
              <br />
              With our century-old legacy of quality and trust and over two
              decades of expertise in developing cutting-edge technology
              products and services – we are poised to deliver need-of-the-hour
              solutions that span across geographies and categories.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.brandImgContainer}>
        <Box className={classes.headingContainer}>
          <Typography variant="h2" className={classes.heading}>
            TRUSTED BY LEADERS
          </Typography>
        </Box>
        <Box className={classes.mainImgContainerBox}>
          <Box className={classes.imgcontainer}>
            <Box className={classes.imgContainerBox}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/samsung.png`}
                height="50px"
                width="130px"
                alt="samsung"
              />

              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/mi.png`}
                height="50px"
                width="50px"
                alt="mi"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/Symphony.jpg`}
                height="50px"
                width="120px"
                alt="symphony"
              />
               <img
                src={`${process.env.PUBLIC_URL}/assets/brands/dell.png`}
                alt="dell"
                height="50px"
                width="50px"
              />
              {/* <img
                src="https://www.tvs-e.in/wp-content/uploads/2019/10/hdfc-150x150.png"
                alt="hdfc"
                height="50px"
                width="50px"
              /> */}
              {/* <img
                src="/assets/brands/jbl.jpg"
                height="50px"
                width="100px"
                alt="jbl"
              />
              <img
                src="/assets/brands/dell.png"
                alt="dell"
                height="50px"
                width="50px"
              />
              <img
                src="/assets/brands/amazon.png"
                alt="amazon"
                height="50px"
                width="120px"
              /> */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/asus_logo.png`}
                alt="asus"
                height="50px"
                width="120px"
              />
            </Box>
            <Box className={classes.imgContainerBox}>
               <img
                src={`${process.env.PUBLIC_URL}/assets/brands/jbl.jpg`}
                height="50px"
                width="100px"
                alt="jbl"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/hp.png`}
                alt="hp"
                height="50px"
                width="70px"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/amazon.png`}
                alt="amazon"
                height="50px"
                width="120px"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/hitachi.png`}
                height="50px"
                width="120px"
                alt="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/lenovo.png`}
                height="50px"
                width="120px"
                alt="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/brands/acer.png`}
                height="50px"
                width="120px"
                alt="logo"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
