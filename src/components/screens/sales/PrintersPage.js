import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const PrintersPage = () => {
  const printers = [
    { id: 1, name: 'LaserJet Pro M404', image: '/images/printer1.jpg', description: 'High-speed monochrome laser printer' },
    { id: 2, name: 'Inkjet Color 550', image: '/images/printer2.jpg', description: 'Affordable color printing' },
    { id: 3, name: 'OfficeJet Pro 9015', image: '/images/printer3.jpg', description: 'All-in-one office solution' },
    { id: 4, name: 'EcoTank ET-4760', image: '/images/printer4.jpg', description: 'High-volume ink tank system' },
    { id: 5, name: 'Color LaserJet Pro', image: '/images/printer5.jpg', description: 'Professional color output' },
    { id: 6, name: 'Portable Printer', image: '/images/printer6.jpg', description: 'Mobile printing solution' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Printers
      </Typography>
      
      <Grid container spacing={4}>
        {printers.map((printer) => (
          <Grid item xs={12} sm={4} key={printer.id}>
            <Card sx={{ height: '350px', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={printer.image}
                alt={printer.name}
                sx={{ width: 200, objectFit: 'contain', p: 1, height: 250 }}
              />
              <CardContent>
                <Typography variant="h6" component={Link} to={`/product/printers/${printer.id}`}>
                  {printer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {printer.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PrintersPage;