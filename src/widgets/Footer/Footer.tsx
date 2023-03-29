import React from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import { contactInfo } from '@shared/constants';
import { InformationItem, Logo, Text } from '@shared/ui';

export const Footer = () => {
  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Logo color="white" my={3} />
      <GridContainer container pt={2}>
        <Grid item md={3} xs={8} pl={2.5} className="firstGrid">
          <Text bold text="Reach us" />
          {contactInfo.map(({ contact, icon }, index) => (
            <InformationItem
              key={index}
              icon={icon}
              info={contact}
              className="infoItem"
            />
          ))}
        </Grid>
        <Grid item md={2} xs={3}>
          <Text bold text="Company" />
          <Box>
            <Navigation href="/about">About</Navigation>
            <Navigation href="/contact">Contact</Navigation>
            <Navigation href="/blogs">Blogs</Navigation>
          </Box>
        </Grid>
        <Grid item md={2} xs={8}>
          <Text bold text="Legal" />
          <Box>
            <Navigation href="/privacy">Privacy Policy</Navigation>
            <Navigation href="/terms_of_servicy">Terms & Services</Navigation>
            <Navigation href="/terms_of_use">Terms of Use</Navigation>
            <Navigation href="/refund">Refund Policy</Navigation>
          </Box>
        </Grid>
        <Grid item md={2} xs={4}>
          <Text bold text="Quick Links" />
          <Box>
            <Navigation href="/techlabz">Techlabz Keybox</Navigation>
            <Navigation href="/downloads">Downloads</Navigation>
            <Navigation href="/forum">Forum</Navigation>
          </Box>
        </Grid>
        <Grid item md={3} xs={12} className="joinNewsletter">
          <Text bold text="Join Our Newsletter" />
          <Box component="form" onSubmit={submitForm} className="submitForm">
            <Input placeholder="Your email address" />
            <SubmitButton sx={{ width: '40%' }} type="submit">
              Subscribe
            </SubmitButton>
          </Box>
          <Typography className="note">
            * Will send you weekly updates for your better tool management.
          </Typography>
        </Grid>
      </GridContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  background: 'black',
  width: '100%',
  padding: '60px 80px',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    padding: 20,
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  borderTop: '1px solid white',
  '& .MuiGrid-item': {
    '& .MuiBox-root': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  '& .firstGrid': {
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
  '& .joinNewsletter': {
    background: '#131313',
    borderRadius: 10,
    padding: '0 14px 14px',
    marginTop: 5,
    [theme.breakpoints.down('md')]: {
      margin: '40px 0 35px',
    },
  },
  '& .infoItem': {
    margin: '20px 0',
  },
  '& .submitForm': {
    display: 'flex',
    flexDirection: 'row !important',
    margin: '23px 0 20px',
  },
  '& .note': {
    textAlign: 'start',
    color: '#717171',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: '18px',
  },
}));

const Navigation = styled(Link)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Poppins',
  textAlign: 'start',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  marginTop: 20,
  ':hover': {
    color: 'white',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    lineHeight: '18px',
  },
}));

Navigation.defaultProps = {
  underline: 'none',
};

const Input = styled(TextField)({
  width: '60%',
  input: {
    background: '#1E1E1E',
    borderRadius: '10px 0 0 10px',
    color: 'white',
    fontSize: 11,
    lineHeight: '17px',
    fontWeight: 400,
  },
});

const SubmitButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    minHeight: 38,
    lineHeight: '19px',
  },
  borderRadius: '0 10px 10px 0',
  fontSize: 12,
  minHeight: 54,
  lineHeight: '18px',
  background: 'black',
  textTransform: 'capitalize',
  fontFamily: 'Poppins',
  fontWeight: 500,
  color: 'white',
  ':hover': {
    background: 'black',
  },
}));
