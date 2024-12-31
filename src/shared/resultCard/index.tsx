import styles from "./resultCard.module.scss"
import { Box, Button, Checkbox, Divider, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../component/store/store/store";
import { setFilteredData } from "../../component/store/reducer";
import { flightData } from "../data";

const ResultCard = () => {
    const dispatch = useDispatch();
    const { filterData, price, reviews, airlines, departure } = useSelector((state: RootState) => state.filter);
    const [visibleData, setVisibleData] = useState<number>(2)

    const handleVisibleData = (): void => {
        setVisibleData((prev: number) => prev + 2)
    }
    useEffect(() => {
        dispatch(setFilteredData(flightData));
    }, [dispatch]);


    /* -------------------------------- sjdvbjkb -------------------------------- */
    const convertTime = (timeString: string): number => {
        const [time, modifier] = timeString.split(" ");
        let [hours] = time.split(":").map(Number);
        const [minutes] = time.split(":").map(Number);
    
        if (modifier === "pm" && hours < 12) {
            hours += 12;
        }
        if (modifier === "am" && hours === 12) {
            hours = 0;
        }
    
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date.getTime();
    };

    const filteredData = filterData.filter(flight => {
        const isPriceValid = flight.flightPrice >= price[0] && flight.flightPrice <= price[1];

        const isDepartureValid = departure.length === 0 || flight.flightTime.find(flightTime => {
            const flightDepartureTime = convertTime(flightTime.flightDeparture);
            return flightDepartureTime >= departure[0] && flightDepartureTime <= departure[1];
        });

        const isReviewValid = flight.flightRating >= reviews;

        const detail = flight.flightTime.find(airlines=> airlines.flightName)
        const isAirlineValid = airlines.length === 0 || detail && airlines.includes(detail.flightName);

        return isPriceValid && isDepartureValid && isReviewValid && isAirlineValid ;
    });

    return (
        <div className={styles.resultCardWrapper}>
            {filteredData.slice(0, visibleData).map((data, index) => {
                return (
                    <div className={styles.resultCard} key={index}>
                        <div><img src={data.flightImage} alt="flight" /></div>
                        <div className={styles.flightData}>
                            <div className={styles.flightDetail}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button color="inherit">{data.flightRating}</Button>
                                    <Typography><b>Very Good</b> {data.flightReview} reviews</Typography>
                                </Box>
                                <Box>
                                    <Typography align="right">starting from</Typography>
                                    <Typography variant="h5" align="right"><span>${data.flightPrice}</span></Typography>
                                </Box>
                            </div>  

                            <Box>
                                {data.flightTime.map((flight, index) => {
                                    return (
                                        <div className={styles.flightTime} key={index}>
                                            <Box sx={{display: 'flex', gap: '10px', alignItems: 'start'}}>
                                                <Checkbox className={styles.flightCheck} />
                                                <Box>
                                                    <Typography><b>{flight.flightDeparture} - {flight.flightLanding}</b></Typography>
                                                    <Typography variant="caption" color="textDisabled">{flight.flightName}</Typography>
                                                </Box>
                                            </Box>
                                            <Typography color="textPrimary">{flight.flightStop}</Typography>
                                            <Box>
                                                <Typography><b>{flight.flightJourneyTime}</b></Typography>
                                                <Typography variant="caption" color="textDisabled">
                                                    {flight.flightTravelPoints}
                                                </Typography>
                                            </Box>
                                        </div>
                                    )
                                })}
                            </Box>

                            <Divider sx={{my: 2}} />
                            <Box sx={{display: 'flex'}}>
                                <Button className={styles.favoriteButton} ><FavoriteBorderIcon color="action" fontSize="small" /></Button>
                                <Button className={styles.ViewButton}>View Deals</Button>
                            </Box>
                        </div>
                    </div>
                )
            })}
            
            {visibleData < filteredData.length && (
                <Button className={styles.viewMore} onClick={handleVisibleData}>
                    Show more results
                </Button>
            )}
            
        </div>
    )
}

export default ResultCard;