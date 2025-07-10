import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: '32px', // Equivalent to theme.spacing(4)
    marginBottom: '32px', // Equivalent to theme.spacing(4)
  },
  title: {
    textAlign: 'center',
    marginBottom: '16px', // Equivalent to theme.spacing(2)
  },
  subtitle: {
    textAlign: 'center',
    color: '#6c757d', // Equivalent to theme.palette.text.secondary
    marginBottom: '32px', // Equivalent to theme.spacing(4)
  },
  formPaper: {
    padding: '24px', // Equivalent to theme.spacing(3)
  },
  contactPaper: {
    padding: '24px', // Equivalent to theme.spacing(3)
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px', // Equivalent to theme.spacing(2)
  },
  icon: {
    marginRight: '16px', // Equivalent to theme.spacing(2)
    color: '#1976d2', // Equivalent to theme.palette.primary.main
  },
  mapContainer: {
    marginTop: '32px', // Equivalent to theme.spacing(4)
  },
  map: {
    border: 0,
    width: '100%',
    height: '300px',
  },
  brandHeading: {
    fontSize: "40px !important",
    // textAlign: 'center',
    fontWeight: "bold !important",
    fontFamily: "sans-serif !important",
  },
   brandBoxHeading: {
    height: "180px",
    width: "100%",
    background: "#ededdc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
   brandContainer: {
    minHight: "100px",
    width: "100%",
    
    // background: "blue",
  },
   brandSubHeading: {
    fontSize: "20px !important",
    textAlign: 'center',
    // fontWeight: "bold !important",
        // margin: '20px !important',
    // fontSize: "20px",
    fontFamily: "Inter-Regular",
    fontWeight: "500",
    lineHeight: "1.6",
    letterSpacing: "0.0075em",
    textAign: "center",
    maxWidth: "600px",
  },
}));