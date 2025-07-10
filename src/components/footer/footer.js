import { Box, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useStyles } from './footer.style';

const Footer = () => {
  const classes = useStyles();
  return (
     <Box className={classes.footer}>
            <Box className={classes.footerSection}>
              <Box className={classes.footerSection1}>
                <Box className={classes.footerBox1}>
                  <Typography
                    variant="h1"
                    className={classes.footerSection1Heading}
                  >
                    About Infobell System & Solutions
                  </Typography>
                  <Typography className={classes.footerSection1Base}>
                    Infobell System and Solutions Private Limited, is a neutral
                    service provider in the field of IT, telecom, Security
                    Serveillance, Home Automation and other areas.
                  </Typography>
                </Box>
                <Box className={classes.footerBox2}>
                  <Typography
                    variant="h1"
                    className={classes.footerSection1Heading}
                  >
                    Get In Touch
                  </Typography>
                  <Box className={classes.footerSection1mail}>
                    <EmailIcon />
                    <Typography className={classes.footerSection1mail1}>
                      <a
                        href="mailto:infobellservices@gmail.com"
                        className={classes.textMail}
                        style={{ textDecoration: "none" }}
                      >
                        Infobellservices@gmail.com
                      </a>
                    </Typography>
                  </Box>
                  <Box className={classes.footerSection1mail}>
                    <AccessTimeIcon />
                    <Typography className={classes.footerSection1mail1}>
                      Service Center Timings: 10 am to 5 pm
                    </Typography>
                  </Box>
                  <Box className={classes.footerSection1mail}>
                    <HomeIcon />
                    <Typography className={classes.footerSection1mail1}>
                      Infobell System and Solutions Pvt. Ltd. BTM 2nd Stage,
                      Sunshine colony, BTM layout, Kuvempu Nagar,
                      <br />
                      Pin code: 560068
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.footerBox3}>
                  <Typography
                    variant="h1"
                    className={classes.footerSection1Heading}
                  >
                    Find Us
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Box className={classes.footerSectionFindUs}>
                      <FacebookIcon />
                    </Box>
                    <Box className={classes.footerSectionFindUs}>
                      <InstagramIcon />
                    </Box>
                    <Box className={classes.footerSectionFindUs}>
                      <TwitterIcon />
                    </Box>
                    <Box className={classes.footerSectionFindUs}>
                      <LinkedInIcon />
                    </Box>
                    <Box className={classes.footerSectionFindUs}>
                      <YouTubeIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.footerSection2}>
                <Box className={classes.footerSection2Box1}>
                  <Typography
                    variant="h1"
                    className={classes.footerSection1Heading2}
                  >
                    About Us
                  </Typography>
                  <MenuList>
                    <MenuItem className={classes.footerSection2point}>
                      Our Core Values
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Quality Policy
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Directors and Management
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Why INFOBELL Services
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Brands We Service
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Testimonials
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      E-waste Policy
                    </MenuItem>
                  </MenuList>
                </Box>
                <Box className={classes.footerSection2Box1}>
                  <Typography
                    variant="h1"
                    className={classes.footerSection1Heading2}
                  >
                    Services
                  </Typography>
                  <MenuList>
                    <MenuItem className={classes.footerSection2point}>
                      Warranty Support
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      L4 Repairs
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Help Desk Services
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      RMS Services
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Spare Parts Management
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Facility Management
                    </MenuItem>
                  </MenuList>
                </Box>
                <Box className={classes.footerSection2Box1}>
                  <Typography
                    variant="h1"
                    className={classes.footerSection1Heading2}
                  >
                    Contact Us
                  </Typography>
                  <MenuList>
                    <MenuItem className={classes.footerSection2point}>
                      Get In Touch
                    </MenuItem>
                    <MenuItem className={classes.footerSection2point}>
                      Infobell Service Centers
                    </MenuItem>
                  </MenuList>
                </Box>
              </Box>
            </Box>
          </Box>
  )
}

export default Footer
