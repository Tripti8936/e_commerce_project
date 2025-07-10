import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
    },
    image: {
      height: "600px",
      width: "100%",
      background: 'linear-gradient(to bottom right, #0b5191,rgb(107, 205, 238), #ffffff, #add8e6, #0b5191)',

    },
    overlayContainer: {
      position: "absolute",
      left: "65%",
      transform: "translate(-50%, -50%)",
      display: "flex",
    },
    box: {
      height: "200px",
      width: "200px",
      background: "#ededdc",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      marginRight: "30px",
      
    },
    textWrapper: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
      color: "#4f4e4e",
      marginTop: "40%",
    //   textAlign: "center",
      fontSize: "30px",
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
    },
    contentContainer: {
      margin: "200px 200px 0px 200px",
      display: "flex",
    },
    // width: "40%",
    // marginTop: "60px",
    textSection: {
      textAlign: "center",
      fontWeight: 'bold',
      color: "#cbcbca",
      fontSize: "70px !important",
    //   lineHeight: '63px',
      textTransform: "uppercase",
    },
    paragraphContainer: {
      width: "50%",
    //   marginTop: "60px",
    },
    paragraphContainerBox: {
            height: "180px",
            paddingTop: "30px",
            paddingLeft: "50px",
            paddingBottom: "0px !important",
      },
    paragraph: {
      fontSize: "15px !important",
      fontFamily: "sans-serif",
      fontWeight: "400",
      color: "#4c4e4d",
      lineHeight: "1.5",
      textAlign: "center",
    },
    lastPara: {
        height: "120px",
        // paddingTop: "30px",
        paddingLeft: "50px",
    },
    expertiseSection: {
      height: "400px",
      backgroundColor: "#ededdc",
    },
    expertiseContent: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "50px 0px",
      position: "relative",
      boxSizing: "border-box",
      display: "flex",
    },
    expertiseTitle: {
      fontSize: "60px !important",
      fontWeight: "800",
      textTransform: "uppercase",
      textAlign: "center",
      padding: "20px 0px",
      color: "#828482",
      fontFamily: "sans-serif",
    },
    expertiseText: {
      color: "#4d4f4e",
      fontSize: "15px !important",
      textAlign: "center",
      padding: "20px 0px",
      fontWeight: "400",
    },
    brandImgContainer: {
        height: '400px',
        margin: '30px 0px 40px 0px'

    },
    headingContainer: {
        height: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    heading: {
        fontSize: '70px !important',
        fontWeight: '800',
        // textAlign: 'center',
        color: 'grey',
    },
     title: {
        fontSize: '50px !important',
        fontWeight: '800',
        // textAlign: 'center',
        color: '#525050',
    },
    subTitle: {
       fontSize: '30px !important',
        fontWeight: '800',
        textAlign: 'center',
        paddingTop: '20px',
        color: '#525050',
    },
    mainImgContainerBox: {
        height: '55%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imgcontainer: {
        width: '70%',

    },
    imgContainerBox: {
        display: "flex",
        justifyContent: 'space-around',
        margin: '30px 0px'
        // alignItems: 'center'
    },
    footer: {
      height: '800px',
      background: 'linear-gradient(to bottom right, #ffffff, #add8e6, #0b5191)',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    footerSection: {
      height: '550px',
      width: '90%',
      // background: 'red',
    },
    footerSection1: {
      height: '50%',
      width: '100%',
      // background: 'red',
      display: 'flex',
    },
    footerSection2: {
      height: '50%',
      width: '100%',
      display: 'flex',
      // background: 'black',
    },
    footerSection1Heading: {
      fontSize: '25px !important',
      fontWeight: 'bold !important',
      letterSpacing: '0.2px !important',
    },
    footerSection1Base: {
      fontSize: '18px !important',
      margin: '16px 0px 0px 5px !important',
    },
    footerBox1: {
      height: '100%',
      width: '50%',
      // background: 'black',
    },
    footerBox2: {
      height: '100%',
      width: '25%',
      // background: 'red'
    },
    footerSection1mail: {
      display: 'flex',
      // justifyContent: 'center',
      alignItems: 'center',
      margin: '16px 0px 0px 5px !important',
    },
    footerSection1mail1: {
      marginLeft: '18px !important',
      fontSize: '19px !important',
    },
    footerSectionFindUs: {
      // display: 'flex',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      margin: '16px 5px 0px 5px !important',
    },
    footerBox3: {
      height: '100%',
      width: '25%',

    },
    footerSection2Box1: {
      height: '100%',
      width: '20%',
    },
    footerSection1Heading2: {
      fontSize: '25px !important',
      fontWeight: 'bold !important',
      letterSpacing: '0.2px !important',
      marginLeft: '15px !important',
    },
    footerSection2point: {
      fontSize: '18px !important',
    },
    textMail: {
      textDecoration: 'none',
      color: 'black',
    },

  }));