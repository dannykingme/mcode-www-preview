import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import cn from 'clsx';
import Icon from '@/components/Icon';

export default function Toast() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [searchParams] = useSearchParams();
  const router = useRouter();

  const [closedSuccessMessage, setclosedSuccessMessage] = useState(false);

  useEffect(() => {
    if (searchParams && searchParams[0] === 'submitted') {
      setShowSuccessMessage(true);
      router.push('/');
    }
  }, [searchParams, router]);

  const handleClosedClick = () => {
    setclosedSuccessMessage(true);
  };

  return (
    <>
      {showSuccessMessage && (
        <div className="toast-wrapper">
          <div className={cn('toast', { closed: closedSuccessMessage })}>
            <div className="toast-message">
              Thanks for reaching out. We’ll get back to you soon!
            </div>
            <button className="toast-action" onClick={handleClosedClick}>
              {/* @ts-ignore */}
              <Icon times />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
