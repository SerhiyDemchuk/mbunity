import React from 'react';
import { styled } from '@mui/material/styles';

export const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <ImageItem {...props} />;
};

const ImageItem = styled('img')({
  marginRight: 20,
});
