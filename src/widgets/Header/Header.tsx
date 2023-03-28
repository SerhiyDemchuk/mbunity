import { memo } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';

import User from '@assets/user.svg';
import UserWhite from '@assets/user_white.svg';
import Cart from '@assets/cart.svg';
import CartWhite from '@assets/cart_white.svg';
import Burger from '@assets/burger.svg';
import { Link, Logo, Icon } from '@shared/ui';
import Drawer from '@mui/material/Drawer';

interface HeaderProps {}

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-between',
          }}
        >
          <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link href="/" text="Home" />
              <Link href="/features" text="Features" />
              <Link href="/blog" text="Blog" />
              <Link href="/shop" text="Shop" />
              <Link href="/about" text="About" />
              <Link href="/contact" text="Contact" />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Icon img={User} />
              <Icon img={Cart} />
            </Box>
          </Box>
        </Toolbar>

        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          sx={{
            display: {
              md: 'none',
              xs: 'flex',
            },
          }}
        >
          <Logo />
          <IconButton size="large" onClick={handleDrawerOpen} color="inherit">
            <Avatar src={Burger} />
          </IconButton>
        </Box>

        <Drawer open={open} onClose={handleDrawerClose}>
          <Toolbar
            disableGutters
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              width: '100vw',
              background: 'black',
            }}
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row"
            >
              <Logo
                sx={{ display: { xs: 'flex', md: 'none', color: 'white' } }}
              />
              <IconButton onClick={handleDrawerClose} size={'large'}>
                <CloseIcon color="success" />
              </IconButton>
            </Box>

            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              height="100%"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Box display="flex" flexDirection="column">
                <Link href="/" text="Home" white vertical />
                <Link href="/features" text="Features" white vertical />
                <Link href="/blog" text="Blog" white vertical />
                <Link href="/shop" text="Shop" white vertical />
                <Link href="/about" text="About" white vertical />
                <Link href="/contact" text="Contact" white vertical />
              </Box>

              <Box display="flex" alignSelf="center">
                <Icon img={UserWhite} />
                <Icon img={CartWhite} />
              </Box>
            </Box>
          </Toolbar>
        </Drawer>
      </Container>
    </AppBar>
  );
};
