import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Image, Input } from '@shared/ui';
import LetterSend from '@assets/letter_send.svg';

export const ContactForm = () => {
  const [contacts, setContacts] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('contacts: ', contacts);
  };

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, firstName: e.target.value });
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, lastName: e.target.value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, email: e.target.value });
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, phoneNumber: e.target.value });
  };

  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, subject: e.target.value });
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContacts({ ...contacts, message: e.target.value });
  };

  return (
    <Wrapper>
      <form onSubmit={submitForm}>
        <Grid container spacing={2} style={{ margin: 0, width: '100%' }}>
          <Input label="First Name" onChange={handleFirstName} />
          <Input label="Last Name" onChange={handleLastName} />
          <Input label="Email" type="email" onChange={handleEmail} />
          <Input
            label="Phone Number"
            type="number"
            onChange={handlePhoneNumber}
          />
        </Grid>
        <Box my={5} pl={2}>
          <Subtitle variant="h6">Select Subject?</Subtitle>
          <RadioGroup
            row
            onChange={handleSubject}
            defaultValue="General Inquiry 1"
          >
            <FormControlLabel
              value="General Inquiry 1"
              control={<Radio />}
              label="General Inquiry"
            />
            <FormControlLabel
              value="General Inquiry 2"
              control={<Radio />}
              label="General Inquiry"
            />
            <FormControlLabel
              value="General Inquiry 3"
              control={<Radio />}
              label="General Inquiry"
            />
            <FormControlLabel
              value="General Inquiry 4"
              control={<Radio />}
              label="General Inquiry"
            />
          </RadioGroup>
        </Box>
        <Input
          onChange={handleMessage}
          label="Message"
          placeholder="Write your message..."
          md={12}
          pl={2}
        />
        <Box
          display="flex"
          sx={{
            justifyContent: { xs: 'center', md: 'flex-end' },
          }}
        >
          <SubmitButton type="submit" disableElevation variant="contained">
            Send Message
          </SubmitButton>
        </Box>
      </form>
      <Image src={LetterSend} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  padding: 32,
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

const Subtitle = styled(Typography)({
  fontWeight: 600,
  fontSize: 14,
  lineHeight: '20px',
  fontFamily: 'Poppins',
  margin: '16px 0',
  display: 'flex',
});

const SubmitButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    minHeight: 38,
    maxWidth: '100%',
    lineHeight: '19px',
  },
  fontSize: 16,
  minHeight: 54,
  maxWidth: 214,
  lineHeight: '24px',
  width: '100%',
  background: 'black',
  textTransform: 'capitalize',
  fontFamily: 'Poppins',
  fontWeight: 500,
  ':hover': {
    background: 'black',
  },
}));
