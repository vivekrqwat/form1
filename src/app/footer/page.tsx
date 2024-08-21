import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        padding: '2rem 0',
        width:"1904px"
      }}
    >
      <Container >
        <Grid container spacing={4} width={"100%"}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are a team dedicated to creating amazing web applications. Our mission is to deliver high-quality solutions for our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Useful Links
            </Typography>
            <Link href="#" variant="body2" color="textSecondary" display="block">
              Home
            </Link>
            <Link href="#" variant="body2" color="textSecondary" display="block">
              Services
            </Link>
            <Link href="#" variant="body2" color="textSecondary" display="block">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
