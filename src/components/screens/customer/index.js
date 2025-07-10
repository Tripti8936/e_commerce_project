import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./customer.style";
import Carousel from 'react-bootstrap/Carousel';
import imgSrc from '../../../assests/pngtree-old-white-paper-distressed-brown-grunge-texture-background-picture-image_1447034.jpg'

const Customer = () => {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const feedbacks = [
    "Thank you for your exceptional services! Your professionalism is commendable.",
    "Reliable and efficient – your team consistently delivers great results!",
    "We appreciate the outstanding support and solutions provided. Keep up the great work!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 3000); // Changes text every 3 seconds

    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <Box>
      <Box className={classes.brandContainer}>
        <Box className={classes.brandBoxHeading}>
          <Typography className={classes.brandHeading}>
            Brands We Service
          </Typography>
        </Box>
        <Box className={classes.brandContainerImg}>

          <Box className={classes.brandImgContainer}>
            {[
              `${process.env.PUBLIC_URL}/assets/brands/sam1562575696.png`,
              `${process.env.PUBLIC_URL}/assets/brands/miImages.png`,
              `${process.env.PUBLIC_URL}/assets/brands/symphonryjpg.jpg`,
              // "https://www.tvs-e.in/wp-content/uploads/2019/10/hdfc-150x150.png`},
              `${process.env.PUBLIC_URL}/assets/brands/jbl.jpg`,
              `${process.env.PUBLIC_URL}/assets/brands/dell.png`,
              `${process.env.PUBLIC_URL}/assets/brands/amazon.png`,
              `${process.env.PUBLIC_URL}/assets/brands/asus_logo.png`,
              `${process.env.PUBLIC_URL}/assets/brands/acer.png`,
              `${process.env.PUBLIC_URL}/assets/brands/hitachi.png`,
              `${process.env.PUBLIC_URL}/assets/brands/hp.png`,
              `${process.env.PUBLIC_URL}/assets/brands/lenovo.png`,
              `${process.env.PUBLIC_URL}/assets/brands/hitachi.png`,
              `${process.env.PUBLIC_URL}/assets/brands/razorpay.png`,
              `${process.env.PUBLIC_URL}/assets/brands/tvs-elec.png`
            ].map((imgSrc, index) => (
              <Box key={index} className={classes.brandImgBox}>
                <img src={imgSrc} alt="brand logo" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className={classes.brandContainer}> 
        <Box className={classes.clentContainer}>
    
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
    <Box
      sx={{
        // height: '200px',
        // width: '80%',
        // backgroundColor: '#0b5191', // Change to your preferred color
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        // padding: '20px',
      }}
    >
      <Carousel.Caption style={{ position: 'relative', left: '0px' }}>
          <Typography variant="h1" sx={{marginTop: '90px', marginBottom: '40px'}}>  Happy Clients</Typography>
          <h5 style={{ marginBottom: '10px' }}>  What People Say About</h5>
          <p> Thank you for your exceptional services! Your professionalism<br />
                and commitment to quality are truly commendable.We appreciate<br/>
                the outstanding support and solutions provided by Infobell,<br />
                System and Services Pvt. Ltd. Keep up the great work!</p>
        </Carousel.Caption>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption style={{ position: 'relative', left: '0px' }}>
        <Typography variant="h1" sx={{marginTop: '90px', marginBottom: '40px'}}>  Happy Clients</Typography>

          <h5>  What People Say About</h5>
             
          <p> Infobell has been an invaluable partner in our digital transformation journey.<br />
                Their IT solutions are not only innovative but also tailored to our business<br/>
                 needs. The team’s expertise and prompt, support have significantly improved<br />
                 our operational efficiency. Highly recommended!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    
    
      <Carousel.Caption style={{ position: 'relative', left: '0px' }}>
          <Typography variant="h1" sx={{marginTop: '90px', marginBottom: '40px'}}>  Happy Clients</Typography>
          <h5>  What People Say About</h5>
            
          <p> The level of professionalism and dedication shown by Infobell<br />
                is unmatched. From seamless system integrations to reliable after-sales<br/>
                support, they’ve exceeded our expectations. A truly customer-centric company,<br />
                 Keep up the great work!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          

        </Box>
      </Box>
    </Box>
  );
};

export default Customer;
