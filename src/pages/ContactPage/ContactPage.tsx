import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ContactForm } from '@pages/ContactPage/ui/ContactForm';
import { ContactInfo } from '@pages/ContactPage/ui/ContactInfo';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

const ContactPage = () => {
  return (
    <Container maxWidth={false}>
      <Box my={5}>
        <PageTitle variant="h2">Contact Us</PageTitle>
        <PageSubtitle variant="h6">
          Any questions or remarks? Just write us a message!
        </PageSubtitle>
      </Box>
      <ContactFormWrapper>
        <ContactInfo />
        <ContactForm />
      </ContactFormWrapper>
    </Container>
  );
};

const ContactFormWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
  flexDirection: 'row',
  maxWidth: 1200,
  backgroundColor: 'white',
  display: 'flex',
  borderRadius: 16,
  margin: '0 auto',
  padding: 12,
}));

export const PageTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: 40,
  lineHeight: '60px',
  fontFamily: 'Poppins',
  margin: '16px 0',
});

export const PageSubtitle = styled(Typography)({
  fontWeight: 500,
  fontSize: 18,
  lineHeight: '27px',
  fontFamily: 'Poppins',
  margin: '16px 0',
  color: '#717171',
});

export default ContactPage;
