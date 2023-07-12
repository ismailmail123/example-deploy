import Login from '@/containers/Login';
import UnAuthorize from '@/components/UnAuthorize';

function ResultsPage() {
    return (
        <UnAuthorize>
            <Login />
        </UnAuthorize>
    );
}

export default ResultsPage;