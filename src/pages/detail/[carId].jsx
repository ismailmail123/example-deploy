import CarDetail from '@/containers/CarDetail';
import Authorize from '@/components/Autorize';

function CarDetailPage() {
return (
    <Authorize>
        <CarDetail />
    </Authorize>
)
}

export default CarDetailPage;