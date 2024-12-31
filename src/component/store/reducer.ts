import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flight } from "../../shared/data";

interface FilterState{
    price: number[];
    departure: number[];
    reviews: number;
    airlines: string[];
    filterData: Flight[];
}

const initialState: FilterState = {
    price: [50, 1200],
    departure: [],
    reviews: 0,
    airlines: [],
    filterData: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<Partial<FilterState>>) {
            return { ...state, ...action.payload };
        },
        setFilteredData(state, action: PayloadAction<Flight[]>) {
            state.filterData = action.payload;
        },
    },
})

export const { setFilters, setFilteredData } = filterSlice.actions;
export default filterSlice.reducer;