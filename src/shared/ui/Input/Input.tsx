import Grid, { GridProps } from '@mui/material/Grid';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const Input = (props: TextFieldProps & GridProps) => {
  return (
    <Grid item xs={12} sm={6} md={6} pt="0px !important" pb={5} {...props}>
      <TextField variant="standard" fullWidth {...props} />
    </Grid>
  );
};
