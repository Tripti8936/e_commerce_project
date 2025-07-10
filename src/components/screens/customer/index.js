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
          {/* <Box className={classes.brandImgBox}>
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/samsung-logo-300x66.png"
                          height="40px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/mi-logo.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/06/Symphony-removebg-preview-300x116.jpg"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2019/10/hdfc-150x150.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/03/jbl-1024x683.png"
                          height="70px"
                          width="100px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/dell-logo.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/amazon-logo.png"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/02/asus_logo-removebg-preview-300x76.png"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                          <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/samsung-logo-300x66.png"
                          height="40px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/mi-logo.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/06/Symphony-removebg-preview-300x116.jpg"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2019/10/hdfc-150x150.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/03/jbl-1024x683.png"
                          height="70px"
                          width="100px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/dell-logo.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/amazon-logo.png"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/02/asus_logo-removebg-preview-300x76.png"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                          <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/samsung-logo-300x66.png"
                          height="40px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/mi-logo.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/06/Symphony-removebg-preview-300x116.jpg"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2019/10/hdfc-150x150.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/03/jbl-1024x683.png"
                          height="70px"
                          width="100px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/dell-logo.png"
                          height="50px"
                          width="50px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2020/02/amazon-logo.png"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                        <img
                          src="https://www.tvs-e.in/wp-content/uploads/2021/02/asus_logo-removebg-preview-300x76.png"
                          height="50px"
                          width="120px"
                          alt="logo"
                        />
                      </Box> */}
          <Box className={classes.brandImgContainer}>
            {[
              "/assets/brands/sam1562575696.png",
              "/assets/brands/miImages.png",
              "/assets/brands/symphonryjpg.jpg",
              // "https://www.tvs-e.in/wp-content/uploads/2019/10/hdfc-150x150.png",
              "/assets/brands/jbl.jpg",
              "/assets/brands/dell.png",
              "/assets/brands/amazon.png",
              "/assets/brands/asus_logo.png",
              "/assets/brands/acer.png",
              "/assets/brands/hitachi.png",
              "/assets/brands/hp.png",
              "/assets/brands/lenovo.png",
              "/assets/brands/hitachi.png",
              "assets/brands/razorpay.png",
              "/assets/brands/tvs-elec.png"
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
          {/* <Box className={classes.clentContainerHead}>
            <Typography className={classes.clientContianerClient}>
              Happy Clients
            </Typography>
          </Box>
          <Box className={classes.brandSubHeadingBox}>
            <Typography className={classes.brandSubHeading}>
              What People Say About
            </Typography>
          </Box> */}

          {/* <Box className={classes.brandSubTextBox}>
            <Box className={classes.brandSubTextBox1}>
              <Typography className={classes.brandSubText}>
                Thank you for your exceptional services! Your professionalism
                and commitment to quality are truly commendable.We appreciate
                the outstanding support and solutions provided by Infobell
                System and Services Pvt. Ltd. Keep up the great work!
              </Typography>
              <Typography className={classes.brandSubText}>
                Tripti Kumari
              </Typography>
            </Box> */}
          {/* </Box> */}
         {/* <Box className={classes.carouselContainer}>
      {feedbacks.map((feedback, index) => (
        <Typography
          key={index}
          className={`${classes.carouselText} ${
            index === currentIndex ? classes.visible : ""
          }`}
        >
          {feedback}
        </Typography>
      ))}

      {/* Dots below the text */}
      {/* <Box className={classes.dotsContainer}>
        {feedbacks.map((_, index) => (
          <Box
            key={index}
            className={`${classes.dot} ${
              index === currentIndex ? classes.activeDot : ""
            }`}
          />
        ))}
      </Box> */}
    {/* </Box>  */} 

    
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
          <p> Thank you for your exceptional services! Your professionalism<br />
                and commitment to quality are truly commendable.We appreciate<br/>
                the outstanding support and solutions provided by Infobell,<br />
                System and Services Pvt. Ltd. Keep up the great work!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    
    
      <Carousel.Caption style={{ position: 'relative', left: '0px' }}>
          <Typography variant="h1" sx={{marginTop: '90px', marginBottom: '40px'}}>  Happy Clients</Typography>
          <h5>  What People Say About</h5>
          <p> Thank you for your exceptional services! Your professionalism<br />
                and commitment to quality are truly commendable.We appreciate<br/>
                the outstanding support and solutions provided by Infobell,<br />
                System and Services Pvt. Ltd. Keep up the great work!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          

        </Box>
      </Box>
    </Box>
  );
};

export default Customer;
