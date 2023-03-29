import React from 'react';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

import { Image } from '@shared/ui';

interface InformationItemProps {
  icon: string;
  info: string;
  fullWidth?: boolean;
  className?: string;
}

export const InformationItem = (props: InformationItemProps) => {
  const { info, icon, className, fullWidth = false } = props;
  return (
    <Wrapper className={className} fullWidth={fullWidth}>
      <Image src={icon} width={24} height={24} />
      <StyledTypography variant="h6">{info}</StyledTypography>
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ fullWidth?: boolean }>(
  ({ theme, fullWidth }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: '40px 0',
    textAlign: 'start',
    maxWidth: 330,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: '24px 0',
      alignItems: 'flex-start',
      width: fullWidth ? '100%' : '70%',
    },
  }),
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  zIndex: 1000,
  color: 'white',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('md')]: {
    marginTop: 15,
    fontSize: 12,
    lineHeight: '18px',
  },
}));
