import { Box, Container, IconButton, Link, Typography } from "@mui/material"
import styles from './footer.module.scss'
import * as IMAGE from '../../shared/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
};

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container maxWidth='xl' className={styles.footerContainer} >
                <Box>
                    <img src={IMAGE.FooterLogo} alt="logo" />
                    <Box>
                        <IconButton sx={{pl: '0'}} aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{mb: 2}}>Our Destinations</Typography>
                    <Link href="#" gutterBottom display="block">Canada</Link>
                    <Link href="#" gutterBottom display="block">Alaksa</Link>
                    <Link href="#" gutterBottom display="block">France</Link>
                    <Link href="#" gutterBottom display="block">Iceland</Link>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{mb: 2}}>Our Activities</Typography>
                    <Link href="#" gutterBottom display="block">Northern Lights</Link>
                    <Link href="#" gutterBottom display="block">Cruising & sailing</Link>
                    <Link href="#" gutterBottom display="block">Multi-activities</Link>
                    <Link href="#" gutterBottom display="block">Kayaing</Link>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{mb: 2}}>Travel Blogs</Typography>
                    <Link href="#" gutterBottom display="block">Bali Travel Guide</Link>
                    <Link href="#" gutterBottom display="block">Sri Lanks Travel Guide</Link>
                    <Link href="#" gutterBottom display="block">Peru Travel Guide</Link>
                    <Link href="#" gutterBottom display="block">Bali Travel Guide</Link>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{mb: 2}}>About Us</Typography>
                    <Link href="#" gutterBottom display="block">Our Story</Link>
                    <Link href="#" gutterBottom display="block">Work with us</Link>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{mb: 2}}>Contact Us</Typography>
                    <Link href="#" gutterBottom display="block">Our Story</Link>
                    <Link href="#" gutterBottom display="block">Work with us</Link>
                </Box>
            </Container>
        </div>
    )
}

export default Footer