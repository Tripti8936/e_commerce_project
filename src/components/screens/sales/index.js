import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, Chip, IconButton, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './sales.style';
import { ShoppingCart, Star, Visibility } from '@mui/icons-material';


const Sales = () => {
    const products1 = {
        printers: [
          { id: 15677, name: 'TP 415c Pro', image: `${process.env.PUBLIC_URL}/assets/monitors/TP415C-PRO_2.webp` },
          { id: 25667, name: 'TP 415C', image: `${process.env.PUBLIC_URL}/assets/monitors/8_d9f8785f-5f8e-4cb6-bb01-74d2cb094603.webp` },
          { id: 355667, name: 'TP 482C AIO', image: `${process.env.PUBLIC_URL}/assets/tp/TP482C_AIO-RESIZED-07.webp` },
 { id: 48765, name: 'TP i415c', image: `${process.env.PUBLIC_URL}/assets/monitors/TPi415C smart.webp` }
        ],
        lp: [
          { id: 122345, name: 'LP 46 Plus', image: `${process.env.PUBLIC_URL}/assets/lp/LP_46_Plus-01_copy.webp` },
          { id: 245567, name: 'LP 46 Dlite ', image: `${process.env.PUBLIC_URL}/assets/lp/LP-46-D-Lite_1.webp` },
          { id: 34556, name: 'LP 46 Neo', image: `${process.env.PUBLIC_URL}/assets/lp/LP-46-Neo-1.webp` },
          { id: 456544, name: 'LP 45', image: `${process.env.PUBLIC_URL}/assets/lp/LP-443 gold.webp` },
        ],
        rp: [
          { id: 154556, name: 'RP 3160 Gold Thermal Receipt Printer', image: `${process.env.PUBLIC_URL}/assets/lp/RP-3160-Gold_1.webp` },
          { id: 223456, name: 'RP 3200 Plus 3 Inch Thermal Receipt Printer', image: `${process.env.PUBLIC_URL}/assets/lp/RP-3160-plus printer 1).webp` },
          { id: 3987654, name: 'RP 3220 Star 3 inch Thermal Printer', image: `${process.env.PUBLIC_URL}/assets/lp/RP-3220-Star.webp` },
          { id: 48765, name: 'RP 4200 4 inch thermal printer', image: `${process.env.PUBLIC_URL}/assets/lp/RP-4200.webp` },
        ],
        keyboards: [
          { id: 13459, name: 'Champ Membrane Keyboard', image: `${process.env.PUBLIC_URL}/assets/keyboard/TVS-Platina-Combo-KBD_1.webp` },
          { id: 27654, name: 'Gold Prime Dust Resistant Mechanical Keyboard', image: `${process.env.PUBLIC_URL}/assets/keyboard/Gold-Prime_1.webp` },
          { id: 334567, name: 'Platina Combo Wireless Mechanical Keyboard & Mouse', image: `${process.env.PUBLIC_URL}/assets/keyboard/TVS-Platina-Combo-KBD_1.webp` },
          { id: 684686, name: 'Platina Wireless Mechanical Keyboard', image: `${process.env.PUBLIC_URL}/assets/keyboard/Platina-Wireless_1_cbe7bd01-2728-4f10-bbc7-fb48eb2d27da.webp` },
        ]
      };
  const classes = useStyles();

  const renderProductCategory = (category, title) => {
    return (
      <Box sx={{ mb: 6, ml: 6, mr: 6, mt: 2}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:4, mb:2 }}>

        <Typography  gutterBottom sx={{ fontWeight: 'bold', color: '#333',
          //  mt: 2, ml: 8,
            fontSize: '20px !important' }}>
          {title}
        </Typography>
        <Box>
        <Link component={Link} to={`/${category}`} className={classes.text}>
             View More
        </Link>
        </Box>
         </Box>
        <Grid container spacing={4}>
          {products1[category].slice(0, 4).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card sx={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
                <Link to={`/product/${category}/${product.id}`} className={classes.text} >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: 220, objectFit: 'contain', p: 1 }}
                />
                <CardContent sx={{ flexGrow: 1 , display: 'flex', justifyContent: 'center', fontSize:16}}>
                    {product.name}
                </CardContent>
                  </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="outlined" component={Link} to={`/${category}`}>
            More
          </Button>
        </Box> */}
      </Box>
    );
  };


  return (
    <Box className={classes.section}>
    <Box className={classes.brandContainer}>
     <Box
      className={classes.brandBoxHeading}
    >
      {/* <Container maxWidth="lg"> */}
        <Typography
        className={classes.brandHeading}
          variant="h3"
        //   fontWeight="bold"
        //   mb={2}
        //   sx={{ fontSize: { xs: '2rem', md: '3rem' } }} // text-4xl md:text-5xl
        >
          Our Premium Products
        </Typography>
        <Typography
          variant="h6"
          className={classes.brandSubHeading}
        >
          Discover our comprehensive range of professional-grade printers, workstations, and computing solutions
        </Typography>
      {/* </Container> */}
    </Box>
    </Box>
     {renderProductCategory('printers', 'Touch Pos')}
     {renderProductCategory('lp', 'Label Printers')}
       {renderProductCategory('rp', 'Thermal Receipt Printers')}
       {renderProductCategory('keyboards', 'Keyboards')}
      {/* <Box className={classes.categoryFilter}>
        {categories.map((cat) => (
          <Button key={cat} variant={cat === "All Products" ? "contained" : "outlined"}>{cat}</Button>
        ))}
      </Box> */}
      {/* <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card className={classes.productCard}>
              <Box position="relative">
                <img src={product.image} alt={product.name} width={300} height={192} className={classes.productImage} />
                <Chip label={product.badge} size="small" className={classes.badge} />
                <Box className={classes.overlay}>
                  <IconButton color="inherit" sx={{ bgcolor: "white", mr: 1 }}>
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton color="primary" sx={{ bgcolor: "white" }}>
                    <ShoppingCart fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              <CardContent>
                <Typography variant="body2" color="primary">
                  {product.category}
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  {product.name}
                </Typography>
                <Box display="flex" alignItems="center" mb={1}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fontSize="small"
                      className={i < Math.floor(product.rating) ? classes.star : ""}
                      sx={{ color: i < Math.floor(product.rating) ? "#facc15" : "#d1d5db" }}
                    />
                  ))}
                  <Typography variant="caption" color="textSecondary" ml={1}>
                    ({product.reviews})
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" color="textPrimary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" size="small">
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default Sales;
