import React from 'react'
import styles from "./header.module.scss"
import { AppBar, Avatar, Badge, Box, Container, IconButton, Link, styled, Toolbar } from '@mui/material'
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as IMAGE from '../../shared/image.ts'

const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        content: '" "',
      },
    }
}));
const SmallAvatar = styled(Avatar)(() => ({
    width: 16,
    height: 16,
}));

const Header = () => {
    return (
        <div className={styles.header}>
            <Container maxWidth="xl" style={{padding: '0px'}}>
                <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color='inherit' classes={{root: styles.headerBar}}>
                    <Toolbar>
                        <Box sx={{flexGrow: 1}}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                disableTouchRipple
                                classes={{root: `${styles.headerIcon} ${styles.headerIconRotate}`}}
                            >
                                <FlightIcon />
                            </IconButton>
                            <Link href="#">
                                Find Flight
                            </Link>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                disableTouchRipple
                                classes={{root: styles.headerIcon}} sx={{ml: 2}}
                            >
                                <HotelIcon />
                            </IconButton>
                            <Link href="#">
                                Find Stays
                            </Link>
                        </Box>

                        <Box sx={{flexGrow: 1}}>
                            <Link href="#">
                                <img src={IMAGE.Logo} alt='logo' />
                            </Link>
                        </Box>
                            
                        <Box>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                disableTouchRipple
                                classes={{root: styles.headerIcon}} sx={{ml: 2}}
                            >
                                <FavoriteIcon />
                            </IconButton>
                            <Link href="#">
                                Favourites
                            </Link>
                            <StyledBadge
                                sx={{ml: 3, mr: 1}}
                                overlap="circular"
                                classes={{root: styles.profileIcon}}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <SmallAvatar alt="dropdown" src={IMAGE.ProfileArrow} />
                                }
                            >
                                <Avatar alt="Remy Sharp" src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" />
                            </StyledBadge>
                            <span>John D.</span>
                        </Box>
                    </Toolbar>
                </AppBar>
                </Box>
            </Container>
        </div>
    )
}

export default Header