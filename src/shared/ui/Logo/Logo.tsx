import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

const CustomTypography = styled(Typography)({
  marginRight: 2,
  fontFamily: 'Inter',
  fontWeight: 800,
  fontSize: 24,
  flexGrow: 0,
  color: 'black',
  lineHeight: '29px',
  textDecoration: 'none',
}) as typeof Typography;

interface LogoProps extends TypographyProps {}

export const Logo = memo((props: LogoProps) => {
  const { variant = 'h6', noWrap } = props;
  return (
    <NavLink to="/">
      <CustomTypography variant={variant} noWrap={noWrap} {...props}>
        Logo Here
      </CustomTypography>
    </NavLink>
  );
});
