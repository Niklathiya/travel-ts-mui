import { Divider } from "@mui/material"
import FilterPanel from "../filter"
import SortPanel from "../sortPanel"
import styles from './result.module.scss'
import ResultCard from "../../shared/resultCard"

const ResultWrapper = () => {
    return (
        <div className={styles.resultContainer}>
            <FilterPanel />
            <Divider orientation="vertical" variant="fullWidth" flexItem sx={{mx: 2}} />
            <div>
                <SortPanel />
                <ResultCard />                
            </div>
        </div>
    )
}

export default ResultWrapper
