import SearchBar from '../../component/searchBar/index.tsx'
import ResultWrapper from '../../component/result/index.tsx'
import { Container } from '@mui/material'
import NewsLetter from '../../shared/newsLetter/index.tsx'

const Home = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <SearchBar />
                <ResultWrapper />
                <NewsLetter />
            </Container>
        </div>
    )
}

export default Home
