import Results from '@/containers/Results';
import Authorize from '@/components/Autorize';

function ResultsPage() {
    return (
        <Authorize>
            <Results />
        </Authorize>
    
    );
}

export default ResultsPage;