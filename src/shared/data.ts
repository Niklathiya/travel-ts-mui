import * as IMAGE from './image'

export interface FlightTime {
    flightDeparture: string;
    flightLanding: string;
    flightName: string;
    flightStop: string;
    flightJourneyTime: string;
    flightTravelPoints: string;
}
export interface Flight {
    flightImage: string;
    flightRating: number;
    flightReview: number;
    flightPrice: number;
    flightTime: FlightTime[]
}

export const flightData: Flight[] = [
    {
        flightImage: IMAGE.Emirates,
        flightRating: 4.2,
        flightReview: 54,
        flightPrice: 104,
        flightTime: [
            {
                flightDeparture: '12:00 pm',
                flightLanding: '01:28 pm',
                flightName: 'Emirates',
                flightStop: 'non stop',
                flightJourneyTime: '2h 28m',
                flightTravelPoints: 'EWR-BNA'
            },
            {
                flightDeparture: '01:00 pm',
                flightLanding: '02:28 pm',
                flightName: 'Emirates',
                flightStop: 'non stop',
                flightJourneyTime: '2h 28m',
                flightTravelPoints: 'EWR-BNA'
            },
            {
                flightDeparture: '08:00 pm',
                flightLanding: '10:28 pm',
                flightName: 'Emirates',
                flightStop: 'non stop',
                flightJourneyTime: '2h 28m',
                flightTravelPoints: 'EWR-BNA'
            },
        ]
    },
    {
        flightImage: IMAGE.FlyDubai,
        flightRating: 4.3,
        flightReview: 68,
        flightPrice: 148,
        flightTime: [
            {
                flightDeparture: '10:00 am',
                flightLanding: '12:15 pm',
                flightName: 'Fly Dubai',
                flightStop: 'non stop',
                flightJourneyTime: '2h 15m',
                flightTravelPoints: 'EWR-BNA'
            },
            {
                flightDeparture: '04:00 pm',
                flightLanding: '06:15 pm',
                flightName: 'Fly Dubai',
                flightStop: 'non stop',
                flightJourneyTime: '2h 15m',
                flightTravelPoints: 'EWR-BNA'
            },
        ]
    },
    {
        flightImage: IMAGE.Qatar,
        flightRating: 4.1,
        flightReview: 71,
        flightPrice: 115,
        flightTime: [
            {
                flightDeparture: '02:00 am',
                flightLanding: '04:18 pm',
                flightName: 'Qatar',
                flightStop: 'non stop',
                flightJourneyTime: '2h 18m',
                flightTravelPoints: 'EWR-BNA'
            },
            {
                flightDeparture: '06:00 am',
                flightLanding: '10:15 am',
                flightName: 'Qatar',
                flightStop: '1 stop',
                flightJourneyTime: '4h 15m',
                flightTravelPoints: 'EWR-BNA'
            },
        ]
    },
    {
        flightImage: IMAGE.Etihad,
        flightRating: 3.9,
        flightReview: 86,
        flightPrice: 102,
        flightTime: [
            {
                flightDeparture: '11:00 am',
                flightLanding: '01:48 pm',
                flightName: 'Etihad',
                flightStop: 'non stop',
                flightJourneyTime: '2h 48m',
                flightTravelPoints: 'EWR-BNA'
            },
            {
                flightDeparture: '05:00 pm',
                flightLanding: '08:15 pm',
                flightName: 'Etihad',
                flightStop: '1 stop',
                flightJourneyTime: '3h 15m',
                flightTravelPoints: 'EWR-BNA'
            },
        ]
    },
]