import { memo } from 'react';
import { styled } from '@mui/material/styles';

interface IconProps {
  img: string;
}

const Image = styled('img')({
  border: '1px solid black',
  borderRadius: '50%',
  height: 31,
  width: 31,
});

export const Icon = memo((props: IconProps) => {
  const { img } = props;
  return <Image src={img} />;
});
