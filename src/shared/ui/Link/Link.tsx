import { NavLink, LinkProps } from 'react-router-dom';
import { forwardRef } from 'react';

interface NavLinkProps extends LinkProps {
  text: string;
  to: string;
  white?: boolean;
  vertical?: boolean;
}
export const Link = forwardRef<
  HTMLAnchorElement,
  Omit<NavLinkProps, 'to'> & { href: LinkProps['to'] }
>((props, ref) => {
  const { href, text, white, vertical, ...other } = props;
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: white ? 'white' : 'black',
    margin: vertical ? '8px 0' : '0 8px',
  });
  return (
    <NavLink style={navLinkStyles} ref={ref} to={href} {...other}>
      {text}
    </NavLink>
  );
});
