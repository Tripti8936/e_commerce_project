import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
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
        height: '60%',
        width: '100%',
        // background: 'red',
        display: 'flex',
      },
      footerSection2: {
        height: '40%',
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
        margin: '16px 32px 0px 5px !important',
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
      }
}))