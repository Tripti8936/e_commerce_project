import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./About.style";
import kisanImg from "../../../assests/Kisan.jpeg";

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.about}>
        <Box className={classes.aboutBox1}>
          <Typography variant="h1" className={classes.aboutText}>
            ABOUT US
          </Typography>
        </Box>
        <Box className={classes.aboutBox2}>
          <Typography className={classes.aboutDescriptiom}>
            <b>Infobell System and Services Pvt. Ltd.</b> is a dynamic and
            customer-centric company specializing in a wide range of sales and
            services. We provide innovative solutions tailored to meet the
            unique needs of our clients across various industries. Our goal is
            to enhance business operations and efficiency by offering
            top-quality products, services, and support.
            <br /> <br />
            At <b>Infobell System and Services Pvt. Ltd.</b>, we are committed
            to delivering cutting-edge <b>technology solutions</b>, backed by an
            experienced team dedicated to providing exceptional customer
            service. From <b>sales</b> to <b>maintenance</b>, our comprehensive
            service offerings ensure that our clients achieve maximum value and
            success.
            <br />
            <br />
            Whether you need expert advice, installation services, or ongoing
            support, we are here to help you navigate the complex world of
            technology with ease. With a focus on quality, reliability, and
            customer satisfaction, we aim to become your trusted partner in
            achieving long-term business growth.
          </Typography>
      <Divider></Divider>
          <Typography className={classes.aboutTextCore} variant="h2">Core Values</Typography>
        </Box>
      </Box>
     
      <Box className={classes.managementContainer}>
        <Box className={classes.management}>
          <Typography variant="h1" className={classes.managementHeading}>
            Management Team
          </Typography>
          <Box className={classes.team}>
            <Box className={classes.teamBox1}>
              <img src={kisanImg} height="100%" width="100%" alt="Kisan" />
            </Box>
            <Box className={classes.teamBox2}>
              <Typography variant="h1" className={classes.name}>
                Kisan Kumar
              </Typography>
              <Typography className={classes.descrip}>
                Kisan Kumar is a dynamic and accomplished professional with 10
                years of experience in the Information Technology sector. He
                earned his Bachelor’s degree in Information Technology,
                successfully completing his academic journey with a strong
                foundation in technology and innovation. With a decade of
                expertise in IT solutions, strategic planning, and business
                development, he has played a crucial role in driving digital
                transformation and operational excellence. His passion for
                technology and leadership skills have propelled him to the
                position of CEO at InfoBell System and Services Pvt. Ltd., where
                he now leads the company toward continued growth and innovation.
                As a visionary leader, he is dedicated to delivering
                cutting-edge IT solutions, fostering a culture of excellence,
                and steering InfoBell System and Services Pvt. Ltd. toward new
                milestones in the ever-evolving tech landscape.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.team}>
            <Box className={classes.teamBox2}>
              <Typography variant="h1" className={classes.name}>
                KanchanaDevi
              </Typography>
              <Typography className={classes.descrip}>
                Kisan Kumar is a dynamic and accomplished professional with 10
                years of experience in the Information Technology sector. He
                earned his Bachelor’s degree in Information Technology,
                successfully completing his academic journey with a strong
                foundation in technology and innovation. With a decade of
                expertise in IT solutions, strategic planning, and business
                development, he has played a crucial role in driving digital
                transformation and operational excellence. His passion for
                technology and leadership skills have propelled him to the
                position of CEO at InfoBell System and Services Pvt. Ltd., where
                he now leads the company toward continued growth and innovation.
                As a visionary leader, he is dedicated to delivering
                cutting-edge IT solutions, fostering a culture of excellence,
                and steering InfoBell System and Services Pvt. Ltd. toward new
                milestones in the ever-evolving tech landscape.
              </Typography>
            </Box>
            <Box className={classes.teamBox1}>
              <img src={kisanImg} height="100%" width="100%" alt="Kisan" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.qualityContainer}>
        <Box className={classes.qualityContainerbOX1}>
          <Typography variant="h1" className={classes.qualityContainerText1}>Quality Policy</Typography>
        </Box>
        <Box className={classes.qualityContainerbOX2}>
          <Typography className={classes.qualityContainerbOX2text} variant="h2">
          "To be the customer's most trusted choice by delivering high-quality sales and service solutions with reliability, innovation, and excellence. We strive for continuous improvement to exceed expectations and build long-term relationships."
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default About;
