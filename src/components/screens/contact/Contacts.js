import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { useStyles } from './Contact.style';

const Contacts = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, phone, message } = formData;

  const subject = encodeURIComponent('Contact Form Submission');
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  );
console.log(body, subject, name, email);

  window.location.href = `mailto:support@infobllservices.com?subject=${subject}&body=${body}`;
  console.log('mail sent')
    setFormData({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Thank you for contacting us! We will get back to you soon.');
  // };

  return (
    <Box>
    <Box className={classes.brandContainer}>
           <Box
            className={classes.brandBoxHeading}
          >
      <Typography className={classes.brandHeading}
          variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" className={classes.brandSubHeading} paragraph>
        We're here to help! Reach out to us for any inquiries or support.
      </Typography>
</Box>
</Box>
         <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.formPaper}>
            <Typography variant="h5" gutterBottom sx={{fontSize: 18}}>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                margin="normal"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                name='email'
                type="email"
                required
                  value={formData.email}

                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                margin="normal"
                name= "phone"
                type="tel"
                  value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                name='message'
                multiline
                  value={formData.message}

                rows={4}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 50 }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.contactPaper}>
            <Typography variant="h5" gutterBottom sx={{fontSize: 18, mb: 3}}>
              Contact Information
            </Typography>
            <Box className={classes.contactInfo}>
              <Email className={classes.icon} />
              <Typography variant="body1" sx={{fontSize: 16}}>support@infobllservices.com</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <Phone className={classes.icon} />
              <Typography variant="body1" sx={{fontSize: 16}}>+1 (91) 7200418092</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <LocationOn className={classes.icon} />
              <Typography variant="body1">
                123 Sales Street, Service City, SC 12345
              </Typography>
            </Box>

            {/* Embedded Map */}
            <Box className={classes.mapContainer}>
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d5a5c5f6b5c4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
                className={classes.map}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Contacts;