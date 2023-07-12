import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Authorize(props) {
  const router = useRouter();
  const login = useSelector((state) => state.login);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (login.user) {
      // userada
      router.push('/results');
      return;
    }

    setMounted(true);
  }, [login.user]);

  return mounted ? props.children : <></>;
}

export default Authorize;
