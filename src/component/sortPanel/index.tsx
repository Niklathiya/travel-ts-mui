import { Box, Divider, Typography } from "@mui/material"
import styles from "./sortPanel.module.scss"
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SortPanel = () => {
    return (
        <>
            <div className={styles.sortPanel}>
                <Box>
                    <Typography>Cheapest</Typography>
                    <Typography>$99 . 2h 18m</Typography>
                </Box>
                <div className={styles.sortData}>
                    <Divider orientation="vertical" flexItem sx={{mx: 2}} />
                    <Box>
                        <Typography>Best</Typography>
                        <Typography>$99 . 2h 18m</Typography>
                    </Box>
                </div>
                <div className={styles.sortData}>
                    <Divider orientation="vertical" flexItem sx={{mx: 2}} />
                    <Box>
                        <Typography>Quickest</Typography>
                        <Typography>$99 . 2h 18m</Typography>
                    </Box>
                </div>
                <div className={styles.sortData}>
                    <Divider orientation="vertical" flexItem sx={{mx: 2}} />
                    <div className={styles.sortMenu}>
                        <MenuIcon />
                        <Typography> Other sort</Typography>
                    </div>
                </div>
            </div>
            <div className={styles.sortDetails}>
                <Typography>Showing 4 of <span style={{color: '#FF8682'}}>257 places</span></Typography>
                <div className={styles.sortBox}>
                    <Typography sx={{cursor: 'pointer'}}>Sort by <b>Recommended</b></Typography>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
        </>
    )
}

export default SortPanel
