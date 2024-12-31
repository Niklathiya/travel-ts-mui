import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import styles from "./searchBar.module.scss"
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    // const [trip, setTrip] = useState<'one way' | 'return'>('');
    const [trip, setTrip] = useState<string>('');
    const handleChange = (e: SelectChangeEvent) => {
        setTrip(e.target.value as 'one way' | 'return');
    };

    return (
        <div className={styles.searchBar}>
            <TextField 
                type='text'
                label='From - To'
                variant='outlined'
                className={styles.searchField}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <SyncAltIcon className='darkIcon'/>
                            </InputAdornment>
                        )
                    }
                }}
            />
                
            <Box sx={{width: '120px', minWidth: '120px'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Trip</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={trip}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value='one way'>One Way</MenuItem>
                    <MenuItem value='return'>Return</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <TextField 
                type='text'
                label='Depart- Return'
                variant='outlined'
                className={styles.searchField}
            />

            <TextField 
                type='text'
                label='Passenger - Class'
                variant='outlined'
                className={styles.searchField}
            />

            <Button className={styles.searchBox}>
                <SearchIcon />
            </Button>
        </div>
    )
}

export default SearchBar
