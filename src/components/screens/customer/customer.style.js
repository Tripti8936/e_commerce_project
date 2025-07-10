import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  brandContainer: {
    minHight: "100px",
    width: "100%",
    // background: "blue",
  },
  brandBoxHeading: {
    height: "120px",
    width: "100%",
    background: "#ededdc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brandHeading: {
    fontSize: "40px !important",
    // textAlign: 'center',
    fontWeight: "bold !important",
    fontFamily: "sans-serif !important",
  },
  brandContainerImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: '5px',
    // background: "red",

  },
//   brandImgBox: {
//     // height: '700px',
//     width: "80%",
//     background: "red",
//   },
brandImgContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: '60px 0px',
        // background: 'red',
    justifyContent: "center",
    gap: "40px", // Space between images
    maxWidth: "1200px", // Set max width for better alignment
    margin: "0 auto", // Center align the container
  },
  brandImgBox: {
    width: "18%", // 5 items per row (100% / 5 = 20%, adjusting for gaps)
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brandImgBox: {
    width: "12%", // 5 items per row (100% / 5 = 20%, adjusting for gaps)
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {  // ✅ Correct way to style images inside this div
      maxWidth: "100%",
      height: "auto",
    },
  },
  clentContainer: {
    // width: '80%',
    height: '400px',
    background: '#ededdc',
  },
  clentContainerHead: {
    // height: '100px',
    // background: 'yellow',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  clientContianerClient: {
    fontSize: "40px !important",
    textAlign: "center",
    fontWeight: "bold !important",
    fontFamily: "sans-serif !important",
    padding: '40px 0px 20px 0px',
    position: "relative", // Required for ::after
    display: 'inline-block', // Helps center the underline
    "&::after": {
      content: '""',
      display: "block",
      width: "100px", // Adjust width as needed
      height: "2px", // Thickness of underline
      backgroundColor: "black", // Change to preferred color
      margin: "2px auto 0", // Centers the underline
    },
  },
  brandSubHeading: {
    fontSize: "25px !important",
    textAlign: 'center',
    // fontWeight: "bold !important",
  },
  brandSubText: {
    fontSize: '20px !important',
    fontFamily: 'cursive !important',
    textAlign: 'center',
    padding: '0px 0px 30px 0px'
  },
  brandSubTextBox: {
    height: '300px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brandSubTextBox1: {
    height: '200px',
    width: '70%',
    margin: '5px'

  },
 
  // carouselContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "180px",
  //   background: "#f5f5f5",
  //   borderRadius: "10px",
  //   padding: "20px",
  //   textAlign: "center",
  //   overflow: "hidden",
  //   position: "relative",
  //   width: "80%",
  //   margin: "auto",
  // },
  // carouselText: {
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   color: "#333",
  //   position: "absolute",
  //   opacity: 0,
  //   transition: "opacity 0.8s ease-in-out",
  // },
  // visible: {
  //   opacity: 1,
  // },
  // dotsContainer: {
  //   display: "flex",
  //   justifyContent: "center",
  //   marginTop: "15px",
  // },
  // dot: {
  //   height: "10px",
  //   width: "10px",
  //   borderRadius: "50%",
  //   backgroundColor: "#ccc",
  //   margin: "0 5px",
  //   transition: "background-color 0.3s ease-in-out",
  // },
  // activeDot: {
  //   backgroundColor: "#0b5191", // Active dot color
  // },
}));

// }));
