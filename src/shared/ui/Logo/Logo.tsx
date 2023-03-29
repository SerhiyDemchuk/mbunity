import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

const CustomTypography = styled(Typography)({
  marginRight: 2,
  fontFamily: 'Inter',
  fontWeight: 800,
  fontSize: 24,
  flexGrow: 0,
  lineHeight: '29px',
  textDecoration: 'none',
}) as typeof Typography;

export const Logo = (props: TypographyProps) => {
  const { variant = 'h6', noWrap, color = 'black' } = props;
  return (
    <NavLink to="/">
      <CustomTypography
        color={color}
        variant={variant}
        noWrap={noWrap}
        {...props}
      >
        Logo Here
      </CustomTypography>
    </NavLink>
  );
};
