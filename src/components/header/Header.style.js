import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#ffff !important",
    boxShadow: "0 0 15px -7px rgba(0, 0, 0, 0.4)) !important",
    zIndex: 1301,
    height: '90px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    width: '97%',
    // backgroundColor: "#088F8F !important",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: '20px !important',
    fontWeight: "bold",
    cursor: "pointer",
    background: "#088F8F",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  drawerIcon: {
      backgroundColor: "#1717c0 !important", // Subtle hover effect
      height: '50px',
    width: '50px',

    '& .MuiSvgIcon-root': {
      height: '30px',
      width: '30px'

    }
  },
  drawer: {
    width: 250,
    padding: "1rem",
    // backgroundColor: "#088F8F !important", 
  },
  listItem: {
    borderRadius: "8px",
    marginBottom: "0.5rem",
    "&:hover": {
      backgroundColor: "#088F8F !important", // Subtle hover effect
    },
  },
  menu: {
    textDecoration: 'none',
    color: '#525050',
    marginRight: '35px'
  },
  menuItem: {
    fontSize: '20px !important',
    textTransform: 'uppercase',
    fontWeight: '600 !important',
  }
});
