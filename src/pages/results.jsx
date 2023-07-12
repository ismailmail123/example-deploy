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

// import Results from '@/containers/Results';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// function ResultsPage() {
//   const router = useRouter();
//   const login = useSelector((state) => state.login);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     if (!login.user) {
//       // user tidak ada
//       router.push('/login');
//       return;
//     }

//     setMounted(true);
//   }, [login.user]);

//   return mounted ? <Results /> : <></>;
// }

// export default ResultsPage;
