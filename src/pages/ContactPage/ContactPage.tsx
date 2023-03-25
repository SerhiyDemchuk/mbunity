import { memo } from 'react';
import Typography from '@mui/material/Typography';

interface ContactPageProps {}

const ContactPage = memo((props: ContactPageProps) => {
  const {} = props;

  return (
    <div>
      <div>
        <Typography variant="h2">Contact Us</Typography>
        <Typography variant="h6">
          Any questions or remarks? Just write us a message!
        </Typography>
      </div>
    </div>
  );
});

export default ContactPage;
