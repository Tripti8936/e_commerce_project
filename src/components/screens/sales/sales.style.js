import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    text: {
      color: "#4f4e4e",
    //   marginTop: "40%",
    //   textAlign: "center",
      fontSize: "20px",
    //   fontWeight: "bold",
    //   textTransform: "uppercase",
      textDecoration: "none",
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
   section: {
    // padding: '32px 16px 64px', // theme.spacing(4, 2, 8)
    // background: 'linear-gradient(to bottom right, #f8fafc, #eff6ff)',
  },
  categoryFilter: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px', // theme.spacing(2)
    marginBottom: '32px', // theme.spacing(4)
  },
  productImage: {
    width: '100%',
    height: 192,
    objectFit: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productCard: {
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // theme.shadows[4]
    },
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#1976d2', // theme.palette.primary.main (default blue)
    color: 'white',
    padding: '0 8px',
    height: 24,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
    fontSize: '0.75rem',
    fontWeight: 500,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 1,
    },
  },
  star: {
    color: '#facc15', // custom yellow
  },
}));