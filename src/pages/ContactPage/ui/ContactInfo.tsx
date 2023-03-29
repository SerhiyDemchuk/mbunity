import Typography from '@mui/material/Typography';
import { contactInfo } from '@shared/constants';
import { Image, InformationItem } from '@shared/ui';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import TwitterIcon from '@assets/twitter_icon.svg';
import DiscordIcon from '@assets/discord_icon.svg';
import EllipseSmall from '@assets/ellipse_small.svg';
import EllipseBig from '@assets/ellipse_big.svg';
import styled from '@mui/material/styles/styled';

export const ContactInfo = () => {
  return (
    <Wrapper>
      <Box display="flex" flexDirection="column">
        <Title variant="h2">Contact Information</Title>
        <Subtitle variant="h6">Say something to start a live chat!</Subtitle>
      </Box>
      <Box sx={{ my: { md: 10, xs: 1 } }}>
        {contactInfo.map(({ contact, icon }, index) => (
          <InformationItem fullWidth key={index} icon={icon} info={contact} />
        ))}
      </Box>
      <Box>
        <NavLink to="/">
          <Image src={TwitterIcon} />
        </NavLink>
        <NavLink to="/">
          <Image src={DiscordIcon} />
        </NavLink>
      </Box>
      <EllipseSm src={EllipseSmall} />
      <EllipseBg src={EllipseBig} />
    </Wrapper>
  );
};

export const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
  background: 'black',
  width: '100%',
  maxWidth: 491,
  borderRadius: '10px 10px 0 10px',
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
  justifyContent: 'space-between',
  position: 'relative',
}));

const Title = styled(Typography)({
  color: 'white',
  fontWeight: 600,
  fontSize: 28,
  lineHeight: '42px',
  fontFamily: 'Poppins',
});

const Subtitle = styled(Typography)({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '27px',
  color: 'white',
  fontFamily: 'Poppins',
});

const EllipseSm = styled('img')({
  position: 'absolute',
  bottom: 80,
  right: 60,
  zIndex: 10,
});

const EllipseBg = styled('img')({
  position: 'absolute',
  bottom: 0,
  right: 0,
});
