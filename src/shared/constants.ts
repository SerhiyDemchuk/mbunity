import PhoneCall from '@/assets/phone_call.svg';
import Email from '@/assets/email.svg';
import Location from '@/assets/location.svg';

interface ContactInfo {
  icon: string;
  contact: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: PhoneCall,
    contact: '+1012 3456 789',
  },
  {
    icon: Email,
    contact: 'demo@gmail.com',
  },
  {
    icon: Location,
    contact: `132 Dartmouth Street Boston, \n Massachusetts 02156 United States`,
  },
];
