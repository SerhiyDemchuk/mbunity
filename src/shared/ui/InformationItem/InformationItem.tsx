import React, { memo } from 'react';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import { Image } from '@shared/ui';

interface InformationItemProps {
  icon: string;
  info: string;
}

export const InformationItem = (props: InformationItemProps) => {
  const { info, icon } = props;
  return (
    <Wrapper>
      <Image src={icon} width={24} height={24} />
      <StyledTypography variant="h6">{info}</StyledTypography>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  margin: '40px 0',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    margin: '24px 0',
  },
}));

const StyledTypography = styled(Typography)({
  zIndex: 1000,
  color: 'white',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  fontFamily: 'Poppins',
});
