import { Box, Button, TextField, Typography } from '@mui/material'
import styles from './newsLetter.module.scss'
import * as IMAGE from '../image'

const NewsLetter = () => {
    return (
        <div className={styles.newsLetterContainer}>
            <Box>
                <Typography variant='h4'>Subscribe</Typography>
                <Typography variant='h4' gutterBottom>Newsletter</Typography>

                <Typography>The Travel</Typography>
                <Typography sx={{mb: 2}} variant='subtitle2' color='textSecondary'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</Typography>

                <Box sx={{display: 'flex', gap: '20px'}}>
                    <TextField type='email' label="Your email address" />
                    <Button>Subscribe</Button>
                </Box>
            </Box>

            <img src={IMAGE.NewsLetter} alt='news letter' />
        </div>
    )
}

export default NewsLetter
