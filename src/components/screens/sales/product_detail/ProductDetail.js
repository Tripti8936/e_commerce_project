import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia, Button, Divider } from '@mui/material';

const ProductDetailPage = () => {
  const { category, id } = useParams();
  console.log(id, category, '667898767898765678');
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);
        const data = await response.json();
        console.log(data, 'data')
        if (data[category]) {
          const found = data[category].find(p => p.id === parseInt(id));
          setProduct(found);
        } else {
          console.error('Invalid category:', category);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [category, id]);

  if (!product) return <div>Loading...</div>;
  console.log(product, 'products');
  
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, fontSize: 26}}>
        {product.name}
      </Typography>
      
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}${product.image}`}
          alt={product.name}
          sx={{ width: { xs: '100%', md: 700 }, objectFit: 'contain', p: 2 }}
        />
        <CardContent sx={{ flex: 1, ml: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: 20, mb: 1.5 }} gutterBottom>
            {product.name}
          </Typography>
          <Divider/>
          <Typography variant="body1" paragraph sx={{ fontSize: 18, mt: 1 }}>
            {product.description}
          </Typography>
          
          <Typography  variant="h3" sx={{ fontWeight: 'bold', mt: 2 ,fontSize: 18 }} gutterBottom>
            Specifications:
          </Typography>
          <ul>
            {product.specifications.map((spec, index) => (
              <li key={index}>
                <Typography variant="body1" sx={{ fontSize: 18 }}>{spec}</Typography>
              </li>
            ))}
          </ul>
          
          <Typography variant="h5"sx={{ fontWeight: 'bold', mt: 2, fontSize: 18 }} gutterBottom >
           {product.price}
          </Typography>
          
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetailPage;