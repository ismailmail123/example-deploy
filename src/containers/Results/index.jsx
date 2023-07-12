import { Container } from 'react-bootstrap';
import ListCars from './ListCars';
import MyNavbar from '@/components/MyNavbar';

function Results() {
    return (
        <>
            <Container className="py-3">
                <MyNavbar />
                <h1 className="mb-3 mt-5">Available Cars</h1>
                <ListCars />
            </Container>
        </>
        );
    }
    
    export default Results;
    