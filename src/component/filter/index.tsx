import { useState } from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Slider, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './filter.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/reducer";
import { RootState } from "../store/store/store";

const FilterPanel = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state: RootState) => state.filter)

    /* -------------------------------- Accordion ------------------------------- */
    type PanelType = false | string

    const [expanded, setExpanded] = useState<PanelType>(false);

    const handleChange = (panel:string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);

    };

    /* ------------------------------ Price FIlter ------------------------------ */
    const handlePriceFilter = (_: Event, newPrice: number | number[]): void => {
        if(Array.isArray(newPrice)){
            dispatch(setFilters({ ...filter, price: newPrice }));
        }
    };
    const marks = [
        {
          value: 50,
          label: '$50',
        },
        {
          value: 1200,
          label: '$1200',
        },
    ];

    /* ---------------------------- Departure Filter ---------------------------- */
    const startDay = new Date();
    startDay.setHours(0, 0, 0, 0)

    const endDay = new Date();
    endDay.setHours(23, 59, 59, 999);

    const [fromSlider, setFromSlider] = useState([startDay.getTime(), endDay.getTime()])

    const min = startDay.getTime();
    const max = endDay.getTime();
    
    const handleFromSlider = (_: Event, value: number | number[]):void => {
        if(Array.isArray(value)){
            setFromSlider(value);
            dispatch(setFilters({ ...filter, departure: value }));
        }
    }

    const formatTime = (timestamp: number) => {
        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`
    }

    const departureMarks = [
        {
          value: min,
          label: formatTime(min),
        },
        {
          value: max,
          label: formatTime(max),
        },
    ];

    /* ------------------------------ Review Filter ----------------------------- */
    const reviewButtons = [0, 1, 2, 3, 4];
    const handleReviewFilter = (review: number) => {
        dispatch(setFilters({ ...filter, reviews: review }));
    };

    const handleAirlineFilter = (airline: string) => {
        const updatedAirlines = filter.airlines.includes(airline)
            ? filter.airlines.filter(a => a !== airline)
            : [...filter.airlines, airline];
        dispatch(setFilters({ airlines: updatedAirlines }));
    };

    return (
        <div className={styles.filterPanel}>
            <Typography variant="h5" >Filters</Typography>

            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="price-filter"
                        id="price-filter" className={styles.accordion}
                    >
                        <Typography>Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Slider
                                getAriaLabel={() => 'price'}
                                value={filter.price}
                                onChange={handlePriceFilter}
                                valueLabelDisplay="auto"
                                step={10}
                                min={50}
                                max={1200}
                                marks={marks}
                                className={styles.filterSilder}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Divider variant="fullWidth" sx={{my: 2}} />

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={styles.accordion}> 
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="departure-time-filter"
                        id="departure-time-filter" className={styles.accordion}
                    >
                        <Typography>Departure Time</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <Slider
                                getAriaLabel={() => 'Departure Time'}
                                value={fromSlider}
                                onChange={handleFromSlider}
                                valueLabelDisplay="auto"
                                valueLabelFormat={(value) => formatTime(value)}
                                step={60 * 60}
                                min={min}
                                max={max}
                                marks={departureMarks}
                                className={styles.filterSilder}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Divider variant="fullWidth" sx={{my: 2}} />

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="rating-filter"
                        id="rating-filter" className={styles.accordion}
                    >
                        <Typography>Rating</Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={styles.accordion}>
                        <Box display="flex" justifyContent="space-between">
                            {reviewButtons.map((review) => (
                                <Button
                                    key={review}
                                    variant='outlined'
                                    onClick={() => handleReviewFilter(review)}
                                >
                                    {review}+
                                </Button>
                            ))}
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Divider variant="fullWidth" sx={{my: 2}} />

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="airlines-filter"
                        id="airlines-filter" className={styles.accordion}
                    >
                        <Typography>Airlines</Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={styles.accordion}>
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" >
                                {["Emirates", "Fly Dubai", "Qatar", "Etihad"].map((airline) => (
                                    <FormControlLabel
                                        key={airline}
                                        control={
                                            <Checkbox
                                                checked={filter.airlines.includes(airline)}
                                                onChange={() => handleAirlineFilter(airline)}
                                            />
                                        }
                                        label={airline}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Divider variant="fullWidth" sx={{my: 2}} />

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="trips-filter"
                        id="trips-filter" className={styles.accordion}
                    >
                        <Typography>Trips</Typography>
                    </AccordionSummary>
                    <AccordionDetails  className={styles.accordion}>
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" >
                                <FormControlLabel
                                    value="roundtrip"
                                    control={<Checkbox className={styles.checkbox} />}
                                    label="Round trip"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="onway"
                                    control={<Checkbox className={styles.checkbox} />}
                                    label="On Way"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="multicity"
                                    control={<Checkbox className={styles.checkbox} />}
                                    label="Multi-City"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="flexible"
                                    control={<Checkbox className={styles.checkbox} />}
                                    label="My Dates Are Flexible"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default FilterPanel