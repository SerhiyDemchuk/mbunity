import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

interface TextProps {
  text: string;
  bold?: boolean;
}

export const Text = (props: TextProps) => {
  const { text, bold = false } = props;
  return <Wrapper bold={bold}>{text}</Wrapper>;
};

const Wrapper = styled(Typography)<{ bold?: boolean }>(({ bold }) => ({
  color: 'white',
  fontFamily: 'Poppins',
  textAlign: 'start',
  marginTop: 14,
  fontSize: bold ? 18 : 16,
  fontWeight: bold ? 600 : 400,
  lineHeight: bold ? '26px' : '24px',
}));
