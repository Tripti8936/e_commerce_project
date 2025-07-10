import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    // display: 'flex',
  },
  about: {
    height: "700px",
    background: "#ededdc",
    width: "100%",
    display: "flex",
  },
  aboutBox1: {
    height: "100%",
    width: "30%",
    // background: 'green',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutBox2: {
    height: "100%",
    width: "70%",
    // background: 'red',
  },
  aboutText: {
    fontSize: "50px !important",
    textAlign: "center",
    fontWeight: "bold !important",
    fontFamily: "sans-serif !important",
    padding: '40px 0px',
    position: "relative", // Required for ::after
    // display: 'inline-block', // Helps center the underline
    "&::after": {
      // ✅ Correct way to define ::after in makeStyles
      content: '""',
      display: "block",
      width: "100px", // Adjust width as needed
      height: "6px", // Thickness of underline
      backgroundColor: "black", // Change to preferred color
      margin: "2px auto 0", // Centers the underline
    },
  },
  aboutDescriptiom: {
    fontSize: "20px !important",
    padding: "40px 100px 40px 0px",
    fontFamily: "sans-serif",
  },
  managementContainer: {
    height: "1000px",
    // background: 'pink',
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  management: {
    height: "900px",
    // background: 'pink',
    width: "80%",
  },
  managementHeading: {
    fontSize: "50px !important",
    textAlign: "center",
    fontWeight: "bold !important",
    fontFamily: "sans-serif !important",
    padding: "40px 0px",
    position: "relative", // Required for ::after
    // display: 'inline-block', // Helps center the underline
    "&::after": {
      // ✅ Correct way to define ::after in makeStyles
      content: '""',
      display: "block",
      width: "80px", // Adjust width as needed
      height: "4px", // Thickness of underline
      backgroundColor: "black", // Change to preferred color
      margin: "10px auto 0", // Centers the underline
    },
  },
  team: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
  },
  teamBox1: {
    height: "350px",
    width: "20%",
    // background: 'green'
  },
  teamBox2: {
    height: "350px",
    width: "80%",
    // background: 'red'
  },
  name: {
    fontSize: "30px !important",
    fontFamily: "sans-serif",
    // marginLeft: '10px',
    paddingLeft: "35px",
    fontWeight: "bold !important",
  },
  descrip: {
    padding: "15px 35px",
    fontSize: "18px !important",
},
aboutTextCore:{
    fontSize: "30px !important",
    textAlign: "center",
    // fontWeight: "bold !important",
    fontFamily: "sans-serif !important",
    padding: '40px 0px',
    position: "relative", // Required for ::after
    // display: 'inline-block', // Helps center the underline
    "&::after": {
      // ✅ Correct way to define ::after in makeStyles
      content: '""',
      display: "block",
      width: "100px", // Adjust width as needed
      height: "1px", // Thickness of underline
      backgroundColor: "black", // Change to preferred color
      margin: "2px auto 0", // Centers the underline
    },
},


  //Quality container
  qualityContainer: {
    height: "300px",
    // width: '100%',
    // background: 'blue',
    background: "#ededdc",
  },
  qualityContainerbOX1: {
  
  },
  qualityContainerText1: {
    fontSize: "40px !important",
    textAlign: "center",
    fontWeight: "bold !important",
    fontFamily: "sans-serif !important",
    padding: '60px 0px 10px 0px',
    position: "relative", // Required for ::after
    // display: 'inline-block', // Helps center the underline
    "&::after": {
      // ✅ Correct way to define ::after in makeStyles
      content: '""',
      display: "block",
      width: "100px", // Adjust width as needed
      height: "5px", // Thickness of underline
      backgroundColor: "black", // Change to preferred color
      margin: "2px auto 0", // Centers the underline
    },
  },
  qualityContainerbOX2: {
    // width: '90%',
    // background: 'blue',
    padding: '30px 100px'
  },
  qualityContainerbOX2text: {
    fontSize: "20px !important",
    fontWeight: 'bold !important',
    // fontFamily: "sans-serif !important",
    textAlign: 'center',
    textTransform: 'uppercase',
    // wordSpacing: '3px !important',
    lineHeight: '30px !important'

  },
}));
